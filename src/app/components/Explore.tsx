'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RawMaterialSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Text Section */}
          <motion.div
            className="flex flex-col justify-center h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#1F3A93] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Explore our premium raw<br />material collection
            </h2>

            <p className="text-gray-700 text-base mb-6 max-w-xl">
              Discover the essence of our craftsmanship with an extensive selection of raw material.
              From premium and functional fabrics to trims, we provide everything you need to create
              exceptional products.
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Premium fabrics for every design need.</li>
              <li>Versatile trims and finishes to elevate your creations.</li>
              <li>Add on intimate wear products</li>
            </ul>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
                Learn more
              </button>
              <button className="text-sm text-black underline underline-offset-4 hover:text-blue-700">
                Sign up →
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative w-[565px] h-[565px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/Homepage/Explore.jpg"
              alt="Raw Material Display"
              fill
              className="object-cover grayscale"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RawMaterialSection;
