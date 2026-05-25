import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        
        <div className="mb-12">
          <p className="text-gray-600 mb-4">Here are some helpful links instead:</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-medium"
            >
              Go to Home
            </Link>
            <Link
              to="/apps"
              className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition font-medium"
            >
              Browse Apps
            </Link>
            <Link
              to="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Pages:</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-blue-600">
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li className="text-gray-400">•</li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="text-gray-400">•</li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">•</li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
