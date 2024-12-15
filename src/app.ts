import express from 'express';
import {Application,Request,Response} from 'express';
import cors from "cors"
import { CarStoreRouter } from './app/modules/car-store/car.router';

const app:Application = express()

// parsers the middleware configuration
app.use(express.json());
// cors
app.use(cors());

// application Router
app.use('/api/v1/CarStore', CarStoreRouter)
const getAController = ( req: express.Request, res: express.Response) => { 
    console.log(req.body); 
};
app.get('/', getAController);

export default app