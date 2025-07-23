// This directive ensures the component only renders on the client-side
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const Explore_section = () => {
  // Refs to target the DOM elements for animation
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // 1. Set up Lenis for smooth scrolling
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Register GSAP's ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 3. Use GSAP Context for safe animations and automatic cleanup
    const ctx = gsap.context(() => {
      // Guard clause to prevent errors if the ref is not attached
      if (!sectionRef.current) return;

      // Create a timeline for the text animations
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", // Start animation when the top of the section is 60% down the viewport
          toggleActions: "play none none none", // Play once on enter
        },
      });

      // Animate the title
      timeline.from(titleRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
      })
      // Animate the paragraph, list, and buttons with a stagger effect
      .from(
        textContentRef.current ? Array.from(textContentRef.current.children) : [],
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5" // Overlap with the previous animation
      );

      // Create a separate animation for the image container
      gsap.from(imageContainerRef.current, {
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "expo.out",
      });
    }, sectionRef); // Scope the context to the main section element

    // 4. Return the cleanup function
    return () => {
      ctx.revert(); // Cleans up all GSAP animations and ScrollTriggers within the context
      lenis.destroy(); // Stops the Lenis scroll loop to prevent memory leaks
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section ref={sectionRef} className="bg-white py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 ref={titleRef} className="text-3xl sm:text-4xl font-semibold text-[#1f3a93] leading-tight mb-6 font-Gloock">
            Explore our premium raw <br /> material collection
          </h2>
          {/* A container for text elements to enable staggering */}
          <div ref={textContentRef}>
            <p className="text-gray-700 mb-4 font-Montserrat">
              Discover the essence of our craftsmanship with an extensive selection of raw material. From premium and functional fabrics to trims, we provide everything you need to create exceptional products.
            </p>
            <ul className="text-gray-800 list-disc list-inside space-y-1 mb-6 font-Montserrat">
              <li>Premium fabrics for every design need.</li>
              <li>Versatile trims and finishes to elevate your creations.</li>
              <li>Add on intimate wear products</li>
            </ul>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="#contact"
                className="px-4 py-2 border border-gray-400 text-gray-800 rounded-md text-sm transition hover:bg-black hover:text-white"
              >
                Learn more
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 text-sm text-white bg-black border border-transparent rounded-md transition hover:text-black hover:bg-white hover:border-black"
              >
                Sign up →
              </Link>
            </div>
          </div>
        </div>
        {/* The image container with its ref and CSS hover group */}
        <div ref={imageContainerRef} className="group relative w-full h-[400px] sm:h-[500px] grayscale">
          <Image
            src="/assets/home/Explore.png"
            alt="Explore"
            fill
            className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Explore_section;