import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Accommodation', to: '/accommodation' },
  { name: 'Destinations', to: '/destination' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-4 w-full '>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <Link
          to='/'
          className='text-3xl font-extrabold text-gray-100 tracking-wide transition-all duration-300 transform hover:scale-105'
        >
          TravelX
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 text-lg'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className='hover:text-gray-300 transition duration-300 transform hover:scale-105'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden focus:outline-none transition-transform duration-300 transform hover:scale-110'
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg p-5 rounded-b-lg'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className='block py-3 text-lg hover:text-gray-300 transition duration-300'
              to={link.to}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
