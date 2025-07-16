'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExpertisePage = () => {
  const expertiseItems = [
    {
      id: 1,
      title: "Buying Sourcing and Vendor Management",
      image: "/images/Homepage/Expertise1.jpg",
      highlighted: false,
    },
    {
      id: 2,
      title: "Design and Product Development",
      image: "/images/Homepage/Expertise2.jpg",
      highlighted: false,
    },
    {
      id: 3,
      title: "Quality Assurance and Compliance",
      image: "/images/Homepage/Expertise3.png",
      highlighted: false,
    },
    {
      id: 4,
      title: "Product Execution and Logistics",
      image: "/images/Homepage/Expertise4.jpg",
      highlighted: false,
    },
  ];

  return (
    <section className="relative w-full min-h-screen py-16 sm:py-20 md:py-24">
      <div className="max-w-9xl px-8 sm:px-10 lg:px-12 mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1F3A93] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
            Our Expertise
          </h2>

          <motion.div
            className="max-w-4xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.p
              className="text-gray-700 text-base text-center"
              style={{
                fontFamily: 'Montserrat Alternates, sans-serif',
                lineHeight: '27px',
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              With deep industry knowledge and a global supply network, we specialize in sourcing, product development, and quality assurance.
            </motion.p>

            <motion.p
              className="text-gray-700 text-base text-center"
              style={{
                fontFamily: 'Montserrat Alternates, sans-serif',
                lineHeight: '27px',
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Our expertise lies in delivering tailored, end-to-end solutions for intimate and lifestyle apparel brands.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {expertiseItems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative bg-gray-200 rounded-lg shadow-lg overflow-hidden ${
                item.highlighted ? 'ring-2 ring-blue-500' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Image Container */}
              <div
                className="relative overflow-hidden grayscale mx-auto"
                style={{
                  width: '100%',
                  height: '447px',
                  maxWidth: '252px',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-300"
                />
              </div>

              {/* Title */}
              <div className="p-4 sm:p-6">
                <h3
                  className="text-gray-500 font-medium text-center"
                  style={{
                    fontFamily: 'Montserrat Alternates, sans-serif',
                    fontSize: '16px',
                    lineHeight: '27px',
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisePage;
