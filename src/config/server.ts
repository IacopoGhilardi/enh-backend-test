import express, {Express} from 'express';
const app: Express = express();
const port: Number = 3000;


const initServer = () => {
    app.listen(port, () => {
        console.log(`Server run on port ${port}`);
    });
}

export default initServer;

