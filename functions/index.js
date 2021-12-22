const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('...your stripe secret key')

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.status(200).send('Hello World'));

//Because the backend is going to be deployed by firebase, 
//So which port it will use will be defined by firebase
exports.api = functions.https.onRequest(app);

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Total is: ', total);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount:total,
      currency: "usd"
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret
    });
});
