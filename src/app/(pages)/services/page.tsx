"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Buying and Sourcing",
    description: `INTICEDE sources premium raw materials and finished goods at competitive prices, with a strong focus on quality and timely delivery.\n\nEnd-to-End Solutions\nFrom fabrics and trims to final garments — we manage the complete sourcing and production process under one roof.\n\nSmart Vendor & Product Selection\nWe carefully vet factories and source trend-forward, unique products that help brands stand out.`,
    image: "/assets/services1.png"
  },
  {
    title: "Product Development",
    description: `Innovative Design Solutions\nOur team creates cutting-edge designs tailored to your brand's identity and market needs.\n\nPrototyping & Sampling\nWe develop high-quality prototypes and samples to ensure perfect fit and finish before mass production.\n\nTechnical Expertise\nWith deep knowledge of materials and construction, we help optimize designs for production efficiency.`,
    image: "/assets/services2.png"
  },
  {
    title: "Quality Assurance",
    description: `At INTICEDE, quality is non-negotiable. We ensure every product meets the highest standards through strict, multi-stage inspections and close collaboration with accredited labs for rigorous testing. Timelines are monitored with precision to guarantee on-time delivery, every time.\n\nOur quality assurance process includes:\n\n • Full inspection for specialized and niche orders\n• Rigorous fabric inspection systems\n• Customized testing based on client benchmarks\n• Strict pre-delivery inspections\n• Final checks aligned with client-defined guidelines`,
    image: "/assets/services3.png"
  },
  {
    title: "Product Execution and Logistics",
    description: `At INTICEDE, quality is non-negotiable. We ensure every product meets the highest standards through strict, multi-stage inspections and close collaboration with accredited labs for rigorous testing. Timelines are monitored with precision to guarantee on-time delivery, every time.\n\nOur quality assurance process includes:\n\n- Full inspection for specialized and niche orders\n  • Rigorous fabric inspection systems\n- Customized testing based on client benchmarks\n  • Strict pre-delivery inspections\n- Final checks aligned with client-defined guidelines`,
    image: "/assets/services4.png"
  }
];

export default function ServicesPage() {
  return (
    <section className="w-full relative bg-[#FFFFFF] text-[#1F3A93]">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-[80vh] min-h-[500px] md:h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6">
              {/* Background Image */}
              <div className="absolute w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contains"
                  priority={index === 0}
                />
              </div>

              {/* Title */}
              <div className="absolute top-[12%] md:top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-Grown text-[#1F3A93] drop-shadow-md text-center">
                  Services
                </h1>
              </div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative mt-[60px] md:mt-[20px] h-auto max-h-[60%] md:h-110 z-10 bg-[#FFFFFF]/90 md:bg-[#FFFFFF]/70 p-4 md:p-8 max-w-4xl w-full mx-4 shadow-lg ${index >= 2 ? 'overflow-y-hidden' : 'overflow-y-auto'}`}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#1F3A93] mb-2 md:mb-4 font-Gloock">
                  {slide.title}
                </h2>
                <p className="text-xs mt-10 sm:text-sm md:text-base lg:text-lg whitespace-pre-line font-Montserrat leading-relaxed md:leading-snug text-[#000000] text-center">
                  {slide.description}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Arrows - Always Visible */}
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <div className="swiper-button-prev after:hidden w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] bg-[#00000040] rounded-full flex items-center justify-center shadow-md transition-all hover:bg-[#00000060]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>

          {/* Right Arrow */}
          <div className="swiper-button-next after:hidden w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] bg-[#00000040] rounded-full flex items-center justify-center shadow-md transition-all hover:bg-[#00000060]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </Swiper>
    </section>
  );
}