import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useLanguageContext } from '../context/LanguageContext'; // Import your context
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
  const { language, setLanguage } = useLanguageContext(); // Get language context

  // Manual translations dictionary
  const navTranslations = {
    en: {
      home: 'Home',
      accommodation: 'Accommodation',
      destinations: 'Destinations',
      blog: 'Blog',
      guide: 'Guide',
      premium: 'Premium',
      about: 'About Us',
      signIn: 'Sign In',
      signOut: 'Sign Out',
    },
    ne: {
      home: 'गृहपृष्ठ',
      accommodation: 'आवास',
      destinations: 'गन्तव्यहरू',
      blog: 'ब्लग',
      guide: 'गाईड',
      premium: 'प्रिमियम',
      about: 'हाम्रो बारेमा',
      signIn: 'साइन इन',
      signOut: 'साइन आउट',
    },
  };

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { path: '/', label: navTranslations[language].home },
    { path: '/accommodation', label: navTranslations[language].accommodation },
    { path: '/destination', label: navTranslations[language].destinations },
    { path: '/blog', label: navTranslations[language].blog },
    { path: '/guide', label: navTranslations[language].guide },
    { path: '/premium', label: navTranslations[language].premium },
    { path: '/about', label: navTranslations[language].about },
  ];

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'en' ? 'ne' : 'en'));
  };

  return (
    <nav className='shadow-md p-4 w-full z-50 bg-base-100'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <NavLink to='/' className='text-3xl font-extrabold tracking-wide'>
          <Logo />
        </NavLink>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-6 text-lg items-center
         ${language !== 'en' ? 'text-6xl font-bold' : ''}
          `}
        >
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-primary transition duration-300 font-medium ${
                  isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Language Toggle */}
          <button
            onClick={handleLanguageToggle}
            className={`ml-4 px-3 py-1 border rounded hover:bg-base-200 transition-colors`}
          >
            {language === 'en' ? 'नेपाली' : 'English'}
          </button>

          {/* Auth Buttons */}
          {isSignedIn ? (
            <>
              <UserButton afterSignOutUrl='/' />
              <SignOutButton>
                <button className='btn btn-primary'>
                  {navTranslations[language].signOut}
                </button>
              </SignOutButton>
            </>
          ) : (
            <SignInButton mode='modal'>
              <button className='btn btn-primary'>
                {navTranslations[language].signIn}
              </button>
            </SignInButton>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden flex items-center gap-4'>
          <button
            className='text-primary'
            onClick={toggleMenu}
            aria-label='Toggle Menu'
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ThemeToggle />
        </div>
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

            {/* Mobile Language Toggle */}
            <button
              onClick={() => {
                handleLanguageToggle();
                setIsOpen(false);
              }}
              className='px-4 py-2 border rounded hover:bg-base-200'
            >
              {language === 'en'
                ? 'नेपालीमा स्विच गर्नुहोस्'
                : 'Switch to English'}
            </button>

            {/* Mobile Auth Buttons */}
            {isSignedIn ? (
              <>
                <UserButton afterSignOutUrl='/' />
                <SignOutButton>
                  <button className='btn btn-primary'>
                    {navTranslations[language].signOut}
                  </button>
                </SignOutButton>
              </>
            ) : (
              <SignInButton mode='modal'>
                <button className='btn btn-primary'>
                  {navTranslations[language].signIn}
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
