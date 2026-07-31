import { Router } from "express";
import { reviewController } from "./reviews.controller";
import { auth } from "../auth/middleware";
import { Role } from "../../generated/prisma/enums";
const router = Router();
router.post("/", auth(Role.CUSTOMER, Role.ADMIN), reviewController.createReview);
export const reviewsRoutes = router;
//# sourceMappingURL=reviews.route.js.map