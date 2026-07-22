import express,{ Application, Request,Response } from "express";
import config from "./config";
import cors from "cors"
import cookieParser from "cookie-parser";
const app:Application = express();
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

app.get('/',(req:Request,res:Response)=>{
   res.send("sports-rental-gear-api")
})

export default app