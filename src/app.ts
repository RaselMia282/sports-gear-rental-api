import express, { Application, Request, Response } from "express";
import config from "./config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRoutes } from "./modules/auth/auth.routes";
import { categoryRoutes } from "./modules/categories/categories.routes";
import { gearRoutes } from "./modules/gear/gear.routes";

const app: Application = express();
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

app.use("/api/auth",authRoutes)
app.use("/api/categories",categoryRoutes)
app.use("/api/gear",gearRoutes)
export default app;
