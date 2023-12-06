import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header/Header2";
import "../../fonts/fonts.css"; // Import the fonts stylesheet

const ServiceCard = ({ href, imageSrc, alt, title }) => {
  return (
    <a
      href={href}
      className="home__service-card-icon-wrapper p-4 text-center"
      style={{
        width: "16.6667%",
        border: "1px solid #ccc",
        fontFamily: "YourChosenFont", // Replace YourChosenFont with the actual font name
      }}
    >
      <div className="home__image-wrapper">
        <img src={imageSrc} alt={alt} className="home__web-service-icon" />
        <span className="block mt-2 text-black font-bold">{title}</span>
      </div>
    </a>
  );
};

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  const sliderImages = [
    "https://img.freepik.com/free-vector/playful-animal-friends-with-cute-cartoon-dog-cat-mouse_1308-146661.jpg?w=1380&t=st=1701202309~exp=1701202909~hmac=d68cb9e41d1d31801a4d7317f6579917b8931db529a913e928be7fe6b7de3c69",
    "https://placekitten.com/1200/501",
    "https://placekitten.com/1200/502",
  ];

  const petServiceCards = [
    {
      title: "Pet Adoption Services",
      description:
        "Find your perfect furry companion through our pet adoption services.",
    },
    {
      title: "Pet Grooming Spa",
      description:
        "Treat your pets to a day of pampering and grooming at our spa.",
    },
    {
      title: "Pet Training Programs",
      description:
        "Enroll your pets in our training programs for a well-behaved furry friend.",
    },
    // ... (other service cards)
  ];

  const serviceCards = [
    {
      href: "/grooming",
      imageSrc:
        "//images.ctfassets.net/2t8dhn7s97w9/2MUMhgzefDsqLOHJudRv8I/bc928f944b24a5275c3b70f50678f0f1/Grooming_logo_image_only.svg",
      alt: "Grooming",
      title: "Grooming",
    },
    {
      href: "/petshotel",
      imageSrc:
        "//images.ctfassets.net/2t8dhn7s97w9/5IkqWF3VJQxHrEId1i1t7w/2a72175c9f7c8c0ca3a02dfe5a9be977/PH_logo._image_only.svg",
      alt: "PetsHotel",
      title: "PetsHotel",
    },
    {
      href: "/doggie-day-camp",
      imageSrc:
        "//images.ctfassets.net/2t8dhn7s97w9/6ShDQpeI8ZYBWtxKkz7Cw6/38c1fb419c1a42b4a3c51cdde911407f/DDC_logo_image_only.svg",
      alt: "Doggie Day Camp",
      title: "Doggie Day Camp",
    },
    {
      href: "/training",
      imageSrc:
        "//images.ctfassets.net/2t8dhn7s97w9/7Glal4yB2Ew7o7gUesqhld/71a9fe4fad9cf2407e7ed1318a3bc7dc/Training_logo_image_only.svg",
      alt: "Dog Training",
      title: "Dog Training",
    },
    {
      href: "https://www.petsmart.com/pet-services/petsmart-veterinary-care.html",
      imageSrc:
        "//images.ctfassets.net/2t8dhn7s97w9/4wmWXzaqPSNpqWzgGxXuzm/a049f32cbc72f6bce49293cacf58488f/Vet_logo_image_only.svg",
      alt: "Veterinary Care",
      title: "Veterinary Care",
    },
    {
      href: "https://www.petsmart.com/adoption/people-saving-pets/ca-adoption-landing.html",
      imageSrc:
        "//images.ctfassets.net/2t8dhn7s97w9/3AfpVrSKZWXJ1D8DbvRRu2/8ba7be920bc2e82337181c3c3631680f/0318_Adoption_Logo_MOBILE_v2-01.svg",
      alt: "Adoption",
      title: "Adoption",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Include the Header component */}
      <Header />

      <div className="container mx-auto text-center bg-gradient-to-r from-blue-900 to-blue-600 text-yellow-400 py-12">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to Our Pet Daycare Center
        </h1>
        <p className="text-lg">
          Providing top-notch care and love for your furry friends.
        </p>
        {/* Service Cards Section */}
        <div className="flex items-center justify-center h-72 my-8 bg-white pb-3">
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
        {/* Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-3 mt-8">
          {petServiceCards.map((card, index) => (
            <div
              key={index}
              className="bg-yellow-400 p-8 rounded-xl shadow-md"
              data-aos="fade-up"
            >
              <h2 className="text-2xl font-bold mb-2 text-blue-900">
                {card.title}
              </h2>
              <p className="text-gray-700">{card.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Slider Section */}
      <Slider {...sliderSettings} className="h-80" data-aos="fade-up">
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-fixed"
            />
          </div>
        ))}
      </Slider>

      {/* Additional Animated Cards Below Slider */}
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-3">
        {petServiceCards.map((card, index) => (
          <div
            key={index}
            className="bg-yellow-400 p-8 rounded-xl shadow-md"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-900">
              {card.title}
            </h2>
            <p className="text-gray-700">{card.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
