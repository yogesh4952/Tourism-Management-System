import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-gray-100 tracking-wide">TravelX</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink className="hover:text-gray-300 transition duration-300" to="/">Home</NavLink>
          <NavLink className="hover:text-gray-300 transition duration-300" to="/accomodation">Accommodation</NavLink>
          <NavLink className="hover:text-gray-300 transition duration-300" to="/Destination">Destinations</NavLink>
          <Link className="hover:text-gray-300 transition duration-300" to="/important-details">Pricing</Link>
          <NavLink  className="btn btn-primary" to="/login">Login</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg p-5 rounded-b-lg">
          <NavLink className="block py-3 text-lg hover:text-gray-300" to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink className="block py-3 text-lg hover:text-gray-300" to="/accommodation" onClick={() => setIsOpen(false)}>Accommodation</NavLink>
          <NavLink className="block py-3 text-lg hover:text-gray-300" to="/destinations" onClick={() => setIsOpen(false)}>Destinations</NavLink>
          <NavLink className="block py-3 text-lg hover:text-gray-300" to="/important-details" onClick={() => setIsOpen(false)}>Pricing</NavLink>
        </div>
      )}
    </nav>
  );
}
