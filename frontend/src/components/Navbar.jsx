import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import {
  useUser,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/clerk-react';
import Logo from '../Icon/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/accommodation', label: 'Accommodation' },
    { path: '/destination', label: 'Destinations' },
    { path: '/blog', label: 'Blog' },
    { path: '/guide', label: 'Guide' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <nav className='shadow-md p-4 w-full z-50 bg-base-100'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <NavLink to='/' className='text-3xl font-extrabold tracking-wide'>
          <Logo />
        </NavLink>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 text-lg items-center'>
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-primary transition duration-300 ${
                  isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Auth Buttons */}
          {isSignedIn ? (
            <>
              <UserButton afterSignOutUrl='/' />
              <SignOutButton>
                <button className='btn btn-primary'>Sign Out</button>
              </SignOutButton>
            </>
          ) : (
            <SignInButton mode='modal'>
              <button className='btn btn-primary'>Sign In</button>
            </SignInButton>
          )}
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
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `hover:text-primary transition duration-300 ${
                    isActive ? 'text-primary font-bold' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Auth Buttons */}
            {isSignedIn ? (
              <>
                <UserButton afterSignOutUrl='/' />
                <SignOutButton>
                  <button className='btn btn-primary'>Sign Out</button>
                </SignOutButton>
              </>
            ) : (
              <SignInButton mode='modal'>
                <button className='btn btn-primary'>Sign In</button>
              </SignInButton>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
