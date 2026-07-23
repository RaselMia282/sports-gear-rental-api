import { prisma } from "../../lib/prisma";
import { Icreatecategory } from "./categories.interface";

const createCategoryIntoDB = async(payload:Icreatecategory)=>{
    const {name, description} = payload;

    const category = await prisma.categories.create({
        data:{
            name,
            description,
        }
    })

    return category;
}

const getAllCategoryIntoDB = async()=>{
        const allCategory = await prisma.categories.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })

        return allCategory
}

const getSingleCategoryIntoDB = async(id:string)=>{
     const singleCategory = await prisma.categories.findUnique({
        where:{
            id
        }
     })
     if (!singleCategory) {
    throw new Error("Category not found")
  }
     return singleCategory
}

export const categoryService = {
    createCategoryIntoDB,
    getAllCategoryIntoDB,
    getSingleCategoryIntoDB,
}