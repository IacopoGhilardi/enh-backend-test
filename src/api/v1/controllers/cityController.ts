import { Request, Response } from "express";
import axios from "axios";
import * as dotenv from 'dotenv'
dotenv.config()

export async function show(req: Request, res: Response) {    

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall`, {
            params: {
                apiid: process.env.OW_KEY,
                lon: '94.04',
                lat: '33.44'
            }
        }).catch(error => {
            console.log(error);
            
        })
    
        return res.status(200).json({
            "res": response
        })   
    } catch (error) {
        console.log(error);

        return res.status(400).json({
            "err": error
        })
        
    }
    
}