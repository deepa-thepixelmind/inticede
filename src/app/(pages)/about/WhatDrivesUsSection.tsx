'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhatDrivesUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full bg-white py-16 px-4 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-12 relative"
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-[736px] h-[825px] relative hidden lg:block"
      >
        <Image
          src="/assets/about-us/left-image.jpg"
          alt="Left visual"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Center Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        <h2
          className="text-[#1F3A93] text-[40px] sm:text-[44px] md:text-[48px] lg:text-[50px] leading-[48.5px] font-normal mb-6"
          style={{ fontFamily: 'Grown Personal Use Only' }}
        >
          What Drives Us
        </h2>
        <p
          className="text-[18px] sm:text-[20px] leading-[30px] text-gray-800 font-normal whitespace-pre-line px-4"
          style={{ fontFamily: 'Montserrat Alternates' }}
        >
          Our vision is to be the most trusted global partner for brands and retailers in the intimate apparel, comfortwear, and sportswear industries—delivering innovation, reliability, and long-term value across the supply chain.
          {'\n\n'}
          We empower brands with end-to-end solutions from raw materials to finished garments combining smart design, responsible sourcing, and manufacturing excellence. By staying at the forefront of material innovation, fit engineering, and global trend insights, we enhance product quality, accelerate speed to market, and ensure sustainable growth.
          {'\n\n'}
          At Inticede, we are committed to delivering quality, transparency, and timely execution at every stage of development building long-term partnerships rooted in trust, collaboration, and shared success.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-[736px] h-[825px] relative hidden lg:block"
      >
        <Image
          src="/assets/about-us/right-image.jpg"
          alt="Right visual"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
