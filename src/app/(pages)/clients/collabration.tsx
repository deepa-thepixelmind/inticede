'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ImpactSection() {
  return (
    <section className="relative w-full px-4 py-12 lg:px-16 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10 min-h-[600px]">
        {/* Left Text Section */}
        <div className="flex-1 max-w-xl flex flex-col justify-end">
          <div>
            {/* Tag */}
            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                Impact since 2016
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] leading-snug font-grown text-blue-900 mb-8">
              Our collaboration have launched products, shaped industries and sparked millions of conversations
            </h2>

            {/* Metrics Section with Square Indicators */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="w-2 h-2 bg-blue-900 mx-auto sm:mx-0 mb-2 rounded-sm" />
                <div className="text-sm text-blue-900 mb-1">
                  We have helped over a hundred ideas take flight
                </div>
                <div className="text-[20px] font-semibold text-blue-900">9M+</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="w-2 h-2 bg-blue-900 mx-auto sm:mx-0 mb-2 rounded-sm" />
                <div className="text-sm text-blue-900 mb-1">
                  We have collaborated with brands around the world
                </div>
                <div className="text-[20px] font-semibold text-blue-900">1000+</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="w-2 h-2 bg-blue-900 mx-auto sm:mx-0 mb-2 rounded-sm" />
                <div className="text-sm text-blue-900 mb-1">
                  Every product build is a dream come true
                </div>
                <div className="text-[20px] font-semibold text-blue-900">10M+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Swiper Image Section */}
        <div className="flex-shrink-0 w-full lg:w-[471px] overflow-hidden grayscale">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
          >
            {[
              '/images/clients/collab1.jpg',
              '/images/clients/collab2.png',
              '/images/clients/collab3.png',
              '/images/clients/collab4.jpg',
            ].map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-[100px] sm:h-[400px] lg:h-[550px]">
                  <Image
                    src={src}
                    alt={`Collab image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Caption */}
          <p className="text-sm text-center text-black mt-2">
            Mr. Rahul Sharma, Vice President Nykaa at Inticede office
          </p>
        </div>
      </div>
    </section>
  );
}
