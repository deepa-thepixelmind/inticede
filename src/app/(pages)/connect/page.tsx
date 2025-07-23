'use client';

import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen font-sans overflow-x-hidden">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 lg:ml-10 flex flex-col justify-center order-2 lg:order-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-Grown text-[#1a237e] mb-4 md:mb-6">Contact us</h1>
            <p className="text-sm md:text-base text-[#1F3A93] font-Montserrat mb-4 md:mb-6 max-w-md">
              Whether you have a question about our products, need a custom solution, or want to collaborate—wed love to hear from you.
              Fill out the form below or reach out directly, and a member of our team will get back to you shortly.
            </p>
        <div className="text-sm md:text-base mt-6 md:mt-10 text-[#1F3A93] font-Montserrat leading-snug space-y-1 md:space-y-2">
          <p>Mumbai, India</p>
          <p>INTICEDE BSD PVT. LTD.</p>
          <p>Unit D-139, Anphill Warehousing Complex,</p>
          <p>V.I.T. College Road, Wadala East,</p>
          <p>Mumbai - 400037, INDIA.</p>
          <p>T: <a href="tel:+912266922222" className="hover:underline">+91-22-66922222</a></p>
          <p>E: <a href="mailto:contact@inticede.com" className="hover:underline">contact@inticede.com</a></p>
        </div>
      </div>

      {/* Right Side - Form with Background Image */}
      <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-screen order-1 lg:order-2">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/assets/connect-us.png"
              alt="Contact us background"
              fill
              className="object-cover lg:object-contain object-center"
              quality={100}
              priority
            />
          </div>  
        </div>

        {/* Form Container - Mobile */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 w-full px-4 pb-6 transform translate-y-0">
          <div className="bg-[#d9d9d9]/90 p-6 shadow-xl backdrop-blur-md rounded-t-2xl w-full">
            <div className="space-y-4">
              <h2 className="text-2xl font-Grown pb-3 text-[#1F3A93] text-center">Send a message</h2>
              
              <div className="grid grid-cols-1 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-Montserrat text-[#1F3A93]">Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="mt-1 w-full px-4 py-2 font-Montserrat rounded-full bg-[#8C8C8B] text-white text-sm placeholder-white outline-none placeholder:text-xs"
                  />
                </div>

                {/* Email */} 
                <div>
                  <label className="block text-sm font-Montserrat text-[#1F3A93]">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="mt-1 w-full px-4 py-2 font-Montserrat rounded-full bg-[#8C8C8B] text-white text-sm placeholder-white outline-none placeholder:text-xs"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-Montserrat text-[#1F3A93]">Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="mt-1 w-full px-4 py-2 font-Montserrat rounded-full bg-[#8C8C8B] text-white text-sm placeholder-white outline-none placeholder:text-xs"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-Montserrat text-[#1a237e]">Message</label>
                  <textarea
                    placeholder="Type your message"
                    rows={3}
                    className="mt-1 w-full px-4 py-2 rounded-lg font-Montserrat bg-[#8C8C8B] text-white text-sm placeholder-white outline-none placeholder:text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container - Desktop */}
        <div className="hidden lg:block absolute top-0 left-[-45px] mt-[75px] w-[65%] ml-[-35px]">
          <div className="bg-[#d9d9d9]/80 p-8 md:p-14 shadow-lg backdrop-blur-md w-full">
            <div className="space-y-5 md:space-y-7 ml-[-35px]">
              <h2 className="text-2xl md:text-3xl font-Grown pb-3 md:pb-5 text-[#1F3A93]">Send a message</h2>

              {/* Name */}
              <div>
                <label className="block text-sm font-Montserrat text-[#1F3A93]">Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="mt-1 w-35 px-4 py-1 md:py-0.5 font-Montserrat rounded-full bg-[#8C8C8B] text-white text-sm placeholder-white outline-none placeholder:text-xs"
                />
              </div>

              {/* Email */} 
              <div>
                <label className="block text-sm font-Montserrat text-[#1F3A93]">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-1 w-35 px-4 py-1 md:py-0.5 font-Montserrat rounded-full bg-[#8C8C8B] text-white text-sm placeholder-white outline-none placeholder:text-xs"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-Montserrat text-[#1F3A93]">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-1 w-35 px-4 py-1 md:py-0.5 font-Montserrat rounded-full bg-[#8C8C8B] text-white text-sm placeholder-white outline-none placeholder:text-xs"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-Montserrat text-[#1a237e]">Message</label>
                <textarea
                  placeholder="Type your message"
                  rows={4}
                  className="mt-1 w-full px-4 py-2 md:py-3 rounded font-Montserrat bg-[#8C8C8B] text-white text-sm placeholder-white outline-none placeholder:text-xs"
                />
              </div>
               <div className="w-full flex justify-center mt-4 md:mt-6 lg:mt-8">
            <button
              type="submit"
              className="relative overflow-hidden bg-black text-white font-Montserrat font-semibold text-sm md:text-base px-6 md:px-8 py-1.5 md:py-2 rounded-full transition-all duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Submit</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#8C8C8B] to-[#8C8C8B] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;