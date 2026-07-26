import { prisma } from "../../lib/prisma";
import { ICreateGear } from "./gear.interface";

const createGearIntoDb = async (payload: ICreateGear) => {
  const {
    title,
    description,
    pricePerDay,
    brand,
    stockQuantity,
    availableQuantity,
    categoryId,
    providerId,
  } = payload;

  const gear = await prisma.gearItem.create({
    data: {
      title,
      description,
      pricePerDay,
      brand,
      stockQuantity,
      availableQuantity,
      categoryId,
      providerId,
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

const getAllGearsIntoDB = async (payload: any) => {
  const { category, brand, minPrice, maxPrice } = payload;

  const whereCondition: any = {};
  if (category) {
    whereCondition.category = {
      name: {
        contains: category as string,
        mode: "insensitive",
      },
    };
  }

  if (brand) {
    whereCondition.brand = {
      contains: brand as string,
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

const getSingleGearIntoDB = async(id:any)=>{
         const gear = await prisma.gearItem.findUnique({
            where:{
                id
            },
            include:{
                category:true,

                provider:{
                    omit:{
                        password:true,
                    }
                }
            },
            
         })

         return gear
}

export const gearService = {
  createGearIntoDb,
  getAllGearsIntoDB,
  getSingleGearIntoDB,
};
