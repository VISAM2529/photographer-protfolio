"use client"
import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/about');
        
        if (!response.ok) {
          throw new Error('Failed to fetch about data');
        }
        
        const data = await response.json();
        setAboutData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching about data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <div className="flex justify-center w-full min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start max-w-7xl w-full">
        {/* Sidebar Title Skeleton */}
        <div className="w-full lg:w-16 flex lg:flex-col items-start mb-6 lg:mb-0 lg:mr-8">
          {/* Mobile Skeleton */}
          <div className="lg:hidden w-full h-12 bg-gray-200 animate-pulse mb-4"></div>
          {/* Desktop Skeleton */}
          <div className="hidden lg:block w-12 h-48 bg-gray-200 animate-pulse"></div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1 flex flex-col xl:flex-row items-start gap-6 lg:gap-8">
          {/* Image Skeleton */}
          <div className="relative w-full xl:w-2/5">
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>

          {/* Text and Specializations Skeleton */}
          <div className="w-full xl:w-3/5">
            {/* Bio Text Skeleton */}
            <div className="space-y-4 mb-6 lg:mb-8">
              <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-4/5"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
            </div>

            {/* Specializations Title Skeleton */}
            <div className="flex items-center mb-4 lg:mb-6">
              <div className="h-8 bg-gray-200 animate-pulse rounded w-48"></div>
            </div>

            {/* Specializations Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[...Array(5)].map((_, index) => (
                <div 
                  key={index} 
                  className="h-12 bg-gray-200 animate-pulse rounded"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-white p-4">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-white p-4">
        <div className="text-gray-500">No about data found</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start max-w-7xl w-full">
        {/* Sidebar Title - Vertical text */}
        <div className="w-full lg:w-16 flex lg:flex-col items-start mb-6 lg:mb-0 lg:mr-8">
          {/* Mobile horizontal layout */}
          <div className="lg:hidden w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-xl sm:text-2xl mb-4" style={{ 
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            {aboutData.title || "ABOUT US"}
          </div>
          
          {/* Desktop vertical layout */}
          <div className="hidden lg:block w-12 h-48 bg-[#FFC857] flex items-center justify-center text-black font-bold text-2xl" style={{ 
            writingMode: "vertical-rl", 
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            {aboutData.title || "ABOUT US"}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row items-start gap-6 lg:gap-8">
          {/* Image with Focus Overlays and Hover Animation */}
          <div className="relative w-full xl:w-2/5 group cursor-pointer">
            {/* Main Image */}
            <div className="overflow-hidden rounded-lg">
              <img 
                src={aboutData.image || "/aboutus-img.png"} 
                alt="Photographer" 
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" 
              />
            </div>
            
            {/* Outer Focus with Animation */}
            <img 
              src="/outer-focus.png" 
              alt="Outer Focus" 
              className="absolute top-0 left-0 w-full h-full object-cover p-2 sm:p-3 opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:p-1 sm:group-hover:p-2 group-hover:animate-pulse rounded-lg" 
            />
            
            {/* Plus Icon with Animation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <img 
                src="/plus.png" 
                alt="Plus Icon" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover animate-spin-slow" 
              />
            </div>
            
            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-[#FFC857] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg overflow-hidden">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
          </div>

          {/* Text and Specializations */}
          <div className="w-full xl:w-3/5">
            {/* Bio Text */}
            <div className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8" style={{ fontFamily: "var(--font-geist-sans)" }}>
              {aboutData.bio ? (
                aboutData.bio.split('\n\n').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    {index < aboutData.bio.split('\n\n').length - 1 && <><br /><br /></>}
                  </React.Fragment>
                ))
              ) : (
                <>
                  I'm Artim Mahla, a Mumbai-based commercial and lifestyle photographer with over 8 years of experience in helping brands tell their stories through powerful visuals. My work goes beyond just taking pictures—I focus on creating images that connect with people, highlight details, and elevate brand identities.
                  <br /><br />
                  Over the years, I've collaborated with fashion labels, food & beverage brands, interior designers, and corporate houses, bringing their products and stories to life through thoughtfully crafted campaigns. Whether it's a sleek product shoot, an expressive portrait, or a lifestyle editorial, my goal is to blend creativity with strategy to deliver visuals that inspire and engage.
                  <br /><br />
                  With a passion for bold, vibrant, and detail-driven photography, I strive to make every project unique, impactful, and unforgettable.
                </>
              )}
            </div>

            {/* Specializations Title */}
            <div className="flex items-center mb-4 lg:mb-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ fontFamily: "var(--font-bebas-neue)" }}>SPECIALIZATIONS</span>
            </div>

            {/* Specializations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {aboutData.specializations && aboutData.specializations.length > 0 ? (
                aboutData.specializations.map((specialization, index) => (
                  <div 
                    key={specialization._id || index} 
                    className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] p-2 sm:p-3 font-semibold text-xs sm:text-sm hover:bg-[#FFC857] hover:text-black transition-all duration-300 cursor-pointer text-center" 
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {specialization.title}
                  </div>
                ))
              ) : (
                <>
                  <div className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] p-2 sm:p-3 font-semibold text-xs sm:text-sm hover:bg-[#FFC857] hover:text-black transition-all duration-300 cursor-pointer text-center" style={{ fontFamily: "var(--font-geist-sans)" }}>
                    COMMERCIAL & PRODUCT PHOTOGRAPHY
                  </div>
                  <div className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] p-2 sm:p-3 font-semibold text-xs sm:text-sm hover:bg-[#FFC857] hover:text-black transition-all duration-300 cursor-pointer text-center" style={{ fontFamily: "var(--font-geist-sans)" }}>
                    LIFESTYLE & EDITORIAL SHOOTS
                  </div>
                  <div className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] p-2 sm:p-3 font-semibold text-xs sm:text-sm hover:bg-[#FFC857] hover:text-black transition-all duration-300 cursor-pointer text-center" style={{ fontFamily: "var(--font-geist-sans)" }}>
                    CORPORATE BRANDING & PORTRAITS
                  </div>
                  <div className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] p-2 sm:p-3 font-semibold text-xs sm:text-sm hover:bg-[#FFC857] hover:text-black transition-all duration-300 cursor-pointer text-center" style={{ fontFamily: "var(--font-geist-sans)" }}>
                    ADVERTISING CAMPAIGNS
                  </div>
                  <div className="bg-[#FFC857]/10 border-2 border-[#FFC857] text-[#FFC857] p-2 sm:p-3 font-semibold text-xs sm:text-sm sm:col-span-2 hover:bg-[#FFC857] hover:text-black transition-all duration-300 cursor-pointer text-center" style={{ fontFamily: "var(--font-geist-sans)" }}>
                    E-COMMERCE PHOTOGRAPHY
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;