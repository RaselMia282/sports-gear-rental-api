import { prisma } from "../../lib/prisma";
const createGearIntoDb = async (payload, providerId) => {
    const { title, description, pricePerDay, brand, stockQuantity, availableQuantity, categoryId, } = payload;
    const gear = await prisma.gearItem.create({
        data: {
            title,
            description,
            pricePerDay,
            brand,
            stockQuantity,
            availableQuantity,
            categoryId,
            providerId
        },
        include: {
            category: true,
            provider: {
                omit: {
                    password: true,
                },
            },
        },
    });
    return gear;
};
const getAllGearsIntoDB = async (payload) => {
    const { category, brand, minPrice, maxPrice } = payload;
    const whereCondition = {};
    if (category) {
        whereCondition.category = {
            name: {
                contains: category,
                mode: "insensitive",
            },
        };
    }
    if (brand) {
        whereCondition.brand = {
            contains: brand,
            mode: "insensitive",
        };
    }
    if (minPrice || maxPrice) {
        whereCondition.pricePerDay = {};
        whereCondition.pricePerDay.gte = Number(minPrice);
    }
    if (maxPrice) {
        whereCondition.pricePerDay.lte = Number(maxPrice);
    }
    const gear = await prisma.gearItem.findMany({
        where: whereCondition,
        include: {
            category: true,
            provider: {
                omit: {
                    password: true,
                },
            },
        },
    });
    return gear;
};
const getSingleGearIntoDB = async (id) => {
    const gear = await prisma.gearItem.findUnique({
        where: {
            id
        },
        include: {
            category: true,
            provider: {
                omit: {
                    password: true,
                }
            }
        },
    });
    return gear;
};
export const gearService = {
    createGearIntoDb,
    getAllGearsIntoDB,
    getSingleGearIntoDB,
};
//# sourceMappingURL=gear.service.js.map