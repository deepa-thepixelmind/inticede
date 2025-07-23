'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { id: 1, title: 'Intimasia Kochi 2018', src: '/assets/Event1.png' },
  { id: 2, title: 'Intimasia Mumbai 2023', src: '/assets/Event2.png' },
  { id: 3, title: 'SIUF 2025', src: '/assets/Event3.png' },
  { id: 4, title: 'Intimasia Chennai 2018', src: '/assets/Event4.png' },
  { id: 5, title: 'Intimasia Kochi 2018', src: '/assets/Event5.png' },
  { id: 6, title: 'SIUF 2025', src: '/assets/Event6.png' },
];

const EventsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      
    });

    const raf = (time: DOMHighResTimeStamp) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fancy fade + letter spacing
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, letterSpacing: '-0.1em' },
        {
          opacity: 1,
          y: 0,
          letterSpacing: '0em',
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      // Card parallax + skew + scale + fade
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            skewY: 6,
            transformOrigin: 'center bottom',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            skewY: 0,
            ease: 'power3.out',
            duration: 1.2,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Arcs fade in
      gsap.from('.arc-left', {
        x: -60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });

      gsap.from('.arc-right', {
        x: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-full bg-[#F2F2F2] py-20 sm:py-24 md:py-28 text-center relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Section Title */}
      <h2
        ref={headingRef}
        className="text-[#1F3A93] text-4xl sm:text-5xl font-semibold mb-16 font-Gloock tracking-tight"
      >
        Events
      </h2>

      {/* Arcs */}
      <div className="relative max-w-max mx-auto">
        <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 z-0 arc-left">
          <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
            <path
              d="M120,0 A120,120 0 0 0 120,240"
              stroke="#1F3A93"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 z-0 arc-right">
          <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
            <path
              d="M0,0 A120,120 0 0 1 0,240"
              stroke="#1F3A93"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Event Grid */}
        <div className="bg-white px-4 py-6 sm:px-8 sm:py-12 shadow-md inline-block relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {events.map((event, index) => (
              <div
                key={event.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                
                className="flex flex-col items-center group transition-all"
              >
                <div className="relative overflow-hidden w-[278px] h-[258px] perspective-1000">
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 group-hover:rotate-[0.3deg] group-hover:grayscale-0 grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                </div>
                <p className="mt-3 text-sm text-[#1F3A93] font-Montserrat">
                  {event.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
