import { Router } from "express";
import { rentalOrdersController } from "./rentalOrders.controller";

const router = Router();
router.post("/",rentalOrdersController.createRentalOrder)

export const rentalOrdersRoutes = router