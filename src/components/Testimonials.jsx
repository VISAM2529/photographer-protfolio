"use client"
import React, { useState, useEffect } from "react";

const TestimonialSection = () => {
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/testimonials");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTestimonialsData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching testimonials data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialsData();
  }, []);

  // Skeleton loader component
  const TestimonialsSkeleton = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="bg-[#1C1C1C] text-white p-4 sm:p-6 lg:p-8 rounded-lg animate-pulse">
            {/* Quote Icon Skeleton */}
            <div className="mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-700 rounded"></div>
            </div>

            {/* Testimonial Text Skeleton */}
            <div className="mb-6 sm:mb-8">
              <div className="h-4 bg-gray-700 rounded mb-3"></div>
              <div className="h-4 bg-gray-700 rounded mb-3"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </div>

            {/* Star Rating Skeleton */}
            <div className="flex mb-6 sm:mb-8 space-x-1">
              {[...Array(5)].map((_, starIndex) => (
                <div key={starIndex} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gray-700 rounded"></div>
              ))}
            </div>

            {/* Author Info Skeleton */}
            <div className="flex items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-700 rounded-xl mr-3 sm:mr-4"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-700 rounded mb-2 w-2/3"></div>
                <div className="h-3 bg-gray-700 rounded mb-1 w-1/2"></div>
                <div className="h-3 bg-gray-700 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (error) {
    return (
      <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="w-full text-center">
            <div className="text-red-500 font-bold text-xl mb-2">Error Loading Testimonials</div>
            <div className="text-gray-600">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-[#FFC857] text-black font-bold py-2 px-6 rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Header - Mobile */}
        <div className="w-full lg:hidden mb-6">
          <div className="w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-lg sm:text-xl" style={{
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            {loading ? "LOADING..." : (testimonialsData?.title || "STORIES THROUGH THEIR LENS")}
          </div>
        </div>

        {/* Header - Desktop */}
        <div className="hidden lg:flex w-16 flex-col items-start mb-0 mr-8">
          <div className="w-12 h-64 xl:h-80 bg-[#FFC857] flex items-center justify-center text-black font-bold text-xl xl:text-2xl" style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            {loading ? "LOADING..." : (testimonialsData?.title || "STORIES THROUGH THEIR LENS")}
          </div>
        </div>

        {/* Testimonials Grid or Skeleton */}
        {loading ? (
          <TestimonialsSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1">
            {testimonialsData?.testimonials?.map((testimonial) => (
              <div key={testimonial._id} className="bg-[#1C1C1C] text-white p-4 sm:p-6 lg:p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                {/* Quote Icon */}
                <div className="mb-4 sm:mb-6">
                  <img 
                    src="/message-icon.png" 
                    alt="Quote" 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-80"
                  />
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed italic text-gray-100">
                  {testimonial.text}
                </p>

                {/* Star Rating */}
               {/* Star Rating */}
<div className="flex mb-6 sm:mb-8 space-x-1">
  {[...Array(testimonial.rating)].map((_, index) => (
    <img 
      key={index}
      src="/star.png" 
      alt="Star" 
      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 opacity-90"
    />
  ))}
</div>


                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFC857]/10 border border-[#FFC857] rounded-xl flex items-center justify-center mr-3 sm:mr-4 hover:bg-[#FFC857]/20 transition-colors duration-300 overflow-hidden">
                    <img 
                      src={testimonial.image || "/person.png"} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.title}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;