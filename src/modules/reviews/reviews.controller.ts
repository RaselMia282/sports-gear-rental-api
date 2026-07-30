import { NextFunction, Request ,Response} from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendRespone";
import  httpStatus  from "http-status";
import { reviewService } from "./reviews.service";
const createReview = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{



        const customerId = req.user?.id;
         const payload = req.body;
       
       
    const result = await reviewService.createReviewIntoDB(customerId as string,payload)


    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Review created successfully",
      data: result,
    });
})

export const reviewController = {
    createReview
}