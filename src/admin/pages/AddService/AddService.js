// src/admin/pages/AddService/AddService.js
import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminSidebar from "../../components/AdminSideBar/AdminSidebar";

const AddService = () => {
  const [serviceData, setServiceData] = useState({
    serviceName: "",
    serviceTitle: "",
    serviceDescription: "",
    availableSlots: [],
    // Add more service fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddService = () => {
    // Add logic for adding service to the backend
    console.log("Adding service:", serviceData);
    // Reset form fields or redirect to service management page
    setServiceData({
      serviceName: "",
      serviceTitle: "",
      serviceDescription: "",
      availableSlots: [],
    });
  };

  const handleEditService = () => {
    // Add logic for editing service to the backend
    console.log("Editing service:", serviceData);
    // Reset form fields or redirect to service management page
    setServiceData({
      serviceName: "",
      serviceTitle: "",
      serviceDescription: "",
      availableSlots: [],
    });
  };

  const handleDeleteService = () => {
    // Add logic for deleting service from the backend
    console.log("Deleting service:", serviceData.serviceName);
    // Reset form fields or redirect to service management page
    setServiceData({
      serviceName: "",
      serviceTitle: "",
      serviceDescription: "",
      availableSlots: [],
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Add Service
            </h1>
            <div className="mt-8">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="serviceName"
                    className="block text-sm font-bold mb-2"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    id="serviceName"
                    name="serviceName"
                    value={serviceData.serviceName}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="serviceTitle"
                    className="block text-sm font-bold mb-2"
                  >
                    Service Title
                  </label>
                  <input
                    type="text"
                    id="serviceTitle"
                    name="serviceTitle"
                    value={serviceData.serviceTitle}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="serviceDescription"
                    className="block text-sm font-bold mb-2"
                  >
                    Service Description
                  </label>
                  <textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    value={serviceData.serviceDescription}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  />
                </div>
                {/* Add more form fields for available slots or other service details */}
                <button
                  type="button"
                  onClick={handleAddService}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2"
                >
                  Add Service
                </button>
                <button
                  type="button"
                  onClick={handleEditService}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-full mr-2"
                >
                  Edit Service
                </button>
                <button
                  type="button"
                  onClick={handleDeleteService}
                  className="bg-red-500 text-white px-4 py-2 rounded-full"
                >
                  Delete Service
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddService;
