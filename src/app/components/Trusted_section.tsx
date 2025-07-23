'use client';
import React, { useRef, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TrustedSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  // Set up Lenis for smooth scrolling (with TypeScript fix)
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Cleanup on unmount
    return () => lenis.destroy();
  }, []);

  // Set up GSAP animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play reset play reset', // Play on enter, reset on leave
        },
      });

      // 2. First Image Animation
      gsap.fromTo(
        image1Ref.current,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'power3.inOut',
          duration: 1.2,
          scrollTrigger: {
            trigger: image1Ref.current,
            start: 'top 85%',
            toggleActions: 'play reset play reset', // Play on enter, reset on leave
          },
        }
      );

      // 3. Second Image Animation
      gsap.fromTo(
        image2Ref.current,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'power3.inOut',
          duration: 1.2,
          scrollTrigger: {
            trigger: image2Ref.current,
            start: 'top 85%',
            toggleActions: 'play reset play reset', // Play on enter, reset on leave
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-4 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left Text Section */}
          <div ref={textRef} className="flex flex-col justify-end h-full">
            <div className="mb-4 sm:mb-6 md:mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F3A93] mb-4 font-Gloock">
                Trusted by
              </h2>
              <p className="text-gray-600 max-w-md text-base leading-relaxed font-Montserrat ">
                We’re proud to be trusted by industry leaders like amante, Nykaa, Jockey, Zivame, and Enamor.
                These collaborations reflect our commitment to quality, reliability, and long-term partnerships
                in the intimate apparel space.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex flex-col sm:flex-row mt-4 gap-4 justify-center">
            {/* First Image */}
            <div
              ref={image1Ref}
              className="relative grayscale border-2 border-blue-400 overflow-hidden transition-all duration-300 hover:grayscale-0 hover:scale-105"
              style={{ width: '368px', height: '619px' }}
            >
              <Image
                src="/assets/home/Trusted_section1.png"
                alt="Jockey Store"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div
              ref={image2Ref}
              className="relative grayscale border-2 border-blue-400 overflow-hidden transition-all duration-300 hover:grayscale-0 hover:scale-105"
              style={{ width: '369px', height: '619px' }}
            >
              <Image
                src="/assets/home/Trusted_section2.png"
                alt="Nykaa Display"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;