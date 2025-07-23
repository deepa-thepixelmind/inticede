'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: 'facebook.png', url: 'https://www.facebook.com/inticede' },
    { icon: 'Linkdin.png', url: 'https://www.linkedin.com/company/inticede/posts/?feedView=all' },
    { icon: 'insta.png', url: 'https://www.instagram.com/inticedebsd?utm_source=ig_web_button_share_sheet&igsh=ZWluN2ZnNm44dWd0' },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Main container with max-width and centered */}
      <div className="max-w-7xl mx-auto">
        {/* Logo & Form Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 mt-10 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/inticedelogo.png"
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

          {/* Form & Socials Container */}
          <motion.div
            className="flex flex-col relative lg:ml-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-black">Partner Enquiry Form</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#1F3A93] mb-1">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  // --- RESPONSIVE CHANGE: Inputs are now full-width with a max-width ---
                  className="w-full max-w-sm h-[32px] rounded-lg border border-gray-300 bg-gray-100 px-3 py-1 text-sm"
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
                  // --- RESPONSIVE CHANGE: Inputs are now full-width with a max-width ---
                  className="w-full max-w-sm h-[32px] rounded-lg border border-gray-300 bg-gray-100 px-3 py-1 text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  // --- RESPONSIVE CHANGE: Button is also full-width on small screens ---
                  className="w-full max-w-sm h-[36px] rounded-lg bg-[#1F3A93] text-white text-sm hover:bg-[#163d80] transition-colors"
                >
                  Send
                </button>
              </div>
            </form>

            {/* Social Icons with Responsive Positioning */}
            <motion.div
              // --- RESPONSIVE CHANGE: Horizontal & centered on mobile, absolute & vertical on desktop ---
              className="mt-8 flex flex-row justify-center gap-5 lg:mt-0 lg:flex-col lg:absolute lg:right-[-60px] lg:bottom-0 lg:gap-2"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {},
              }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={`/assets/${link.icon}`}
                      alt={link.icon.split('.')[0]}
                      width={37}
                      height={37}
                      className=" hover:opacity-80 transition-opacity"
                    />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}