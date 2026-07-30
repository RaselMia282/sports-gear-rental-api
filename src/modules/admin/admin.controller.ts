import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import httpStatus from "http-status";
import { adminService } from "./admin.service";
import { sendResponse } from "../../utils/sendRespone";

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await adminService.getAllUsersIntoDB();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Users retrieved successfully",
      data: result,
    });
  },
);

const updateStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { status } = req.body;

    const result = await adminService.updateStatusIntoDB(id as string, status);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User status updated successfully",
      data: result,
    });
  },
);
const getAllGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await adminService.getAllGearIntoDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All gear items retrieved successfully",
      data: result,
    });
  },
);
const getAllRentalOrders = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
              const result = await adminService.getAllRentalOrdersIntoDB();

              sendResponse(res,{
                success:true,
                statusCode:httpStatus.OK,
                message:"All rental oder retrieved successfully",
                data:result
              })
              
})

export const adminController = {
  getAllUsers,
  updateStatus,
  getAllGear,
  getAllRentalOrders,
};
