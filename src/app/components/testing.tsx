'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  // Data declarations
  const timelineData = [
    {
      year: "2016",
      title: "FOUNDING OF INTICEDE BSD",
      description: "Inticode BSD Pvt. Ltd. is officially incorporated in Maharashtra as a bold venture to transform intimatewear sourcing in India. Envisioned as a bridge between design and manufacturing, it set out to serve lingerie and swimwear brands globally.",
      image: "/assets/about/About_timeline_1.png"
    },
    {
      year: "2020",
      title: "FIRST BIG PLATFORM BREAKTHROUGH",
      description: "Inticede becomes a verified vendor on IndiaMART, tapping into a wider domestic network. This move marks the company's pivot from boutique clients to large-scale sourcing solutions, establishing ties with over 35 factories across India specialising in lingerie, trims, laces, and sustainable fabrics.",
      image: "/assets/about/About_timeline_2.png"
    },
    {
      year: "2022",
      title: "GOING GLOBAL WITH LITTLE LACEY",
      description: "Homegrown lingerie label Little Lacey partners with Inticede for end-to-end development, marking a major leap in Inticede's domestic presence. The collaboration focuses on sustainable sourcing, modern silhouettes, and trend-aligned collections that cater to India's evolving intimatewear market.",
      image: "/assets/about/About_timeline_3.png"
    },
    {
      year: "2023",
      title: "EXPANSION AND DIVERSIFICATION",
      description: "Inticede expands its portfolio to include shapewear, loungewear, and athleisure, catering to a wider range of intimate apparel needs. The company also strengthens its global supplier network, enhancing its ability to deliver high-quality products with speed and efficiency.",
      image: "/assets/about/About_timeline_4.png"
    },
    {
      year: "2024",
      title: "SHOWSTOPPER AT THE INTIMATEWEAR EXPO, PARIS",
      description: "Inticede debuts at Interfilière Paris, showcasing its in-house lingerie trims, biodegradable lace ranges, and tech-enabled design process. The booth draws over 500 visitors and earns a special mention in Lingerie Insight for &quot;Innovative Vendor-Brand Collaboration.&quot;",
      image: "/assets/about/About_timeline_5.png"
    }
  ];

  const teamData = [
    {
      name: 'Yusuf Dohadwala',
      title: 'Director',
      image: '/assets/about/YusufDohadwala2.png',
      description: `Yusuf leads Inticede with strategic clarity, sharp industry insight, and a deep understanding of intimatewear sourcing and production. With a legacy of over two decades, he brings a rare balance of creative instinct and operational precision.
                   As Director, he oversees vendor relationships, trend direction, client management, and global operations. His leadership style is hands-on yet empowering, making sure every process runs smoothly, and every brand feels supported.`,
    },
    {
      name: 'Hetashree Solanki',
      title: 'Business Head',
      image: '/assets/about/HetashreeSolanki.png',
      description: `With over 20 years of experience in fashion and sourcing, Hetashree brings a unique blend of design sensibility and business insight to Inticede. From styling Bollywood icons to leading her own couture label, her journey has been defined by creativity, precision, and purpose.
                    At Inticede, she leads sourcing, product development, and client relationships - building strong connections between 100+ global brands and over 1,000 suppliers across Asia. Known for her trend intuition and client-focused approach, Hetashree plays a key role in driving innovation across lingerie, loungewear, and activewear.`,
    },
    {
      name: 'Nasir Momin',
      title: 'Head of Operations',
      image: '/assets/about/NasirMomin.png',
      description: `With over a decade at Inticede BSD, Nasiruddin Momin brings deep operational expertise and financial acumen to the company's core. Starting as a Logistics Executive and rising to lead Operations and Logistics, he has been instrumental in shaping the backend systems that power Inticede's seamless global delivery.
                    His background at Wipro BPO and training in accounting and Microsoft Office sharpened his eye for efficiency, detail, and process management - making him a key driver behind Inticede's timely execution, cost control, and vendor coordination.`,
    }
  ];

  const uniqueAdvantages = [
    {
      image: '/assets/about/The_unique_section1.png',
      title: 'Experience the benefits of our extensive industry expertise and global connections',
      desc: 'We are a one-stop-shop providing complete sourcing solutions globally, managing each step in the global supply chain process for major intimate wear retailers, brands and manufacturers.'
    },
    {
      image: '/assets/about/The_unique_section2.png',
      title: 'Bring your vision to life with our in-house design innovation market foresight',
      desc: 'Backed by a skilled design and research team, INTICEDE helps intimatewear brands, retailers and manufacturers develop innovative collections while staying ahead of domestic and global trends.'
    },
    {
      image: '/assets/about/The_unique_section3.png',
      title: 'Smart, secure and on-time logistics globally aligned',
      desc: 'INTICEDE ensures seamless coordination. We manage end-to-end documentation, compliance, and global shipping—helping brands meet timelines efficiently while navigating both domestic and international supply chains with ease.'
    }
  ];
  
 // Component sections
