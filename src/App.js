// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ContactSection from "./components/ContactSection/ContactSection";
import "../../fonts/fonts.css"; // Import the fonts stylesheet

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HeroSection} />
        <Route path="/about" component={AboutUsSection} />
        <Route path="/services" component={ServicesSection} />
        <Route path="/contact" component={ContactSection} />
      </Switch>
    </Router>
  );
};

export default App;
