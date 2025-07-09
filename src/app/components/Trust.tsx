'use client';
import React from 'react';
import Image from 'next/image';

const TrustedSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left Text Section */}
          <div className="flex flex-col justify-end h-full">
            <div className="mb-4 sm:mb-6 md:mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F3A93] mb-4">
                Trusted by
              </h2>
              <p className="text-gray-600 max-w-md text-base leading-relaxed">
                We’re proud to be trusted by industry leaders like amante, Nykaa, Jockey, Zivame, and Enamor.
                These collaborations reflect our commitment to quality, reliability, and long-term partnerships
                in the intimate apparel space.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* First Image */}
            <div
              className="relative grayscale border-2 border-blue-400 rounded-lg overflow-hidden"
              style={{ width: '368px', height: '619px' }}
            >
              <Image
                src="/images/Homepage/Trust1.jpg" // replace with your actual path
                alt="Jockey Store"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div
              className="relative grayscale border-2 border-blue-400 rounded-lg overflow-hidden"
              style={{ width: '369px', height: '619px' }}
            >
              <Image
                src="/images/Homepage/Trust2.png" // replace with your actual path
                alt="Nykaa Display"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
