// components/Header/Header.js

import React from "react";
import { Link } from "react-router-dom";
import "../../fonts/fonts.css"; // Import the fonts stylesheet

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 border-b-2 border-yellow-500">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl text-yellow-400 font-bold"
          style={{ fontFamily: "YourFontName", fontSize: "24px" }}
        >
          Pet Daycare Center
        </Link>
        <nav className="flex items-center space-x-4">
          <Link
            style={{ fontFamily: "YourFontName", textDecoration: "underline" }} // Remove underline on hover
            to="/services"
            className="text-white font-bold"
          >
            Services
          </Link>
          <Link
            style={{ fontFamily: "YourFontName", textDecoration: "underline" }} // Remove underline on hover
            to="/booking"
            className="text-white font-bold"
          >
            Booking
          </Link>
          <Link
            style={{ fontFamily: "YourFontName", textDecoration: "underline" }} // Remove underline on hover
            to="/daily-progress"
            className="text-white font-bold"
          >
            Daily Progress
          </Link>
          <Link
            style={{ fontFamily: "YourFontName", textDecoration: "underline" }} // Remove underline on hover
            to="/lostnfound"
            className="text-white font-bold"
          >
            Lost Pets
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
