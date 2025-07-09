

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-white py-2 sm:py-2 md:py-2 lg:py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden shadow-lg">
              <Image
                src="/images/Homepage/About.png"
                alt="Inticede team member presenting intimate apparel solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-blue-600 mb-6 sm:mb-8 md:mb-10 leading-tight">
                About us
              </h2>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                  The name Inticede BSD is inspired by the word "intercede," 
                  meaning to act or advocate on someone's behalf — a role 
                  that perfectly reflects the function of a buying and 
                  sourcing agency.
                </p>

                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                  The latter part of the name pays tribute to the intimate 
                  apparel industry, which Inticede BSD is committed to 
                  supporting and elevating through expert sourcing solutions.
                </p>
              </div>
              </div>
                </div>
            </div>  
     </div>
    </section>
  );
};

export default About;