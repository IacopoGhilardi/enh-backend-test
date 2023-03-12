import express from 'express';
const router = express.Router();
import * as cityController from '../controllers/cityController';


router.get("/:city_name", cityController.getCityWeather);

export default router;