import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import './CheckoutForm.css';
import { useStateValue } from "./StateProvider";
import {db} from './firebase';
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
    const [{basket,user}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
        return;
        }

        console.log(window.location);
        const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
        );

        if (!clientSecret) {
        return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                setMessage("Payment succeeded!");
                break;
                case "processing":
                setMessage("Your payment is processing.");
                break;
                case "requires_payment_method":
                setMessage("Your payment was not successful, please try again.");
                break;
                default:
                setMessage("Something went wrong.");
                break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
        }

        setIsLoading(true);

        const {error, paymentIntent}= await stripe.confirmPayment({
            elements,
            redirect:'if_required'
        })
        if(paymentIntent){
            console.log(paymentIntent);
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                })
            
        }
        if(error){
            if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
            } else {
            setMessage("An unexpected error occured.");
            }
        }

        setIsLoading(false);
        navigate('/orders', {replace:true});
        dispatch({type:'EMPTY_BASKET'});
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
            </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
        </form>
    );
}