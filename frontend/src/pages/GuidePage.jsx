import { useState } from 'react';
import {
  User,
  Briefcase,
  MapPin,
  Languages,
  DollarSign,
  PhoneCall,
  Mail,
  Filter,
} from 'lucide-react';
import sangam from '../Images/person1.jpg';
import bikash from '../Images/person2.jpg';
import ram from '../Images/person3.jpg';
import sita from '../Images/person4.jpg';
import kiran from '../Images/person5.jpg';
import pema from '../Images/5.jpg';

const guides = [
  {
    id: 1,
    name: 'Ram Thapa',
    expertise: 'Trekking & Adventure',
    experience: '12 years',
    location: 'Everest Region',
    languages: 'Nepali, English',
    price: 'Rs. 5000/day',
    contact: '+977 9801234567',
    email: 'ram.trekking@example.com',
    image: ram,
    category: 'Adventure',
  },
  {
    id: 2,
    name: 'Sita Gurung',
    expertise: 'Cultural & Heritage Tours',
    experience: '10 years',
    location: 'Kathmandu Valley',
    languages: 'Nepali, English, Newari',
    price: 'Rs. 3000/day',
    contact: '+977 9812345678',
    email: 'sita.culture@example.com',
    image: sita,
    category: 'Culture',
  },
  {
    id: 3,
    name: 'Kiran Lama',
    expertise: 'Wildlife & Nature',
    experience: '8 years',
    location: 'Chitwan National Park',
    languages: 'Nepali, English',
    price: 'Rs. 4000/day',
    contact: '+977 9823456789',
    email: 'kiran.wildlife@example.com',
    image: kiran,
    category: 'Wildlife',
  },
  {
    id: 4,
    name: 'Pema Sherpa',
    expertise: 'Luxury & Helicopter Tours',
    experience: '15 years',
    location: 'Everest Base Camp',
    languages: 'Nepali, English, Tibetan',
    price: 'Rs. 15000/day',
    contact: '+977 9845678901',
    email: 'pema.luxury@example.com',
    image: pema,
    category: 'Luxury',
  },
  {
    id: 5,
    name: 'Bikash Tamang',
    expertise: 'Hiking & Offbeat Trails',
    experience: '7 years',
    location: 'Langtang Region',
    languages: 'Nepali, English, Tamang',
    price: 'Rs. 3500/day',
    contact: '+977 9856789012',
    email: 'bikash.hiking@example.com',
    image: bikash,
    category: 'Adventure',
  },
  {
    id: 6,
    name: 'Sangam Shrestha',
    expertise: 'Hiking & Trekking',
    experience: '9 years',
    location: 'Annapurna Circuit',
    languages: 'Nepali, English',
    price: 'Rs. 4500/day',
    contact: '+977 9867890123',
    email: 'sangam.hiking@example.com',
    image: sangam,
    category: 'Adventure',
  },
];

const categories = ['All', 'Adventure', 'Culture', 'Wildlife', 'Luxury'];
const locations = [
  'All',
  'Everest Region',
  'Kathmandu Valley',
  'Chitwan National Park',
  'Langtang Region',
  'Annapurna Circuit',
];

const GuidePage = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');

  const filteredGuides = guides.filter((guide) => {
    return (
      (filterCategory === 'All' || guide.category === filterCategory) &&
      (filterLocation === 'All' || guide.location === filterLocation)
    );
  });

  return (
    <section className='py-12 px-6'>
      <h2 className='text-3xl font-bold text-center mb-8'>
        Meet Our Expert Guides
      </h2>

      {/* Filter Buttons */}
      <div className='flex justify-center gap-4 mb-8 flex-wrap'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`px-5 py-2 rounded-full border transition text-sm font-semibold flex items-center gap-2 
              `}
          >
            <Filter size={16} /> {category}
          </button>
        ))}
      </div>

      {/* Location Filter */}
      <div className='flex justify-center gap-4 mb-8 flex-wrap'>
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => setFilterLocation(location)}
            className={`px-5 py-2 rounded-full border transition text-sm font-semibold flex items-center gap-2 `}
          >
            <MapPin size={16} /> {location}
          </button>
        ))}
      </div>

      {/* Guide List */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            className=' p-6 rounded-2xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-2xl'
          >
            {/* Guide Image */}
            <img
              src={guide.image}
              alt={guide.name}
              className='w-24 h-24 mx-auto rounded-full border-4 '
            />

            {/* Guide Info */}
            <h3 className='text-xl font-semibold mt-4 flex items-center justify-center gap-2'>
              <User size={20} /> {guide.name}
            </h3>

            <p className='text-lg mt-1 flex items-center justify-center gap-2 opacity-75'>
              <Briefcase size={18} /> {guide.expertise} Guide
            </p>

            <p className='text-sm flex items-center justify-center gap-2 opacity-50'>
              <MapPin size={18} /> {guide.location}
            </p>

            <p className='text-sm flex items-center justify-center gap-2 mt-1'>
              <Languages size={18} /> {guide.languages}
            </p>

            <p className='text-sm flex items-center justify-center gap-2 mt-1'>
              <Briefcase size={18} /> {guide.experience} Experience
            </p>

            <p className='text-lg font-semibold flex items-center justify-center gap-2  mt-2'>
              {guide.price}
            </p>

            {/* Contact Buttons */}
            <div className='mt-4 flex justify-center gap-4'>
              <a
                href={`tel:${guide.contact}`}
                className='btn btn-outline btn-primary px-4 py-2 rounded-lg flex items-center gap-2 '
              >
                <PhoneCall size={16} /> Call
              </a>
              <a
                href={`mailto:${guide.email}`}
                className=' btn btn-primary px-4 py-2 rounded-lg flex items-center gap-2 '
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
