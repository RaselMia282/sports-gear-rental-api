import { Router } from "express";
import { gearController } from "./gear.controller";

const router=Router();
router.post("/",gearController.createGear)
router.get("/",gearController.getAllGears)

export const gearRoutes=router;