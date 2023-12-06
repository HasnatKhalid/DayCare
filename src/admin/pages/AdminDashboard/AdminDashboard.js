// src/admin/pages/AdminDashboard/AdminDashboard.js
import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminSidebar from "../../components/AdminSideBar/AdminSidebar";
import { useState } from "react";
import { useEffect } from "react";

const AdminDashboard = () => {
  // // Dummy data for demonstration
  // const bookings = [
  //   { id: 1, petName: "Buddy", serviceType: "Dog Boarding", status: "Pending" },
  //   {
  //     id: 2,
  //     petName: "Whiskers",
  //     serviceType: "Cat Sitting",
  //     status: "Confirmed",
  //   },
  //   // Add more booking data as needed
  // ];

  const [bookings, setBookings] = useState()

  

  const getBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/viewbookings', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          const data = await response.json();
          return data;
          
      } else {
          console.error('Error:', response.status, response.statusText);
      }
  } catch (error) {
      console.error('Fetch error:', error);
  }
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBookings();
      setBookings(data);
      
    };

    fetchData();
  }, []); 
  
  console.log(bookings)

  const services = [
    { id: 1, name: "Dog Boarding", price: 25.99 },
    { id: 2, name: "Cat Sitting", price: 15.99 },
    // Add more service data as needed
  ];

  const progressData = [
    { id: 1, petName: "Buddy", happinessLevel: 80, healthStatus: "Good" },
    {
      id: 2,
      petName: "Whiskers",
      happinessLevel: 90,
      healthStatus: "Excellent",
    },
    // Add more progress data as needed
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Admin Dashboard
            </h1>

            {/* Bookings Section */}
            <section className="my-8">
              <h2 className="text-xl text-gray-700 font-semibold mb-4">
                Manage Bookings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookings !== undefined && bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white p-4 rounded-md shadow-md"
                  >
                    <p className="text-gray-700 font-semibold">
                      Pet: {booking.petname}
                    </p>
                    <p className="text-gray-600">
                      Service: {booking.service}
                    </p>
                    <p
                      className={`text-${
                        booking.status === "Pending" ? "red" : "green"
                      }-500 font-bold`}
                    >
                      Status: {booking.status}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section className="my-8">
              <h2 className="text-xl text-gray-700 font-semibold mb-4">
                Manage Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white p-4 rounded-md shadow-md"
                  >
                    <p className="text-gray-700 font-semibold">
                      {service.name}
                    </p>
                    <p className="text-gray-600">Price: ${service.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Progress Section */}
            <section className="my-8">
              <h2 className="text-xl text-gray-700 font-semibold mb-4">
                Pet Progress
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {progressData.map((progress) => (
                  <div
                    key={progress.id}
                    className="bg-white p-4 rounded-md shadow-md"
                  >
                    <p className="text-gray-700 font-semibold">
                      Pet: {progress.petName}
                    </p>
                    <p className="text-gray-600">
                      Happiness Level: {progress.happinessLevel}%
                    </p>
                    <p
                      className={`text-${
                        progress.healthStatus === "Good" ? "green" : "blue"
                      }-500 font-bold`}
                    >
                      Health: {progress.healthStatus}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Add more sections and functionalities as needed */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
