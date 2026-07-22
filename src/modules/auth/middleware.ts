import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { jwtUtilis } from "../../utils/jwt";
import config from "../../config";
import { JwtPayload } from "jsonwebtoken";
import { Role } from "../../../prisma/generated/prisma/enums";
import { prisma } from "../../lib/prisma";

declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        id: string;
        role: Role;
      };
    }
  }
}

export const auth = (...requiredRoles: Role[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.accessToken
      ? req.cookies.accessToken
      : req.headers.authorization?.startsWith("Bearer")
        ? req.headers.authorization.split(" ")[1]
        : req.headers.authorization;

    if (!token) {
      throw new Error(
        "You are not logged in.Please log in to access this resource",
      );
    }

    const verifiedToken = jwtUtilis.verifyToken(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    if (!verifiedToken) {
      throw new Error("Invalid token");
    }

    const { id, email, role } = verifiedToken;
    if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
      throw new Error(
        "Forbidden.You don't have permissions to access this route",
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id,
        email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }

    if (user.status === "SUSPEND") {
      throw new Error("Your account has been suspend.Please contact support");
    }

    req.user = {
      id,
      email,
      role,
    };

    next();
  });
};
