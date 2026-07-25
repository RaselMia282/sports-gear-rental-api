import { prisma } from "../../lib/prisma";
import { ICreateGear } from "./gear.interface";

const createGearIntoDb = async(payload:ICreateGear)=>{
         const{title,description,pricePerDay,brand,stockQuantity,availableQuantity,categoryId,providerId} =payload;


         const gear = await prisma.gearItem.create({
            data:{
                title,
                description,
                pricePerDay,
                brand,
                stockQuantity,
                availableQuantity,
                categoryId,
                providerId

               
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

const getAllGearsIntoDB = ()=>{

}


export const gearService ={
    createGearIntoDb,
    getAllGearsIntoDB,
}