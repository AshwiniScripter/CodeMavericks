import React, { useState } from "react";
import { Link } from "react-router-dom";
import ViImage from "../images/ViSync.png";

const NavBar = ({ isAuthenticated, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Search Bar */}
          <div className="flex items-center space-x-4">
            <img src={ViImage} alt="Logo" className="h-10" />
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/event" className="text-gray-800 hover:text-gray-600">
              Event
            </Link>
            <Link to="/flatfinder" className="text-gray-800 hover:text-gray-600"> {/* ✅ Fixed path */}
              FlatFinder
            </Link>
            <Link to="/rentify" className="text-gray-800 hover:text-gray-600">
              Rentify
            </Link>
            <Link to="#contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
            {isAuthenticated ? (
              <button 
                onClick={onLogout} 
                className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-4 mt-2 bg-gray-100 rounded-lg p-4">
            <Link to="/event" className="text-gray-800 hover:text-gray-600">Event</Link>
            <Link to="/flatfinder" className="text-gray-800 hover:text-gray-600"> {/* ✅ Fixed path */}
              FlatFinder
            </Link>
            <Link to="/rentify" className="text-gray-800 hover:text-gray-600">Rentify</Link>
            <Link to="#contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
            {isAuthenticated ? (
              <button onClick={onLogout} className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700">
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
                Login
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
