
import AppError from "../../errors/apperror.js";
import { prisma } from "../../lib/prisma.js";
const createReviewIntoDB = async ( userId: string,payload:any) => {
  const { gearItemId, rating, comment } = payload;

  // 1. Check gear exists
  const gear = await prisma.gearItem.findUnique({
    where: {
      id: gearItemId,
    },
  });

  if (!gear) {
    throw new Error("Gear not found");
  }

  // 2. Check customer rented and returned gear
  const rental = await prisma.rentalOrder.findFirst({
    where: {
      customerId:userId,
      status: "RETURNED",
      items: {
        some: {
          gearItemsId: gearItemId, 
        },
      },
    },
  });

  if (!rental) {
    throw new AppError(404,"You can review only after returning the gear");
  }

  // 3. Create review
  const review = await prisma.review.create({
    data: {
      rating,
      comment,
     userId,
      gearId:gear.id,
      rentalId:rental.id
    },
    include: {
      user: { 
        select: {
          id: true,
          name: true,
        },
      },
      gearItem: true,
    },
  });

  return review; 
};

export const reviewService = {
  createReviewIntoDB,
};