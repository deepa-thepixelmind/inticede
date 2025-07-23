'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function YusufDohadwalaSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[#1F3A93] text-[40px] sm:text-[44px] md:text-[46px] lg:text-[48px] leading-[40.5px] font-normal text-center mb-12"
        style={{ fontFamily: 'Grown Personal Use Only' }}
      >
        Yusuf Dohadwala
      </motion.h2>

      {/* Image + Text layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-[354px] h-[480px] shrink-0"
        >
          <Image
            src="/assets/about-us/yusuf.png"
            alt="Yusuf Dohadwala"
            fill
            className="object-cover grayscale"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl text-left text-[16px] leading-[18.5px] text-gray-800"
          style={{ fontFamily: 'Montserrat Alternates' }}
        >
          <p className="mb-3">
            Yusuf Dohadwala is the driving force behind Inticede BSD — a visionary with over 20 years of experience in the innerwear, comfortwear, and activewear industry.
          </p>
          <p className="mb-3">
            Personally connected with over 1,000+ brands and retailers across India and abroad, Yusuf has built more than just a company — he has shaped the ecosystem around it. His leadership bridges the gap between design, sourcing, and execution, empowering brands with strategic clarity and reliable systems.
          </p>
          <ul className="list-disc ml-5 mb-3">
            <li>CEO of the Intimate Apparel Association of India (IAAI)</li>
            <li>Joint Secretary (West) at FOHMMA (Federation of Hosiery Manufacturers Associations)</li>
            <li>Chief Organizer of major B2B trade shows like INTIMASIA, Source NXT, Lingerie Fashion Week, and Change Masters — bringing the industry together under one roof</li>
            <li>Chief Editor & Publisher of Inner Secrets, India’s leading B2B magazine for intimatewear for over 20 years</li>
          </ul>
          <p>
            Under Yusuf’s guidance, Inticede has become India’s first and leading buying, sourcing, and design house dedicated to intimatewear — servicing 100+ brands and managing 200+ vendor partnerships globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
