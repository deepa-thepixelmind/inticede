'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Lenis from 'lenis';

function useLenisAnimation() {
  useEffect(() => {
    const lenis = new Lenis({
      // Optional: customize settings here
     
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

const HeroSection = () => {
  useLenisAnimation(); // Initialize Lenis animation here

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-gray-50"
    >
      
      {/* Hero Image Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-full h-70 sm:h-80 md:h-80 lg:h-[550px] xl:h-[550px] overflow-hidden"
      >
        <div className="absolute inset-0 z-10 "></div>
        <Image
          src="/assets/Home_image.png"
          alt="Intimate wear manufacturing"
          fill
          className="object-cover px-10"
          priority
        />

        {/* Overlay Text on Image */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="space-y-2 md:space-y-4">
              {/* Add overlay text here if needed */}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        className="relative z-30 bg-white py-3 sm:py-6 md:py-10 lg:py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-grown text-[#1F3A93] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 sm:mb-8 md:mb-10 font-Gloock">
              We help intimate wear brands around the world bring quality products to life
            </h2>
            <p className="text-grey-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black">
              With over a decade of experience, Inticede is a one stop solution to all your worries
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;