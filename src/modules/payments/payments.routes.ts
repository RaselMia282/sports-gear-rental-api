import { Router } from "express";
import { paymentsController } from "./payments.controller";
import { auth } from "../auth/middleware";
import { Role } from "../../generated/prisma/enums";


const router = Router();
router.post(
  "/create",
  auth(Role.CUSTOMER, Role.PROVIDER, Role.ADMIN),
  paymentsController.createPayment,
);

router.post("/webhook", paymentsController.handleWebhook);
router.post("/confirm",auth(Role.ADMIN,Role.CUSTOMER,Role.PROVIDER),paymentsController.confirmPayment);
router.get("/",auth(Role.ADMIN,Role.CUSTOMER,Role.PROVIDER),paymentsController.paymentHistory)
router.get("/:id",auth(Role.ADMIN,Role.CUSTOMER,Role.PROVIDER),paymentsController.singlePaymentDetails)

export const paymentsRoutes = router;
