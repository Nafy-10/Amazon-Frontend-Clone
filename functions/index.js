import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe"; // Correctly import Stripe
import { setGlobalOptions } from "firebase-functions";

dotenv.config(); 

// Initialize Stripe with the API key from environment variables
const stripe = new Stripe(process.env.VITE_STRIPE_KEY);

const app = express();

// setGlobalOptions({maxInstances:10})

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Connected successfully!",
    });
});

app.post("/payment/create", async (req, res) => {
    const total = parseInt(req.body.total); // Access total from the request body
    if (total > 0) {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: "usd"
            });
            // console.log(paymentIntent);
            res.status(201).json({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            console.error("Error creating payment intent:", error);
            res.status(400).json({
                error: "Internal Server Error",
                message: error.message,
            });
        }
    } else {
        res.status(403).json({
            message: "The total amount must be greater than 0"
        });
    }
});

// Export the API
export const api = onRequest(app);
