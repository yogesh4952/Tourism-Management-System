
import { MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/tourism-1.jpg')" }}>
        <div className="absolute inset-0 bg-grey bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold">Experience Luxury & Comfort</h1>
          <p className="mt-4 text-lg md:text-2xl">Discover our handpicked collection of luxury hotels and resorts.</p>
          <div className="gap-4 mt-8 flex justify-center">
          <input type="text" className="mt-5 w-1/2 md:w-1/3 px-3 py-2 rounded-lg shadow-md focus:outline-none" placeholder="Enter your destination" />

        <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-lg transition">
          Explore Now
       </button>
          </div>
     

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mt-2">We provide exceptional service and unforgettable experiences</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16">
          {[{"icon": MapPin, "title": "Prime Locations", "desc": "Situated in the most sought-after destinations worldwide"},
            {"icon": MapPin, "title": "5-Star Service", "desc": "Exceptional service that exceeds expectations"},
            {"icon": MapPin, "title": "Expert Staff", "desc": "Dedicated team of hospitality professionals"},
            {"icon": MapPin, "title": "Easy Booking", "desc": "Simple and secure reservation process"}
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <item.icon className="text-yellow-500 w-12 h-12" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900">Popular Destinations</h2>
        <p className="text-lg text-gray-600 mt-2">Explore our most beloved locations</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
          {[{"image": "/images/mountain.jpg", "title": "Mountain Retreat", "location": "Chitwan", "price": "$299"},
            {"image": "/images/beach.jpg", "title": "Beach Resort", "location": "Kathmandu", "price": "$399"},
            {"image": "/images/city.jpg", "title": "City Escape", "location": "Solukhumbu", "price": "$259"}
          ].map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={destination.image} alt={destination.title} className="w-full h-64 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">{destination.title}</h3>
                <p className="text-gray-600 flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-500" /> {destination.location}</p>
                <p className="text-yellow-600 font-bold mt-2">From {destination.price} / night</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
