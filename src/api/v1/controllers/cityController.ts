import { Request, Response } from "express";
import * as citiesService from '../services/citiesService';
import logger from "../../../utils/logger";
import cities from "../../../config/cities";
import City from "../interfaces/city";

export async function getCityWeather(req: Request, res: Response) {

    try {
        const cityName: string = req.params.city_name;
        const city = getCityFromName(cityName);

        if (!city) {
            logger.error("City not found")
            return res.status(400).json({
                "error": "City not found"
            })
        }

        let weatherResponse = await citiesService.getCityWeather(city.lat, city.lon);        
        const businessesResponse = await citiesService.getCityBusinesses(cityName);
        weatherResponse.data.businesses = businessesResponse.data.businesses;

        let cityResponse = {
            ...city,
            'weather': weatherResponse.data
        };
        
        return res.status(200).json({
            "data": cityResponse
        });

    } catch (error) {
        logger.error("Error getting city's infos: " + error);
        
        return res.status(400).json({
            "error": error
        })
        
    }
    
}

const getCityFromName = (cityName: string): City | undefined => {
    logger.info("Getting information about: " + cityName);
    let city = cities.find(city => {
        return city.name.toLowerCase() == cityName.toLowerCase();
    });

    return city;
}