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

export const categoryService = {
    createCategoryIntoDB,
}