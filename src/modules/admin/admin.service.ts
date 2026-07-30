import { prisma } from "../../lib/prisma";

const getAllUsersIntoDB = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      createdAt: true,
    },
  });
  return result
};

const updateStatusIntoDB = async(userId:string,status:string)=>{
            
    const isUserExist = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!isUserExist) {
    throw new Error("User not found!");
  }

  const result = await prisma.user.update({
    where:{id:userId},
    data:{
        status :status as any
    },
    select:{
        id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      updatedAt: true,
    }
  })

  return result 
}

export const adminService = {
  getAllUsersIntoDB,
  updateStatusIntoDB,
};
