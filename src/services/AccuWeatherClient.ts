import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Location, Result } from './WeatherTypes'

export class AccuWeatherClient {
    private _client: AxiosInstance;

    constructor(private key?: string) {
        const config: AxiosRequestConfig = {
            baseURL: 'http://dataservice.accuweather.com',
            params: {
                apikey: this.key
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }

        this._client = Axios.create(config)
    }

    public getConditions = async (location: Location): Promise<Result> => {
        const response = await this._client.get('/currentconditions/v1/' + location.locationCode)
        if (response.status === 200 && response.data && response.data.length > 0) {
            return {
                ...location,
                currentConditions: response.data[0].WeatherText || '--',
                tempC: response.data[0].Temperature.Metric.Value || '--',
                rawTime: response.data[0].LocalObservationDateTime || ':'
            }
        }
        return {
            ...location,
            currentConditions: '',
            tempC: '',
            rawTime: ''
        }

    }
}