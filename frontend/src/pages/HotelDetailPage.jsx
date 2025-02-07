import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { hotels } from '../assets/assets';
import MapComponent from '../components/MapComponent';
import { useUser } from '@clerk/clerk-react';

const HotelDetailPage = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { hotelId } = useParams();
  const hotel = hotels.find((h) => h.id.toString() === hotelId);
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  if (!hotel) {
    return <div className='text-center py-6 text-xl font-semibold'>Hotel not found</div>;
  }

  useEffect(() => {
    if (hotel) {
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(hotel.location)}&format=json&addressdetails=1`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            setCoordinates({ latitude: lat, longitude: lon });
          }
        })
        .catch((error) => console.error('Error fetching coordinates:', error));
    }
  }, [hotel]);

  return (
    <div className='max-w-screen-lg mx-auto p-4 md:p-8'>
      {/* Hotel Name and Info */}
      <h1 className='text-3xl md:text-4xl font-bold mb-4'>{hotel.name}</h1>
      <p className='text-lg '>
        {hotel.location} | ⭐ {hotel.rating} | NPR {hotel.price}/night
      </p>

      {/* Hotel Image */}
      <div className='w-full h-80 md:h-[450px] overflow-hidden rounded-lg shadow-lg mt-6'>
        <img
          src={hotel.image}
          alt={hotel.name}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Hotel Details */}
      <div className='mt-6 space-y-6'>
        {/* Description */}
        <p
          className=' text-lg leading-relaxed'
          dangerouslySetInnerHTML={{ __html: hotel.description }}
        ></p>

        {/* Amenities */}
        <div>
          <h2 className='text-2xl font-semibold '>Amenities</h2>
          <ul className='list-disc pl-5  mt-3 grid grid-cols-2 md:grid-cols-3 gap-2'>
            {hotel.amenities.map((amenity, index) => (
              <li key={index} className='text-lg'>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Map Section */}
        {coordinates.latitude && coordinates.longitude ? (
          <div>
            <h2 className='text-2xl font-semibold mb-3'>Location</h2>
            <MapComponent
              latitude={coordinates.latitude}
              longitude={coordinates.longitude}
              placeName={hotel.name}
            />
          </div>
        ) : (
          <p className=''>Loading map...</p>
        )}
      </div>

      {/* Booking Button */}
      <div className='mt-8 flex justify-center w-[200px]'>
        <button className={`px-6 py-3  text-lg font-semibold rounded-lg btn btn-primary transition duration-300 w-full ${!isSignedIn ? 'cursor-not-allowed' : ''}`}

        onClick={() => navigate(`/payment/${hotel.id}`)}
        disabled={!isSignedIn}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelDetailPage;
