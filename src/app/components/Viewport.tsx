'use client';
import React from 'react';
import Image from 'next/image';

const BrandLogosViewport = () => {
  const brandLogos = [
    {
      id: 1,
      name: "Naked",
      src: "/images/Homepage/View1.jpg",
      alt: "Naked Brand Logo"
    },
    {
      id: 2,
      name: "Clovis",
      src: "/images/Homepage/View2.jpg",
      alt: "Clovis Brand Logo"
    },
    {
      id: 3,
      name: "Enamor",
      src: "/images/Homepage/View3.jpg",
      alt: "Enamor Brand Logo"
    },
    {
      id: 4,
      name: "Jockey",
      src: "/images/Homepage/View4.png",
      alt: "Jockey Brand Logo"
    },
    {
      id: 5,
      name: "Zivame",
      src: "/images/Homepage/View5.jpg",
      alt: "Zivame Brand Logo"
    }
  ];

  return (
    <section className="relative w-full bg-white py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Viewport Container */}
        <div 
          className="relative mx-auto bg-white border-2 rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[1300px] min-h-[150px] opacity-100"
        >
          {/* Brand Logos Container - Single Line */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 ">
            {brandLogos.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: '180px',
                  height: '100px',
                  minWidth: '150px',
                  minHeight: '80px'
                }}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={300}
                  height={120}
                  className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto'
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Responsive adjustments for smaller screens */}
          <style jsx>{`
            @media (max-width: 640px) {
              .flex-shrink-0 {
                width: 120px !important;
                height: 70px !important;
                min-width: 100px !important;
                min-height: 60px !important;
              }
            }
            
            @media (min-width: 641px) and (max-width: 768px) {
              .flex-shrink-0 {
                width: 140px !important;
                height: 80px !important;
                min-width: 120px !important;
                min-height: 70px !important;
              }
            }
            
            @media (min-width: 769px) and (max-width: 1024px) {
              .flex-shrink-0 {
                width: 160px !important;
                height: 90px !important;
                min-width: 140px !important;
                min-height: 75px !important;
              }
            }
            
            @media (min-width: 1025px) {
              .flex-shrink-0 {
                width: 200px !important;
                height: 110px !important;
                min-width: 180px !important;
                min-height: 90px !important;
              }
            }
          `}</style>
        </div>
        
        {/* Optional: Section Title */}
        <div className="text-center mt-8 sm:mt-12">
          <h3 className="text-gray-600 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase">
           
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BrandLogosViewport;