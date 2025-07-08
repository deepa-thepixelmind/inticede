
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
    <section className="relative w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Viewport Container */}
        <div 
          className="relative mx-auto bg-white border-2 border-blue-400 rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-[1300px] min-h-[130px] opacity-100"
        >
          {/* Brand Logos Container */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 md:gap-4 lg:gap-6">
            {brandLogos.map((brand, index) => (
              <div
                key={brand.id}
                className="relative flex-shrink-0"
                style={{
                  width: '100%',
                  maxWidth: '255.67px',
                  height: 'auto',
                  minHeight: '69.33px',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  // Position for the last logo (Zivame) based on your specs
                  ...(index === brandLogos.length - 1 && {
                    position: 'relative',
                    top: '0px',
                    // On larger screens, apply specific positioning
                    '@media (min-width: 1024px)': {
                      position: 'absolute',
                      top: '51.58px',
                      left: '979.33px'
                    }
                  })
                }}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={230}
                  height={69}
                  className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    maxWidth: '229.67px',
                    maxHeight: '69.33px',
                    width: 'auto',
                    height: 'auto'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Optional: Add a subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-lg -z-10"></div>
        </div>

        {/* Optional: Section Title */}
        <div className="text-center mt-8 sm:mt-12">
          <h3 className="text-gray-600 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase">
            Trusted by Leading Brands
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BrandLogosViewport;