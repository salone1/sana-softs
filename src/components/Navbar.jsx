import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, companyName } from "../config/siteConfig";

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
          {companyName}
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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${isActive(link.path) ? "text-blue-600 font-bold" : "text-gray-700"} hover:text-blue-600 transition font-medium py-2 md:py-0`}
              >
                {link.name}
              </Link>
            ))}

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
