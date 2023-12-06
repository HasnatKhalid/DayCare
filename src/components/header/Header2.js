// Header.js
import React from "react";
import "../../fonts/fonts.css"; // Import the fonts stylesheet
const Header = () => {
  return (
    <div className=" bg-blue-300 p-4  flex justify-around">
      <a
        style={{ fontFamily: "YourFontName" }}
        className="header__menu-item font-bold text-black hover:text-yellow-500 transition duration-300"
        href="/"
      >
        Pet Services
      </a>
      <a
        style={{ fontFamily: "YourFontName" }}
        className="header__menu-item font-bold text-black hover:text-yellow-500 transition duration-300"
        href="/grooming"
      >
        Grooming
      </a>
      <a
        style={{ fontFamily: "YourFontName" }}
        className="header__menu-item font-bold text-black hover:text-yellow-500 transition duration-300"
        href="/petshotel"
      >
        Petshotel
      </a>
      <a
        style={{ fontFamily: "YourFontName" }}
        className="header__menu-item font-bold text-black hover:text-yellow-500 transition duration-300"
        href="/doggie-day-camp"
      >
        Doggie Day Camp
      </a>
      <a
        style={{ fontFamily: "YourFontName" }}
        className="header__menu-item font-bold text-black hover:text-yellow-500 transition duration-300"
        href="/training"
      >
        Training
      </a>
      <a
        style={{ fontFamily: "YourFontName" }}
        href="https://www.petsmart.com/pet-services/petsmart-veterinary-care.html"
        className="header__menu-item font-bold text-black hover:text-yellow-500 transition duration-300"
      >
        Vet care
      </a>
    </div>
  );
};

export default Header;
