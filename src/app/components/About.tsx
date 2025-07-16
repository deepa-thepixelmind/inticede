'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-white py-1 sm:py-1 md:py-1 lg:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden shadow-lg">
              <Image
                src="/images/Homepage/About.png"
                alt="Inticede team member presenting intimate apparel solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-blue-600 mb-6 sm:mb-8 md:mb-10 leading-tight"
              >
                About us
              </motion.h2>

              {/* Content */}
              <motion.div
                className="space-y-4 sm:space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
                >
                  The name Inticede BSD is inspired by the word "intercede," 
                  meaning to act or advocate on someone's behalf — a role 
                  that perfectly reflects the function of a buying and 
                  sourcing agency.
                </motion.p>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
                >
                  The latter part of the name pays tribute to the intimate 
                  apparel industry, which Inticede BSD is committed to 
                  supporting and elevating through expert sourcing solutions.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
