import {Request,Response} from "express";
import { carStoreService } from "./car.service";
import carStoreValidationSchema from "./car.validation.zod";




// **1. Create a Car**
const createACarStore = async(req:Request, res:Response)=>{
    try{
        const car = req.body;
       // Call the service function to save the data
       const zodParseData = carStoreValidationSchema.parse(car);
    //    zod-validation-schema
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
        // Handle errors:
        res.status(500).json({
            success:false,
            message: error.message || "Error creating car store",
            error:error,
        });
    };
};

// **2. Get All Cars**

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
        // Handle errors:
        res.status(500).json({
            success:false,
            message: error.message || "Error creating car store",
            error:error,
        });

    };
};

// **3. Get a Specific Car**
// Create a type declaration:
interface Params{
    carId: string;
};

const getSpecificCarId = async(req:Request ,res:Response)=>{
    try{
        const carId = req.params.id;  //'carId' is correctly typed as "carId"
        const result = await carStoreService.getSpecificCarFromBD(carId);
          // send response:
        res.status(200).json({
            success:true,
            message:"Car retrieved successfully",
            data:result,
        })
    }catch(error:any){
        // Handle errors:
        res.status(500).json({
           success:false,
           message:error.message || "Something want wrong",
           error:error,
        });
    }
}

// ### **4. Update a Car**
const updateCarStore = async(req:Request, res:Response)=>{
    try{
        //careId from params and update data from request body
        const updateCarId = req.params.updateCarId;
        const updateData = req.body;
        // Call the service to update the car details
        const result = await carStoreService.updateCarStoreFromBD(updateCarId, updateData);
        // send response:
        res.status(200).json({
            success:true,
            message: "Car updated successfully",
            data:result
        })
    }catch(error:any){
        // Handle errors:
        res.status(500).json({
            success:false,
            message:error.message || "Something want wrong",
            error:error,
         });
    }
}

// ### **5. Delete a Car**
export const deleteCarStore = async (req:Request, res:Response) => {
    try{
        const carId = req.params.carId;
             // Call the service to delete the car from the database
        const result = await carStoreService.deleteCarStoreFromBD(carId);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Car not found',
            });
        }
        // send response:
        res.status(200).json({
            success:true,
            message: "Car deleted successfully",
            data: result
        })
    }
    catch(error:any){
        // Handle errors:
        res.status(500).json({
            success:false,
            message: error.message || "Something went wrong",
            error: error,
        });
    };

}




export const CarStoreController = {
    createACarStore,
    getAllCarStores,
    getSpecificCarId,
    updateCarStore,
}