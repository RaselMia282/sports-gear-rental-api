import { Router } from "express";
import { gearController } from "./gear.controller";

const router=Router();
router.post("/",gearController.createGear)
router.get("/",gearController.getAllGears)
router.get("/:id",gearController.getSingleGear)

export const gearRoutes=router;