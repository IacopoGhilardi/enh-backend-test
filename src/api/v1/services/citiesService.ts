import axios, { AxiosPromise, AxiosStatic } from "axios"
import * as dotenv from 'dotenv';
dotenv.config()


export async function getCityWeather(latitude: string, longitude: string): Promise<AxiosPromise> {
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall`, {
        params: {
            appid: process.env.OW_KEY,
            lat: latitude,
            lon: longitude,
            exclude: 'hourly,minutely,daily'
        }
    });

    return weatherResponse;
}

export async function getCityBusinesses(cityName: string, limit = '20'): Promise<AxiosPromise> {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                'Authorization': `Bearer ${process.env.YELP_KEY}`,
            },
            params: {
                'location': cityName,
                'limit': limit
            }
        });

        return response;
}