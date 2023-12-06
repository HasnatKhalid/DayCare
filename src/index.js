// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import "./index.css"; // Add your styles if needed
import "../src/fonts/fonts.css"; // Import the fonts stylesheet
ReactDOM.render(
  <React.StrictMode>
    <AppRouter style={{ fontFamily: "YourFontName", fontSize: "24px" }} />
  </React.StrictMode>,
  document.getElementById("root")
);
