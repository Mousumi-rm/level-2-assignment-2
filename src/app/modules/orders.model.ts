import { Schema, model, connect } from 'mongoose';
import { TOrder } from './orders/order.interface';

const orderSchema = new Schema<TOrder>({
    email:{
        type:String, 
        lowercase:true,
        validate:{
            validator:( value : string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message:'{VALUE} is not a valid email address',
        }, 
    },
    carId:{
        type:String,
    },
    quantity:{
        type:Number, 
    },
    totalPrice:{
        type:Number,  
    },
})

export const OrderModel = model<TOrder>('OrderModel',orderSchema);