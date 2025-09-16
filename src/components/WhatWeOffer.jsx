import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="flex justify-center w-full min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start max-w-7xl w-full">
        {/* Sidebar Title - Mobile */}
        <div className="w-full lg:hidden mb-6">
          <div className="w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-xl sm:text-2xl" style={{ 
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            WHAT WE OFFER
          </div>
        </div>

        {/* Sidebar Title - Desktop */}
        <div className="hidden lg:flex w-16 flex-col items-start mb-0 mr-8">
          <div className="w-12 h-48 bg-[#FFC857] flex items-center justify-center text-black font-bold text-2xl" style={{ 
            writingMode: "vertical-rl", 
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            WHAT WE OFFER
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 flex-1">
          {/* Card 1: Product Photography */}
          <div className="relative bg-black text-white p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-between group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-lg min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
            {/* Image with Hover Effect */}
            <div className="overflow-hidden w-full rounded-lg">
              <img 
                src="/img-1.png" 
                alt="Product Photography" 
                className="w-full h-40 sm:h-48 lg:h-64 object-cover mb-3 sm:mb-4 border-4 sm:border-6 lg:border-8 border-black transition-transform duration-700 group-hover:scale-110 rounded-lg" 
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col items-start w-full flex-grow"> 
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-2 text-[#FFC857] group-hover:text-white transition-colors duration-500" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                PRODUCT PHOTOGRAPHY
              </h3>
              <p className="text-start text-xs sm:text-sm mb-4 group-hover:text-gray-300 transition-colors duration-500 flex-grow" style={{ fontFamily: "var(--font-geist-sans)" }}>
                Clean, detailed, and high-quality images that make your products stand out online & offline.
              </p>
            </div>
            
            {/* Button with Hover Effect */}
            <button className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] hover:bg-[#FFC857] hover:text-black font-normal py-2 px-3 sm:px-4 w-full sm:w-32 text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#FFC857]/30" style={{ fontFamily: "var(--font-bebas-neue)" }}>
              BOOK A SHOOT
            </button>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg overflow-hidden">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#FFC857]/20 to-transparent"></div>
            </div>
          </div>

          {/* Card 2: Corporate & Brand */}
          <div className="relative bg-black text-white p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-between group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-lg min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
            {/* Image with Hover Effect */}
            <div className="overflow-hidden w-full rounded-lg">
              <img 
                src="/img-2.png" 
                alt="Corporate & Brand" 
                className="w-full h-40 sm:h-48 lg:h-64 object-cover mb-3 sm:mb-4 border-4 sm:border-6 lg:border-8 border-black transition-transform duration-700 group-hover:scale-110 rounded-lg" 
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col items-start w-full flex-grow"> 
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-2 text-[#FFC857] group-hover:text-white transition-colors duration-500" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                CORPORATE & BRAND
              </h3>
              <p className="text-start text-xs sm:text-sm mb-4 group-hover:text-gray-300 transition-colors duration-500 flex-grow" style={{ fontFamily: "var(--font-geist-sans)" }}>
                Professional portraits, office lifestyle, and branding imagery to strengthen your corporate identity.
              </p>
            </div>
            
            {/* Button with Hover Effect */}
            <button className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] hover:bg-[#FFC857] hover:text-black font-normal py-2 px-3 sm:px-4 w-full sm:w-32 text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#FFC857]/30" style={{ fontFamily: "var(--font-bebas-neue)" }}>
              BOOK A SHOOT
            </button>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 rounded-lg overflow-hidden">
              <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#FFC857]/20 to-transparent"></div>
            </div>
          </div>

          {/* Card 3: Fashion & Lifestyle */}
          <div className="relative bg-black text-white p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-between group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-lg min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] md:col-span-2 xl:col-span-1">
            {/* Image with Hover Effect */}
            <div className="overflow-hidden w-full rounded-lg">
              <img 
                src="/img-3.png" 
                alt="Fashion & Lifestyle" 
                className="w-full h-40 sm:h-48 lg:h-64 object-cover mb-3 sm:mb-4 border-4 sm:border-6 lg:border-8 border-black transition-transform duration-700 group-hover:scale-110 rounded-lg" 
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col items-start w-full flex-grow"> 
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-2 text-[#FFC857] group-hover:text-white transition-colors duration-500" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                FASHION & LIFESTYLE
              </h3>
              <p className="text-start text-xs sm:text-sm mb-4 group-hover:text-gray-300 transition-colors duration-500 flex-grow" style={{ fontFamily: "var(--font-geist-sans)" }}>
                Stylish campaigns, catalogue shoots, editorial photography tailored for fashion & lifestyle brands.
              </p>
            </div>
            
            {/* Button with Hover Effect */}
            <button className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] hover:bg-[#FFC857] hover:text-black font-normal py-2 px-3 sm:px-4 w-full sm:w-32 text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#FFC857]/30" style={{ fontFamily: "var(--font-bebas-neue)" }}>
              BOOK A SHOOT
            </button>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 rounded-lg overflow-hidden">
              <div className="w-full h-1/2 bg-gradient-to-t from-transparent via-[#FFC857]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;