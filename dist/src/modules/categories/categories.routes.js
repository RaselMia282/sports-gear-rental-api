import { Router } from "express";
import { auth } from "../auth/middleware.js";
import { categoryController } from "./categories.controller.js";
import { Role } from "../../generated/prisma/enums.js";
const router = Router();
router.post("/", auth(Role.ADMIN), categoryController.createCategory);
router.get("/", categoryController.getAllCategory);
router.get("/:id", categoryController.getSingleCategory);
router.patch("/:id", auth(Role.ADMIN), categoryController.updateCategory);
export const categoryRoutes = router;
//# sourceMappingURL=categories.routes.js.map