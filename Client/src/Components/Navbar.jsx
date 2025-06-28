import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo or Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold tracking-wide text-white   transition">
              🛍️ MyShop
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 ml-2">
            <Link
              to="/"
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-200"
            >
               Add Product
            </Link>
            <Link
              to="/displayProduct"
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-200"
            >
               Display Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
