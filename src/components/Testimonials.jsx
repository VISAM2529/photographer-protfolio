import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "The photographs brought our products to life. Clean, sharp, and exactly what we needed for our e-commerce launch.",
      name: "Emma Lewis",
      title: "Marketing Manager",
      company: "GlobalTech Industries",
      image: "/img-1.png"
    },
    {
      id: 2,
      text: "Professional and creative. The team understood our brand vision and delivered stunning campaign shots ahead of schedule.",
      name: "Raj Mehra", 
      title: "Creative Director",
      company: "NextGen Apparel",
      image: "/img-2.png"
    }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Header - Mobile */}
        <div className="w-full lg:hidden mb-6">
          <div className="w-full h-12 bg-[#FFC857] flex items-center justify-center text-black font-bold text-lg sm:text-xl" style={{
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.1em"
          }}>
            STORIES THROUGH THEIR LENS
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
            STORIES THROUGH THEIR LENS
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#1C1C1C] text-white p-4 sm:p-6 lg:p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
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
              <div className="flex mb-6 sm:mb-8 space-x-1">
                {[...Array(5)].map((_, index) => (
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
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFC857]/10 border border-[#FFC857] rounded-xl flex items-center justify-center mr-3 sm:mr-4 hover:bg-[#FFC857]/20 transition-colors duration-300">
                  <img 
                    src="/person.png" 
                    alt="Person" 
                    className="w-6 h-6 sm:w-8 sm:h-8"
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
      </div>
    </div>
  );
};

export default TestimonialSection;