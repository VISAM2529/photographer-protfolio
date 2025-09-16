import React from "react";

const Portfolio = () => {
  return (
    <div className="flex justify-center w-full min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start max-w-7xl w-full">
        {/* Portfolio Title - Mobile */}
        <div className="w-full lg:hidden mb-6">
          <div className="w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-xl sm:text-2xl" style={{ 
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            PORTFOLIO
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-1">
          {/* Image 1 with Hover Animation */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/img-1.png" 
                alt="Portfolio Image 1" 
                className="w-full h-auto border-4 sm:border-6 lg:border-8 border-black transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 rounded-lg" 
              />
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg overflow-hidden">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
            {/* Plus Icon on Hover */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                src="/plus.png" 
                alt="View larger" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" 
              />
            </div>
          </div>

          {/* Image 2 with Hover Animation */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/img-2.png" 
                alt="Portfolio Image 2" 
                className="w-full h-auto border-4 sm:border-6 lg:border-8 border-black transition-all duration-700 group-hover:scale-110 group-hover:-rotate-2 rounded-lg" 
              />
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
            {/* Shine Effect */}
            <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-1000 rounded-lg overflow-hidden">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
            {/* Plus Icon on Hover */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                src="/plus.png" 
                alt="View larger" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" 
              />
            </div>
          </div>

          {/* Image 3 with Hover Animation */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/img-3.png" 
                alt="Portfolio Image 3" 
                className="w-full h-auto border-4 sm:border-6 lg:border-8 border-black transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 rounded-lg" 
              />
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 rounded-lg overflow-hidden">
              <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            </div>
            {/* Plus Icon on Hover */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                src="/plus.png" 
                alt="View larger" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" 
              />
            </div>
          </div>

          {/* Image 4 with Hover Animation */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/img-4.png" 
                alt="Portfolio Image 4" 
                className="w-full h-auto border-4 sm:border-6 lg:border-8 border-black transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1 rounded-lg" 
              />
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
            {/* Shine Effect */}
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 rounded-lg overflow-hidden">
              <div className="w-full h-1/2 bg-gradient-to-t from-transparent via-white/40 to-transparent"></div>
            </div>
            {/* Plus Icon on Hover */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                src="/plus.png" 
                alt="View larger" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" 
              />
            </div>
          </div>

         

      
        </div>

        {/* Sidebar Title - Desktop (Right side) */}
        <div className="hidden lg:flex w-16 flex-col items-start mt-0 ml-8 justify-start">
          <div className="w-12 h-48 bg-[#FFC857] rotate-180 flex items-center justify-center text-black font-bold text-2xl" style={{ 
            writingMode: "vertical-rl", 
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            PORTFOLIO
          </div>
        </div>

        {/* View More Button - Mobile */}
        <div className="w-full lg:hidden mt-6 flex justify-center">
          <button className="bg-[#FFC857] text-black font-bold py-3 px-8 hover:bg-[#FFC857]/80 transition-colors duration-300" style={{ fontFamily: "var(--font-bebas-neue)" }}>
            VIEW MORE WORK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;