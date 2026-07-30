import { prisma } from "../../lib/prisma";
import { TRentalPayload } from "./rentalOrders.interface";

const createRentalOrderIntoDB = async (
  payload: TRentalPayload,
  customerId: string,
) => {
  const { startDate, endDate, gearItemId, quantity } = payload;
  console.log("Received Dates:", { startDate, endDate });
  

  const gear = await prisma.gearItem.findUnique({
    where: {
      id: gearItemId,
    },
    
  });

  if (!gear) {
    throw new Error("Gears not found");
  }

  // stock check
  if (gear.availableQuantity < quantity) {
    throw new Error("Stock not available");
  }

  // calculation rental days
  const start = new Date(startDate);
  const end = new Date(endDate);
  
const rentalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  if (rentalDays <= 0) {
    throw new Error("End date must be grater than start date");
  }

  // calculate total price
  const totalPrice = rentalDays * gear.pricePerDay * quantity;

  // create order
  const result = await prisma.$transaction(async (tx) => {
    const order = await tx.rentalOrder.create({
      data: {
        customerId,
        startDate: start,
        endDate: end,
        totalPrice,
      },
      include:{
        customer:{
          omit:{
            password:true,
          }
        }
      }
      
    });

    // create rental order items
    await tx.rentalOrderItems.create({
      data: {
        orderId: order.id,
        gearItemsId: gear.id,
        quantity,
        priceAtRental: gear.pricePerDay,
      },
      
    });

    // update available quantity
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

    // return order
    const rentalOrder = await tx.rentalOrder.findUnique({
      where: {
        id: order.id,
      },
      include: {
        customer: true,
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
  const order = await prisma.rentalOrder.findMany({
    where: {
      customerId,
    },
    include: {
      items: true,
    },
  });

  return order;
};

const rentalOrderDetailsIntoDb = async (
  orderId: string,
  userId: string,
  role: string,
) => {
  const order = await prisma.rentalOrder.findUnique({
    where: { id: orderId },
    include: {
      items: true,
    },
  });

  if (!order) {
    throw new Error("Rental order not found");
  }

  if (role === "CUST0MER" && order.customerId !== userId) {
    throw new Error("You are not authorized to view this order");
  }

  return order;
};

export const rentalOrdersService = {
  createRentalOrderIntoDB,
  userRentalIntoDb,
  rentalOrderDetailsIntoDb,
};