const HeroSection = () => (
  <div className="w-full min-h-[80vh] bg-white py-8 px-4 lg:ml-[-50] lg:mt-[-40] sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 items-center">
        {/* TEXT CONTENT - RIGHT ON DESKTOP */}
        <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-12">
          <h2 className="text-[#1f3a93] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] mb-4 md:mb-6 text-center lg:text-left font-Grown font-medium leading-tight">
            Who we are?
          </h2>
          <p className="text-[#000000] text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-Montserrat leading-relaxed">
            Inticede is a one-stop global sourcing and design house founded with the vision to elevate intimate wear brands from India and beyond.
            With over 20 years of experience, we offer complete solutions—from sourcing premium raw materials to delivering high-quality finished products tailored to your brand&apos;s DNA.
            Backed by a strong global supplier network and deep technical know-how, we support every stage of the product lifecycle.
            Whether you&apos;re developing lingerie, loungewear, shapewear, or athleisure, our team ensures precision in fit, function, and finish.
            Our design-led approach, combined with a commitment to ethical sourcing and innovation, positions us as a trusted partner for brands seeking excellence, efficiency, and scalability.
            At Inticede, we don&apos;t just deliver products—we help shape better brands.
          </p>
        </div>

        {/* IMAGE CONTAINER - LEFT ON DESKTOP */}
        <div className="group w-full lg:w-1/2 aspect-[3/4] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[448px]">
              <Image
                src="/assets/about/about_1.png"
                alt="Big Image"
                fill
                className="object-contain"
                priority
                quality={100}
              />
            </div>
          </div>
          <div className="absolute bottom-[-20] right-0 w-[30%] max-w-[200px] aspect-[211/317] z-20 group">
            <Image
              src="/assets/about/about_2.png"
              alt="Small Image"
              fill
              className="object-contain brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              quality={100}
            />
            <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  const SliderSection = () => (
  <div className="w-full flex flex-col items-center justify-center py-10 pt-3 px-4 overflow-hidden bg-white">
    <h2 className="text-center text-[#1F3A93] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-Grown leading-[1.11] mb-6">
      While you dream it, we build it, End-to-end,
      <br />
      solutions, done seamlessly
    </h2>

    <div className="text-center max-w-5xl mx-auto text-gray-800 mb-10 leading-relaxed font-Montserrat text-sm sm:text-base md:text-lg px-2">
      <p>
        At Inticede, we believe every dream deserves quiet strength — skilled hands,
        sharp eyes, and seamless systems that transform ideas into reality.
      </p>
      <p className="mt-1 ml-3.5">
        We&apos;re the force behind your brand, managing the complexities — from technical
        fittings to global sourcing — so you can focus on imagining freely, creating
        boldly, and building beautifully.
      </p>
      <p className="mt-1">
        Because every vision deserves to rise—with clarity, confidence, and ease.
      </p>
    </div>

    <div
      className="w-full flex flex-col items-center py-2 bg-white overflow-hidden"
      onMouseEnter={() => {
        swiperRef.current?.autoplay?.stop();
      }}
      onMouseLeave={() => {
        swiperRef.current?.autoplay?.start();
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={5}
        grabCursor={true}
        speed={4000}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-8xl px-4 swiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {[1, 2, 3, 2].map((num, i) => (
          <SwiperSlide
            key={i}
            className="!w-[75%] md:!w-[60%] transition-transform duration-500 ease-out"
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group relative h-[180px] md:h-[450px] overflow-hidden shadow-md"
            >
              <Image
                src={`/assets/about/crousal${num}.png`}
                alt={`Slide ${num}`}
                fill
                priority={i === 0}
                className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                quality={100}
              />
              <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center gap-2" />
    </div>
  </div>
);


  const WhatDrivesUsSection = () => (
    <section className="w-full flex flex-col lg:flex-row justify-center items-stretch bg-white py-8 px-4 lg:px-8 max-w-7xl mx-auto gap-4 lg:gap-8">
      <div className="group w-full lg:w-1/4 flex justify-center order-1 lg:order-1">
        <div className="relative w-full h-[300px] lg:h-auto lg:aspect-[3/5]">
          <Image
            src="/assets/About_Drives_1.png"
            alt="Left Image"
            fill
            className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
        </div>
      </div>

      <div className="w-full lg:w-2/4 flex flex-col items-center px-4 lg:px-8 py-6 border border-blue-500 order-2 lg:order-2">
        <h2 className="text-[#1f3a93] text-2xl md:text-3xl lg:text-5xl font-Grown mb-6">
          What Drives Us
        </h2>
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed font-Montserrat space-y-4">
          <p>
            Our vision is to be the most trusted global partner for brands and retailers in the intimate apparel, comfortwear, and sportswear industries—delivering innovation, reliability, and long-term value across the supply chain.
          </p>
          <p>
            We empower brands with end-to-end solutions—from raw materials to finished garments—combining smart design, responsible sourcing, and manufacturing excellence. By staying at the forefront of material innovation, fit engineering, and global trend insights, we enhance product quality, accelerate speed to market, and ensure sustainable growth.
          </p>
          <p>
            At Inticede, we are committed to delivering quality, transparency, and timely execution at every stage of development—building long-term partnerships rooted in trust, collaboration, and shared success.
          </p>
        </div>
      </div>

      <div className="group w-full lg:w-1/4 flex justify-center order-3 lg:order-3">
        <div className="relative w-full h-[300px] lg:h-auto lg:aspect-[3/5]">
          <Image
            src="/assets/About_Drives_2.png"
            alt="Right Image"
            fill
            className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );

  const UniqueAdvantagesSection = () => (
  <section className="w-full bg-white py-12 px-4 md:px-8">
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1f3a93] font-Grown mb-8 md:mb-12">
        The unique advantages of partnering with<br className="hidden sm:block" /> Inticede
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {uniqueAdvantages.map((advantage, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center px-2 sm:px-4"
          >
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="group relative w-full aspect-[4/4] max-w-[350px] mb-4">
              <Image
                src={advantage.image}
                alt={advantage.title}
                fill
                className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                quality={100}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              />
              <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
            </div>
            
            {/* Text Content with Constrained Width */}
            <div className="w-full max-w-[350px] px-2">
              <h3 className="font-Grown text-lg md:text-xl mb-2 text-[#000000]">
                {advantage.title}
              </h3>
              <p className="text-[#000000] font-Montserrat text-sm md:text-base leading-relaxed">
                {advantage.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

  const TimelineSection = () => {
  return (
    <section className="w-full bg-[#E5E5E5] py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-Grown text-[#1F3A93] mb-10 sm:mb-12">
          Inticede Timeline
        </h2>

        {/* IMAGE + TEXT CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 mb-10">
          {/* IMAGE WITH FIXED WIDTH */}
          <div className="group relative w-full lg:w-[320px] xl:w-[350px] h-[380px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
            <Image
              src={timelineData[activeIndex].image}
              alt={timelineData[activeIndex].title}
              fill
              className="object-contains brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              quality={100}
              sizes="(max-width: 1024px) 90vw, 320px"
            />
            <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
          </div>

          {/* TEXT CONTENT WITH ADJUSTED GAP */}
          <div className="w-full lg:flex-1 text-left px-1 sm:px-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-Grown text-[#1F3A93] mb-1 sm:mb-2">
              {timelineData[activeIndex].year}
            </h3>
            <h4 className="text-base sm:text-lg md:text-xl font-Grown text-[#1f3a93] mb-2 sm:mb-3">
              {timelineData[activeIndex].title}
            </h4>
            <p className="text-sm sm:text-base md:text-[15px] font-Montserrat text-[#1F3A93] leading-relaxed">
              {timelineData[activeIndex].description}
            </p>
          </div>
        </div>

        {/* TIMELINE NAVIGATION */}
        <div className="relative w-full max-w-4xl mx-auto px-2 sm:px-4">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0" />
          <div className="relative flex justify-between items-center z-10">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                {activeIndex === index && (
                  <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-bold text-[#1f3a93] whitespace-nowrap">
                    {item.year}
                  </span>
                )}
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rotate-45 ${
                    activeIndex === index ? 'bg-[#1f3a93]' : 'bg-gray-400'
                  } transition-all duration-300`}
                  aria-label={`Go to ${item.year}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


  const YusufSection = () => (
    <section className="w-full bg-white py-12 px-6 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-Grown text-[#1F3A93] mb-4 text-center">
          Yusuf Dohadwala
        </h1>

        <div className="flex flex-col md:flex-row mt-12 items-center md:items-start lg:w-[110%] justify-between">
          <div className="w-full md:w-[38%]">
            <div className="group relative h-130 overflow-hidden">
              <Image
                src="/assets/about/yusuf-dohadwala.png"
                alt="Yusuf Dohadwala"
                fill
                className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                quality={100}
              />
              <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
            </div>
          </div>

          <div className="w-full md:w-[60%] flex flex-col justify-center ml-12 space-y-3">
            <p className="text-base md:text-clip text-gray-800 font-Montserrat leading-4.5 mt-4 md:mt-12">
              Yusuf Dohadwala is the driving force behind Triticale BSD — a visionary with over 20 years of experience in the innertwear, comfortwear, and activewear industry.
              Personally connected with over 1,000+ brands and retailers across India and abroad, Yusuf has built more than just a company — he has shaped the ecosystem around it. His leadership bridges the gap between design, sourcing, and execution, empowering brands with strategic clarity and reliable systems.
            </p>

            <div>
              <p className="text-base md:text-lg font-Montserrat font-medium text-gray-800 mb-2 leading-1.5">
                He also serves as:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 ml-3 text-gray-700 text-sm md:text-base font-Montserrat leading-snug">
                <li>CEO of the Intimate Apparel Association of India (IAPAI)</li>
                <li>Joint Secretary (UJest) at FOHTRA (Federation of Hosiery Manufacturers Associations)</li>
                <li>Chief Organizer of major B2B trade shows like ITITITRISIA, Source TXT, Lingerie Fashion Uveek, and Change Masters — bringing the industry together under one roof</li>
                <li>Chief Editor &amp; Publisher of Inner Secrets, India&apos;s leading B2B magazine for intimatewear for over 20 years</li>
              </ul>
            </div>

            <p className="text-base md:text-clip text-gray-700 font-Montserrat leading-4.5 md:mt-[-10] space-y-0.5">
              Under Yusuf&apos;s guidance, Triticale has become India&apos;s first and leading buying, sourcing, and design house dedicated to intimatewear — servicing 100+ brands and managing 200+ vendor partnerships globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );


  const TeamSliderSection = () => (
  <section className="w-full bg-[#D3D2D080] py-12 px-4 sm:px-6">
    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-Grown text-[#1F3A93] mb-8 sm:mb-10">
      INTICEDE TEAM
    </h2>

    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          reverseDirection: false,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.team-pagination',
          type: 'bullets',
        }}
        className="w-full pb-1"
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 sm:p-6"
            >
              <div className="group relative w-full md:w-[320px] lg:w-[350px] aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  quality={100}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 320px, 350px"
                />
                <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
              </div>

              <div className="w-full md:flex-1 text-left ml-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-Grown text-[#1F3A93] mb-3 sm:mb-4">
                  {member.name}, {member.title}
                </h3>
                <p className="text-sm sm:text-base font-Montserrat text-[#000000] leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="team-pagination absolute mt-9 left-0 right-0 flex justify-center gap-2 z-10 h-0.5" />
    </div>
  </section>
);

  // Main component render
  return (
    <main className="bg-white">
      <HeroSection />
      <SliderSection />
      <WhatDrivesUsSection />
      <UniqueAdvantagesSection />
      <TimelineSection />
      <YusufSection />
      <TeamSliderSection />
    </main>
  );
};

export default About;