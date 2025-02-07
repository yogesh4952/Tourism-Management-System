import { useParams, Link } from 'react-router';
import { useEffect, useState } from 'react';
import { hotels, touristPlaces } from '../assets/assets'; // Ensure this path is correct
import MapComponent from '../components/MapComponent';
import HotelCard from '../components/HotelCard';

const DestinationDetailPage = () => {
  const { placeId } = useParams();
  const place = touristPlaces.find(
    (place) => place.id.toString() === placeId.toString()
  );
  const [coordinates, setCoordinates] = useState(null);
  const [nearbyHotels, setNearbyHotels] = useState([]);

  useEffect(() => {
    if (place) {
      // Fetch coordinates based on the place name
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${place.name}&format=json&addressdetails=1`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const { lat, lon } = data[0];
            setCoordinates({ latitude: lat, longitude: lon });
          }
        })
        .catch((error) => console.error('Error fetching coordinates:', error));

      // Filter hotels by matching location and sort:
      // 1. Premium hotels on top.
      // 2. Then by rating (descending).
      setNearbyHotels(() => {
        const filteredHotels = hotels.filter(
          (hotel) => hotel.location === place.location
        );
        filteredHotels.sort((a, b) => {
          // Premium hotels come first.
          if (a.isPremium && !b.isPremium) return -1;
          if (!a.isPremium && b.isPremium) return 1;
          // If both have the same premium status, sort by rating descending.
          return b.rating - a.rating;
        });
        return filteredHotels;
      });
    }
  }, [place]);

  if (!place) {
    return (
      <div className='text-center py-8'>
        <h2 className='text-xl font-bold'>Destination not found</h2>
        <Link to='/destination' className='mt-4 text-blue-500 underline'>
          Back to all destinations
        </Link>
      </div>
    );
  }

  return (
    <div className='p-4 md:p-8'>
      {/* Title and Location */}
      <h1 className='text-3xl font-extrabold'>{place.name}</h1>
      <p className='text-lg'>{place.location}</p>

      {/* Image Gallery */}
      <div className='mt-6'>
        <picture>
          <source srcSet={place.image} media='(max-width: 600px)' />
          <img
            src={place.image}
            alt={`Image of ${place.name}`}
            className='w-full h-96 object-cover rounded-lg shadow-xl'
          />
        </picture>
      </div>

      {/* Description */}
      <div
        dangerouslySetInnerHTML={{ __html: place.description }}
        className='description-container mt-6'
      ></div>

      {/* Nearby Attractions */}
      <div className='mt-6'>
        <h3 className='text-2xl font-semibold'>Nearby Attractions</h3>
        <div className='flex flex-wrap gap-3 mt-4'>
          {place.attractions.map((attraction, index) => (
            <span
              key={index}
              className='bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm'
            >
              {attraction}
            </span>
          ))}
        </div>
      </div>

      {/* Map Component */}
      <div className='mt-8'>
        {coordinates ? (
          <MapComponent
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
            placeName={place.name}
          />
        ) : (
          <p>Loading map...</p>
        )}
      </div>

      {/* Nearby Hotels */}
      <div className='mt-8'>
        <h3 className='text-2xl font-semibold'>Nearby Hotels</h3>
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {nearbyHotels.map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>
      </div>

      {/* Back to Destinations Button */}
      <div className='mt-6 text-center'>
        <Link
          to='/destination'
          className='btn btn-primary px-6 py-2 rounded-lg shadow-md'
        >
          Back to All Destinations
        </Link>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
