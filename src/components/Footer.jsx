import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-4 md:space-y-6">
        
        {/* Studio Address */}
        <div>
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide leading-relaxed">
            STUDIO 45, PRISM TOWERS, BANDRA KURLA COMPLEX, MUMBAI, MAHARASHTRA 400051, INDIA
          </p>
        </div>

        {/* Phone Numbers */}
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-1 sm:space-y-0">
            <span className="text-xs sm:text-sm font-semibold">+91 98765 43210</span>
            <span className="hidden sm:inline mx-2 text-xs sm:text-sm">|</span>
            <span className="text-xs sm:text-sm font-semibold">+91 022 1234 5678 (STUDIO LINE)</span>
          </div>
        </div>

        {/* Email Addresses */}
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-1 sm:space-y-0">
            <span className="text-xs sm:text-sm font-semibold break-all sm:break-normal">INFO@ABCPHOTOGRAPHYSTUDIO.IN</span>
            <span className="hidden sm:inline mx-2 text-xs sm:text-sm">|</span>
            <span className="text-xs sm:text-sm font-semibold break-all sm:break-normal">BOOKINGS@ABCPHOTOGRAPHYSTUDIO.IN</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 py-4">
          {/* Instagram */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors cursor-pointer">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>

          {/* YouTube */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors cursor-pointer">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>

          {/* Facebook */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors cursor-pointer">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>

          {/* Twitter/X */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors cursor-pointer">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
        </div>

        {/* Working Hours */}
        <div className="px-2">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center text-xs sm:text-sm font-semibold tracking-wide space-y-1 sm:space-y-0">
            <span>WORKING HOURS: MON - FRI: 9:30 AM - 6:30 PM</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>SAT: 10:00 AM - 4:00 PM</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>SUN: CLOSED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;