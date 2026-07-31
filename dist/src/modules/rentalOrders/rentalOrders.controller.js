import { catchAsync } from "../../utils/catchAsync";
import httpStatus from "http-status";
import { rentalOrdersService } from "./rentalOrders.service";
import { sendResponse } from "../../utils/sendRespone";
const createRentalOrder = catchAsync(async (req, res, next) => {
    const payload = req.body;
    const id = req.user?.id;
    const result = await rentalOrdersService.createRentalOrderIntoDB(payload, id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "rental order created successfully",
        data: result,
    });
});
const userRental = catchAsync(async (req, res, next) => {
    const id = req.user?.id;
    // console.log("Req User Data:", req.user);
    const result = await rentalOrdersService.userRentalIntoDb(id);
    // console.log(result);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "retrieved user rental order  successfully",
        data: result,
    });
});
const rentalOrderDetails = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        throw new Error("Rental Order ID is required");
    }
    const result = await rentalOrdersService.rentalOrderDetailsIntoDb(id, req.user?.id, req.user?.role);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "retrieved  rental order details successfully",
        data: result,
    });
});
export const rentalOrdersController = {
    createRentalOrder,
    userRental,
    rentalOrderDetails,
};
//# sourceMappingURL=rentalOrders.controller.js.map