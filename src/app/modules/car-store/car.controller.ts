import {Request,Response} from "express";
import { carStoreService } from "./car.service";
import carStoreValidationSchema from "./car.validation.zod";



const createACarStore = async(req:Request, res:Response)=>{
    try{
        const car = req.body;
       // Call the service function to save the data
       const zodParseData = carStoreValidationSchema.parse(car);
       const result = await carStoreService.createCarStoreInToBD(zodParseData);
       console.log("Validation succeeded:",result);
         // send response:
         res.status(200).json({
            success:true,
            message: "Car created successfully",
            data: result,
         })
    }
    catch(error:any){

        res.status(500).json({
            success:false,
            message: error.message || "Error creating car store",
            error:error,
        });
    }
}
const getAllCarStores =async (req:Request, res:Response) =>{
    try{
        const result = await carStoreService.getAllCarStoresFromBD()
         // send response:
         res.status(200).json({
            success:true,
            message: "Car Store created successfully",
            data: result,
         })
    }catch(error:any){
        res.status(500).json({
            success:false,
            message: error.message || "Error creating car store",
            error:error,
        });
    }
    
}


export const CarStoreController = {
    createACarStore,
    getAllCarStores,
 
}