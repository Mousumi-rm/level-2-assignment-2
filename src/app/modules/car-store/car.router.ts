import express from "express";
import { CarStoreController } from "./car.controller";
import{ deleteCarStore } from "./car.controller"

const router = express.Router();
// **1. Create a Car**
// we  wil call the the controller function here.
router.post('/api/cars',CarStoreController.createACarStore);

// **2. Get All Cars**
// get form route:
router.get('/',CarStoreController.getAllCarStores);

// **3. Get a Specific Car**
router.get('/:carId', CarStoreController.getSpecificCarId);
// **4. Update a Car**
router.put('/:updateCarId', CarStoreController.updateCarStore)
//  **5. Delete a Car**
 // DELETE request to delete a car by ID
router.delete('/api/cars/:carId', deleteCarStore);

export const CarStoreRouter = router;