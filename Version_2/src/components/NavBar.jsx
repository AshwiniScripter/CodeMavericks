import React, { useState } from "react";
import ViImage from "../images/ViSync.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Search Bar */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={ViImage} alt="Logo" className="h-10" />
            </div>

            {/* Search Bar */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/event" className="text-gray-800 hover:text-gray-600">
              Event
            </Link>
            <Link to="#flatfinder" className="text-gray-800 hover:text-gray-600">
              FlatFinder
            </Link>
            <Link to="#rentify" className="text-gray-800 hover:text-gray-600">
              Rentify
            </Link>
            <Link to="#contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
            <Link to="/login" className="text-white hover:bg-blue-700 bg-blue-600 w-[100px] h-10 flex items-center justify-center rounded-xl">
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-start space-y-4 mt-2 bg-gray-100 rounded-lg p-4">
            <Link to="/login" className="text-gray-800 hover:text-gray-600">
              Login
            </Link>
            <Link to="/event" className="text-gray-800 hover:text-gray-600">
              Event
            </Link>
            <Link to="#flatfinder" className="text-gray-800 hover:text-gray-600">
              FlatFinder
            </Link>
            <Link to="#rentify" className="text-gray-800 hover:text-gray-600">
              Rentify
            </Link>
            <Link to="#contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;