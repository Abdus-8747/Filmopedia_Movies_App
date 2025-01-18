import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-[0_0_15px_rgba(255,87,34,0.1)]"
          : "bg-transparent"
      }`}
      style={{ height: "96px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="relative group">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <span className="text-[#FF5722] text-6xl font-black leading-none transition-transform duration-500 group-hover:scale-110 inline-block">
                  G
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF5722] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
              <span className="text-white text-3xl font-extrabold tracking-wider ml-1 group-hover:text-[#FF5722] transition-colors duration-300">
                OTRAVEL
              </span>
            </Link>
            {/* Decorative glow effect */}
            <div className="absolute -inset-1 bg-[#FF5722] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {["Home", "About", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="relative group px-4 py-2"
                  >
                    <span className="relative z-10 text-lg font-bold text-white transition-all duration-300 group-hover:text-[#FF5722]">
                      {item}
                    </span>
                    {/* Hover effect background */}
                    <div className="absolute inset-0 transform scale-y-0 origin-bottom transition-all duration-300 bg-white/5 rounded-md -z-0 group-hover:scale-y-100"></div>
                    {/* Bottom border effect */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF5722] transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-[#FF5722] mb-1.5 transition-all duration-500"></div>
            <div className="w-6 h-0.5 bg-[#FF5722] mb-1.5 transition-all duration-500"></div>
            <div className="w-6 h-0.5 bg-[#FF5722] transition-all duration-500"></div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 bg-[#1a1a1a]/95 backdrop-blur-md shadow-[0_0_15px_rgba(255,87,34,0.1)]"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="py-4 space-y-4 text-center">
            {["Home", "About", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group block px-6 py-3 text-white text-xl font-semibold transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{item}</span>
                  {/* Hover effect background */}
                  <div className="absolute inset-0 transform scale-y-0 origin-bottom transition-all duration-300 bg-white/5 rounded-md -z-0 group-hover:scale-y-100"></div>
                  {/* Bottom border effect */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF5722] transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                  {/* Hover effect for text scale */}
                  <div className="absolute inset-0 bg-[#FF5722] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  {/* Text scaling on hover */}
                  <span className="absolute inset-0 group-hover:scale-105 transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
