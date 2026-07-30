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
import { stripe } from "./lib/stripe";

const app: Application = express();

app.use("/api/payments/webhook", express.raw({ type: "application/json" }));

//   "/api/payments/webhook",
//   express.raw({
//     type: "application/json",
//   }),
//   (request,response) => {
//     let event = request.body;
//     // Only verify the event if you have an endpoint secret defined.
//     // Otherwise use the basic event deserialized with JSON.parse
//     if (endpointSecret) {
//       // Get the signature sent by Stripe
//       const signature = request.headers["stripe-signature"];
//       try {
//         event = stripe.webhooks.constructEvent(
//           request.body,
//           signature as string,
//           endpointSecret,
//         );
//       } catch (err:any) {
//         console.log(`⚠️  Webhook signature verification failed.`, err.message);
//         return response.sendStatus(400);
//       }
//     }

//     // Handle the event
//     switch (event.type) {
//       case "payment_intent.succeeded":
//         const paymentIntent = event.data.object;
//         console.log(
//           `PaymentIntent for ${paymentIntent.amount} was successful!`,
//         );
//         // Then define and call a method to handle the successful payment intent.
//         // handlePaymentIntentSucceeded(paymentIntent);
//         break;
//       case "payment_method.attached":
//         const paymentMethod = event.data.object;
//         // Then define and call a method to handle the successful attachment of a PaymentMethod.
//         // handlePaymentMethodAttached(paymentMethod);
//         break;
//       default:
//         // Unexpected event type
//         console.log(`Unhandled event type ${event.type}.`);
//     }

//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
//   },
// );

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
export default app;
