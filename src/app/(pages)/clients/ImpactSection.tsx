"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Counter from "./Counter"; // Import the counter component
import "swiper/css";
import "swiper/css/autoplay";

const images = [
  "/assets/clients/crousal1.png",
  "/assets/clients/crousal2.png",
  "/assets/clients/crousal3.png",
  "/assets/clients/crousal4.png",
];

const ImpactSection = () => {
  return (
    <section className="w-full bg-[#F6F6F6] px-4 sm:px-6 md:px-16 py-8 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
      {/* Left Content */}
      <div className="md:w-1/2 ml-0 sm:ml-4 md:ml-10 xl:mt-45 lg:ml-20 xl:ml-40">
        <span className="inline-block bg-[#D9D9D9] text-[#000000] text-xs sm:text-sm font-semibold font-Montserrat px-3 py-1 rounded-full mb-3 sm:mb-4">
          Impact since 2016
        </span>
        <h2 className="text-[#1F3A93] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Grown leading-tight sm:leading-11 mb-4 sm:mb-6">
          <span className="block sm:inline">Our collaboration have launched</span>{' '}
          <span className="block sm:inline">products, shaped industries and <br/></span>{' '}
          <span className="block sm:inline">sparked millions of<br/></span>{' '}
          <span className="block sm:inline">conversations</span>
        </h2>

        {/* Stats */}
        <div className="mt-8 sm:mt-16 md:mt-20 lg:mt-30 mr-0 sm:mr-15 grid grid-cols-1 font-Montserrat sm:grid-cols-3 gap-10 sm:gap-6 text-[#1F3A93]">
          <div className="text-center relative px-2 sm:px-0">
            <div className="absolute -top-4 sm:-top-6 ml-15 lg:ml-0 left-6 transform -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1F3A93]"></div>
            <div className="text-xs sm:text-sm md:text-base mb-1">
              <span className="block sm:inline mr-3">We have helped over a<br/></span>
              <span className="block sm:inline">hundred ideas take flight</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-4xl font-Grown">
              <Counter target={9} suffix="M+" />
            </div>
          </div>
          <div className="text-center relative px-2 sm:px-0">
            <div className="absolute -top-4 sm:-top-6 ml-19 lg:ml-0 left-3 transform -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1F3A93]"></div>
            <div className="text-xs sm:text-sm md:text-base mb-1">
              <span className="block sm:inline ml-3 lg:ml-0">We have collaborated with</span>{' '}
              <span className="block sm:inline lg:mr-3">brands around the world</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-4xl font-Grown">
              <Counter target={1000} suffix="+" />
            </div>
          </div>
          <div className="text-center relative px-2 sm:px-0">
            <div className="absolute -top-4 sm:-top-6 ml-19 lg:ml-0 left-5 transform -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1F3A93]"></div>
            <div className="text-xs sm:text-sm md:text-base mb-1">
              <span className="block sm:inline">Every product build is a</span>{' '}
              <span className="block sm:inline mr-4 lg:ml-[-26]">dream come true</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-4xl font-Grown">
              <Counter target={10} suffix="M+" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Swiper Image Slider */}
      <div className="md:w-1/2 w-full max-w-md mr-0 sm:mr-4 md:mr-8 xl:mb-30 lg:mr-29 mt-6 sm:mt-8 md:mt-11">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, reverseDirection: false }}
          loop={true}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[480px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-contain brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  quality={100}
                />
                <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-xs sm:text-sm font-extrabold font-Montserrat text-[#000000] mt-2 text-center sm:text-left px-2 sm:px-0">
          Mr. Rahul Sharma, Vice President Nykaa at Inticede office
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;