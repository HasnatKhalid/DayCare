// src/components/CheckoutForm/CheckoutForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      // Send the token to your server for processing
      // In a real application, this would be done securely on your backend
      // You can use a library like axios to make an API call

      // For now, just log the token to the console
      console.log(token);

      setPaymentSuccess("Payment successful!");
      setPaymentError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <CardElement className="border p-2 rounded-md mb-4" />

      {paymentError && (
        <div className="text-red-500 text-sm mb-4">{paymentError}</div>
      )}

      {paymentSuccess && (
        <div className="text-green-500 text-sm mb-4">{paymentSuccess}</div>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
