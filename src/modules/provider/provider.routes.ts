import { Router } from "express";
import { providerController } from "./provider.controller";
import { auth } from "../auth/middleware";
import { Role } from "../../../prisma/generated/prisma/enums";

const router = Router ();
router.post("/",auth(Role.PROVIDER),providerController.providerGear)
router.get("/orders",auth(Role.PROVIDER),providerController.getProviderOrders)
router.put("/:id",auth(Role.PROVIDER),providerController.updateGear)
router.patch("/orders/:id",auth(Role.PROVIDER),providerController.updateOrderStatus)
router.delete("/:id",auth(Role.PROVIDER),providerController.deleteProviderGear)

export const providerRoutes = router;