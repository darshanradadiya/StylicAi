import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
    navigate("/home"); // Redirect to home page
  };

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
          <Link to="/home" className="text-gray-800 font-medium hover:underline">
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
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-gray-950 text-white px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-navyblue transition duration-300"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;