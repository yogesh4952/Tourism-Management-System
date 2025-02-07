import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-base-300 text-base-content py-8 mt-16'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-6'>
        {/* Brand Info */}
        <div className='text-center md:text-left'>
          <h2 className='text-2xl font-bold'>TravelX</h2>
          <p className='mt-2'>
            Explore the world with ease. Find the best accommodations,
            destinations, and travel details all in one place.
          </p>
        </div>

        {/* Social Media Links */}
        <div className='flex space-x-6 mt-4 md:mt-0'>
          <a href='#' className='hover:text-primary transition'>
            <FaFacebook size={24} />
          </a>
          <a href='#' className='hover:text-primary transition'>
            <FaTwitter size={24} />
          </a>
          <a href='#' className='hover:text-primary transition'>
            <FaInstagram size={24} />
          </a>
          <a href='#' className='hover:text-primary transition'>
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className='mt-8 border-t border-base-200 pt-4 text-center'>
        <p>&copy; 2025 TravelX. All rights reserved.</p>
      </div>
    </footer>
  );
}
