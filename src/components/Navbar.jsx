import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar-container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="navbar-brand text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          SANA Softs
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Links - Desktop & Mobile */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative top-full md:top-auto left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <div className="nav-links flex flex-col md:flex-row md:gap-8 items-start md:items-center p-4 md:p-0">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`${
                isActive("/") ? "text-blue-600 font-bold" : "text-gray-700"
              } hover:text-blue-600 transition font-medium py-2 md:py-0`}
            >
              Home
            </Link>
            <Link
              to="/apps"
              onClick={() => setIsOpen(false)}
              className={`${
                isActive("/apps") ? "text-blue-600 font-bold" : "text-gray-700"
              } hover:text-blue-600 transition font-medium py-2 md:py-0`}
            >
              Apps
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className={`${
                isActive("/services") ? "text-blue-600 font-bold" : "text-gray-700"
              } hover:text-blue-600 transition font-medium py-2 md:py-0`}
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`${
                isActive("/about") ? "text-blue-600 font-bold" : "text-gray-700"
              } hover:text-blue-600 transition font-medium py-2 md:py-0`}
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={`${
                isActive("/blog") ? "text-blue-600 font-bold" : "text-gray-700"
              } hover:text-blue-600 transition font-medium py-2 md:py-0`}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              onClick={() => setIsOpen(false)}
              className={`${
                isActive("/careers") ? "text-blue-600 font-bold" : "text-gray-700"
              } hover:text-blue-600 transition font-medium py-2 md:py-0`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium mt-2 md:mt-0 inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
