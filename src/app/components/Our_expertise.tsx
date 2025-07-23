"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const expertiseData = [
  {
    title: "Buying Sourcing and Vendor Management",
    image: "/assets/home/Expertise1.png",
  },
  {
    title: "Design and Product Development",
    image: "/assets/home/Expertise2.png",
  },
  {
    title: "Quality Assurance and Compliance",
    image: "/assets/home/Expertise3.png",
  },
  {
    title: "Product Execution and Logistics",
    image: "/assets/home/Expertise4.png",
  },
];

export default function ExpertiseSection() {
  const main = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(".header-anim", { opacity: 0, y: 50 });
      gsap.set(".card-anim", { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "top 75%",
          toggleActions: "restart pause restart pause",
        },
      });

      tl.to(".header-anim", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      tl.to(
        ".card-anim",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.3"
      );
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={main} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10 header-anim">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1f3a93] font-Gloock">
          Our Expertise
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-Montserrat">
          With deep industry knowledge and a global supply network, we specialize
          in sourcing, product development, and quality assurance.
          <br />
          Our expertise lies in delivering tailored, end-to-end solutions for
          intimate and lifestyle apparel brands.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseData.map((item, idx) => (
          <div
            key={idx}
            className="group bg-[#D3D2D0] overflow-hidden text-center p-4 card-anim transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative w-full aspect-[3/6]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                quality={100}
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm text-black font-bold transition-colors duration-300 group-hover:text-[#1f3a93]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}