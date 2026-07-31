import { Router } from "express";
import { authController } from "./auth.controller";
import { auth } from "./middleware";
import { Role } from "../../generated/prisma/enums";


const router = Router();
router.post("/register",authController.registerUser)
router.post ("/login",authController.loginUser)
router.get("/me",auth(Role.ADMIN,Role.PROVIDER,Role.CUSTOMER),authController.getMyProfile)


export const authRoutes = router;