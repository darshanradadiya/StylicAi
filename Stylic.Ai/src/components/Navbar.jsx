import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white shadow-md z-40">
      <nav className="container mx-auto px-4 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" data-discover="true">
            <img src="./src/assets/logo/Stylic.png" alt="logo" className="md:w-32 w-28" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 font-medium hover:underline">
            Home
          </Link>
          <Link to="/showcase" className="text-gray-800 font-medium hover:underline">
            Showcase
          </Link>
          <Link to="/about" className="text-gray-800 font-medium hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 font-medium hover:underline">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-gray-950 text-white px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-navyblue transition duration-300">
            Schedule Demo
          </button>
          <a href="https://app.stylic.ai" className="hidden md:block">
            <button className="bg-gray-950 text-white px-6 py-2 rounded-full hover:bg-navyblue transition duration-300">
              Login
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-800 focus:outline-none"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 items-center py-20">
          <Link
            to="/"
            className="text-gray-800 w-full text-center text-lg font-medium hover:underline hover:decoration-gray-950 hover:underline-offset-4 hover:decoration-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/showcase"
            className="text-gray-800 w-full text-center text-lg font-medium hover:underline hover:decoration-gray-950 hover:underline-offset-4 hover:decoration-2"
            onClick={() => setMenuOpen(false)}
          >
            Showcase
          </Link>
          <Link
            to="/about"
            className="text-gray-800 w-full text-center text-lg font-medium hover:underline hover:decoration-gray-950 hover:underline-offset-4 hover:decoration-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 w-full text-center text-lg font-medium hover:underline hover:decoration-gray-950 hover:underline-offset-4 hover:decoration-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;