import { Router } from "express";
import { adminController } from "./admin.controller";

const router = Router();
router.get("/users",adminController.getAllUsers)
router.patch("/users/:id",adminController.updateStatus)
router.get("/gear",adminController.getAllGear)



export const adminRoutes = router