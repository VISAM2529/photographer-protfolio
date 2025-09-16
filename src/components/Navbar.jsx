"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#FFC857]/10 backdrop-blur-lg px-4 md:px-8 py-4 flex items-center justify-between border shadow-xl fixed top-10 left-0 w-full z-50">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          {/* Logo Circle */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            {/* Camera icon */}
            <div className="w-4 h-4 border-2 border-yellow-400 rounded-full"></div>
          </div>
          <h1 className="text-white text-lg" style={{ fontFamily: "var(--font-bebas-neue)" }}>
            ABC PHOTOGRAPHY
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-[#8C8C8C] text-2xl xl:text-3xl" style={{ fontFamily: "var(--font-bebas-neue)" }}>
          <li className="text-[#FFC857] hover:text-[#FFC857] transition-colors cursor-pointer">HOME</li>
          <li className="hover:text-[#FFC857] transition-colors cursor-pointer">ABOUT</li>
          <li className="hover:text-[#FFC857] transition-colors cursor-pointer">PORTFOLIO</li>
          <li className="hover:text-[#FFC857] transition-colors cursor-pointer">SERVICES</li>
          <li className="hover:text-[#FFC857] transition-colors cursor-pointer">CLIENTS</li>
          <li className="hover:text-[#FFC857] transition-colors cursor-pointer">CONTACT</li>
        </ul>

        {/* Desktop CTA Button */}
        <button
          className="hidden md:block text-[#FFC857] border border-[#FFC857] px-4 py-1 hover:bg-[#FFC857] hover:text-black transition-all duration-300"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          BOOK A SHOOT
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mt-1 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col items-center space-y-6 text-[#8C8C8C] text-3xl" style={{ fontFamily: "var(--font-bebas-neue)" }}>
              <li className="text-[#FFC857] hover:text-[#FFC857] transition-colors cursor-pointer">HOME</li>
              <li className="hover:text-[#FFC857] transition-colors cursor-pointer">ABOUT</li>
              <li className="hover:text-[#FFC857] transition-colors cursor-pointer">PORTFOLIO</li>
              <li className="hover:text-[#FFC857] transition-colors cursor-pointer">SERVICES</li>
              <li className="hover:text-[#FFC857] transition-colors cursor-pointer">CLIENTS</li>
              <li className="hover:text-[#FFC857] transition-colors cursor-pointer">CONTACT</li>
            </ul>

            {/* Mobile CTA Button */}
            <button
              className="text-[#FFC857] border border-[#FFC857] px-6 py-2 hover:bg-[#FFC857] hover:text-black transition-all duration-300 text-xl"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              BOOK A SHOOT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;