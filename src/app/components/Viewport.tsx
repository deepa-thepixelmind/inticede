'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

type Brand = {
  id: number;
  src: string;
  alt: string;
};

const brandLogos: Brand[] = [
  { id: 1, src: '/images/Homepage/View1.jpg', alt: 'Naked Brand Logo' },
  { id: 2, src: '/images/Homepage/View2.jpg', alt: 'Clovis Brand Logo' },
  { id: 3, src: '/images/Homepage/View3.jpg', alt: 'Enamor Brand Logo' },
  { id: 4, src: '/images/Homepage/View4.png', alt: 'Jockey Brand Logo' },
  { id: 5, src: '/images/Homepage/View5.jpg', alt: 'Zivame Brand Logo' }
];

// Duplicate brand list for seamless looping
const duplicatedLogos = [...brandLogos, ...brandLogos];

const BrandLogosViewport = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const startScroll = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      }
    });
  };

  const stopScroll = () => {
    controls.stop();
  };

  useEffect(() => {
    startScroll(); // Start on mount
  }, []);

  return (
    <section className="w-full bg-white py-6 overflow-hidden">
      <div className="relative w-full">
        <motion.div className="flex gap-12 w-max" animate={controls}>
          {duplicatedLogos.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-[200px] sm:w-[220px] md:w-[240px] lg:w-[250px] cursor-pointer"
              onMouseDown={() => {
                stopScroll();
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                if (isPaused) {
                  startScroll();
                  setIsPaused(false);
                }
              }}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={180}
                height={100}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogosViewport;
