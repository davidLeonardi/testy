import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Route, Result, DataEntity } from './FlightTypes';

export class KiwiClient {
    private _client: AxiosInstance;

    constructor(private partnerId?: string) {
        const config: AxiosRequestConfig = {
            baseURL: 'https://api.skypicker.com/',
            params: {
                partnerId: this.partnerId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }

        this._client = Axios.create(config)
    }

    public getFlightPrices = async (route: Route): Promise<Result[] | void> => {
        const response = await this._client.get(`/flights?flyFrom=${route.origin}&to=${route.destination}&dateFrom=${route.dateFrom}&dateTo=${route.dateTo}&partner=${this.partnerId}&v=3`)
        if (response.status === 200 && response.data && response.data.length > 0) {
            return response.data.map((leg: DataEntity) => {
                return {
                    ...location,
                    price: leg.price || '--',
                    duration: leg.fly_duration || '--',
                    airline: leg.airlines && leg.airlines[0] || '--',
                    code: leg.route && leg.route[0] && leg.route[0].flight_no || '--',
                    date: leg.dTime || '--',
                }
            })
        }
    }
}