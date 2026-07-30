import { Router } from "express";
import { paymentsController } from "./payments.controller";
import { auth } from "../auth/middleware";
import { Role } from "../../../prisma/generated/prisma/enums";

const router = Router();
router.post(
  "/create",
  auth(Role.CUSTOMER, Role.PROVIDER, Role.ADMIN),
  paymentsController.createPayment,
);

router.post("/webhook", paymentsController.handleWebhook);
router.post("/confirm",paymentsController.confirmPayment);
router.get("/",paymentsController.paymentHistory)
router.get("/:id",paymentsController.singlePaymentDetails)

export const paymentsRoutes = router;
