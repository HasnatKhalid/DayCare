// src/admin/components/AdminSidebar/AdminSidebar.js
import React from "react";

const AdminSidebar = () => {
  return (
    <aside className="bg-gray-900 text-white p-4 h-full">
      <div className="flex items-center mb-6">
        <span className="text-lg font-bold">Admin</span>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="/admin"
              className="block p-2 rounded transition duration-300 hover:bg-gray-800"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/manage-bookings"
              className="block p-2 rounded transition duration-300 hover:bg-gray-800"
            >
              Manage Bookings
            </a>
          </li>
          <li>
            <a
              href="/add-service"
              className="block p-2 rounded transition duration-300 hover:bg-gray-800"
            >
              Add Service
            </a>
          </li>
          <li>
            <a
              href="/update-progress"
              className="block p-2 rounded transition duration-300 hover:bg-gray-800"
            >
              Update Progress
            </a>
          </li>
          <li>
            <a
              href="/chat-with-users"
              className="block p-2 rounded transition duration-300 hover:bg-gray-800"
            >
              Chat with Users
            </a>
          </li>
          <li>
            <a
              href="/manage-services"
              className="block p-2 rounded transition duration-300 hover:bg-gray-800"
            >
              Manage Services
            </a>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
