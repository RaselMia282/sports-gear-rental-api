import config from "../../config";
import { prisma } from "../../lib/prisma";
import { stripe } from "../../lib/stripe";
import AppError from "../../errors/apperror";
import { PaymentMethod, PaymentStatus, RentalStatus } from "../../generated/prisma/enums";
const createPaymentIntoDB = async (userId, orderId) => {
    // 1. Find Order
    const order = await prisma.rentalOrder.findUnique({
        where: {
            id: orderId,
        },
        include: {
            customer: true,
            payment: true,
        },
    });
    if (!order) {
        throw new AppError(404, "Order not found");
    }
    // 2. Authorization
    if (order.customerId !== userId) {
        throw new Error("Unauthorized");
    }
    // 3. Already Paid?
    if (order.payment?.status === PaymentStatus.PAID) {
        throw new Error("Order already paid");
    }
    // 4. Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: `Rental Order ${order.id}`,
                    },
                    unit_amount: order.totalPrice * 100,
                },
                quantity: 1,
            },
        ],
        success_url: `http://localhost:8000/api/payments/success?orderId=${order.id}`,
        cancel_url: `http://localhost:8000/api/payments/cancel?orderId=${order.id}`,
        metadata: {
            orderId: order.id,
            userId: userId,
        },
    });
    // 5. Save Payment
    await prisma.payment.create({
        data: {
            orderId: order.id,
            amount: order.totalPrice,
            customerId: order.customerId,
            transactionId: session.id,
            paymentMethod: PaymentMethod.CREDIT_CARD,
            status: PaymentStatus.PENDING,
            paymentData: {
                checkoutUrl: session.url,
                sessionId: session.id,
                currency: session.currency || "usd",
                paymentStatus: session.payment_status,
            },
        },
    });
    return {
        url: session.url,
    };
};
const handleWebhookIntoDB = async (payload, signature) => {
    const endpointSecret = config.stripe_webhook_secret;
    const event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
    //  handle the event
    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object;
            const orderId = session.metadata?.orderId;
            if (orderId) {
                await prisma.rentalOrder.update({
                    where: { id: orderId },
                    data: {
                        status: RentalStatus.APPROVED,
                    },
                });
                await prisma.payment.update({
                    where: { orderId: orderId },
                    data: {
                        status: PaymentStatus.PAID,
                        transactionId: session.payment_intent,
                        paymentData: {
                            checkoutUrl: session.url,
                            sessionId: session.id,
                            currency: session.currency || "usd",
                            paymentStatus: session.payment_status,
                        },
                    },
                });
            }
            break;
        }
    }
};
const confirmPaymentIntoDB = async (sessionId) => {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
        throw new AppError(400, "Payment not completed");
    }
};
const paymentHistoryIntoDB = async (customerId) => {
    const result = await prisma.payment.findMany({
        where: { customerId: customerId },
        include: {
            order: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
};
const singlePaymentDetailsIntoDB = async (paymentId) => {
    const result = await prisma.payment.findUnique({
        where: { id: paymentId },
        include: {
            order: true,
            customer: true,
        }
    });
    if (!result) {
        throw new AppError(404, "Payment details not found!");
    }
    return result;
};
export const paymentService = {
    createPaymentIntoDB,
    handleWebhookIntoDB,
    confirmPaymentIntoDB,
    paymentHistoryIntoDB,
    singlePaymentDetailsIntoDB,
};
//# sourceMappingURL=payments.service.js.map