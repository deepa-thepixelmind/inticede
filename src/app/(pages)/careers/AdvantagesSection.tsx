"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AdvantageCard, { Advantage } from "./AdvantageCard";

gsap.registerPlugin(ScrollTrigger);

const advantages: Advantage[] = [
  {
    title: "Creative culture",
    description: "We foster an environment where fresh thinking thrives. At Inticede, every voice is valued, and your ideas shape real products.",
    icon: "/assets/creative-culture.png",
    active: true,
  },
  {
    title: "Room to Grow",
    description: "We're a growing company, and we want you to grow with us. From mentorship to responsibility, we support your career trajectory.",
    icon: "/assets/Room-Grow.png",
  },
  {
    title: "Global Exposure",
    description: "Collaborate with international brands and suppliers across India and Asia. Learn, adapt, and make your mark on a global stage.",
    icon: "/assets/Global-Exposure.png",
  },
  {
    title: "Purpose Driven",
    description: "We are committed to ethics and planet-first values. Build meaningful solutions that make a difference.",
    icon: "/assets/Global-Exposure.png", // Note: This icon seems duplicated from the original code
  },
];

export default function AdvantagesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const container = containerRef.current;
    const scrollTrack = scrollTrackRef.current;
    if (!container || !scrollTrack) return;

    const initialOffset = window.innerWidth * 0.6;
    const totalScroll = scrollTrack.scrollWidth - window.innerWidth + initialOffset + 150;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scrollTrack,
        { x: initialOffset },
        {
          x: -totalScroll + initialOffset,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollTrack.scrollWidth + 150}`,
            scrub: 1.5,
            pin: true,
            anticipatePin: 2,
            invalidateOnRefresh: true,
          }
        }
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);
  
  return (
    <section ref={containerRef} className="relative h-[120vh] bg-white overflow-hidden">
      <div className="sticky top-0 z-10 ml-3 bg-white pt-12 px-4 md:px-16">
        <p className="text-sm font-Montserrat text-[#484948] mb-1">Our advantages</p>
        <h2 className="text-3xl md:text-5xl font-Grown text-[#1F3A93]">
          Why work with us?
        </h2>
      </div>

      <div
        ref={scrollTrackRef}
        className="flex w-max gap-6 py-20 mt-[-55] pl-[120px] pr-[40px] min-h-[300px]"
      >
        {advantages.map((item, i) => (
          <AdvantageCard
            key={i}
            item={item}
            index={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
          />
        ))}
      </div>

      <div className="bg-[#E5E5E5] rounded-[30px] lg:rounded-[55px] mx-4 lg:mx-10 px-4 md:px-6 lg:px-10 py-8 md:py-10 max-w-7xl text-center mt-[35px] lg:mt-[-5px] mb-10 lg:mb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1F3A93] leading-tight font-serif">
          Lead the Change in Comfortwear <br className="hidden md:block" />
          Innovation
        </h2>
        <p className="mt-2 md:mt-4 max-w-[85%] md:max-w-[55ch] mx-auto font-Montserrat text-gray-700 text-xs md:text-sm lg:text-base leading-snug">
          At Inticede, we don&apos;t follow trends we set them. Join a team where your
          creativity, curiosity, and craftsmanship drive products that redefine
          fit, function, and fashion across global markets.
        </p>
      </div>
    </section>
  );
}