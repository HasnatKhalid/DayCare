import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2023 Pet Daycare Center. All rights reserved.
        </p>
        <div className="mt-2">
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-2 transition duration-300"
          >
            Privacy Policy
          </a>
          <span className="text-gray-400"> | </span>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-2 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
