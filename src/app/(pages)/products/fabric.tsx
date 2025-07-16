'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion'; // 👈 Import animation

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
            className="text-[50px] font-grown mt-16 text-blue-600"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {section.title}
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            className="text-[16px] leading-[25px] font-bold mt-4 max-w-3xl mx-auto"
            style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
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
                  <div className="flex flex-col items-center">
                    <div className="relative w-[295px] h-[295px] mx-auto">
                      <Image
                        src={fabric.image}
                        alt={fabric.label}
                        fill
                        className="object-cover grayscale"
                      />
                    </div>
                    <p
                      className="mt-2 text-sm"
                      style={{
                        fontFamily: '"Montserrat Alternates", sans-serif',
                      }}
                    >
                      {fabric.label}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <button
              className={`swiper-prev-${sectionIdx} absolute top-1/2 -left-5 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-xl w-8 h-8 rounded-full hidden lg:flex items-center justify-center leading-none z-10`}
            >
              ←
            </button>
            <button
              className={`swiper-next-${sectionIdx} absolute top-1/2 -right-5 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-xl w-8 h-8 rounded-full hidden lg:flex items-center justify-center leading-none z-10`}
            >
              →
            </button>
          </div>

          <button className="mt-10 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm">
            Learn more
          </button>
        </section>
      ))}
    </>
  );
}
