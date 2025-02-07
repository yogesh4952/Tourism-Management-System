import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/accommodation', label: 'Accommodation' },
    { path: '/destination', label: 'Destinations' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About Us' },
    { path: '/guide', label: 'Guide' },
    { path: '/login', label: 'Login', className: 'btn btn-primary' },
  ];

  return (
    <nav className='shadow-md p-4 w-full z-50 bg-base-100'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <NavLink to='/' className='text-3xl font-extrabold tracking-wide'>
          TravelX
        </NavLink>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 text-lg items-center'>
          {navLinks.map(({ path, label, className }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-primary transition duration-300 ${
                  isActive ? 'text-primary font-bold' : ''
                } ${className || ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden text-primary'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ThemeToggle />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-base-100 shadow-md'>
          <div className='flex flex-col items-center space-y-4 p-4'>
            {navLinks.map(({ path, label, className }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `hover:text-primary transition duration-300 ${
                    isActive ? 'text-primary font-bold' : ''
                  } ${className || ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
