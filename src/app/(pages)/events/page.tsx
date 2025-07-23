"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type SwiperCore from 'swiper';

// Import Swiper styles
import 'swiper/css';

const EventSliderSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div
      className="w-full flex flex-col items-center py-15 mt-2 bg-[#D3D2D0] overflow-hidden"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={25}
        grabCursor={true}
        speed={5000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className="w-full max-w-8xl px-4"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8,].map((num, i) => (
          <SwiperSlide
            key={i}
            className="!w-[75%] md:!w-[60%] transition-transform duration-500 ease-out"
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-[180px] md:h-[450px] overflow-hidden shadow-md"
            >
              <Image
                src={`/assets/events/events${num}.png`}
                alt={`Event Slide ${num}`}
                fill
                priority={i === 0}
                className="object-contans"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSliderSection;