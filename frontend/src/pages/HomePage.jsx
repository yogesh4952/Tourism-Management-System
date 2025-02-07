'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react'; // Importing the MapPin icon
import { NavLink } from 'react-router-dom';
import { touristPlaces } from '../assets/assets';
import TouristPlaceCard from '../components/TouristPlaceCard';
import TestimonialSlider from './TestimonalPage';
import Button from '../components/Button';

import WhyChooseUsPage from "./WhyChooseUsPage";



const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false); // Define state for mobile menu toggle

  const popularDestinations = touristPlaces.filter((place) => place.id < 7);

  console.log(popularDestinations, 'popularDestinations');

  return (
    <>
      <div className='bg-base-200 text-base-content font-sans'>
        {/* Hero Section */}
        <div className='relative h-screen flex items-center justify-center bg-base-300'>
          <img
            src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            alt='Hero Background'
            className='absolute inset-0 w-full h-full object-cover opacity-95'
          />
          <div className='text-center relative z-10'>
            <h1 className='text-5xl font-bold mb-4'>
              Explore the World with Us
            </h1>
            <p className='text-xl mb-8'>
              Your journey begins here. Discover the best in tourism and
              hospitality.
            </p>
            <NavLink to='/destination'>

              <Button />

            </NavLink>
          </div>
        </div>



        <div>
          <WhyChooseUsPage />
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
            {popularDestinations.map((place) => {
              return <TouristPlaceCard key={place.id} place={place} />;
            })}
          </div>

          <NavLink to='/destination'>
            <button className='btn btn-primary mt-8 px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-700'>
              View All Destinations
            </button>
          </NavLink>
        </section>

        <div className='py-16 bg-base-200 text-center'>
          <TestimonialSlider />
        </div>
      </div>
      {/* why choose us  */}



      {/* Popular Destinations Section */}
      {/* <section className='py-16 bg-base-100 text-center'>
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
      </section> */}
    </>
  );
};

export default HomePage;
