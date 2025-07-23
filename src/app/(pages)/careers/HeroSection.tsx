"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const IntimateApparel = [
  { image: "/assets/careers/carousel3.png" },
  { image: "/assets/careers/carousel4.png" },
  { image: "/assets/careers/carousel5.png" },
  { image: "/assets/careers/carousel6.png" },
  { image: "/assets/careers/carousel1.png" },
  { image: "/assets/careers/carousel2.png" },
  { image: "/assets/careers/carousel1.png" },
  { image: "/assets/careers/carousel2.png" },
];

export default function HeroSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[1480px] mx-auto text-center">
        <p className="text-sm font-Montserrat text-[#484948] mb-1">Our careers</p>
        <h2 className="text-3xl md:text-5xl font-Grown text-[#1F3A93] mb-2 leading-11">
          Shape the Future of Intimate
          <br />
          Apparel
        </h2>
        <button className="mt-3 text-sm bg-[#D9D9D9] text-[#484948] font-Montserrat rounded-full px-4 py-1 hover:bg-gray-300 transition">
          Join us today
        </button>
      </div>

      <div className="mt-12 relative max-w-full mx-auto overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={9}
          slidesPerView={4}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            360: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 25 },
            1024: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
        >
          {IntimateApparel.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden shadow-md group"
              >
                <div className="relative w-full h-90 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Careers ${index + 1}`}
                    fill
                    className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                    quality={100}
                  />
                  <div className="absolute bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}