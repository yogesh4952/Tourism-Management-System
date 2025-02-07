
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md p-4  w-full  z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-3xl font-extrabold text-gray-100 tracking-wide">
            TravelX
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg items-center">
            <NavLink className="hover:text-gray-300 transition duration-300" to="/">Home</NavLink>
            <NavLink className="hover:text-gray-300 transition duration-300" to="/accommodation">Accommodation</NavLink>
            <NavLink className="hover:text-gray-300 transition duration-300" to="/destination">Destinations</NavLink>
            <NavLink className="hover:text-gray-300 transition duration-300" to="/Blog">Blog</NavLink>
            <NavLink className="hover:text-gray-300 transition duration-300" to="/about">About Us</NavLink>
            <NavLink className="hover:text-gray-300 transition duration-300" to="/Guide">Guide</NavLink>

            <NavLink className="hover:text-gray-300 transition duration-300 btn btn-primary" to="/login">Login</NavLink>
          </div>
          </div>

        </nav>
    </>
    
  );
}
