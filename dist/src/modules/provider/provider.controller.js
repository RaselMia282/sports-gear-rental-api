import { catchAsync } from "../../utils/catchAsync.js";
import httpStatus from "http-status";
import { providerService } from "./provider.service.js";
import { sendResponse } from "../../utils/sendRespone.js";
const providerGear = catchAsync(async (req, res, next) => {
    const gearData = req.body;
    const providerId = req.user?.id;
    console.log(providerId);
    const result = await providerService.providerGearIntoDB(gearData, providerId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Gear item added successfully to inventory",
        data: result,
    });
});
const getProviderOrders = catchAsync(async (req, res) => {
    const providerId = req.user?.id;
    console.log("provider id", providerId);
    const result = await providerService.getProviderOrdersIntoDB(providerId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Provider orders retrieved successfully",
        data: result,
    });
});
const updateGear = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const providerId = req.user?.id;
    const updateData = req.body;
    const result = await providerService.updateGearIntoDB(id, providerId, updateData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Gear item updated successfully",
        data: result,
    });
});
const updateOrderStatus = catchAsync(async (req, res, next) => {
    const providerId = req.user?.id;
    const { orderId: id } = req.params;
    const payload = req.body;
    const result = await providerService.updateOrderStatusIntoDB(providerId, id, payload);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Gear item partially updated successfully",
        data: result,
    });
});
const deleteProviderGear = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const user = req.user?.id;
    const result = await providerService.deleteProviderGearIntoDB(id, user);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Gear removed from inventory successfully",
        data: result,
    });
});
export const providerController = {
    providerGear,
    getProviderOrders,
    updateGear,
    updateOrderStatus,
    deleteProviderGear,
};
//# sourceMappingURL=provider.controller.js.map