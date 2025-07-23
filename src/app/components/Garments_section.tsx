'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const garmentItems = [
  {
    id: 1,
    title: 'Intimate wear',
    src: '/assets/home/Intimate-wear1.png',
    style: 'w-[210px] h-[209px]'
  },
  {
    id: 2,
    title: 'Menswear',
    src: '/assets/home/Menswear2.png',
    style: 'w-[210px] h-[210px]'
  },
  {
    id: 3,
    title: 'Loungewear',
    src: '/assets/home/Loungewear3.png',
    style: 'w-[209px] h-[210px]'
  },
  {
    id: 4,
    title: 'Thermal Wear',
    src: '/assets/home/Thermal-Wear4.png',
    style: 'w-[211px] h-[211px]'
  },
  {
    id: 5,
    title: 'Shapewear',
    src: '/assets/home/Shapewear5.png',
    style: 'w-[209px] h-[210px]'
  },
  {
    id: 6,
    title: 'Athleisure wear',
    src: '/assets/home/Athleisure-wear6.png',
    style: 'w-[209px] h-[209px]'
  }
];

const FinishedGarmentsSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 text-center">
      {/* Title */}
      <motion.div
        className="mb-12 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-600 mb-1">Explore</p>
        <h2 className="text-[#1F3A93] text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-snug font-Gloock">
          A curated range of finished garments<br />
          for comfort, function, and modern style
        </h2>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto font-Montserrat">
          Discover our diverse collection of finished products, thoughtfully crafted to suit every need.
        </p>
      </motion.div>

      {/* Image Grid */}
      <div className="flex flex-col items-center px-4">
        {/* First row with 4 items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {garmentItems.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center group" // Added 'group' for hover targeting
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`relative grayscale group-hover:grayscale-0 overflow-hidden transition-all duration-300 ease-in-out ${item.style}`}>
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" // Added hover scale and transition
                />
              </div>
              <p className="mt-2 text-[#1F3A93] text-sm font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Second row with 2 centered items */}
        <div className="grid grid-cols-2 gap-4">
          {garmentItems.slice(4).map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center group" // Added 'group' for hover targeting
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`relative grayscale group-hover:grayscale-0 overflow-hidden transition-all duration-300 ease-in-out ${item.style}`}>
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" // Added hover scale and transition
                />
              </div>
              <p className="mt-2 text-[#1F3A93] text-sm font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
          Learn more
        </button>
      </motion.div>
    </section>
  );
};

export default FinishedGarmentsSection;
