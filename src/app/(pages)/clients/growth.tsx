'use client';

import Image from 'next/image';

export default function GrowthSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-screen h-screen top-0 left-0 opacity-90 z-0 grayscale">
        <Image
          src="/images/clients/growth.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Centered Blurred Rectangle with Text */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 text-center">
        <div className="w-[651px] h-[179px] flex items-center justify-center bg-white/30 backdrop-blur-md  shadow-md">
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] leading-[40.5px] text-blue-900">
            <span className="block">Trusted by Industry Leaders.</span>
            <span className="block">Built for Scalable Growth</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
