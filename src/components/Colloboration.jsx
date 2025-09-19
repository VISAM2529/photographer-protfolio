"use client"
import React, { useState, useEffect } from "react";

const ProudCollaborations = () => {
  const [clientsData, setClientsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientsData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/clients");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setClientsData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching clients data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClientsData();
  }, []);

  // Skeleton loader component
  const ClientsSkeleton = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12 w-full">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-center h-24 sm:h-28 lg:h-32 animate-pulse">
            <div className="mb-2 sm:mb-3 lg:mb-4 w-16 h-16 bg-gray-700 rounded-full"></div>
            <div className="h-4 w-20 bg-gray-700 rounded"></div>
          </div>
        ))}
        
        {/* Empty slot for grid alignment on larger screens */}
        <div className="hidden lg:block p-6 flex items-center justify-center h-32 opacity-0">
          <div className="max-h-16 max-w-full object-contain"></div>
        </div>
      </div>
    );
  };

  if (error) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-black p-4">
        <div className="text-center">
          <div className="text-red-500 font-bold text-xl mb-2">Error Loading Clients</div>
          <div className="text-gray-400">{error}</div>
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
    <div className="flex justify-center w-full min-h-screen items-center bg-black p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl w-full">
        
        {/* Title Section - Mobile */}
        <div className="w-full lg:hidden mb-8">
          <div className="w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-lg sm:text-xl" style={{ 
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            {loading ? "LOADING..." : (clientsData?.title || "PROUD COLLABORATIONS")}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center">
          {/* Client Logos Grid or Skeleton */}
          {loading ? (
            <ClientsSkeleton />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12 w-full">
              {clientsData?.clients?.map((client) => (
                <div key={client._id} className="p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-center h-24 sm:h-28 lg:h-32 group cursor-pointer">
                  <div className="mb-2 sm:mb-3 lg:mb-4 transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src={client.logo} 
                      alt={client.alt || client.name} 
                      className="max-h-8 sm:max-h-12 lg:max-h-16 max-w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300" 
                    />
                  </div>
                  <p className="text-white text-center text-xs sm:text-sm lg:text-base xl:text-lg font-normal opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "var(--font-geist-sans)" }}>
                    {client.name}
                  </p>
                </div>
              ))}
              
              {/* Add empty items if needed to maintain grid layout */}
              {clientsData?.clients?.length < 8 && 
                [...Array(8 - clientsData.clients.length)].map((_, index) => (
                  <div key={`empty-${index}`} className="p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-center h-24 sm:h-28 lg:h-32 opacity-0">
                    <div className="mb-2 sm:mb-3 lg:mb-4">
                      <div className="max-h-8 sm:max-h-12 lg:max-h-16 max-w-full"></div>
                    </div>
                    <p className="text-center text-xs sm:text-sm lg:text-base xl:text-lg font-normal">
                      &nbsp;
                    </p>
                  </div>
                ))
              }
              
              {/* Empty slot for grid alignment on larger screens */}
              <div className="hidden lg:block p-6 flex items-center justify-center h-32 opacity-0">
                <img src="" alt="" className="max-h-16 max-w-full object-contain" />
              </div>
            </div>
          )}

          {/* Get in Touch Section */}
          <div className="text-center">
            <button className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] hover:bg-[#FFC857] hover:text-black font-bold py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFC857]/30" style={{ fontFamily: "var(--font-bebas-neue)" }}>
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Title Section - Desktop (Right side) */}
        <div className="hidden lg:flex w-16 flex-col items-start mb-0 ml-8">
          <div className="w-12 h-64 xl:h-72 bg-[#FFC857] rotate-180 flex items-center justify-center text-black font-bold text-xl xl:text-2xl" style={{ 
            writingMode: "vertical-rl", 
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            {loading ? "LOADING..." : (clientsData?.title || "PROUD COLLABORATIONS")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudCollaborations;