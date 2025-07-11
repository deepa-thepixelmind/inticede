'use client';
import Image from 'next/image';

export default function Connect() {
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
      </section>
  )
}