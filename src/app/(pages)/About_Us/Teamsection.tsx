'use client';

import React from 'react';
import Image from 'next/image';

export default function InticedeTeamSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      {/* Section Heading */}
      <h2
        className="text-center text-[#1F3A93] text-[40px] sm:text-[44px] md:text-[46px] lg:text-[48px] leading-[40.5px] font-normal mb-12"
        style={{ fontFamily: 'Grown Personal Use Only' }}
      >
        INTICEDE TEAM
      </h2>

      {/* Team Member */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Image */}
        <div className="relative w-[300px] sm:w-[360px] lg:w-[402px] h-[489px] shrink-0">
          <Image
            src="/images/About_Us/yusuf2.png" // update path as needed
            alt="Yusuf Dohadwala"
            fill
            className="object-cover grayscale"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl text-left">
          <h3
            className="text-[#1F3A93] text-[28px] sm:text-[32px] lg:text-[35px] leading-[40.5px] mb-4"
            style={{ fontFamily: 'Grown Personal Use Only' }}
          >
            Yusuf Dohadwala, Director
          </h3>
          <p
            className="text-[16px] leading-[18.5px] text-gray-800 font-normal"
            style={{ fontFamily: 'Montserrat' }}
          >
            Yusuf leads Inticede with strategic clarity, sharp industry insight, and a deep understanding of intimatewear sourcing and production. With a legacy of over two decades, he brings a rare balance of creative instinct and operational precision.
            <br /><br />
            As Director, he oversees vendor relationships, trend direction, client management, and global operations. His leadership style is hands-on yet empowering — making sure every process runs smoothly, and every brand feels supported.
          </p>
        </div>
      </div>
    </section>
  );
}
