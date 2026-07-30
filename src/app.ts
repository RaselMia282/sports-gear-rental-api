import express, {
  Application,
  request,
  Request,
  response,
  Response,
} from "express";
import config from "./config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRoutes } from "./modules/auth/auth.routes";
import { categoryRoutes } from "./modules/categories/categories.routes";
import { gearRoutes } from "./modules/gear/gear.routes";
import { rentalOrdersRoutes } from "./modules/rentalOrders/rentalOrders.routes";
import { providerRoutes } from "./modules/provider/provider.routes";
import { paymentsRoutes } from "./modules/payments/payments.routes";

import { adminRoutes } from "./modules/admin/admin.routes";

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
export default app;
