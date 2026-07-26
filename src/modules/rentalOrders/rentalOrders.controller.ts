import { NextFunction, Request,Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import  httpStatus  from "http-status";
import { rentalOrdersService } from "./rentalOrders.service";
import { sendResponse } from "../../utils/sendRespone";

const createRentalOrder = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{


     const payload = req.body;
     const id=req.user?.id;

     const result = await rentalOrdersService.createRentalOrderIntoDB(payload,id)


     sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "rental order created successfully",
      data: result,
    });
})



export const rentalOrdersController = {
    createRentalOrder,
}