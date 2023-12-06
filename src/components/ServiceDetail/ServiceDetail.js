import React from "react";
import { useParams, Link } from "react-router-dom";

const serviceDetails = {
  1: {
    title: "Dog Boarding",
    description:
      "Safe and comfortable boarding for your dogs. We provide spacious indoor and outdoor play areas, plenty of love and attention, and a structured routine to keep your furry friend happy and healthy while you're away.",
    icon: "🐾",
    benefits: [
      "Relax in a safe and supervised environment",
      "Enjoy plenty of space to play and socialize",
      "Receive personalized care and attention",
      "Maintain a regular routine",
      "Reduce stress and anxiety from separation",
    ],
  },
  2: {
    title: "Pet Grooming",
    description:
      "Professional grooming services for your pets. Our experienced groomers will pamper your furry friend with a full-body wash, brush-out, nail trimming, and ear cleaning, leaving them looking and feeling their best.",
    icon: "✂️",
    benefits: [
      "Maintain a healthy and clean coat",
      "Prevent skin irritations and infections",
      "Reduce shedding and matting",
      "Enhance your pet's overall appearance",
      "Promote bonding and trust with your pet",
    ],
  },
  3: {
    title: "Dog Walking",
    description:
      "Regular exercise and walks for your furry friends. Our experienced dog walkers will take your dog for a brisk walk in your neighborhood or a nearby park, ensuring they get the daily exercise they need to stay healthy and happy.",
    icon: "🚶‍♂️",
    benefits: [
      "Improve physical fitness and prevent obesity",
      "Stimulate their minds and reduce boredom",
      "Socialize with other dogs and humans",
      "Relieve stress and anxiety",
      "Strengthen the bond between you and your dog",
    ],
  },
  4: {
    title: "Veterinary Care",
    description:
      "24/7 on-site veterinary support for your pets. Our experienced veterinarians provide comprehensive care for your pet, from routine checkups and vaccinations to diagnosing and treating illnesses and injuries.",
    icon: "👨‍⚕️",
    benefits: [
      "Preventative care to maintain good health",
      "Early detection and treatment of illnesses",
      "Pain management and injury treatment",
      "Surgical procedures and dental care",
      "Peace of mind knowing your pet is in good hands",
    ],
  },
  5: {
    title: "Pet Spa",
    description:
      "Relaxing spa treatments to pamper your pets. Our experienced spa technicians will provide your furry friend with a variety of pampering treatments, including a soothing bath, massage, and even facial.",
    icon: "💆‍♀️",
    benefits: [
      "Reduce stress and anxiety",
      "Relieve muscle aches and pains",
      "Improve skin and coat health",
      "Promote relaxation and well-being",
      "Enhance the bond between you and your pet",
    ],
  },
  6: {
    title: "Training Classes",
    description:
      "Training sessions to teach your pets new skills. Our experienced trainers will teach you how to effectively communicate with your pet and train them to follow basic commands, improve manners, and overcome behavioral issues.",
    icon: "🎓",
    benefits: [
      "Strengthen communication and obedience",
      "Improve manners and reduce behavioral problems",
      "Enhance your pet's trainability and intelligence",
      "Prevent unwanted behaviors and accidents",
      "Create a more harmonious relationship with your pet",
    ],
  },
  // Add details for other services
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  return (
    <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
      {service ? (
        <div className="bg-blue-300 p-6 rounded-lg shadow-lg max-w-lg   ">
          <span className="text-5xl text-blue-500 mb-4">{service.icon}</span>
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-gray-700">{service.description}</p>
          <ul className="mt-4 list-disc pl-6">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">
                {benefit}
              </li>
            ))}
          </ul>
          <Link to={`/booking`}>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-red-500 font-bold mt-4">Service not found</p>
      )}
    </div>
  );
};

export default ServiceDetail;
