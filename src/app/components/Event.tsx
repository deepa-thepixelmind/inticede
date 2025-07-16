'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const events = [
  { id: 1, title: 'Intimasia Kochi 2018', src: '/images/Homepage/Event1.jpg' },
  { id: 2, title: 'Intimasia Mumbai 2023', src: '/images/Homepage/Event2.jpg' },
  { id: 3, title: 'SIUF 2025', src: '/images/Homepage/Event3.jpg' },
  { id: 4, title: 'Intimasia Chennai 2018', src: '/images/Homepage/Event4.jpg' },
  { id: 5, title: 'Intimasia Kochi 2018', src: '/images/Homepage/Event5.jpg' },
  { id: 6, title: 'SIUF 2025', src: '/images/Homepage/Event66.jpg' },
];

const EventsSection = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-16 sm:py-20 md:py-24 text-center relative overflow-hidden">
      {/* Animated Heading */}
      <motion.h2
        className="text-[#1F3A93] text-3xl sm:text-4xl font-semibold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Events
      </motion.h2>

      {/* Arcs */}
      <div className="relative max-w-max mx-auto">
        {/* Left Arc */}
        <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 z-0">
          <svg width="120" height="240" viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M120,0 A120,120 0 0 0 120,240"
              stroke="#1F3A93"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Right Arc */}
        <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 z-0">
          <svg width="120" height="240" viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,0 A120,120 0 0 1 0,240"
              stroke="#1F3A93"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Event Grid */}
        <div className="bg-white px-4 py-6 sm:px-6 sm:py-10 rounded shadow-md inline-block relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative grayscale overflow-hidden rounded-md w-[278px] h-[258px] z-10">
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-xs text-[#1F3A93]">{event.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
