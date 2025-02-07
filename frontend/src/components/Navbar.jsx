import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md p-4  w-full top-0 z-50 static md:sticky'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link
          to='/'
          className='text-3xl font-extrabold text-gray-100 tracking-wide'
        >
          TravelX
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 text-lg'>
          <Link className='hover:text-gray-300 transition duration-300' to='/'>
            Home
          </Link>
          <Link
            className='hover:text-gray-300 transition duration-300'
            to='/accommodation'
          >
            Accommodation
          </Link>
          <Link
            className='hover:text-gray-300 transition duration-300'
            to='/destination'
          >
            Destinations
          </Link>
          <Link
            className='hover:text-gray-300 transition duration-300'
            to='/important-details'
          >
            Pricing
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden focus:outline-none'
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg p-5 rounded-b-lg'>
          <Link
            className='block py-3 text-lg hover:text-gray-300'
            to='/'
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className='block py-3 text-lg hover:text-gray-300'
            to='/accommodation'
            onClick={() => setIsOpen(false)}
          >
            Accommodation
          </Link>
          <Link
            className='block py-3 text-lg hover:text-gray-300'
            to='/destination'
            onClick={() => setIsOpen(false)}
          >
            Destinations
          </Link>
          <Link
            className='block py-3 text-lg hover:text-gray-300'
            to='/important-details'
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
        </div>
      )}
    </nav>
  );
}
