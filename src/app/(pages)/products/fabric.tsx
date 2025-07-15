'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const fabrics = [
  { image: '/images/product/fabric1.jpg', label: 'Lycra blend' },
  { image: '/images/product/fabric2.jpg', label: 'Bamboo fabric' },
  { image: '/images/product/fabric3.jpg', label: 'Polyamide fabric' },
  { image: '/images/product/fabric4.jpg', label: 'Ivory Silk Duchess Satin' },
  { image: '/images/product/fabric5.jpg', label: 'Italian Lyocell Cotton' },
  { image: '/images/product/fabric6.jpg', label: 'Polyester Stretch Mesh' },
  { image: '/images/product/fabric7.jpg', label: 'Cotton_Spandex Jersey' },
  { image: '/images/product/fabric8.jpg', label: '3yards Solid DTY BRUSHED' },
  { image: '/images/product/fabric9.jpg', label: 'Power Mesh Fabric by the Yard' },
];

export default function FabricsSection() {
  return (
    <section className="py-20 px-4 text-center relative grayscale">
      <h2
        className="text-[50px] leading-[40.5px] font-normal mt-16 "
        style={{ fontFamily: '"Grown Personal Use Only", cursive , text-blue-600' }}
      >
        Fabrics
      </h2>
      <p
        className="text-[16px] leading-[25px] font-bold mt-4 max-w-3xl mx-auto"
        style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
      >
        From concept to creation, we provide all kinds of fabrics required for your
        production needs sourced with precision and reliability
      </p>

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
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          spaceBetween={30}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {fabrics.map((fabric, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <div className="relative w-[295px] h-[295px] mx-auto">
                  <Image
                    src={fabric.image}
                    alt={fabric.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
                >
                  {fabric.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <button className="swiper-prev absolute top-1/2 -left-5 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-xl w-8 h-8 rounded-full hidden lg:flex items-center justify-center leading-none z-10">
          ←
        </button>
        <button className="swiper-next absolute top-1/2 -right-5 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-xl w-8 h-8 rounded-full hidden lg:flex items-center justify-center leading-none z-10">
          →
        </button>
      </div>

      <button className="mt-10 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm">
        Learn more
      </button>
    </section>
  );
}
