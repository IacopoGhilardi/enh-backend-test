import axios, { AxiosPromise, AxiosStatic } from "axios"
import config from 'config';

export async function getCityWeather(latitude: string, longitude: string): Promise<AxiosPromise> {
    const weatherResponse = await axios.get(config.get('open_weather.base_url'), {
        params: {
            appid: config.get('open_weather.key'),
            lat: latitude,
            lon: longitude,
            exclude: 'hourly,minutely,daily'
        }
    });

    return weatherResponse;
}

export async function getCityBusinesses(cityName: string, limit = '20'): Promise<AxiosPromise> {
        const response = await axios.get(config.get('yelp.base_url'), {
            headers: {
                'Authorization': `Bearer ${config.get('yelp.key')}`,
            },
            params: {
                'location': cityName,
                'limit': limit
            }
        });

        return response;
}