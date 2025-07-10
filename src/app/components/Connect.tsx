'use client';
import Image from 'next/image';

export default function ConnectWorkSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      {/* Connect & Work Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        {/* Connect Image */}
        <div className="relative w-full h-[461px]">
          <Image
            src="/images/Homepage/connect.jpg"
            alt="Connect"
            fill
            className="object-cover filter grayscale brightness-105 opacity-[0.58]"
          />
          <h2 className="absolute text-[#1F3A93] text-5xl font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Connect
          </h2>
        </div>

        {/* Work Image */}
        <div className="relative w-full h-[461px]">
          <Image
            src="/images/Homepage/work.jpg"
            alt="Work"
            fill
            className="object-cover filter grayscale brightness-105 opacity-[0.58]"
          />
          <h2 className="absolute text-[#1F3A93] text-5xl font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            WORK
          </h2>
        </div>
      </div>

      {/* Logo & Form Section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
        {/* Logo & Description */}
        <div>
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
        </div>

        {/* Form */}
        <div className="flex flex-col relative ml-50">
          <h3 className="text-2xl font-semibold mb-6">Partner Enquiry Form</h3>
          <form className="space-y-6">
            {/* First Name */}
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

            {/* Email ID */}
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
          </form>

          {/* Social Icons as Images */}
          <div className="absolute right-[-50px] bottom-0 flex flex-col gap-1 items-center">
            <Image
              src="/images/Homepage/facebook.png"
              alt="Facebook"
              width={37}
              height={37}
              className="rounded-full"
            />
            <Image
              src="/images/Homepage/Linkdin.png"
              alt="LinkedIn"
              width={37}
              height={37}
              
            />
            <Image
              src="/images/Homepage/insta.png"
              alt="Instagram"
              width={37}
              height={37}
              
            />
          </div>
        </div>
      </div>
    </section>
  );
}
