import { catchAsync } from "../../utils/catchAsync";
import { paymentService } from "./payments.service";
import { sendResponse } from "../../utils/sendRespone";
import httpStatus from "http-status";
const createPayment = catchAsync(async (req, res, next) => {
    const userId = req.user?.id;
    const { orderId } = req.body;
    const result = await paymentService.createPaymentIntoDB(userId, orderId);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "payments created successfully",
        data: result,
    });
});
const handleWebhook = catchAsync(async (req, res, next) => {
    const event = req.body;
    const signature = req.headers["stripe-signature"];
    await paymentService.handleWebhookIntoDB(event, signature);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "webhook trigged successfully",
        data: null,
    });
});
const confirmPayment = catchAsync(async (req, res, next) => {
    const sessionId = req.body;
    const result = await paymentService.confirmPaymentIntoDB(sessionId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "payment confirm successful",
        data: result,
    });
});
const paymentHistory = catchAsync(async (req, res, next) => {
    const customerId = req.user?.id;
    const result = await paymentService.paymentHistoryIntoDB(customerId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment history retrieved successfully",
        data: result,
    });
});
const singlePaymentDetails = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await paymentService.confirmPaymentIntoDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment details retrieved successfully",
        data: result,
    });
});
export const paymentsController = {
    createPayment,
    handleWebhook,
    confirmPayment,
    paymentHistory,
    singlePaymentDetails,
};
//# sourceMappingURL=payments.controller.js.map