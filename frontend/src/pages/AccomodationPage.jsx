import React, { useEffect, useState } from 'react';
import HotelCard from '../components/HotelCard';
import { hotels } from '../assets/assets';
import Loader from '../components/Loader';

const AccommodationPage = () => {
  const [filters, setFilters] = useState({
    locations: [],
    priceRange: [0, 50000],
    minRating: 0,
  });

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const normalizeString = (str) => str.trim().toLowerCase();

  const filteredHotels = hotels.filter((hotel) => {
    const priceCondition =
      hotel.price >= filters.priceRange[0] &&
      hotel.price <= filters.priceRange[1];
    const ratingCondition = hotel.rating >= filters.minRating;
    const locationCondition =
      filters.locations.length === 0 ||
      filters.locations.some((loc) =>
        normalizeString(hotel.location).includes(normalizeString(loc))
      );

    return priceCondition && ratingCondition && locationCondition;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedHotels = filteredHotels.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const toggleLocation = (location) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter((loc) => loc !== location)
      : [...filters.locations, location];
    handleFilterChange({ ...filters, locations: newLocations });
  };

  return (
    <div className='max-w-7xl mx-auto py-6 px-4'>
      <div className='flex space-x-6 gap-20'>
        {/* Filters Section */}
        <div className='space-y-6'>
          <h2 className='text-xl font-semibold'>Filters</h2>

          {/* Location Filter */}
          <div>
            <h3 className='font-medium text-lg'>Location</h3>
            <div className='space-y-2'>
              {[
                'Province No. 1',
                'Madhesh Province',
                'Bagmati Province',
                'Gandaki Province',
                'Lumbini Province',
                'Karnali Province',
                'Sudurpashchim Province',
              ].map((location) => (
                <div key={location} className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    id={location}
                    onChange={() => toggleLocation(location)}
                    checked={filters.locations.includes(location)}
                    className='w-4 h-4'
                  />
                  <label htmlFor={location} className='text-sm'>
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className='font-medium text-lg'>Price Range</h3>
            <input
              type='range'
              min='0'
              max='50000'
              value={filters.priceRange[1]}
              onChange={(e) =>
                handleFilterChange({
                  ...filters,
                  priceRange: [filters.priceRange[0], e.target.value],
                })
              }
              step='1000'
              className='w-full'
            />
            <span className='text-sm'>{filters.priceRange[1]}</span>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className='font-medium text-lg'>Min Rating</h3>
            <select
              onChange={(e) =>
                handleFilterChange({
                  ...filters,
                  minRating: parseFloat(e.target.value),
                })
              }
              value={filters.minRating}
              className='w-full p-2 border rounded-md bg-gray-700'
            >
              <option value='0'>All Ratings</option>
              <option value='4.0'>4.0+</option>
              <option value='4.5'>4.5+</option>
              <option value='5.0'>5.0</option>
            </select>
          </div>
        </div>

        {/* Hotels List */}
        {loading ? (
          <div className='flex justify-center items-center w-full min-h-[300px]'>
            <Loader />
          </div>
        ) : (
          <div className='flex-1'>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10'>
              {paginatedHotels.length > 0 ? (
                paginatedHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))
              ) : (
                <div className='col-span-2 text-center text-gray-500'>
                  No hotels found matching your criteria
                </div>
              )}
            </div>

            {/* Pagination - Only show when results exist */}
            {paginatedHotels.length > 0 && (
              <div className='flex justify-center mt-6 space-x-4'>
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className='px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300'
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className='px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300'
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccommodationPage;
