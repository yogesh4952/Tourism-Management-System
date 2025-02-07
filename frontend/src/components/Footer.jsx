
   import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">TravelX</h2>
          <p className="text-gray-400 mt-2">Explore the world with ease. Find the best accommodations, destinations, and travel details all in one place.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin size={24} /></a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">&copy; 2025 TravelX. All rights reserved.</p>
      </div>
    </footer>
  );
}

