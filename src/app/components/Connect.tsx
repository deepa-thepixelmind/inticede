import Image from 'next/image';

export default function ConnectWorkSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image 1 with Connect */}
        <div className="relative w-full h-[461px]">
          <Image
            src="/images/Homepage/connect.jpg"
            alt="Connect"
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
          <h2 className="absolute text-[#1F3A93] text-4xl font-semibold top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 bg-opacity-60 px-4 py-1 rounded-md ">
            Connect
          </h2>
        </div>

        {/* Image 2 with Work */}
        <div className="relative w-full h-[461px]">
          <Image
            src="/images/Homepage/work.jpg"
            alt="Work"
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
          <h2 className="absolute text-[#1F3A93] text-4xl font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-60 px-4 py-1 rounded-md">
            WORK
          </h2>
        </div>
      </div>

      {/* Logo and description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
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

        {/* Partner Enquiry Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Partner Enquiry Form</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[#1F3A93]">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First name"
                className="w-full mt-1 p-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1F3A93]">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                placeholder="Type your email"
                className="w-full mt-1 p-2 border rounded-md bg-gray-100"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
