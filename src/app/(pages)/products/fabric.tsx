'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

type Fabric = {
  image: string;
  label: string;
};

interface FabricSectionData {
  title: string;
  description: string;
  fabrics: Fabric[];
}

interface FabricsSectionProps {
  sections: FabricSectionData[];
}

export default function FabricsSection({ sections }: FabricsSectionProps) {
  return (
    <>
      {sections.map((section, sectionIdx) => (
        <section
          key={sectionIdx}
          className="py-20 px-4 text-center relative"
        >
          {/* Animated Heading */}
          <motion.h2
            className="text-[50px]  mt-16 text-blue-900 font-Gloock"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {section.title}
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            className="text-[16px] leading-[25px] font-bold mt-4 max-w-3xl mx-auto font-Montserrat text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {section.description}
          </motion.p>

          <div className="mt-12 relative max-w-[1200px] mx-auto">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: `.swiper-next-${sectionIdx}`,
                prevEl: `.swiper-prev-${sectionIdx}`,
              }}
              spaceBetween={30}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {section.fabrics.map((fabric, idx) => (
                <SwiperSlide key={idx}>
                  {/* 👇 1. Added 'group' to create a hover area */}
                  <div className="flex flex-col items-center group">
                    {/* 👇 2. Added 'overflow-hidden' to contain the zoom effect */}
                    <div className="relative w-[295px] h-[295px] mx-auto overflow-hidden">
                      <Image
                        src={fabric.image}
                        alt={fabric.label}
                        fill
                        /* 👇 3. Added hover effects and transition */
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <p
                      className="mt-2 text-sm font-Montserrat font-bold text-black"
                    >
                      {fabric.label}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <button
              className={`swiper-prev-${sectionIdx} absolute top-1/2 -left-5 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 w-8 h-8 rounded-full hidden lg:flex items-center justify-center leading-none z-10`}
            >
              {/* Left Arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              className={`swiper-next-${sectionIdx} absolute top-1/2 -right-5 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 w-8 h-8 rounded-full hidden lg:flex items-center justify-center leading-none z-10`}
            >
              {/* Right Arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          <a 
            href="/your-link-here" 
            className="mt-10 inline-block px-4 py-2 bg-gray-200 rounded-lg text-black text-sm font-Montserrat hover:bg-gray-300"
          >
            Learn more
          </a>
        </section>
      ))}
    </>
  );
}