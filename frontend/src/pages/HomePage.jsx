
'use client';

import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react"; // Importing the Menu and X icons
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false); // Define state for mobile menu toggle
  
  const destinations = [
    {
      image: "https://via.placeholder.com/600x400?text=Mountain+Retreat",
      title: "Mountain Retreat",
      location: "Chitwan",
      price: "$299"
    },
    {
      image: "https://via.placeholder.com/600x400?text=Beach+Resort",
      title: "Beach Resort",
      location: "Kathmandu",
      price: "$399"
    },
    {
      image: "https://via.placeholder.com/600x400?text=City+Escape",
      title: "City Escape",
      location: "Solukhumbu",
      price: "$259"
    }
  ];

  return (
    <>
     

     <div className="bg-gray-100 text-gray-800 font-sans">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="text-center z-10">
            <h1 className="text-5xl font-bold text-white mb-4">
              Explore the World with Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your journey begins here. Discover the best in tourism and hospitality.
            </p>
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Popular Destinations</h2>
        <p className="text-lg text-gray-600 mt-2">Explore our most beloved locations</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{destination.title}</h3>
                <p className="text-gray-600 flex items-center gap-2 mt-2">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  {destination.location}
                </p>
                <p className="text-xl font-bold text-yellow-600 mt-4">From {destination.price} / night</p>
                <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
