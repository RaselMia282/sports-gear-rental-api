import AppError from "../../errors/apperror.js";
import { prisma } from "../../lib/prisma.js";
import { TRentalPayload } from "./rentalOrders.interface.js";

const createRentalOrderIntoDB = async (
  payload: TRentalPayload,
  customerId: string,
) => {
  const { startDate, endDate, gearItemId, quantity } = payload;

  const gear = await prisma.gearItem.findUnique({
    where: {
      id: gearItemId,
    },
  });

  if (!gear) {
    throw new AppError(404, "Gear item not found!");
  }

  // Stock check
  if (gear.availableQuantity < quantity) {
    throw new AppError(
      400,
      `Requested quantity (${quantity}) exceeds available stock (${gear.availableQuantity})!`,
    );
  }

  // Calculate rental days
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  // Validate dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new AppError(400, "Invalid start or end date provided!");
  }

  const rentalDays = Math.ceil(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (rentalDays <= 0) {
    throw new AppError(400, "End date must be greater than start date!");
  }

  // Calculate total price
  const totalPrice = rentalDays * gear.pricePerDay * quantity;

  // Transaction for order creation & stock update
  const result = await prisma.$transaction(async (tx) => {
    // 1. Create order
    const order = await tx.rentalOrder.create({
      data: {
        customerId,
        startDate: start,
        endDate: end,
        totalPrice,
      },
    });

    // 2. Create rental order items
    await tx.rentalOrderItems.create({
      data: {
        orderId: order.id,
        gearItemsId: gear.id,
        quantity,
        priceAtRental: gear.pricePerDay,
      },
    });

    // 3. Update available quantity
    await tx.gearItem.update({
      where: {
        id: gear.id,
      },
      data: {
        availableQuantity: {
          decrement: quantity,
        },
      },
    });

    // 4. Return full order details
    const rentalOrder = await tx.rentalOrder.findUnique({
      where: {
        id: order.id,
      },
      include: {
        customer: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
        items: {
          include: {
            gears: true,
          },
        },
      },
    });

    return rentalOrder;
  });

  return result;
};

const userRentalIntoDb = async (customerId: string) => {
  const orders = await prisma.rentalOrder.findMany({
    where: {
      customerId,
    },
    include: {
      items: {
        include: {
          gears: true,
        },
      },
      payment: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return orders;
};

const rentalOrderDetailsIntoDb = async (
  orderId: string,
  userId: string,
  role: string,
) => {
  const order = await prisma.rentalOrder.findUnique({
    where: { id: orderId },
    include: {
      customer: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
      items: {
        include: {
          gears: true,
        },
      },
      payment: true,
    },
  });

  if (!order) {
    throw new AppError(404, "Rental order not found!");
  }

  if (role === "CUSTOMER" && order.customerId !== userId) {
    throw new AppError(403, "You are not authorized to view this order!");
  }

  return order;
};

export const rentalOrdersService = {
  createRentalOrderIntoDB,
  userRentalIntoDb,
  rentalOrderDetailsIntoDb,
};
