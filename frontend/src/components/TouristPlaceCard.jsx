import { useNavigate } from 'react-router-dom';

const TouristPlaceCard = ({ place }) => {
  const navigate = useNavigate();

  // Function to truncate the description
  const truncateDescription = (description, length = 150) => {
    const text = description.replace(/<[^>]*>/g, ''); // Strip HTML tags
    return text.length > length ? `${text.slice(0, length)}...` : text;
  };

  return (
    <div className='card w-full sm:w-96 bg-base-100 shadow-xl overflow-hidden'>
      {/* Place Image with Hover Effect */}
      <div className='relative group'>
        <figure className='overflow-hidden'>
          <img
            src={place.image}
            alt={`Image of ${place.name}`}
            className='h-48 w-full object-cover rounded-t-lg transform transition-transform duration-300 group-hover:scale-110'
          />
        </figure>
        {/* Overlay effect on hover */}
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
      </div>

      <div className='card-body'>
        {/* Place Name & Location */}
        <h2 className='card-title text-lg sm:text-xl font-semibold'>
          {place.name}
        </h2>
        <p className='text-sm text-base-content/70'>{place.location}</p>

        {/* Truncated Description */}
        <div className='text-sm text-base-content/50'>
          {place.description ? (
            <p>{truncateDescription(place.description, 150)}</p>
          ) : (
            <p>No description available</p>
          )}
        </div>

        {/* Attractions */}
        <div className='flex flex-wrap gap-2 mt-2'>
          {place.attractions.map((attraction, index) => (
            <span key={index} className='badge badge-primary text-sm'>
              {attraction}
            </span>
          ))}
        </div>

        {/* Explore Button */}
        <div className='card-actions justify-end mt-4'>
          <button
            className='btn btn-primary w-full'
            onClick={() => navigate(`/destination-detail/${place.id}`)}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristPlaceCard;
