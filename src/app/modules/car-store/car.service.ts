import { CarStore } from './../car.store.model';
import { TCarStore } from "./car.interface";

// **1. Create a Car**
const createCarStoreInToBD = async (carStoreData:TCarStore) =>{
    const result = await CarStore.create(carStoreData);
    return result;
};

// **2. Get All Cars**
const getAllCarStoresFromBD = async ()=>{
    const result = await CarStore.find();
    return result;
};

// **3. Get a Specific Car**
const getSpecificCarFromBD = async(id:string)=>{
    const result = await CarStore.findOne({id});
    return result;
}

// ### **4. Update a Car**
const updateCarStoreFromBD = async(updateCarId:string, updateData:any)=>{
 // Find the car by ID and update it with the new data:
    const updatedCar = await CarStore.findByIdAndUpdate(updateCarId,updateData,{
        // return the update data
        new:true,
        //update follow the schema validation rules:
        runValidators:true,
        // upsert:false,
    })
      // return error if the update fails
      if(!updatedCar){
        throw new Error('Car not Found')
      }
      return updatedCar;
}

//  **5. Delete a Car**

const deleteCarStoreFromBD = async(carId:string)=>{
       // Find the car by ID and delete it
       const deletedCar = await CarStore.findByIdAndDelete(carId);
       // If the car doesn't exist, return null
       return deletedCar;
}


export const carStoreService = {
    createCarStoreInToBD,
    getAllCarStoresFromBD,
    getSpecificCarFromBD,
    updateCarStoreFromBD,
    deleteCarStoreFromBD,
};