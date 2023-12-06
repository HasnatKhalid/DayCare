// src/admin/components/AdminHeader/AdminHeader.js
import React from "react";

const AdminHeader = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Pet Daycare Admin</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 transition duration-300">
              <a href="/admin-dashboard" className="text-white hover:underline">
                Dashboard
              </a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="/manage-bookings" className="text-white hover:underline">
                Manage Bookings
              </a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="/add-service" className="text-white hover:underline">
                Add Service
              </a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
