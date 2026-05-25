import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-12">
      <div className="footer-content max-w-7xl mx-auto px-4">
        {/* Footer Links */}
        <div className="footer-links flex justify-center gap-6 mb-6 flex-wrap">
          <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition">
            Privacy Policy
          </Link>
          <span className="text-gray-500">|</span>
          <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition">
            Terms & Conditions
          </Link>
          <span className="text-gray-500">|</span>
          <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="social-links flex justify-center gap-4 mb-6">
          <a
            href="https://t.me/salis_amin_lone"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition font-medium"
          >
            🔗 Telegram
          </a>
          <a
            href="https://instagram.com/salis.amin.lone"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded transition font-medium"
          >
            📸 Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400">
            &copy; 2026 SANA Softs. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with ❤️ by <strong>Salis Amin Lone</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
