'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <section className="bg-white py-12 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      {/* Logo & Form Section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/Homepage/logo.png"
            alt="INTICEDE Logo"
            width={160}
            height={50}
            className="mb-4"
          />
          <p className="text-gray-700 text-sm leading-relaxed">
            From innovative sourcing to seamless product development, Inticede offers end-to-end
            solutions tailored for intimate and lifestyle apparel brands. With a strong network
            of suppliers and a commitment to quality, we help our partners bring their collections
            to life with precision, speed and transparency.
            <br />
            Empowering brands to build better, smarter and faster....
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="flex flex-col relative lg:ml-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Partner Enquiry Form</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[#1F3A93] mb-1">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First name"
                className="w-[150px] h-[27px] rounded-[10px] border border-gray-300 bg-gray-100 px-3 py-1 text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1F3A93] mb-1">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                placeholder="Type your email"
                className="w-[150px] h-[27px] rounded-[10px] border border-gray-300 bg-gray-100 px-3 py-1 text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-[150px] h-[32px] rounded-[10px] bg-[#1F3A93] text-white text-sm hover:bg-[#163d80] transition-colors"
              >
                Send
              </button>
            </div>
          </form>

          {/* Social Icons with Animation */}
          <motion.div
            className="absolute right-[-50px] bottom-0 flex flex-col gap-1 items-center"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
            viewport={{ once: true }}
          >
            {['facebook.png', 'Linkdin.png', 'insta.png'].map((icon, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={`/images/Homepage/${icon}`}
                  alt={icon.split('.')[0]}
                  width={37}
                  height={37}
                  className="rounded-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
