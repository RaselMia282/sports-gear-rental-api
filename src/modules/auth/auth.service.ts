
import { Ilogin, Iregister } from "./auth.interface";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import config from "../../config";
import jwt, { SignOptions } from "jsonwebtoken"
import { jwtUtilis } from "../../utils/jwt";

const registerUserIntoDB = async (payload: Iregister) => {
  const { name, email, password,phone} = payload;

  const isUserExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isUserExists) {
    throw new Error("user already exists");
  }
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phone
    },
    omit:{
      password:true,
    }
  });
  return createdUser;
};

const loginUserIntoDb =async (payload:Ilogin)=>{
      const {email,password} = payload;

      const user = await prisma.user.findUnique({
        where:{
          email
        }
      })

      if(!user){
       throw new Error("please register first")
      }

      // match password

      const matchPassword = await bcrypt.compare(password,user.password);

      if(!matchPassword){
      throw new Error("password is wrong.Please try again")
      }

      // token related 


      const jwtPayload = {
      id:user.id,
        email:user.email,
        role:user.role

      }

      const accessToken = jwtUtilis.createToken(jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expire_in as string
      )

      const refreshToken = jwtUtilis.createToken(jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expire_in as string
      )

      return {
        accessToken,
        refreshToken
      }
}

export const authservice = {
  registerUserIntoDB,
  loginUserIntoDb
};
