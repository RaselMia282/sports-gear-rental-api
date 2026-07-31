import AppError from "../../errors/apperror";
import { prisma } from "../../lib/prisma";
const createCategoryIntoDB = async (payload) => {
    const { name, description } = payload;
    const isCategoryExists = await prisma.categories.findFirst({
        where: { name },
    });
    if (isCategoryExists) {
        throw new AppError(400, "Category with this name already exists!");
    }
    const category = await prisma.categories.create({
        data: {
            name,
            description,
        },
    });
    return category;
};
const getAllCategoryIntoDB = async () => {
    const allCategory = await prisma.categories.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return allCategory;
};
const getSingleCategoryIntoDB = async (id) => {
    const singleCategory = await prisma.categories.findUnique({
        where: {
            id,
        },
    });
    if (!singleCategory) {
        throw new AppError(404, "Category not found");
    }
    return singleCategory;
};
const updateCategoryIntoDB = async (id, payload) => {
    const { name, description } = payload;
    const isCategoryExists = await prisma.categories.findUnique({
        where: { id },
    });
    if (!isCategoryExists) {
        throw new AppError(404, "Category not found");
    }
    const updateCategory = await prisma.categories.update({
        where: {
            id,
        },
        data: payload,
    });
    return updateCategory;
};
export const categoryService = {
    createCategoryIntoDB,
    getAllCategoryIntoDB,
    getSingleCategoryIntoDB,
    updateCategoryIntoDB,
};
//# sourceMappingURL=categories.service.js.map