import express, {Express} from 'express';
const app: Express = express();
import * as dotenv from 'dotenv'
dotenv.config()
const port: string | undefined = process.env.APP_PORT || '3000';
const apiVersion: string | undefined = process.env.API_VERSION || 'v1';
const routesPath: string = `../api/${apiVersion}/routes`
import routes from '../api/v1/routes';

const initServer = () => {
    app.use(`/${apiVersion}`, routes);

    app.listen(port, () => {
        console.log(`Server run on port ${port}`);
    });
}

export default initServer;