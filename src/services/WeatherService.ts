import { AccuWeatherClient } from './AccuWeatherClient';
import { Result, Location } from './WeatherTypes'

const apiKey = 'HVrsap76dH1mZGOigyYg4mbwKf9T0AVo'

export default {
    async getWeatherForLocations(cityData: Location[] = []) {
        const client = new AccuWeatherClient(apiKey)

        const weatherConditions: Result[] = []
        await Promise
            .all(cityData.map(client.getConditions))
            .then(conditions => weatherConditions.push(...conditions))
            .catch(error => console.error('Error while retrieving weather conditions', error))

        return weatherConditions.map((weatherCondition) => {
            return {
                name: weatherCondition.name,
                rawTime: weatherCondition.rawTime,
                tempC: weatherCondition.tempC
            }
        })
    }
}