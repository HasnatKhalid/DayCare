// AppRouter.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change 'Switch' to 'Routes'
import Header from "./components/header/Header";
import HeroSection from "./components/hero/Hero";
import ServicesSection from "./components/services/Services";

import BookingForm from "./components/booking/Booking";
import DailyProgressSection from "./components/progress/Progress";

import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import PaymentPage from "./components/Payment/Payment";
import Confirmation from "./components/Confirm/Confirm";
import AdminHeader from "./admin/components/AdminHeader/AdminHeader";
import AdminSidebar from "./admin/components/AdminSideBar/AdminSidebar";
import AdminDashboard from "./admin/pages/AdminDashboard/AdminDashboard";
import ManageBookings from "./admin/pages/ManageBookings/ManageBooking";
import AddService from "./admin/pages/AddService/AddService";
import UpdateProgress from "./admin/pages/UpdateProgress/UpdateProgress";
import ChatAdmin from "./admin/pages/ChatAdmin/ChatAdmin";
import Lost from "./components/Lost/Lost";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Change 'Switch' to 'Routes' */}
          <Route path="/" element={<HeroSection />} />{" "}
          {/* Corrected: Use HeroSection instead of Home */}
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/daily-progress" element={<DailyProgressSection />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/manage-bookings" element={<ManageBookings />} />
          <Route path="/add-service" element={<AddService />} />
          <Route path="/update-progress" element={<UpdateProgress />} />
          <Route path="/chat-with-users" element={<ChatAdmin />} />
          <Route path="/lostnfound" element={<Lost />} />
        </Routes>
        {/* Change 'Switch' to 'Routes' */}
      </div>
    </Router>
  );
};

export default AppRouter;
