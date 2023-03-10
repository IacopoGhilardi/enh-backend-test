import { Request, Response } from "express";
import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config()

export async function show(req: Request, res: Response) {    

    try {
        // const wresponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall`, {
        //     params: {
        //         apiid: process.env.OW_KEY,
        //         lon: '94.04',
        //         lat: '33.44'
        //     }
        // })

        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                'Authorization': `Bearer ${process.env.YELP_KEY}`,
            },
            params: {
                'location': 'Pisa',
                limit: '20'
            }
        });
        
        return res.status(200).json({
            "res": response.data
        })   
    } catch (error) {

        return res.status(400).json({
            "err": error
        })
        
    }
    
}