'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const servicesData = [
  {
    title: 'Design and Product Development',
    description: `
INTICEDE sources premium raw materials and finished goods at competitive prices, with a strong focus on quality and timely delivery.

End-to-End Solutions
From fabrics and trims to final garments — we manage the complete sourcing and production process under one roof.

Smart Vendor & Product Selection
We carefully vet factories and source trend-forward, unique products that help brands stand out.
    `,
    image: '/images/Service/Service1.jpg',
  },
  {
    title: 'Product Development',
    description: `
At INTICEDE, quality is non-negotiable. We ensure every product meets the highest standards through strict, multi-stage inspections and close collaboration with accredited labs for rigorous testing. Timelines are monitored with precision to guarantee on-time delivery, every time.

Our quality assurance process includes:
- Full inspection for specialized and niche orders
- Rigorous fabric inspection systems
- Customized testing based on client benchmarks
- Strict pre-delivery inspections
- Final checks aligned with client-defined guidelines
    `,
    image: '/images/Service/Service2.jpg',
  },
];

const ServicesSwiper = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .swiper-button-prev,
      .swiper-button-next {
        background-color: white;
        border-radius: 9999px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50% !important;
        transform: translateY(-50%);
        z-index: 50;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .swiper-button-prev {
        left: 20px !important;
      }

      .swiper-button-next {
        right: 20px !important;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        display: none;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        loop={true}
        className="h-full w-full"
      >
        {servicesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Rotated & Scaled Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rotate-90 scale-[2.0] opacity-80"
                priority
              />

              {/* Header on Top */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                <h1 className="font-[Grown Personal Use Only] text-[50px] text-[#1c2d8c]">
                  Services
                </h1>
              </div>

              {/* Content Box in Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10 text-center">
                <div className="bg-white/70 max-w-[804px] w-full p-6 rounded-md shadow-lg">
                  <h2 className="text-[28px] font-semibold text-[#1c2d8c] mb-4">
                    {item.title}
                  </h2>
                  <p className="text-black text-base leading-[40.5px] whitespace-pre-line tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Custom Navigation Arrows */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 custom-prev cursor-pointer">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Image
                    src="/images/Service/left-arrow.png"
                    alt="Previous"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 custom-next cursor-pointer">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Image
                    src="/images/Service/right-arrow.png"
                    alt="Next"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSwiper;
