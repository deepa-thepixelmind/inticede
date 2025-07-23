"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full min-w-[362px] max-w-[1700px] mx-auto h-screen overflow-hidden">
      <Image
        src="/assets/clients-section1.png"
        alt="Background"
        fill
        className="object-contains"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#D9D9D9]/70 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 rounded-sm text-center w-[90%] xs:w-[85%] sm:w-[80%] md:max-w-2xl"
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#1f3a93] leading-snug sm:leading-9 font-Grown">
            Trusted by Industry Leaders. <br />
            Built for Scalable Growth
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;