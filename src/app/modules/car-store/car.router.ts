import express from "express";
import { CarStoreController } from "./car.controller";

const router = express.Router();
// we  wil call the the controller function here.
router.post('/api/cars',CarStoreController.createACarStore);
// get form route:
router.get('/',CarStoreController.getAllCarStores);

export const CarStoreRouter = router;