import { useNavigate } from 'react-router';

const TouristPlaceCard = ({ place }) => {
  const navigate = useNavigate();

  // Function to truncate the description
  const truncateDescription = (description, length = 150) => {
    const text = description.replace(/<[^>]*>/g, ''); // Strip HTML tags
    return text.length > length ? `${text.slice(0, length)}...` : text;
  };

  return (
    <div className='card w-full sm:w-96 bg-base-100 shadow-xl'>
      {/* Place Image */}
      <figure>
        <img
          src={place.image}
          alt={place.name}
          className='h-48 w-full object-cover rounded-t-lg'
        />
      </figure>

      <div className='card-body'>
        {/* Place Name & Location */}
        <h2 className='card-title text-lg sm:text-xl font-semibold'>
          {place.name}
        </h2>
        <p className='text-sm text-gray-500'>{place.location}</p>

        {/* Truncated Description */}
        <div className='text-sm text-gray-700'>
          {place.description ? (
            <p>{truncateDescription(place.description, 150)}</p>
          ) : (
            <p>No description available</p>
          )}
        </div>

        {/* Attractions */}
        <div className='flex flex-wrap gap-2 mt-2'>
          {place.attractions.map((attraction, index) => (
            <span key={index} className='badge badge-outline px-2 py-1 text-sm'>
              {attraction}
            </span>
          ))}
        </div>

        {/* Explore Button */}
        <div className='card-actions justify-end mt-4'>
          <button
            className='btn bg-green-500 w-full'
            onClick={() => navigate(`/destination-detail/${place.name}`)}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristPlaceCard;
