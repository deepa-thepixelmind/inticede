'use client';
import React from 'react';
import Image from 'next/image';

const events = [
  {
    id: 1,
    title: 'Intimasia Kochi 2018',
    src: '/images/Homepage/Event1.jpg',
    style: 'w-[278px] h-[258px]'
  },
  {
    id: 2,
    title: 'Intimasia Mumbai 2023',
    src: '/images/Homepage/Event2.jpg',
    style: 'w-[280px] h-[258px]'
  },
  {
    id: 3,
    title: 'SIUF 2025',
    src: '/images/Homepage/Event3.jpg',
    style: 'w-[280px] h-[258px]'
  },
  {
    id: 4,
    title: 'Intimasia Chennai 2018',
    src: '/images/Homepage/Event4.jpg',
    style: 'w-[278px] h-[258px]'
  },
  {
    id: 5,
    title: 'Intimasia Kochi 2018',
    src: '/images/Homepage/Event5.jpg',
    style: 'w-[278px] h-[258px]'
  },
  {
    id: 6,
    title: 'SIUF 2025',
    src: '/images/Homepage/Event66.jpg',
    style: 'w-[278px] h-[258px]'
  }
];

const EventsSection = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 md:py-24 text-center">
      <h2 className="text-[#1F3A93] text-3xl sm:text-4xl font-semibold mb-12">Events</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col items-center">
            <div className={`relative grayscale overflow-hidden rounded-md ${event.style}`}>
              <Image
                src={event.src}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-[#1F3A93]">{event.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
