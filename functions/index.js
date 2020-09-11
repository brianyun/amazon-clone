const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
	"sk_test_51HQ33MGZRsDyQBTrSPltZhdrkYSx7RFJ4v0TIT34D4byb7Cwhk2mdxu7uA6HQrQKbpVcg1JRm3RD4CengSfivYQ200Ek0ryjC3"
);

// API

// 1. App config
const app = express();

// 2. Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// 3. API routes
app.get("/", (req, res) => res.status(200).send("hello wrld"));

app.post("/payments/create", async (req, res) => {
	const total = req.query.total;
	// {getBasketTotal(basket) * 100}
	console.log("payment request recieved!, for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});

	//ok, everything is good + we created something
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// 4. Listen command
exports.api = functions.https.onRequest(app);

// emulator endpoint
// http://localhost:5001/clone-690bc/us-central1/api
