import { Response, Request, NextFunction } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { categoryService } from "./categories.service";
import { sendResponse } from "../../utils/sendRespone";
import httpStatus from "http-status";
const createCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "Name and description are required",
      });
    }
    const result = await categoryService.createCategoryIntoDB({
      name,
      description,
    });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "create category successfully",
      data: result,
    });
  },
);

const getAllCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await categoryService.getAllCategoryIntoDB();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: " Category retrieved successfully",
      data: result,
    });
  },
);

const getSingleCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    //  console.log(id);
    const result = await categoryService.getSingleCategoryIntoDB(id as string);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Category details retrieved successfully",
      data: result,
    });
  },
);

export const categoryController = {
  createCategory,
  getAllCategory,
  getSingleCategory,
};
