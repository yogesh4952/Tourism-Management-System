import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { NavLink } from 'react-router';
import Logo from '../Icon/Logo';

const Footer = () => {
  return (
    <footer className='py-10'>
      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8'>
        {/* Brand Section */}
        <div>
          <h2 className='text-2xl font-bold mb-3'>
            <NavLink to='/'>
              <Logo />
            </NavLink>
          </h2>
          <p className='text-sm opacity-75'>
            Your trusted partner in tourism and hospitality, ensuring
            unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:text-blue-400 transition'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition'>
                Destinations
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition'>
                Accommodation
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Contact Us</h3>
          <p className='flex items-center gap-2'>
            <Phone size={18} /> +977 980-123-4567
          </p>
          <p className='flex items-center gap-2'>
            <Mail size={18} /> info.nepalyatra@gmail.com
          </p>
          <p className='flex items-center gap-2'>
            <MapPin size={18} /> Thamel, Kathmandu
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Follow Us</h3>
          <div className='flex gap-4'>
            <a href='#' className='hover:text-blue-400 transition'>
              <Facebook size={24} />
            </a>
            <a href='#' className='hover:text-pink-400 transition'>
              <Instagram size={24} />
            </a>
            <a href='#' className='hover:text-blue-300 transition'>
              <Twitter size={24} />
            </a>
            <a href='#' className='hover:text-blue-600 transition'>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='text-center mt-8 text-lg opacity-75'>
        © {new Date().getFullYear()} नेपाल यात्रा . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
