import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

import { authRoutes } from "./modules/auth/auth.routes.js";
import { categoryRoutes } from "./modules/categories/categories.routes.js";
import { gearRoutes } from "./modules/gear/gear.routes.js";
import { rentalOrdersRoutes } from "./modules/rentalOrders/rentalOrders.routes.js";
import { providerRoutes } from "./modules/provider/provider.routes.js";
import { paymentsRoutes } from "./modules/payments/payments.routes.js";
import { adminRoutes } from "./modules/admin/admin.routes.js";
import { reviewsRoutes } from "./modules/reviews/reviews.route.js";

import globalErrorHandler from "./modules/auth/globalErrorHandler.js";
import notFound from "./modules/auth/notFound.js";
import config from "./config/index.js";

const app: Application = express();

app.use("/api/payments/webhook", express.raw({ type: "application/json" }));

app.use(express.json());

app.use(cookieParser());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.send("sports-rental-gear-api");
});

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/gear", gearRoutes);
app.use("/api/rentals", rentalOrdersRoutes);
app.use("/api/provider/gear", providerRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reviews", reviewsRoutes);

app.use(globalErrorHandler);
app.use(notFound);

export default app;