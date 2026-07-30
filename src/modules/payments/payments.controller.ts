import { NextFunction, Request ,Response} from "express";
import { catchAsync } from "../../utils/catchAsync";
import { paymentsService } from "./payments.service";
import { sendResponse } from "../../utils/sendRespone";
import  httpStatus  from "http-status";


const createPayment = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
       const userId = req.user?.id;
       const {orderId}= req.body;

       const result =await paymentsService.createPaymentIntoDB(userId as string,orderId);

       sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "payments created successfully",
      data: result,
    });
})


const handleWebhook = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{

           const event = req.body;
           const signature=req.headers['stripe-signature']!
            await paymentsService.handleWebhookIntoDB(event,signature as string)
           sendResponse(res,{
            success:true,
            statusCode:200,
            message:"webhook trigged successfully",
            data:null
           })


})

const confirmPayment = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
                
})



export const paymentsController = {
    createPayment,
    handleWebhook,
    confirmPayment,
}