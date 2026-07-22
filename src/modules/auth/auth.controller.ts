import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authservice } from "./auth.service";
import { sendResponse } from "../../utils/sendRespone";
import httpStatus from "http-status";
 
const registerUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
   
    const payload = req.body;
    const result = await authservice.registerUserIntoDB(payload)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"User registered successfully",
        data:result
    })
})

const loginUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
       
      const payload = req.body;
      const result = await authservice.loginUserIntoDb(payload);
      sendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"User login  successfully",
        data:result
    })

})


export const authController = {
    registerUser,
    loginUser
}