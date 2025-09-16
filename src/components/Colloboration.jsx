import React from "react";

const ProudCollaborations = () => {
  const clients = [
    { id: 1, logo: "/logo1.png", name: "GlobalTech Industries", alt: "GlobalTech Industries" },
    { id: 2, logo: "/logo2.png", name: "UrbanEdge Realty", alt: "UrbanEdge Realty" },
    { id: 3, logo: "/logo3.png", name: "PrimeWave Connect", alt: "PrimeWave Connect" },
    { id: 4, logo: "/logo4.png", name: "NextGen Apparel", alt: "NextGen Apparel" },
    { id: 5, logo: "/logo5.png", name: "Everyone Organics", alt: "Everyone Organics" },
    { id: 6, logo: "/logo6.png", name: "Summit Motors", alt: "Summit Motors" },
    { id: 7, logo: "/logo7.png", name: "BrightPath Consulting", alt: "BrightPath Consulting" },
    { id: 8, logo: "/logo8.png", name: "FusionWorks Media", alt: "FusionWorks Media" }
  ];

  return (
    <div className="flex justify-center w-full min-h-screen items-center bg-black p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl w-full">
        
        {/* Title Section - Mobile */}
        <div className="w-full lg:hidden mb-8">
          <div className="w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-lg sm:text-xl" style={{ 
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            PROUD COLLABORATIONS
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center">
          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12 w-full">
            {clients.map((client) => (
              <div key={client.id} className="p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-center h-24 sm:h-28 lg:h-32 group cursor-pointer">
                <div className="mb-2 sm:mb-3 lg:mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={client.logo} 
                    alt={client.alt} 
                    className="max-h-8 sm:max-h-12 lg:max-h-16 max-w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300" 
                  />
                </div>
                <p className="text-white text-center text-xs sm:text-sm lg:text-base xl:text-lg font-normal opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "var(--font-geist-sans)" }}>
                  {client.name}
                </p>
              </div>
            ))}
            
            {/* Empty slot for grid alignment on larger screens */}
            <div className="hidden lg:block p-6 flex items-center justify-center h-32 opacity-0">
              <img src="/logo9.png" alt="" className="max-h-16 max-w-full object-contain" />
            </div>
          </div>

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
            PROUD COLLABORATIONS
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudCollaborations;