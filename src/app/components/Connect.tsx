'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Connect() {
  return (
    <section className="bg-white py-12 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      {/* Connect & Work Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        {/* Connect Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[461px]"
        >
          <Image
            src="/images/Homepage/connect.jpg"
            alt="Connect"
            fill
            className="object-cover filter grayscale brightness-105 opacity-[0.58]"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="absolute text-[#1F3A93] text-5xl font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Connect
          </motion.h2>
        </motion.div>

        {/* Work Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[461px]"
        >
          <Image
            src="/images/Homepage/work.jpg"
            alt="Work"
            fill
            className="object-cover filter grayscale brightness-105 opacity-[0.58]"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="absolute text-[#1F3A93] text-5xl font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            WORK
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
