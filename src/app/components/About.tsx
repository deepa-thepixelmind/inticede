'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lenis smooth scroll setup
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal mask for image
      gsap.fromTo(
        imageRef.current,
        {
          clipPath: "inset(30% 30% 30% 30%)",
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Fancy staggered text reveal
      const lines = gsap.utils.toArray(".line") as HTMLElement[];
      gsap.from(lines, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className=" bg-white">
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
        ref={containerRef}
      >
        <div className="grid md:grid-cols-2 items-center gap-14">
          {/* Image Reveal */}
          <div
            className="group relative w-full aspect-[4/3] sm:aspect-[5/3] md:aspect-[16/9] overflow-hidden"
            ref={imageRef}
          >
            <Image
              src="/assets/home/About_us_section.png"
              alt="About Us"
              fill
              className="object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0"
              priority
              quality={100}
            />
          </div>

          {/* Fancy Split Text */}
          <div ref={textBlockRef}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3a93] mb-4 font-Gloock overflow-hidden">
              <span className="block line">About us</span>
            </h2>
            <div className="space-y-2 text-gray-700 text-base md:text-lg leading-relaxed font-Montserrat overflow-hidden">
              <p className="line">
                The name Inticede BSD is inspired by the word &quot;intercede,&quot; meaning
                to act or advocate on someone&apos;s behalf &mdash; a role that perfectly
                reflects the function of a buying and sourcing agency.
              </p>
              <p className="line">
                The latter part of the name pays tribute to the intimate apparel
                industry, which Inticede BSD is committed to supporting and elevating
                through expert sourcing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}