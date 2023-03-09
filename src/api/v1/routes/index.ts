import express, {Express} from 'express';
const app: Express = express()
import citiesRouter from './cities';

app.use('/cities', citiesRouter);


export default app;