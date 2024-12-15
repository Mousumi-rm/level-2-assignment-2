import { Schema, model, connect } from 'mongoose';

export type TOrder = {
    email:string;
    carId:string;
    quantity: number;          
    totalPrice: number;
  }