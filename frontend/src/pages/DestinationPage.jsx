import { useEffect, useState } from 'react';
import { touristPlaces } from '../assets/assets';
import TouristPlaceCard from '../components/TouristPlaceCard';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import Loader from '../components/Loader';

const DestinationPage = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showFilters, setShowFilters] = useState(false); // State for toggling filters
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  // Extract unique locations from tourist places
  const locations = [...new Set(touristPlaces.map((place) => place.location))];

  // Handle location filter changes
  const handleLocationChange = (location) => {
    setSelectedLocations((prev) => {
      if (prev.includes(location)) {
        return prev.filter((loc) => loc !== location);
      } else {
        return [...prev, location];
      }
    });
  };

  // Handle search keyword change
  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value.toLowerCase());
  };

  // Filter tourist places based on selected locations and search keyword
  const filteredPlaces = touristPlaces.filter((place) => {
    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(place.location);
    const matchesKeyword =
      place.name.toLowerCase().includes(searchKeyword) ||
      place.description.toLowerCase().includes(searchKeyword);
    return matchesLocation && matchesKeyword;
  });

  return (
    <div className='mt-10 px-4 mb-10'>
      <div className='flex flex-col xl:flex-row gap-6'>
        {/* Left Side: Filters */}
        <div className='w-full xl:w-1/4 bg-base-200 p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
            <FaSearch className='text-primary' /> Filters
          </h2>

          {/* Search Bar */}
          <div className='mb-6 relative'>
            <FaSearch className='absolute left-3 top-3 text-gray-500' />
            <input
              type='text'
              value={searchKeyword}
              onChange={handleSearchChange}
              placeholder='Search by name or description'
              className='w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            />
          </div>

          {/* Display selected locations above filter button */}
          {selectedLocations.length > 0 && (
            <div className='mb-4 bg-gray-100 p-2 rounded-lg text-sm text-gray-700'>
              <strong>Selected Locations: </strong>
              {selectedLocations.join(', ')}
            </div>
          )}

          {/* Toggle Button for Location Filter (Mobile View) */}
          <button
            className='w-full flex items-center justify-between p-2 bg-primary text-white rounded-lg xl:hidden'
            onClick={() => setShowFilters(!showFilters)}
          >
            <span>Filter by Location</span>
            <FaMapMarkerAlt />
          </button>

          {/* Location Filter (Hidden on mobile unless toggled) */}
          <div
            className={`space-y-4 mt-4 ${
              showFilters ? 'block' : 'hidden'
            } xl:block`}
          >
            <h3 className='font-semibold mb-2 flex items-center gap-2'>
              <FaMapMarkerAlt className='text-primary' /> Locations
            </h3>
            {locations.map((location, index) => (
              <label key={index} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  value={location}
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleLocationChange(location)}
                  className='h-4 w-4 checked:bg-primary focus:ring-2 focus:ring-primary'
                />
                <span>{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Right Side: Tourist Place Cards */}
        <div className='flex-1 flex flex-col gap-6 items-center'>
          <h1 className='text-2xl font-bold mb-6'>Top Tourist Places</h1>

          {loading ? (
            <div className='flex justify-center items-center w-full min-h-[300px]'>
              <Loader />
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-24'>
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map((place, index) => (
                  <TouristPlaceCard key={index} place={place} />
                ))
              ) : (
                <p className='text-center text-gray-500'>No places found.</p>
              )}
            </div>
          )}

          {/* Display filtered tourist places */}
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
