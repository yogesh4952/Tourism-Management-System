'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react'; // Importing the MapPin icon
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false); // Define state for mobile menu toggle

  const destinations = [
    {
      image: 'https://via.placeholder.com/600x400?text=Mountain+Retreat',
      title: 'Mountain Retreat',
      location: 'Chitwan',
      price: '$299',
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Beach+Resort',
      title: 'Beach Resort',
      location: 'Kathmandu',
      price: '$399',
    },
    {
      image: 'https://via.placeholder.com/600x400?text=City+Escape',
      title: 'City Escape',
      location: 'Solukhumbu',
      price: '$259',
    },
  ];

  return (
    <>
      <div className='bg-base-200 text-base-content font-sans'>
        {/* Hero Section */}
        <div className='relative h-screen flex items-center justify-center bg-base-300'>
          <img
            src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            alt='Hero Background'
            className='absolute inset-0 w-full h-full object-cover opacity-50'
          />
          <div className='text-center z-10'>
            <h1 className='text-5xl font-bold text-white mb-4'>
              Explore the World with Us
            </h1>
            <p className='text-xl text-base-100 mb-8'>
              Your journey begins here. Discover the best in tourism and
              hospitality.
            </p>
            <NavLink to='/explore'>
              <button className='btn btn-primary px-6 py-3 rounded-lg transition duration-300'>
                Explore
              </button>
            </NavLink>
          </div>
        </div>

        {/* Popular Destinations Section */}
        <section className='py-16 bg-base-100 text-center'>
          <h2 className='text-4xl font-extrabold text-base-content'>
            Popular Destinations
          </h2>
          <p className='text-lg text-base-content/70 mt-2'>
            Explore our most beloved locations
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16'>
            {destinations.map((destination, index) => (
              <div
                key={index}
                className='card bg-white shadow-xl hover:scale-105 transform transition duration-300 ease-in-out'
              >
                <figure>
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className='w-full h-64 object-cover rounded-t-lg'
                  />
                </figure>
                <div className='card-body'>
                  <h3 className='text-2xl font-semibold text-base-content'>
                    {destination.title}
                  </h3>
                  <p className='text-base-content flex items-center gap-2 mt-2'>
                    <MapPin className='w-5 h-5 text-yellow-500' />
                    {destination.location}
                  </p>
                  <p className='text-xl font-bold text-yellow-600 mt-4'>
                    From {destination.price} / night
                  </p>
                  <NavLink to='/booking'>
                    <button className='btn btn-yellow w-full mt-4'>
                      Book Now
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
