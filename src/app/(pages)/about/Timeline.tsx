"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: 2016,
    title: "Founding of Inticede BSD",
    image: "/assets/about-us/yusuf3.jpg",
    description:
      "Inticede BSD Pvt. Ltd. is officially incorporated in Maharashtra as a bold venture to transform intimatewear sourcing in India. Envisioned as a bridge between design and manufacturing, it set out to serve lingerie and swimwear brands globally.",
  },
  {
    year: 2020,
    title: "FIRST BIG PLATFORM BREAKTHROUGH",
    image: "/assets/about-us/Timeline2.jpg",
    description:
      "Verified vendor on IndiaMART. Shifted focus from boutique clients to large-scale solutions with over 35 factory partnerships.",
  },
  {
    year: 2022,
    title: "GOING GLOBAL WITH LITTLE LACEY",
    image: "/assets/about-us/Timeline3.jpg",
    description:
      "Little Lacey partners with Inticede to co-develop modern, sustainable collections, strengthening Indian market presence.",
  },
  {
    year: 2023,
    title: "POWERHOUSE PARTNERSHIPS",
    image: "/assets/about-us/Timeline4.png",
    description: [
      "Zivame partnered to streamline sampling.",
      "Clover Group launched capsule collection with Inticede.",
      "Launched INTRIMS trims division: Loop-a-Lock® & Foamscoop®.",
    ],
  },
  {
    year: 2024,
    title: "SHOWSTOPPER AT INTERFILIÈRE PARIS",
    image: "/assets/about-us/Timeline5.jpg",
    description:
      "Debuted at Paris Expo showcasing sustainable trims and earned special mention in Lingerie Insight for innovation.",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = horizontalRef.current;
    const totalSlides = timelineData.length;
    const horizontalScrollLength = (totalSlides - 1) * window.innerWidth;

    gsap.to(sections, {
      x: () => `-${horizontalScrollLength}`,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${horizontalScrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-screen h-screen overflow-hidden bg-[#f4f4f4] ">
      <div ref={horizontalRef} className="flex h-screen w-[500vw]">
        {timelineData.map((item) => (
          <div
            key={item.year}
            className="w-screen h-screen flex items-center justify-center px-10 py-8 flex-shrink-0"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
              {/* Left: Image */}
              <div className="w-full md:w-1/2 flex justify-center grayscale">
                <Image
                  src={item.image}
                  alt={`Year ${item.year}`}
                  width={400}
                  height={400}
                  className=" object-cover"
                />
              </div>

              {/* Right: Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left ">
                <h2 className="text-blue-900 text-xl font-bold">{item.year}</h2>
                <h3 className="text-blue-800 text-2xl font-semibold mt-2 ">
                  {item.title}
                </h3>
                {Array.isArray(item.description) ? (
                  <ul className="mt-4 list-disc list-inside text-gray-700">
                    {item.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-gray-700 font-Montserrat">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
