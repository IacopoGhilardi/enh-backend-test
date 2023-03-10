import express from 'express';
const router = express.Router();
import * as cityController from '../controllers/cityController';


router.get("/", cityController.show);


export default router;