import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import httpStatus from "http-status";
import { rentalOrdersService } from "./rentalOrders.service";
import { sendResponse } from "../../utils/sendRespone";

const createRentalOrder = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const id = req.user?.id;

    const result = await rentalOrdersService.createRentalOrderIntoDB(
      payload,
      id as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "rental order created successfully",
      data: result,
    });
  },
);

const userRental = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.user?.id;
    // console.log("Req User Data:", req.user);

    const result = await rentalOrdersService.userRentalIntoDb(id as string);

    // console.log(result);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "retrieved user rental order  successfully",
      data: result,
    });
  },
);

const rentalOrderDetails = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
      throw new Error("Rental Order ID is required");
    }
    const result = await rentalOrdersService.rentalOrderDetailsIntoDb(
      id as string,
      req.user?.id as string,
      req.user?.role as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "retrieved  rental order details successfully",
      data: result,
    });
  },
);

export const rentalOrdersController = {
  createRentalOrder,
  userRental,
  rentalOrderDetails,
};
