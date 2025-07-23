'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

const teamMembers = [
  {
    name: 'Yusuf Dohadwala, Director',
    image: '/assets/about-us/yusuf2.png',
    bio: `Yusuf leads Inticede with strategic clarity, sharp industry insight, and a deep understanding of intimatewear sourcing and production. With a legacy of over two decades, he brings a rare balance of creative instinct and operational precision.

As Director, he oversees vendor relationships, trend direction, client management, and global operations. His leadership style is hands-on yet empowering — making sure every process runs smoothly, and every brand feels supported.`,
  },
  {
    name: 'Hetashree Solanki, Business Head',
    image: '/assets/about-us/Team2.jpg',
    bio: `With over 20 years of experience in fashion and sourcing, Hetashree brings a unique blend of design sensibility and business insight to Inticede. From styling Bollywood icons to leading her own couture label, her journey has been defined by creativity, precision, and purpose.

At Inticede, she leads sourcing, product development, and client relationships - building strong connections between 100+ global brands and over 1,000 suppliers across Asia. Known for her trend intuition and client-focused approach, Hetashree plays a key role in driving innovation across lingerie, loungewear, and activewear.`,
  },
  {
    name: 'Nasir Momin, Head of Operations',
    image: '/assets/about-us/Team3.jpg',
    bio: `With over a decade at Inticede BSD, Nasiruddin Momin brings deep operational expertise and financial acumen to the company’s core. Starting as a Logistics Executive and rising to lead Operations and Logistics, he has been instrumental in shaping the backend systems that power Inticede’s seamless global delivery.

His background at Wipro BPO and training in accounting and Microsoft Office sharpened his eye for efficiency, detail, and process management - making him a key driver behind Inticede’s timely execution, cost control, and vendor coordination.`,
  },
];

export default function InticedeTeamSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-[#1F3A93] text-[40px] sm:text-[44px] md:text-[46px] lg:text-[48px] leading-[40.5px] font-normal mb-12"
        style={{ fontFamily: 'Grown Personal Use Only' }}
      >
        INTICEDE TEAM
      </motion.h2>

      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.custom-team-pagination' }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative w-[300px] sm:w-[360px] lg:w-[402px] h-[489px] shrink-0"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </motion.div>

                {/* Text */}
                <div className="max-w-xl text-left mt-6 lg:mt-0">
                  <motion.h3
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-[#1F3A93] text-[28px] sm:text-[32px] lg:text-[35px] leading-[40.5px] mb-4"
                    style={{ fontFamily: 'Grown Personal Use Only' }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-[16px] leading-[18.5px] text-gray-800 font-normal whitespace-pre-line font-Montserrat"
                    //style={{ fontFamily: 'Montserrat' }}
                  >
                    {member.bio}
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination below the image+text and centered */}
        <div className="custom-team-pagination mt-8 flex justify-center gap-2"></div>

        {/* Pagination Styling */}
        <style jsx global>{`
          .custom-team-pagination .swiper-pagination-bullet {
            background-color: #999 !important;
            opacity: 1 !important;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            transition: background-color 0.3s ease;
          }
          .custom-team-pagination .swiper-pagination-bullet-active {
            background-color: #333 !important;
          }
        `}</style>
      </div>
    </section>
  );
}
