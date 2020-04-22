import { KiwiClient } from './KiwiClient';
import { Route } from './FlightTypes'

const partnerId = 'picky'

export default {
    async getCheapestFlightForLocations(cityData: Route[] = []) {
        const client = new KiwiClient(partnerId)

        return await Promise.all(cityData.map(client.getFlightPrices)) //returns three promises for three different requests to one API
            .then((allDestinationFlights) => {
                return allDestinationFlights.map((destinationFlightList) => {
                    if (destinationFlightList) { // check guard
                        return destinationFlightList.reduce(function (prev, current) { // Reduce to lowest priced flight
                            return (prev.price < current.price) ? prev : current
                        })
                    }
                });
            })
            .catch(error => console.error('Error while retrieving flight data', error));
    }
}