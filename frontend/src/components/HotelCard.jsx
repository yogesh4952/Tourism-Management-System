import { useNavigate } from 'react-router';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { useUser, SignIn } from '@clerk/clerk-react';

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  return (
    <div className='card w-full sm:w-96 bg-base-100 shadow-xl overflow-hidden'>
      {/* Hotel Image with Hover Effect */}
      <div className='relative group'>
        <figure className='overflow-hidden'>
          <img
            src={hotel.image}
            alt={hotel.name}
            className='h-48 w-full object-cover rounded-t-lg transform transition-transform duration-300 group-hover:scale-110'
          />
        </figure>
        {/* Overlay effect on hover */}
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
      </div>

      <div className='card-body'>
        {/* Hotel Name & Location */}
        <h2 className='card-title text-lg sm:text-xl font-semibold'>
          {hotel.name}
        </h2>
        <p className='text-sm text-base-content/70'>{hotel.location}</p>

        {/* Rating & Price */}
        <div className='flex justify-between items-center mt-2'>
          <div className='flex items-center gap-1 text-yellow-500'>
            <FaStar />
            {hotel.rating} / 5
          </div>
          <div className='text-lg font-bold'>Rs. {hotel.price} / night</div>
        </div>

        {/* Amenities with Icons */}
        <div className='flex flex-wrap gap-2 mt-2'>
          {hotel.amenities.map((amenity, index) => (
            <span
              key={index}
              className='badge badge-primary flex items-center gap-1'
            >
              <FaCheckCircle /> {amenity}
            </span>
          ))}
        </div>

        {/* Book Now Button */}
        <div
          className='card-actions justify-center mt-4 flex gap-4 items-center
        '
        >
          <button
            className='btn btn-primary'
            onClick={() => navigate(`/hotel/${hotel.id}`)}
          >
            Detail
          </button>
          <button
            className={`btn btn-primary ${!isSignedIn && 'cursor-not-allowed'}`}
            onClick={() => {
              navigate(`/payment/${hotel.id}`);
              SignIn();
            }}
            disabled={!isSignedIn}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
