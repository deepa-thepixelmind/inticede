'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const timelineData = [
  {
    year: 2016,
    image: '/images/2016.jpg',
    title: 'FOUNDING OF INTICEDE BSD',
    description: `Inticede BSD Pvt. Ltd. is officially incorporated in Maharashtra as a bold venture to transform intimatewear sourcing in India. Envisioned as a bridge between design and manufacturing, it set out to serve lingerie and swimwear brands globally.`,
  },
  {
    year: 2018,
    image: '/images/2018.jpg',
    title: 'EXPANSION PHASE',
    description: `The company expanded its manufacturing capabilities and entered new global markets, focusing on innovation and client satisfaction.`,
  },
  // Add more entries here
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = timelineData[activeIndex];

  return (
    <section className="px-6 py-12 bg-white text-[#0D0D0D]">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10 text-blue-900">
        Inticede timeline
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-1/3">
          <Image
            src={activeData.image}
            alt={`Image for ${activeData.year}`}
            width={400}
            height={500}
            className="rounded-md object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-sm text-gray-500">{activeData.year}</p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
            {activeData.title}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {activeData.description}
          </p>
        </div>
      </div>

      {/* Timeline bar */}
      <div className="mt-12 flex justify-center items-center gap-4 flex-wrap border-t pt-6">
        {timelineData.map((item, index) => (
          <button
            key={item.year}
            onClick={() => setActiveIndex(index)}
            className={`w-8 h-8 rounded-full border transition-all duration-300 ${
              index === activeIndex
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900 border-blue-900'
            }`}
          >
            <span className="sr-only">{item.year}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
