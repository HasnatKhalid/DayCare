// src/components/payment/Payment.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate an asynchronous payment processing delay (replace with actual payment API call)
    const simulatePaymentProcessing = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true); // Simulate successful payment
        }, 2000); // Simulate a 2-second delay
      });
    };

    try {
      // Simulate payment processing
      console.log("Processing payment...");
      const paymentResult = await simulatePaymentProcessing();

      // Check if payment was successful
      if (paymentResult) {
        console.log("Payment successful!");
        // Add your logic here, e.g., redirect to a confirmation page
      } else {
        console.error("Payment failed. Please try again.");
        // Add your logic here, e.g., show an error message
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      // Add your logic here, e.g., show an error message
    }
  };

  return (
    <div className="container mx-auto my-auto bg-cover bg-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-yellow-300 border-2 bg-auto text-blue-600 rounded-full py-2 px-4 sm:py-3 sm:px-6 object-contain">
          Payment Details
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-yellow-300 opacity-75 p-8 rounded-md shadow-md border border-gray-300"
      >
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-bold mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cardHolderName"
            className="block text-sm font-bold mb-2"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={paymentData.cardHolderName}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-sm font-bold mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentData.expiryDate}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-sm font-bold mb-2">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <Link to="/confirmation" className="block w-full text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Pay Now
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Payment;
