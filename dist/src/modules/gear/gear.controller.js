import { catchAsync } from "../../utils/catchAsync";
import { gearService } from "./gear.service";
import { sendResponse } from "../../utils/sendRespone";
import httpStatus from "http-status";
const createGear = catchAsync(async (req, res, next) => {
    const payload = req.body;
    const providerId = req.user?.id;
    console.log(providerId);
    const result = await gearService.createGearIntoDb(payload, providerId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "created gear successfully",
        data: result,
    });
});
const getAllGears = catchAsync(async (req, res, next) => {
    const payload = req.query;
    const result = await gearService.getAllGearsIntoDB(payload);
    const message = result.length > 0
        ? "Gears retrieved successfully"
        : "No gears found matching your criteria";
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: message,
        data: result,
    });
});
const getSingleGear = catchAsync(async (req, res, next) => {
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
});
export const gearController = {
    createGear,
    getAllGears,
    getSingleGear,
};
//# sourceMappingURL=gear.controller.js.map