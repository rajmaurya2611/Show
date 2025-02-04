import  { useState } from "react";
import whiteLogo from '../../assets/images/homepage/logo.png';

export default function Header() {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white flex justify-between items-center px-6 py-4 z-50">
      <div className="logo">
        <img src={whiteLogo} alt="Logo" className="h-10" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex space-x-6 font-light">
        <a href="#ouproducts" className="hover:font-regular py-2 px-4 block">
          Our Products
        </a>
      </nav>

      {/* Dropdown for Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black text-white py-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times; {/* This is the 'X' symbol */}
            </button>

            <a href="#services" className="py-2 px-4 block hover:text-blue-500">
              Our Services
            </a>
            <a href="#about" className="py-2 px-4 block hover:text-blue-500">
              About Us
            </a>
            <a href="#contact" className="py-2 px-4 block hover:text-blue-500">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}