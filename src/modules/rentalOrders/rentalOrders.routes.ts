import { Router } from "express";
import { rentalOrdersController } from "./rentalOrders.controller";
import { auth } from "../auth/middleware";
import { Role } from "../../../prisma/generated/prisma/enums";

const router = Router();
router.post("/",auth(Role.CUSTOMER),rentalOrdersController.createRentalOrder)
router.get("/",auth(Role.CUSTOMER),rentalOrdersController.userRental)
router.get("/:id",auth(Role.CUSTOMER),rentalOrdersController.rentalOrderDetails)
export const rentalOrdersRoutes = router