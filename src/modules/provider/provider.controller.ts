import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { providerService } from "./provider.service";
import { sendResponse } from "../../utils/sendRespone";
import httpStatus from "http-status";

const providerGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const gearData = req.body;

    const providerId = req.user?.id;
    console.log(providerId);

    const result = await providerService.providerGearIntoDB(
      gearData,
      providerId as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Gear item added successfully to inventory",
      data: result,
    });
  },
);

const getProviderOrders = catchAsync(async (req: Request, res: Response) => {
  const providerId = req.user?.id;
  console.log("provider id", providerId);

  const result = await providerService.getProviderOrdersIntoDB(
    providerId as string,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Provider orders retrieved successfully",
    data: result,
  });
});

const updateGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const providerId = req.user?.id;
    const updateData = req.body;

    const result = await providerService.updateGearIntoDB(
      id as string,
      providerId as string,
      updateData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Gear item updated successfully",
      data: result,
    });
  },
);

const updateOrderStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const providerId = req.user?.id;
    const { orderId: id } = req.params;
    const payload = req.body;

    const result = await providerService.updateOrderStatusIntoDB(
      providerId as string,
      id as string,
      payload,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Gear item partially updated successfully",
      data: result,
    });
  },
);

const deleteProviderGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = req.user?.id
    const result = await providerService.deleteProviderGearIntoDB(id as string,user as string)
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Gear removed from inventory successfully",
      data: result,
    });
  },
);

export const providerController = {
  providerGear,
  getProviderOrders,
  updateGear,
  updateOrderStatus,
  deleteProviderGear,
};
