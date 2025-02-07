// import { useState } from "react";
// import { Star } from "lucide-react";
// import jhon from '../Images/person1.jpg';
// import emily from '../Images/person2.jpg';
// import carlos from '../Images/person3.jpg';
// import sophia from '../Images/person4.jpg';
// import David from '../Images/person5.jpg';
// import sumit from '../Images/5.jpg';

// const guides = [
//   { id: 1, name: "John Smith", expertise: "Adventure", location: "Alaska", image: jhon, category: "Adventure", rating: 4.5 },
//   { id: 2, name: "Emily Davis", expertise: "Cultural Tours", location: "Japan", image: emily, category: "Culture", rating: 4.8 },
//   { id: 3, name: "Carlos Mendoza", expertise: "Wildlife", location: "Amazon", image: carlos, category: "Wildlife", rating: 4.7 },
//   { id: 4, name: "Sophia Lee", expertise: "Luxury Travel", location: "France", image: sophia, category: "Luxury", rating: 4.9 },
//   { id: 5, name: "David Brown", expertise: "Hiking", location: "Nepal", image: David, category: "Adventure", rating: 4.6 },
//   { id: 6, name: "Sumit", expertise: "Hiking", location: "Nepal", image: sumit, category: "Adventure", rating: 4.3 },
// ];

// const GuidePage = () => {
//   const [filter, setFilter] = useState("All");

//   const filteredGuides = filter === "All" ? guides : guides.filter(guide => guide.category === filter);

//   return (
//     <section className="bg-gray-900 text-white py-12 px-6">
//       <h2 className="text-3xl font-bold text-center mb-6">Meet Our Expert Guides</h2>

//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 mb-8">
//         {["All", "Adventure", "Culture", "Wildlife", "Luxury"].map((category) => (
//           <button
//             key={category}
//             onClick={() => setFilter(category)}
//             className={`px-4 py-2 rounded-full border transition ${
//               filter === category ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Guide List */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {filteredGuides.map((guide) => (
//           <div
//             key={guide.id}
//             className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-2xl"
//           >
//             {/* Guide Image */}
//             <img src={guide.image} alt={guide.name} className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700" />
            
//             {/* Guide Details */}
//             <h3 className="text-xl font-semibold mt-4">{guide.name}</h3>
//             <p className="text-lg mt-1 opacity-75">{guide.expertise} Guide</p>
//             <p className="text-sm opacity-50">{guide.location}</p>

//             {/* Rating System */}
//             <div className="flex justify-center items-center gap-1 mt-3">
//               {[...Array(5)].map((_, index) => (
//                 <Star
//                   key={index}
//                   size={18}
//                   className={index < Math.round(guide.rating) ? "text-yellow-400" : "text-gray-500"}
//                   fill={index < Math.round(guide.rating) ? "currentColor" : "none"}
//                 />
//               ))}
//               <span className="text-sm text-gray-300 ml-1">({guide.rating})</span>
//               <button className="btn btn-primary">HireME</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GuidePage;
import { useState } from "react";
import { User, Briefcase, MapPin, Languages, DollarSign, PhoneCall, Mail, Filter } from "lucide-react";
import jhon from '../Images/person1.jpg';
 import emily from '../Images/person2.jpg';
 import carlos from '../Images/person3.jpg';
 import sophia from '../Images/person4.jpg';
 import David from '../Images/person5.jpg';
  import sumit from '../Images/5.jpg';

const guides = [
  {
    id: 1,
    name: "John Smith",
    expertise: "Adventure",
    experience: "10+ years",
    location: "Alaska",
    languages: "English, Spanish",
    price: "$150/day",
    contact: "+1 555-123-4567",
    email: "john.adventure@example.com",
    image: jhon,
    category: "Adventure",
  },
  {
    id: 2,
    name: "Emily Davis",
    expertise: "Cultural Tours",
    experience: "8 years",
    location: "Japan",
    languages: "English, Japanese",
    price: "$180/day",
    contact: "+81 555-234-5678",
    email: "emily.culture@example.com",
    image: sumit,
    category: "Culture",
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    expertise: "Wildlife",
    experience: "12 years",
    location: "Amazon",
    languages: "Portuguese, Spanish",
    price: "$200/day",
    contact: "+55 555-345-6789",
    email: "carlos.wildlife@example.com",
    image: David,
    category: "Wildlife",
  },
  {
    id: 4,
    name: "Sophia lama",
    expertise: "Luxury Travel",
    experience: "15 years",
    location: "France",
    languages: "French, English",
    price: "$250/day",
    contact: "+33 555-456-7890",
    email: "sophia.luxury@example.com",
    image: sophia,
    category: "Luxury",
  },
  {
    id: 5,
    name: "Ramesh Sharma",
    expertise: "Hiking",
    experience: "9 years",
    location: "Nepal",
    languages: "English, Hindi",
    price: "$120/day",
    contact: "+977 555-567-8901",
    email: "david.hiking@example.com",
    image: carlos,
    category: "Adventure",
  },
  {
    id: 5,
    name: "Sangam shrestha",
    expertise: "Hiking",
    experience: "9 years",
    location: "Nepal",
    languages: "English, Hindi",
    price: "$120/day",
    contact: "+977 555-567-8901",
    email: "david.hiking@example.com",
    image: sumit,
    category: "Adventure",
  },
];

const categories = ["All", "Adventure", "Culture", "Wildlife", "Luxury"];

const GuidePage = () => {
  const [filter, setFilter] = useState("All");

  const filteredGuides = filter === "All" ? guides : guides.filter((guide) => guide.category === filter);

  return (
    <section className="bg-gray-900 text-white py-12 px-6">
     
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full border transition text-sm font-semibold flex items-center gap-2 ${
              filter === category ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Filter size={16} /> {category}
          </button>
        ))}
      </div>

      {/* Guide List */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Guide Image */}
            <img src={guide.image} alt={guide.name} className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700" />

            {/* Guide Info */}
            <h3 className="text-xl font-semibold mt-4 flex items-center justify-center gap-2">
              <User size={20} /> {guide.name}
            </h3>

            <p className="text-lg mt-1 flex items-center justify-center gap-2 opacity-75">
              <Briefcase size={18} /> {guide.expertise} Guide
            </p>

            <p className="text-sm flex items-center justify-center gap-2 opacity-50">
              <MapPin size={18} /> {guide.location}
            </p>

            <p className="text-sm flex items-center justify-center gap-2 mt-1">
              <Languages size={18} /> {guide.languages}
            </p>

            <p className="text-sm flex items-center justify-center gap-2 mt-1">
              <Briefcase size={18} /> {guide.experience} Experience
            </p>

            <p className="text-lg font-semibold flex items-center justify-center gap-2 text-green-400 mt-2">
              <DollarSign size={18} /> {guide.price}
            </p>

            {/* Contact Buttons */}
            <div className="mt-4 flex justify-center gap-4">
              <a
                href={`tel:${guide.contact}`}
                className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
              >
                <PhoneCall size={16} /> Call
              </a>
              <a
                href={`mailto:${guide.email}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuidePage;
