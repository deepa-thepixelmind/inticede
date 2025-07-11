'use client';

import React from 'react';
import Image from 'next/image';

const features = [
  {
    image: '/images/About_Us/part1.png',
    title:
      'Experience the benefits of our extensive industry expertise and global connections',
    description:
      'We are a one-stop-shop providing complete sourcing solutions globally, managing each step in the global supply chain process for major intimate wear retailers, brands and manufacturers',
  },
  {
    image: '/images/About_Us/part3.png',
    title:
      'Bring your vision to life with our in-house design innovation market foresight',
    description:
      'Backed by a skilled design and research team INTICEDE helps intimatewear brands, retailers and manufacturers develop innovative collections while staying ahead of domestic and global trends.',
  },
  {
    image: '/images/About_Us/part2.jpg',
    title: 'Smart secure, and on-time logistics globally aligned',
    description:
      'INTICEDE ensures seamless coordination. We manage end-to-end documentation, compliance, and global shipping—helping brands meet timelines efficiently while navigating both domestic and international supply chains with ease.',
  },
];

export default function PartneringAdvantagesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 text-center">
      {/* Heading */}
      <div className="max-w-[1206px] mx-auto px-4">
        <h2
          className="text-[#1F3A93] text-[40px] sm:text-[44px] md:text-[48px] lg:text-[50px] leading-[48.5px] font-normal mb-14"
          style={{ fontFamily: 'Grown Personal Use Only' }}
        >
          The unique advantages of partnering with Inticede
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-12 flex-wrap max-w-[1206px] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-[354px] flex flex-col items-center text-center mx-auto"
          >
            {/* Image */}
            <div className="relative w-[354px] h-[364px] border border-blue-500 grayscale">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Title */}
            <h3
              className="mt-4 text-[20px] leading-[20.5px] font-normal px-2"
              style={{ fontFamily: 'Grown Personal Use Only' }}
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className="mt-2 text-[15px] leading-[20.5px] font-normal text-gray-700 px-3"
              style={{ fontFamily: 'Montserrat' }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
