"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/assets/logo/pepe-gema.png","/assets/logo/puma-logo.png",
  "/assets/logo/nayka.png","/assets/logo/van-heusen.png",
  "/assets/logo/john-players.png","/assets/logo/lango.png",
  "/assets/logo/paris-beauty.png","/assets/logo/abhinandan.png",
  "/assets/logo/intimacy.png","/assets/logo/L&C.png",
  "/assets/logo/mysthelle.png","/assets/logo/clovia.png",
  "/assets/logo/mas.png","/assets/logo/sukanya.png",
  "/assets/logo/feeling.png","/assets/logo/bodyline.png",
  "/assets/logo/little-lacy.png","/assets/logo/suman-nathwani.png",
  "/assets/logo/neva.png","/assets/logo/bonjour.png",
  "/assets/logo/snari.png","/assets/logo/sweet-heart.png",
  "/assets/logo/Jockey-Logo.png","/assets/logo/bodycare.png",
  "/assets/logo/nandu-hall.png","/assets/logo/readrose.png",
  "/assets/logo/Bodycare-kids.png","/assets/logo/zivame.png",
  "/assets/logo/zivira.png","/assets/logo/zivame.png",
  "/assets/logo/lady-care.png","/assets/logo/liona.png",
  "/assets/logo/floret.png","/assets/logo/jinal.png",
  "/assets/logo/piccion.png","/assets/logo/enamor.png",
  "/assets/logo/yoke.png","/assets/logo/scan.png",
  "/assets/logo/hot-lips.png","/assets/logo/nest.png",
  "/assets/logo/vstar.png","/assets/logo/frenchie.png",
  "/assets/logo/blossom.png","/assets/logo/lobster.png",
  "/assets/logo/saloni.png","/assets/logo/nest.png",
  "/assets/logo/calibra.png","/assets/logo/Skkinvalue.png",
];

const LogoSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const logoRows = [];
  for (let i = 0; i < 9; i++) {
    logoRows.push(logos.slice(i * 8, (i + 1) * 8));
  }

  return (
    <div className="w-full py-6 sm:py-8 md:py-12 h-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {logoRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="mb-4 sm:mb-6 md:mb-8 px-4 sm:px-8 md:px-[66px] max-w-10/12 mx-auto"
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              speed={4000}
              breakpoints={{
                362: { slidesPerView: 3, spaceBetween: 15 },
                480: { slidesPerView: 4, spaceBetween: 20 },
                640: { slidesPerView: 5, spaceBetween: 25 },
                768: { slidesPerView: 6, spaceBetween: 30 },
                1024: { slidesPerView: 6, spaceBetween: 35 },
                1280: { slidesPerView: 6, spaceBetween: 40 }
              }}
              className="w-full"
            >
              {row.map((logo, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center h-16 sm:h-20 md:h-24 px-1 sm:px-2"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo}
                        alt={`Logo ${index}`}
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 150px"
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;