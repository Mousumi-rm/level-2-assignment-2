import {Request,Response} from "express"
import { orderService } from "./order.service";



const createOrderController = async (req:Request, res:Response) =>{
    try{
        const order = req.body;
        const result = await orderService.createOrderInToBD(order);
        // send response for order
        res.status(200).json({
            success:true,
            message:'Order created successfully',
            data:result
        })
    }catch(error:any){
        res.status(500).json({
            success:false,
            message:error.message ||'Order creation failed something want wrong ',
            error:error,
        })
    }
}

export const orderController = {
    createOrderController,

}