'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const images = [
  '/images/about-us/slide1.png',
  '/images/about-us/slide2.png',
  '/images/about-us/slide3.png',
  '/images/about-us/slide1.png',
  '/images/about-us/slide2.png',
  '/images/about-us/slide3.png',
];

export default function OurVisionSection() {
  return (
    <section className="w-full bg-white text-center">
      {/* Text Content */}
      <div className="px-4 py-16">
        <h2
          className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-tight text-[#1F3A93] max-w-4xl mx-auto"
          style={{ fontFamily: 'Grown Personal Use Only' }}
        >
          While you dream it, we build it,
          <br />
          End-to-end solutions, done seamlessly
        </h2>
        <p className="mt-6 text-gray-700 text-[15px] sm:text-[16px] max-w-3xl mx-auto leading-relaxed font-normal">
          At Inticede, we believe every dream deserves quiet strength — skilled hands, sharp eyes, and seamless systems that transform ideas into reality. <br />
          We’re the force behind your brand, managing the complexities — from technical fittings to global sourcing — so you can focus on imagining freely, creating boldly, and building beautifully. <br />
          Because every vision deserves to rise—with clarity, confidence, and ease.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="-mx-4 relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-pagination mt-4 flex justify-center gap-2"></div>
      </div>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #ccc; /* grey */
          border-radius: 50%;
          opacity: 1;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background-color: white;
          border: 2px solid #ccc;
        }
      `}</style>
    </section>
  );
}
