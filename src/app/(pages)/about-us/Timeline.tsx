'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    year: 2016,
    title: 'Founding of Inticede BSD',
    image: '/images/about-us/yusuf2.png',
    description:
      'Inticede BSD Pvt. Ltd. is officially incorporated in Maharashtra as a bold venture to transform intimatewear sourcing in India. Envisioned as a bridge between design and manufacturing, it set out to serve lingerie and swimwear brands globally.',
  },
  {
    year: 2020,
    title: 'FIRST BIG PLATFORM BREAKTHROUGH',
    image: '/images/about-us/Timeline2.jpg',
    description:
      'Verified vendor on IndiaMART. Shifted focus from boutique clients to large-scale solutions with over 35 factory partnerships.',
  },
  {
    year: 2022,
    title: 'GOING GLOBAL WITH LITTLE LACEY',
    image: '/images/about-us/Timeline3.jpg',
    description:
      'Little Lacey partners with Inticede to co-develop modern, sustainable collections, strengthening Indian market presence.',
  },
  {
    year: 2023,
    title: 'POWERHOUSE PARTNERSHIPS',
    image: '/images/about-us/Timeline4.png',
    description: [
      'Zivame partnered to streamline sampling.',
      'Clover Group launched capsule collection with Inticede.',
      'Launched INTRIMS trims division: Loop-a-Lock® & Foamscoop®.',
    ],
  },
  {
    year: 2024,
    title: 'SHOWSTOPPER AT INTERFILIÈRE PARIS',
    image: '/images/about-us/Timeline5.jpg',
    description:
      'Debuted at Paris Expo showcasing sustainable trims and earned special mention in Lingerie Insight for innovation.',
  },
];

export default function Timeline() {
  const [selected, setSelected] = useState(0);
  const [visited, setVisited] = useState<number[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const searchParams = useSearchParams();

  const handleSelect = (index: number) => {
    const year = timelineData[index].year;
    setSelected(index);
    setVisited((prev) => (prev.includes(year) ? prev : [...prev, year]));
  };

  useEffect(() => {
    const comingBack = searchParams.get('from') === 'next';
    if (comingBack) {
      setVisited(timelineData.map((t) => t.year));
    } else {
      setVisited([timelineData[0].year]);
    }
  }, [searchParams]);

  // 🔁 Auto switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => {
        const next = (prev + 1) % timelineData.length;
        const nextYear = timelineData[next].year;
        setVisited((prevVisited) =>
          prevVisited.includes(nextYear) ? prevVisited : [...prevVisited, nextYear]
        );
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 🖱️ Scroll to switch timeline (UP = NEXT, DOWN = PREV)
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const direction = e.deltaY < 0 ? 1 : -1; // ✅ UP scroll = forward, DOWN = back
        setSelected((prev) => {
          let next = prev + direction;
          if (next < 0) next = 0;
          if (next >= timelineData.length) next = timelineData.length - 1;

          const nextYear = timelineData[next].year;
          setVisited((prevVisited) =>
            prevVisited.includes(nextYear) ? prevVisited : [...prevVisited, nextYear]
          );

          return next;
        });
      }, 100); // throttle
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-[#e8e8e8] min-h-screen px-4 md:px-8 py-12 font-[Montserrat]">
      <h2 className="text-center text-4xl md:text-5xl font-serif text-[#4a5568] mb-12">
        Inticede Timeline
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto mb-16"
        >
          <div className="w-full lg:w-1/2 flex justify-center grayscale">
            <div className="relative w-[402px] h-[412px] bg-gray-300 overflow-hidden shadow-lg">
              <Image
                src={timelineData[selected].image}
                alt={timelineData[selected].title}
                fill
                className={`object-cover ${
                  timelineData[selected].year === 2023 ? 'object-top' : ''
                }`}
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-md">
            <span className="text-sm text-[#1F3A93] font-medium mb-1">
              {timelineData[selected].year}
            </span>

            <h3
              className="mb-4 text-left text-[#1F3A93]"
              style={{
                fontFamily: 'Grown Personal Use Only',
                fontSize: '25px',
                lineHeight: '40.5px',
                fontWeight: '400',
                letterSpacing: '0',
              }}
            >
              {timelineData[selected].title}
            </h3>

            {timelineData[selected].year === 2023 ? (
              <ul
                className="list-disc list-inside"
                style={{
                  fontFamily: 'Montserrat',
                  fontSize: '18px',
                  lineHeight: '30.5px',
                  fontWeight: 400,
                  color: '#1F3A93',
                }}
              >
                {(timelineData[selected].description as string[]).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p
                style={{
                  fontFamily: 'Montserrat',
                  fontSize: '18px',
                  lineHeight: '30.5px',
                  fontWeight: 400,
                  color: '#1F3A93',
                }}
              >
                {timelineData[selected].description}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="w-full flex justify-center">
        <div className="flex items-end justify-between gap-4 max-w-4xl w-full px-4">
          {timelineData.map((item, idx) => (
            <div
              key={item.year}
              className="flex flex-col items-center relative"
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="w-[2px] h-16 bg-black opacity-60 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX;
                      const y = e.clientY;
                      const withinX = x >= rect.left && x <= rect.right;
                      const withinY = y >= rect.top && y <= rect.bottom;
                      if (withinX && withinY) setHoveredIdx(idx);
                    }}
                    onClick={() => handleSelect(idx)}
                    className={`w-4 h-4 border-2 rotate-45 cursor-pointer transition-all duration-300 z-10 ${
                      selected === idx
                        ? 'bg-black border-black'
                        : 'bg-gray-500 border-gray-500 hover:bg-black hover:border-black'
                    }`}
                  ></div>
                </div>
              </div>
              {hoveredIdx === idx && (
                <span
                  className="mb-1 text-center text-[#1F3A93] whitespace-nowrap absolute -top-6"
                  style={{
                    fontFamily: 'Grown Personal Use Only',
                    fontSize: '18px',
                    lineHeight: '28px',
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </span>
              )}
              <span
                className={`mt-2 text-xs font-medium tracking-wide ${
                  selected === idx ? 'text-black' : 'text-gray-700'
                }`}
              >
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
