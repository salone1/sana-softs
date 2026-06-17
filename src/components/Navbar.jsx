import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../config/siteConfig";
import { useSiteContent } from "../config/contentStore";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const content = useSiteContent();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img src="/img/sanalogo.svg" alt="SANA Softs logo" className="h-10 w-10 rounded-xl" />
          <div>
            <p className="text-lg font-semibold text-slate-900">{content.companyName}</p>
            <p className="text-xs text-slate-500">{content.siteTagline}</p>
          </div>
        </Link>

        <button onClick={toggleMenu} className="rounded-lg p-2 text-2xl text-slate-700 md:hidden" aria-label="Toggle menu">
          ☰
        </button>

        <div className={`${isOpen ? "block" : "hidden"} absolute left-0 right-0 top-full bg-white shadow-lg md:static md:block md:bg-transparent md:shadow-none`}>
          <div className="flex flex-col gap-2 p-4 md:flex-row md:items-center md:gap-6 md:p-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${isActive(link.path) ? "font-semibold text-blue-600" : "text-slate-700"} rounded-lg px-2 py-2 transition hover:text-blue-600`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
