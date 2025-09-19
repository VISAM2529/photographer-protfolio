"use client"
import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/portfolio");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPortfolioData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching portfolio data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  // Skeleton loader component
  const PortfolioSkeleton = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-1">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg animate-pulse">
            <div className="w-full h-64 bg-gray-300 rounded-lg border-4 sm:border-6 lg:border-8 border-gray-200"></div>
          </div>
        ))}
      </div>
    );
  };

  if (error) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-white p-4">
        <div className="text-center">
          <div className="text-red-500 font-bold text-xl mb-2">Error Loading Portfolio</div>
          <div className="text-gray-600">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-[#FFC857] text-black font-bold py-2 px-6 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start max-w-7xl w-full">
        {/* Portfolio Title - Mobile */}
        <div className="w-full lg:hidden mb-6">
          <div className="w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-xl sm:text-2xl" style={{ 
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            {loading ? "LOADING..." : (portfolioData?.title || "PORTFOLIO")}
          </div>
        </div>

        {/* Image Grid or Skeleton */}
        {loading ? (
          <PortfolioSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-1">
            {portfolioData?.items?.map((item, index) => {
              // Determine animation direction based on index
              const rotateDirection = index % 2 === 0 ? 2 : -2;
              const shineDirection = index % 4;
              
              return (
                <div key={item._id} className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto border-4 sm:border-6 lg:border-8 border-black transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 rounded-lg" 
                      style={{ transform: `rotate(${rotateDirection}deg)` }}
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
                  
                  {/* Shine Effect with different directions */}
                  {shineDirection === 0 && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg overflow-hidden">
                      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    </div>
                  )}
                  {shineDirection === 1 && (
                    <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-1000 rounded-lg overflow-hidden">
                      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    </div>
                  )}
                  {shineDirection === 2 && (
                    <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 rounded-lg overflow-hidden">
                      <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                    </div>
                  )}
                  {shineDirection === 3 && (
                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 rounded-lg overflow-hidden">
                      <div className="w-full h-1/2 bg-gradient-to-t from-transparent via-white/40 to-transparent"></div>
                    </div>
                  )}
                  
                  {/* Plus Icon on Hover */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <img 
                      src="/plus.png" 
                      alt="View larger" 
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" 
                    />
                  </div>
                  
                  {/* Item Info (appears on hover) */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{item.title}</h3>
                    <p className="text-white text-sm drop-shadow-md">{item.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Sidebar Title - Desktop (Right side) */}
        <div className="hidden lg:flex w-16 flex-col items-start mt-0 ml-8 justify-start">
          <div className="w-12 h-48 bg-[#FFC857] rotate-180 flex items-center justify-center text-black font-bold text-2xl" style={{ 
            writingMode: "vertical-rl", 
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            {loading ? "LOADING..." : (portfolioData?.title || "PORTFOLIO")}
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