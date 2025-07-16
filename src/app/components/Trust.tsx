'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TrustedSection = () => {
  return (
    <section className="w-full bg-white py-4 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left Text Section */}
          <motion.div
            className="flex flex-col justify-end h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Right Image Section */}
          <div className="flex flex-col sm:flex-row mt-4 gap-4 justify-center">
            {/* First Image */}
            <motion.div
              className="relative grayscale border-2 border-blue-400 overflow-hidden"
              style={{ width: '368px', height: '619px' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/Homepage/Trust1.jpg"
                alt="Jockey Store"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="relative grayscale border-2 border-blue-400 overflow-hidden"
              style={{ width: '369px', height: '619px' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/Homepage/Trust2.png"
                alt="Nykaa Display"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
