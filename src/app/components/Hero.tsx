'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-50">
      {/* Hero Image Container */}
      <div className="relative w-full h-70 sm:h-100 md:h-96 lg:h-[800px] xl:h-[1100px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-10"></div>
        <Image
          src="/images/Homepage/Hero.png" // Replace with your image path
          alt="Intimate wear manufacturing"
          fill
          className="object-cover px-10"
          priority
        />
        
        {/* Overlay Text on Image */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="space-y-2 md:space-y-4">
              
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-30 bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="font-grown text-[#1F3A93] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 sm:mb-8 md:mb-10">
              We help intimate wear brands around the world bring quality products to life
            </h2>
            
            {/* Subtitle */}
            <p className="text-grey-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              With over a decade of experience, Inticede is a one stop solution to all your worries
            </p>
          </div>
        </div>
      </div>

     
        
      
    </section>
  );
};

export default HeroSection;