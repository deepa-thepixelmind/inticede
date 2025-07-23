"use client";

import { useState, forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Type for a single advantage item
export type Advantage = {
  title: string;
  description: string;
  icon: string;
  active?: boolean;
};

// Type for the component's props
type AdvantageCardProps = {
  item: Advantage;
  index: number;
};

const AdvantageCard = forwardRef<HTMLDivElement, AdvantageCardProps>(
  ({ item, index }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={ref}
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? "#1F3A93" : "#E3E3E3",
        }}
        className={`group relative flex-shrink-0 w-[260px] min-h-[260px] p-6 text-center rounded-md transition-all duration-300 ${
          item.active ? "border-white" : "border-transparent"
        }`}
      >
        {item.active && (
          <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 h-[20px] w-[1px] bg-white before:content-[''] before:w-[40px] before:border-t-2 before:border-dotted before:border-white before:absolute before:top-[-10px] before:left-[-40px]" />
        )}
        <div className="flex justify-center items-center mb-4 h-12">
          <div className="relative w-12 h-12 mb-4 mx-auto">
            <Image
              src={item.icon}
              alt={item.title}
              width={48}
              height={48}
              className={`object-contain transition-all duration-300 ${
                isHovered ? "brightness-0 invert" : ""
              }`}
            />
          </div>
        </div>
        <h3
          className={`text-lg font-Grown mb-2 transition-colors duration-300 ${
            isHovered ? "text-white" : "text-[#1F3A93]"
          }`}
        >
          {item.title}
        </h3>
        <div className="h-[90px] font-Montserrat flex items-center justify-center">
          <p
            className={`text-sm w-[230px] mx-auto transition-colors duration-300 ${
              isHovered ? "text-white" : "text-[#484948]"
            }`}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    );
  }
);

AdvantageCard.displayName = "AdvantageCard";

export default AdvantageCard;