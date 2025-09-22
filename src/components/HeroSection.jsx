"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      name="home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Overlay for dark background effect */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-bebas-neue)" }}>
          <span>CAPTURING </span>
          <span className="text-stroke text-[#FFC857]">STORIES</span>
          <span> THROUGH THE </span>
          <span className="text-stroke text-[#FFC857]">LENS</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg lg:text-xl mb-12 max-w-4xl font-semibold tracking-wider" style={{ fontFamily: "var(--font-geist-sans)" }}>
          PROFESSIONAL COMMERCIAL PHOTOGRAPHY FOR BRANDS, PRODUCTS & PEOPLE.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* React Scroll Link to Portfolio Section */}
          <ScrollLink
            to="portfolio" // id of the section you want to scroll to
            smooth={true}
            duration={800}
            className="cursor-pointer border-2 bg-[#FFC857]/10 border-[#FFC857] text-yellow-400 hover:bg-[#FFC857] hover:text-black font-normal py-3 px-8 transition-all duration-300 tracking-wider"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            VIEW PORTFOLIO
          </ScrollLink>

          {/* Mailto Button */}
          <button
            onClick={() => window.location.href = "mailto:info@abcphotography.com"}
            className="border-2 bg-[#FFC857]/10 border-[#FFC857] text-yellow-400 hover:bg-[#FFC857] hover:text-black font-normal py-3 px-8 transition-all duration-300 tracking-wider"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            BOOK A SHOOT
          </button>
        </div>
      </div>

      {/* Menu Button (Bottom Right) */}
      <button className="absolute bottom-8 right-8 text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2" style={{ fontFamily: "var(--font-geist-sans)" }}>
        <span className="text-lg font-medium tracking-wide">MENU</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </button>
    </section>
  );
};

export default Hero;
