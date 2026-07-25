import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { gearService } from "./gear.service";
import { sendResponse } from "../../utils/sendRespone";
import  httpStatus  from "http-status";
const createGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const result = await gearService.createGearIntoDb(payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "created gear successfully",
      data: result,
    });
  },
);

const getAllGears = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
             
})

export const gearController = {
  createGear,
  getAllGears,
};
