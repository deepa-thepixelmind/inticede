'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brandLogos = [
  '/images/clients/brand1.jpg',
  '/images/clients/brand2.jpg',
  '/images/clients/brand3.jpg',
  '/images/clients/brand4.png',
  '/images/clients/brand5.jpg',
  '/images/clients/brand6.png',
  '/images/clients/brand7.png',
  '/images/clients/brand8.png',
  '/images/clients/brand9.png',
  '/images/clients/brand10.png',
  '/images/clients/brand11.png',
  '/images/clients/brand12.png',
  '/images/clients/brand13.png',
  '/images/clients/brand14.png',
  '/images/clients/brand15.png',
  '/images/clients/brand16.png',
  '/images/clients/brand17.png',
  '/images/clients/brand18.png',
  '/images/clients/brand19.png',
  '/images/clients/brand20.png',
  '/images/clients/brand21.png',
  '/images/clients/brand22.png',
  '/images/clients/brand23.png',
  '/images/clients/brand24.png',
  '/images/clients/brand25.png',
  '/images/clients/brand26.png',
  '/images/clients/brand27.png',
  '/images/clients/brand28.png',
  '/images/clients/brand29.png',
  '/images/clients/brand30.png',
  '/images/clients/brand31.png',
  '/images/clients/brand32.png',
  '/images/clients/brand33.png',
  '/images/clients/brand34.png',
  '/images/clients/brand35.png',
  '/images/clients/brand36.png',
  '/images/clients/brand37.png',
  '/images/clients/brand38.png',
  '/images/clients/brand39.png',
  '/images/clients/brand40.png',
  '/images/clients/brand41.png',
  '/images/clients/brand42.png',
  '/images/clients/brand43.png',
  '/images/clients/brand44.png',
  '/images/clients/brand45.png',
  '/images/clients/brand46.png',
  '/images/clients/brand47.png',
  '/images/clients/brand48.png',
];

const rowsPerColumn = 8;
const totalSlides = Math.ceil(brandLogos.length / rowsPerColumn);

export default function BrandsGridScroller() {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        spaceBetween={30}
        allowTouchMove={false}
        breakpoints={{
          0: {
            slidesPerView: 2, // extra small devices
          },
          640: {
            slidesPerView: 3, // small devices (like phones)
          },
          768: {
            slidesPerView: 5, // medium devices (tablets)
          },
          1024: {
            slidesPerView: 6, // large devices (desktops)
          },
        }}
      >
        {Array.from({ length: totalSlides * 3 }).map((_, slideIdx) => (
          <SwiperSlide
            key={slideIdx}
            style={{ width: 'auto' }}
            className="grid grid-rows-8 gap-5"
          >
            {Array.from({ length: rowsPerColumn }).map((_, rowIdx) => {
              const brandIndex =
                (slideIdx % totalSlides) * rowsPerColumn + rowIdx;
              const src =
                brandLogos[brandIndex % brandLogos.length];
              return (
                <div
                  key={`${slideIdx}-${rowIdx}`}
                  className="w-[160px] h-[80px] pt-1 pb-1 flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`Brand ${brandIndex + 1}`}
                    width={140}
                    height={140}
                    className="object-contain w-full h-full"
                  />
                </div>
              );
            })}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
