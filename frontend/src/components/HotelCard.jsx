const HotelCard = ({ hotel }) => {
  return (
    <div className='card w-full sm:w-96 bg-base-100 shadow-xl'>
      {/* Hotel Image */}
      <figure>
        <img
          src={hotel.image}
          alt={hotel.name}
          className='h-48 w-full object-cover'
        />
      </figure>

      <div className='card-body'>
        {/* Hotel Name & Location */}
        <h2 className='card-title text-lg sm:text-xl'>{hotel.name}</h2>
        <p className='text-sm text-base-content/70'>{hotel.location}</p>

        {/* Rating & Price */}
        <div className='flex justify-between items-center mt-2'>
          <div className='flex items-center gap-1'>⭐ {hotel.rating} / 5</div>
          <div className='text-lg font-bold'>Rs. {hotel.price} / night</div>
        </div>

        {/* Amenities */}
        <div className='flex flex-wrap gap-2 mt-2'>
          {hotel.amenities.map((amenity, index) => (
            <span key={index} className='badge badge-primary'>
              {amenity}
            </span>
          ))}
        </div>

        {/* Book Now Button */}
        <div className='card-actions justify-end mt-4'>
          <button className='btn btn-primary'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
