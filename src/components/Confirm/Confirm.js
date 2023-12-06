// src/components/confirmation/Confirmation.js
import React, { useEffect, useState } from "react";

const Confirmation = () => {
  const [bookingNumber, setBookingNumber] = useState("");

  useEffect(() => {
    // Generate a random booking number (simple example)
    const generatedNumber = Math.floor(100000 + Math.random() * 900000);
    setBookingNumber(generatedNumber.toString());
  }, []);

  return (
    <div className="container mx-auto my-auto flex items-center justify-center h-screen bg-cover bg-center">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 bg-yellow-300 border-2 bg-auto text-blue-600 rounded-full py-2 px-4 sm:py-3 sm:px-6 object-contain">
          Booking Confirmed!
        </h2>
        <p className="text-gray-700">
          Thank you for booking with us. Your booking has been confirmed.
        </p>
        <p className="text-gray-700 mt-2">
          Your Booking Number: {bookingNumber}
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
