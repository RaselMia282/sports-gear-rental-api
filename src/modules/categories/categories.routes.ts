import { Router } from "express";
import { categoryController } from "./categories.controller";
import { auth } from "../auth/middleware";
import { Role } from "../../../prisma/generated/prisma/enums";

const router = Router();
router.post("/",auth(Role.ADMIN),categoryController.createCategory)


export const categoryRoutes = router