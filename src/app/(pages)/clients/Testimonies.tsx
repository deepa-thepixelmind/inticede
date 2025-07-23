"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CARD_WIDTH = 280;
const CARD_GAP = 24;
const TOTAL_SHIFT = CARD_WIDTH + CARD_GAP;

const Testimonies = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [, setOffset] = useState(TOTAL_SHIFT);
  const [isMobile, setIsMobile] = useState(false);
  const maxOffset = 2 * TOTAL_SHIFT;
  const minOffset = 0;
  const scrollStep = 20;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < lastScrollPos;

      const rect = sectionRef.current?.getBoundingClientRect();
      const isInSection =
        rect && rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isInSection) return;

      setLastScrollPos(currentScrollPos);

      setOffset((prev) => {
        let nextOffset = prev;

        if (isScrollingUp) {
          nextOffset = Math.min(maxOffset, prev + scrollStep);
        } else {
          nextOffset = Math.max(minOffset, prev - scrollStep);
        }

        controls.start({
          x: nextOffset,
          transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
        });

        return nextOffset;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos, controls, maxOffset, minOffset, scrollStep]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOffset(TOTAL_SHIFT);
          controls.start({
            x: isMobile ? 0 : TOTAL_SHIFT,
            transition: { duration: 0.5 },
          });
        }
      },
      { threshold: 1.0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 mt-[-150px] px-4 md:px-8 flex flex-col md:flex-row gap-8 items-start overflow-hidden"
    >
      {/* Title */}
      <div className="w-full md:w-1/3 pl-2 md:pl-49">
        <h2 className="text-3xl md:text-4xl font-Grown text-[#1F3A93]">Testimonies...</h2>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        className="w-full md:w-3/4 overflow-x-auto md:overflow-hidden py-4 relative pl-2 md:pl-4"
      >
        <motion.div
          animate={controls}
          initial={{ x: isMobile ? 0 : TOTAL_SHIFT }}
          className="flex gap-4 md:gap-6 pr-4"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: isMobile ? 0 : -5 }}
              className="bg-[#D9D9D9] rounded-2xl h-[400px] md:h-[380px] p-6 md:p-14 w-[160px] md:w-[280px] flex-shrink-0 shadow"
            >
              <p className="text-[#1F3A93] text-xs md:text-sm leading-snug font-Montserrat mb-4">
                {i === 0
                  ? "Inticede's design team truly understands how to merge creativity with market relevance. Their ability to interpret trends and translate them into commercially viable collections has made them an essential part of our development process."
                  : "From sourcing specialty fabrics to managing complex production timelines, Inticede handles it all with precision and professionalism. We trust them implicitly to deliver on time and without compromising on quality."}
              </p>
              <p className="text-[#1F3A93] text-xs md:text-sm font-Montserrat mt-4">
                — {i === 0
                  ? "Creative Head, Global Intimatewear Brand"
                  : "Head of Sourcing, Leading Comfortwear Retailer"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonies;