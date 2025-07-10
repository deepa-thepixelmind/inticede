'use client';
import React from 'react';
import Image from 'next/image';

const garmentItems = [
  {
    id: 1,
    title: 'Intimate wear',
    src: '/images/Homepage/G1.jpg',
    style: 'w-[210px] h-[209px]'
  },
  {
    id: 2,
    title: 'Menswear',
    src: '/images/Homepage/G2.jpg',
    style: 'w-[210px] h-[210px]'
  },
  {
    id: 3,
    title: 'Loungewear',
    src: '/images/Homepage/G3.jpg',
    style: 'w-[209px] h-[210px]'
  },
  {
    id: 4,
    title: 'Thermal Wear',
    src: '/images/Homepage/G4.jpg',
    style: 'w-[211px] h-[211px]'
  },
  {
    id: 5,
    title: 'Shapewear',
    src: '/images/Homepage/G5.jpg',
    style: 'w-[209px] h-[210px]'
  },
  {
    id: 6,
    title: 'Athleisure wear',
    src: '/images/Homepage/G6.jpg',
    style: 'w-[209px] h-[209px]'
  }
];

const FinishedGarmentsSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 text-center">
      {/* Title */}
      <div className="mb-12 px-4">
        <p className="text-sm text-gray-600 mb-1">Explore</p>
        <h2 className="text-[#1F3A93] text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-snug">
          A curated range of finished garments<br />
          for comfort, function, and modern style
        </h2>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto">
          Discover our diverse collection of finished products, thoughtfully crafted to suit every need.
        </p>
      </div>

      {/* Image Grid */}
      <div className="flex flex-col items-center px-4">
        {/* First row with 4 items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {garmentItems.slice(0, 4).map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className={`relative grayscale overflow-hidden ${item.style}`}>
                <Image src={item.src} alt={item.title} fill className="object-cover" />
              </div>
              <p className="mt-2 text-[#1F3A93] text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Second row with 2 centered items */}
        <div className="grid grid-cols-2 gap-4">
          {garmentItems.slice(4).map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className={`relative grayscale overflow-hidden ${item.style}`}>
                <Image src={item.src} alt={item.title} fill className="object-cover" />
              </div>
              <p className="mt-2 text-[#1F3A93] text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default FinishedGarmentsSection;
