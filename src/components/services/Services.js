// src/components/ServicesSection/ServicesSection.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Dog Boarding",
      description: "Safe and comfortable boarding for your dogs.",
      icon: "🐾",
    },
    {
      id: 2,
      title: "Pet Grooming",
      description: "Professional grooming services for your pets.",
      icon: "✂️",
    },
    {
      id: 3,
      title: "Dog Walking",
      description: "Regular exercise and walks for your furry friends.",
      icon: "🚶‍♂️",
    },
    {
      id: 4,
      title: "Veterinary Care",
      description: "24/7 on-site veterinary support for your pets.",
      icon: "👨‍⚕️",
    },
    {
      id: 5,
      title: "Pet Spa",
      description: "Relaxing spa treatments to pamper your pets.",
      icon: "💆‍♀️",
    },
    {
      id: 6,
      title: "Training Classes",
      description: "Training sessions to teach your pets new skills.",
      icon: "🎓",
    },
    // ... other services
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow bg-blue-500 text-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                to={`/services/${service.id}`}
                key={service.id}
                className="focus:outline-none"
              >
                <div className="bg-yellow-300 p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:bg-yellow-400">
                  <span className="text-3xl mb-2">{service.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-center">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesSection;
