import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-300 shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-accent">
          Rayie Technologies
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><a href="/" className="hover:text-accent transition">Home</a></li>
          <li><a href="/about" className="hover:text-accent transition">About</a></li>
          <li><a href="/services" className="hover:text-accent transition">Services</a></li>
          <li><a href="/projects" className="hover:text-accent transition">Projects</a></li>
          <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-300 px-6 pb-4 space-y-4 font-medium text-gray-700 mt-5">
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
