import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-teal-400 hover:text-teal-300"
        >
          ReactApp
        </NavLink>
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-white font-semibold'
                : 'text-gray-300 hover:text-white transition duration-200'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-white font-semibold'
                : 'text-gray-300 hover:text-white transition duration-200'
            }
          >
            About JSX
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-white font-semibold'
                : 'text-gray-300 hover:text-white transition duration-200'
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
