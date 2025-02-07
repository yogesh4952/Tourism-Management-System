const HotelCard = ({ hotel }) => {
  return (
    <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
      {/* Hotel Image */}
      <figure>
        <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
      </figure>

      <div className="card-body">
        {/* Hotel Name & Location */}
        <h2 className="card-title text-lg sm:text-xl">{hotel.name}</h2>
        <p className="text-sm text-gray-500">{hotel.location}</p>

        {/* Rating & Price */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1 text-yellow-500">
            ⭐ {hotel.rating} / 5
          </div>
          <div className="text-lg font-bold text-primary">${hotel.price} / night</div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-2">
          {hotel.amenities.map((amenity, index) => (
            <span key={index} className="badge badge-outline">{amenity}</span>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

// Example Usage
const hotelData = {
  name: "Luxury Stay Resort",
  location: "New York, USA",
  rating: 4.7,
  price: 120,
  amenities: ["Free WiFi", "Pool", "Gym", "Breakfast"],
  image: "https://source.unsplash.com/400x300/?hotel,resort"
};

export default function HotelPage() {
  return (
    <div className="flex justify-center p-4">
      <HotelCard hotel={hotelData} />
    </div>
  );
}
