import { OrderModel } from "../orders.model"
import { TOrder } from "./order.interface"



const createOrderInToBD = async(orderData:TOrder) =>{
    const result = await  OrderModel.create(orderData)
    return result
}


export const orderService = {
    createOrderInToBD
}