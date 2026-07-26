import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { gearService } from "./gear.service";
import { sendResponse } from "../../utils/sendRespone";
import httpStatus from "http-status";
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

const getAllGears = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.query;

    const result = await gearService.getAllGearsIntoDB(payload);

    const message =
      result.length > 0
        ? "Gears retrieved successfully"
        : "No gears found matching your criteria";
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: message,
      data: result,
    });
  },
);

const getSingleGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await gearService.getSingleGearIntoDB(id);

    if (!result) {
      return sendResponse(res, {
        success: false,
        statusCode: httpStatus.NOT_FOUND,
        message: "Gear not found!",
        data: null,
      });
    }

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "single gear retrieved successfully",
      data: result,
    });
  },
);

export const gearController = {
  createGear,
  getAllGears,
  getSingleGear,
};
