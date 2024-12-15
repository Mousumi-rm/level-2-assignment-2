import { CarStore } from './../car.store.model';
import { TCarStore } from "./car.interface";


const createCarStoreInToBD = async (carStoreData:TCarStore) =>{
    const result = await CarStore.create(carStoreData);
    return result;
};

const getAllCarStoresFromBD = async ()=>{
    const result = await CarStore.find();
    return result;
};


export const carStoreService = {
    createCarStoreInToBD,
    getAllCarStoresFromBD
};