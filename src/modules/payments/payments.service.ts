import {
  PaymentMethod,
  PaymentStatus,
  RentalStatus,
} from "../../../prisma/generated/prisma/enums";
import Stripe from "stripe";
import config from "../../config";
import { prisma } from "../../lib/prisma";
import { stripe } from "../../lib/stripe";

const createPaymentIntoDB = async (userId: string, orderId: string) => {
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
    throw new Error("Order not found");
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
    },
  });

  return {
    url: session.url,
  };
};
const handleWebhookIntoDB = async (payload: Buffer, signature: string) => {
  const endpointSecret = config.stripe_webhook_secret;
  const event = stripe.webhooks.constructEvent(
    payload,
    signature,
    endpointSecret as string,
  );

  //  handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
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
            transactionId: session.payment_intent as string,
          },
        });
      }
      break
    }
  }
};
const confirmPaymentIntoDB = async()=>{

}

export const paymentsService = {
  createPaymentIntoDB,
  handleWebhookIntoDB,
  confirmPaymentIntoDB,
};
