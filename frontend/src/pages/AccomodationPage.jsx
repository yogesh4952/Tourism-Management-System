import { MapPin } from "lucide-react";

export default function AccomodationPage() {
  return (
    <>
      

      {/* Luxury Accommodations Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Luxury Accommodations</h2>
        <p className="text-lg text-gray-600 mt-2">Experience unparalleled comfort in our carefully curated selection of rooms and suites</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
          {[
            { "image": "https://source.unsplash.com/400x300/?luxury,hotel", "title": "Deluxe Ocean Suite", "desc": "Breathtaking ocean views, private balcony, and luxurious amenities", "features": ["King Size Bed", "Free WiFi", "Ocean View", "Room Service"], "price": "$599" },
            { "image": "https://source.unsplash.com/400x300/?villa,mountain", "title": "Executive Mountain Villa", "desc": "Spacious villa with panoramic mountain views, private terrace, and premium facilities", "features": ["2 Bedrooms", "Private Pool", "Mountain View", "Butler Service"], "price": "$799" },
            { "image": "https://source.unsplash.com/400x300/?luxury,city", "title": "Presidential Suite", "desc": "Top-tier luxury with exclusive services and panoramic city views", "features": ["Private Lounge", "Personal Concierge", "Skyline View", "Gourmet Dining"], "price": "$999" }
          ].map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{room.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{room.desc}</p>
                <ul className="text-gray-700 mt-4 space-y-1 text-sm">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-yellow-600 font-bold mt-4 text-lg">{room.price} / night</p>
                <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md transition text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}