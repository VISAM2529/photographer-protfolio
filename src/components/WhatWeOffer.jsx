"use client";
import React, { useState, useEffect } from "react";

const WhatWeOffer = () => {
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/services");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setServicesData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching services data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServicesData();
  }, []);

  const ServicesSkeleton = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 flex-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`relative bg-gray-200 p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-between overflow-hidden rounded-lg min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] animate-pulse ${
              index === 2 ? "md:col-span-2 xl:col-span-1" : ""
            }`}
          >
            <div className="w-full h-40 sm:h-48 lg:h-64 bg-gray-300 rounded-lg mb-3 sm:mb-4 border-4 sm:border-6 lg:border-8 border-gray-200"></div>
            <div className="flex flex-col items-start w-full flex-grow">
              <div className="h-7 w-3/4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-300 rounded mb-1"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 w-4/5 bg-gray-300 rounded mb-4"></div>
            </div>
            <div className="h-10 w-full bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  };

  if (error) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-white p-4">
        <div className="text-center">
          <div className="text-red-500 font-bold text-xl mb-2">Error Loading Services</div>
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
    <div name="services" className="flex justify-center w-full min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start max-w-7xl w-full">
        <div className="w-full lg:hidden mb-6">
          <div
            className="w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-xl sm:text-2xl"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              letterSpacing: "0.1em",
            }}
          >
            {loading ? "LOADING..." : servicesData?.title || "WHAT WE OFFER"}
          </div>
        </div>

        <div className="hidden lg:flex w-16 flex-col items-start mb-0 mr-8">
          <div
            className="w-12 h-48 bg-[#FFC857] flex items-center justify-center text-black font-bold text-2xl"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              fontFamily: "var(--font-bebas-neue)",
              letterSpacing: "0.1em",
            }}
          >
            {loading ? "LOADING..." : servicesData?.title || "WHAT WE OFFER"}
          </div>
        </div>

        {loading ? (
          <ServicesSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 flex-1">
            {servicesData?.services?.map((service, index) => {
              const shineDirection = index % 3;

              return (
                <div
                  key={service._id}
                  className={`relative bg-black text-white p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-between group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-lg min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] ${
                    index === 2 ? "md:col-span-2 xl:col-span-1" : ""
                  }`}
                >
                  <div className="overflow-hidden w-full rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 sm:h-48 lg:h-64 object-cover mb-3 sm:mb-4 border-4 sm:border-6 lg:border-8 border-black transition-transform duration-700 group-hover:scale-110 rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col items-start w-full flex-grow">
                    <h3
                      className="text-xl sm:text-2xl lg:text-3xl font-normal mb-2 text-[#FFC857] group-hover:text-white transition-colors duration-500"
                      style={{ fontFamily: "var(--font-bebas-neue)" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-start text-xs sm:text-sm mb-4 group-hover:text-gray-300 transition-colors duration-500 flex-grow"
                      style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Updated button to open mail */}
                 <a href="mailto:info@abcphotography.com">
  <button
    className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] hover:bg-[#FFC857] hover:text-black font-normal py-2 px-3 sm:px-4 w-full sm:w-32 text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#FFC857]/30"
    style={{ fontFamily: "var(--font-bebas-neue)" }}
  >
    {service.buttonText || "BOOK A SHOOT"}
  </button>
</a>


                  {shineDirection === 0 && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg overflow-hidden">
                      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#FFC857]/20 to-transparent"></div>
                    </div>
                  )}
                  {shineDirection === 1 && (
                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 rounded-lg overflow-hidden">
                      <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#FFC857]/20 to-transparent"></div>
                    </div>
                  )}
                  {shineDirection === 2 && (
                    <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 rounded-lg overflow-hidden">
                      <div className="w-full h-1/2 bg-gradient-to-t from-transparent via-[#FFC857]/20 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeOffer;
