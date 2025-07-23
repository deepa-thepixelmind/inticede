'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
  const sectionRef = useRef<HTMLElement>(null);
  const connectImageRef = useRef<HTMLDivElement>(null);
  const workImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis for a smooth scrolling experience
    const lenis = new Lenis({
      lerp: 0.1, // Controls the smoothness
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Set up GSAP animations within a context for proper cleanup
    const ctx = gsap.context(() => {
      // Safety check to ensure refs are available
      if (!connectImageRef.current || !workImageRef.current) return;

      // --- Image Parallax Zoom Animation ---
      const images = [
        connectImageRef.current.querySelector('img'),
        workImageRef.current.querySelector('img')
      ];
      
      images.forEach(img => {
        if (img) {
          gsap.to(img, {
            scale: 1.15, // Zoom to 115%
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement, // Trigger based on the container
              start: "top bottom",
              end: "bottom top",
              scrub: true, // Links the animation progress directly to the scrollbar
            },
          });
        }
      });

      // --- Text Reveal Animation ---
      gsap.from(".reveal-text", {
        yPercent: 110,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

    }, sectionRef);

    // 3. Cleanup function to run when the component unmounts
    return () => {
      lenis.destroy();
      ctx.revert(); // Reverts all GSAP animations and triggers
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white pt-12 pb-12 px-6 sm:px-6 lg:px-10">
      {/* Connect & Work Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Connect Image - Wrapped in a Link */}
        <Link href="/connect" className="block">
          <div ref={connectImageRef} className="relative w-full h-[461px] overflow-hidden group">
            <Image
              src="/assets/Connect.png"
              alt="Connect"
              fill
              className="object-cover filter grayscale brightness-70 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="overflow-hidden py-2">
                <h2 className="text-blue-700 text-5xl font-Gloock reveal-text">
                  Connect
                </h2>
              </div>
            </div>
          </div>
        </Link>

        {/* Work Image - Wrapped in a Link */}
        <Link href="/careers" className="block">
          <div ref={workImageRef} className="relative w-full h-[461px] overflow-hidden group">
            <Image
              src="/assets/Work.png"
              alt="Work"
              fill
              className="object-cover filter grayscale brightness-70 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="overflow-hidden py-2">
                <h2 className="text-blue-700 text-5xl font-Gloock reveal-text">
                  WORK
                </h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
