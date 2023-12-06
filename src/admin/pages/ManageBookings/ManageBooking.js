// src/admin/pages/ManageBookings/ManageBookings.js
import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminSidebar from "../../components/AdminSideBar/AdminSidebar";

const ManageBookings = () => {
  const bookings = [
    { id: 1, petName: "Buddy", serviceType: "Dog Boarding", status: "Pending" },
    {
      id: 2,
      petName: "Whiskers",
      serviceType: "Cat Sitting",
      status: "Confirmed",
    },
    // Add more booking data as needed
  ];

  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleBookingAction = (action, bookingId) => {
    switch (action) {
      case "edit":
        console.log(`Editing booking with ID ${bookingId}`);
        break;
      case "cancel":
        console.log(`Canceling booking with ID ${bookingId}`);
        break;
      case "delete":
        console.log(`Deleting booking with ID ${bookingId}`);
        break;
      case "approve":
        console.log(`Approving booking with ID ${bookingId}`);
        break;
      default:
        break;
    }
  };

  const handleManageDateSlots = (booking) => {
    setSelectedBooking(booking);
    console.log(`Managing date slots for booking with ID ${booking.id}`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Manage Bookings
            </h1>
            <div className="mt-8">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Pet Name</th>
                    <th className="py-2 px-4 border-b">Service Type</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="py-2 px-4 border-b">{booking.petName}</td>
                      <td className="py-2 px-4 border-b">
                        {booking.serviceType}
                      </td>
                      <td className="py-2 px-4 border-b">{booking.status}</td>
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={() =>
                            handleBookingAction("edit", booking.id)
                          }
                          className="mr-2 text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            handleBookingAction("cancel", booking.id)
                          }
                          className="mr-2 text-red-500 hover:underline"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() =>
                            handleBookingAction("delete", booking.id)
                          }
                          className="mr-2 text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                        {booking.status === "Pending" && (
                          <button
                            onClick={() =>
                              handleBookingAction("approve", booking.id)
                            }
                            className="text-green-500 hover:underline"
                          >
                            Approve
                          </button>
                        )}
                        <button
                          onClick={() => handleManageDateSlots(booking)}
                          className="ml-2 text-blue-500 hover:underline"
                        >
                          Manage Date Slots
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageBookings;
