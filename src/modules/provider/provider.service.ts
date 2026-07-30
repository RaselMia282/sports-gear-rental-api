import { prisma } from "../../lib/prisma";
import { ICreateGearPayload, TUpdateRentalStatus } from "./provider.interface";

const providerGearIntoDB = async (
  payload: ICreateGearPayload,
  providerId: string,
) => {
  const result = await prisma.gearItem.create({
    data: {
      ...payload,
      providerId,
    },
    include: {
      category: true,
    },
  });

  return result;
};

const getProviderOrdersIntoDB = async (providerId: string) => {
  const result = await prisma.rentalOrder.findMany({
    where: {
      id: providerId,
    },
    include: {
      items: {
        include: {
          gears: true,
        },
      },
    },
  });

  return result;
};

const updateGearIntoDB = async (
  gearId: string,
  providerId: string,
  payload: ICreateGearPayload,
) => {
  const isGearExists = await prisma.gearItem.findFirst({
    where: {
      providerId,
      id: gearId,
    },
  });

  if (!isGearExists) {
    throw new Error(
      "Gear item not found or you are not authorized to update it!",
    );
  }

  const result = await prisma.gearItem.update({
    where: {
      id: gearId,
    },
    data: {
      ...payload,
    },
    include: {
      category: true,
    },
  });

  return result;
};

export const updateOrderStatusIntoDB = async (
  orderId: string,
  providerId: string,
  payload: TUpdateRentalStatus,
) => {
  const isOrderExists = await prisma.rentalOrder.findFirst({
    where: {
      id: orderId,
      items: {
        some: {
          gears: {
            providerId: providerId,
          },
        },
      },
    },
  });

  if (!isOrderExists) {
    throw new Error(
      "Rental order not found or you are not authorized to update it!",
    );
  }

  const result = await prisma.rentalOrder.update({
    where: {
      id: orderId,
    },
    data: {
      status: payload.status,
    },
  });
  if (isOrderExists.status === payload.status) {
    throw new Error("Order is already in this status.");
  }

  return result;
};

export const providerService = {
  providerGearIntoDB,
  getProviderOrdersIntoDB,
  updateGearIntoDB,
  updateOrderStatusIntoDB,
};
