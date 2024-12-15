import { Schema, model, connect } from 'mongoose';
import {TCarStore} from '../modules/car-store/car.interface' 


const carStoreSchema = new Schema<TCarStore>({

    brand:{
        type: String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        max: new Date().getFullYear(),
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        enum:['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
       
    },
    description:{
        type: String,
        maxlength: 40,
        trim: true,
    },
    quantity:{
        type:Number,
    },
    inStock:{
        type: Boolean,
      
    },
   
},
{ timestamps: true }

)

export const CarStore = model<TCarStore>("CarStore",carStoreSchema);