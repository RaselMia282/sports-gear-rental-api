import { GearItemScalarFieldEnum } from "../../../prisma/generated/prisma/internal/prismaNamespace";
import { prisma } from "../../lib/prisma";
import { TRentalPayload } from "./rentalOrders.interface";

const createRentalOrderIntoDB = async (
  payload: TRentalPayload,
  customerId: string,
) => {
  const { startDate, endDate, gearItemId, quantity } = payload;

  const gear = await prisma.gearItem.findUnique({
    where: {
      id: gearItemId,
    },
  });
  
  if(!gear){
    throw new Error("Gears not found")
  }

// stock check
if(gear.availableQuantity<quantity){
  throw new Error("Stock not available")
}

// calculation rental days 
const start = new Date (startDate);
const end = new Date (endDate);
const rentalDays = Math.ceil((end.getTime()-start.getTime()))/(1000*60*60*24)

if(rentalDays<=0){
  throw new Error("End date must be grater than start date")
}

// calculate total price 
const totalPrice=rentalDays*gear.pricePerDay*quantity;

// create order 
const result = await prisma.$transaction(async(tx)=>{
  const order = await tx.rentalOrder.create({
    data:{
      customerId,
      startDate:start,
      endDate:end,
      totalPrice,
    }
  })

  // create rental order items
  await tx.rentalOrderItems.create({
    data:{
      orderId:order.id,
      gearItemsId:gear.id,
      quantity,
      priceAtRental:gear.pricePerDay

    }
  })

  // update available quantity
  await tx.gearItem.update({
    where:{
      id:gear.id,
    },
    data:{
      availableQuantity:{
        decrement:quantity
      }
    }
  })

  // return order
  const rentalOrder = await tx.rentalOrder.findUnique({
    where:{
      id:order.id
    },
    include:{
      customer:true,
      items:{
        include:{
          gears:true
        }
      }
    }
  })
  return rentalOrder
})
 return result

};

export const rentalOrdersService = {
  createRentalOrderIntoDB,
};
