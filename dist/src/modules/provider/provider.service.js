import AppError from "../../errors/apperror.js";
import { prisma } from "../../lib/prisma.js";
const providerGearIntoDB = async (payload, providerId) => {
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
const getProviderOrdersIntoDB = async (providerId) => {
    const result = await prisma.rentalOrder.findMany({
        where: {
            items: {
                some: {
                    gears: {
                        providerId: providerId,
                    },
                },
            },
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
            payment: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
};
const updateGearIntoDB = async (gearId, providerId, payload) => {
    const isGearExists = await prisma.gearItem.findFirst({
        where: {
            id: gearId,
        },
    });
    if (!isGearExists) {
        throw new AppError(404, "Gear item not found!");
    }
    if (isGearExists.providerId !== providerId) {
        throw new AppError(403, "You are not authorized to update this gear!");
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
export const updateOrderStatusIntoDB = async (orderId, providerId, payload) => {
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
        throw new AppError(404, "Rental order not found or you are not authorized to update it!");
    }
    if (isOrderExists.status === payload.status) {
        throw new AppError(400, `Order status is already set to ${payload.status}!`);
    }
    const result = await prisma.rentalOrder.update({
        where: {
            id: orderId,
        },
        data: {
            status: payload.status,
        },
    });
    return result;
};
const deleteProviderGearIntoDB = async (gearId, providerId) => {
    const isGearExists = await prisma.gearItem.findUnique({
        where: { id: gearId },
    });
    if (!isGearExists) {
        throw new AppError(404, "Gear item not found!");
    }
    if (isGearExists.providerId !== providerId) {
        throw new AppError(403, "You are not authorized to delete this gear!");
    }
    const activeRental = await prisma.rentalOrder.findFirst({
        where: {
            status: {
                in: ["PENDING", "APPROVED"],
            },
            items: {
                some: {
                    gearItemsId: gearId,
                },
            },
        },
    });
    if (activeRental) {
        throw new AppError(400, "Cannot delete gear with ongoing or pending rental orders!");
    }
    const result = await prisma.gearItem.delete({
        where: { id: gearId },
    });
    return result;
};
export const providerService = {
    providerGearIntoDB,
    getProviderOrdersIntoDB,
    updateGearIntoDB,
    updateOrderStatusIntoDB,
    deleteProviderGearIntoDB,
};
//# sourceMappingURL=provider.service.js.map