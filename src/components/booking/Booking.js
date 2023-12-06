// src/components/BookingForm/BookingForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    serviceType: "",
    startDate: "",
    endDate: "",
    additionalInfo: "",
  });

  // Simulated backend response
  const [isSlotAvailable, setIsSlotAvailable] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate checking availability on the backend
    // In a real application, make an API call to check availability
    // Replace the mock API call with actual backend logic
    checkAvailability(formData.startDate);
  };

  const checkAvailability = (selectedDate) => {
    // Simulated backend response
    // Replace this with an actual API call to your backend
    // that checks if the slot is available on the selected date
    setIsSlotAvailable(selectedDate !== "2023-12-25"); // Example: Slot is not available on Christmas day
  };

  // Check if the form is filled and a valid slot is selected
  const isFormValid =
    Object.values(formData).every((value) => value !== "") && isSlotAvailable;

  return (
    <div
      className="container mx-auto  bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://www.telegraph.co.uk/content/dam/telegraph-connect/small-business/Bruce-Casalis-founder-Bruces-Doggy-Daycare-xlarge.jpg?imwidth=1200")',
      }}
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center  bg-yellow-300 border-2 bg-auto text-blue-600 rounded-full py-4 px-4 sm:py-3 sm:px-6 object-contain">
          Book Your Pet's Stay
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-yellow-300 opacity-75 p-8 rounded-md shadow-md border border-gray-300"
      >
        <div className="mb-4">
          <label htmlFor="petName" className="block text-sm font-bold mb-2">
            Pet Name
          </label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="petType" className="block text-sm font-bold mb-2">
            Pet Type
          </label>
          <input
            type="text"
            id="petType"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="serviceType" className="block text-sm font-bold mb-2">
            Service Type
          </label>
          <input
            type="text"
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-bold mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className={`w-full border ${
              isSlotAvailable ? "border-gray-300" : "border-red-500"
            } rounded-md p-2`}
            required
          />
          {!isSlotAvailable && (
            <p className="text-red-500 text-sm mt-2">
              This slot is already taken. Please choose another date.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="endDate" className="block text-sm font-bold mb-2">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="additionalInfo"
            className="block text-sm font-bold mb-2"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          ></textarea>
        </div>

        <Link
          to={isFormValid ? "/payment" : "/"}
          className="block w-full text-center mt-4"
        >
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white px-4 py-2 rounded-full ${
              isFormValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Book Now
          </button>
        </Link>
      </form>
    </div>
  );
};

export default BookingForm;
