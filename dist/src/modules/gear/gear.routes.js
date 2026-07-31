import { Router } from "express";
import { gearController } from "./gear.controller";
import { auth } from "../auth/middleware";
import { Role } from "../../generated/prisma/enums";
const router = Router();
router.post("/", auth(Role.CUSTOMER, Role.PROVIDER, Role.ADMIN), gearController.createGear);
router.get("/", gearController.getAllGears);
router.get("/:id", gearController.getSingleGear);
export const gearRoutes = router;
//# sourceMappingURL=gear.routes.js.map