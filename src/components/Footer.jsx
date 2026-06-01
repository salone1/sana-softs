import React from "react";
import { Link } from "react-router-dom";
import { footerLinks, socialLinks, companyName, copyrightHolder } from "../config/siteConfig";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center py-12">
      <div className="footer-content max-w-7xl mx-auto px-4">
        {/* Footer Links */}
        <div className="footer-links flex justify-center gap-6 mb-6 flex-wrap">
          {footerLinks.map((link) => (
            <React.Fragment key={link.path}>
              <Link to={link.path} className="text-gray-300 hover:text-blue-400 transition">
                {link.name}
              </Link>
              <span className="text-gray-500">|</span>
            </React.Fragment>
          ))}
        </div>

        {/* Social Links */}
        <div className="social-links flex justify-center gap-4 mb-6">
          <a
            href={socialLinks.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition font-medium"
          >
            🔗 Telegram
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded transition font-medium"
          >
            📸 Instagram
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded transition font-medium"
          >
            🔧 GitHub
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400">&copy; {year} {companyName}. All Rights Reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Made with ❤️ by <strong>{copyrightHolder}</strong></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
