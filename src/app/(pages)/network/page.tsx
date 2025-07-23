'use client';

import { useState } from 'react';
import Image from 'next/image';

// All city markers
const cities = [
  { name: 'Mumbai', top: '64.5%', left: '69%', textPosition: 'left' },
  { name: 'Tirupur', top: '67%', left: '69.5%', textPosition: 'left' },
  { name: 'Zhongshan', top: '62%', left: '76%', textPosition: 'left' },
  { name: 'Dongguan', top: '63%', left: '79%', textPosition: 'right' },
  { name: 'Shantou', top: '61%', left: '81%', textPosition: 'right' },
  { name: 'Ahmedabad', top: '42%', left: '69%', downward: true, textPosition: 'left' },
  { name: 'Delhi', top: '40%', left: '70%', downward: true, textPosition: 'right' },
  { name: 'Yiwu', top: '37%', left: '80%', downward: true, textPosition: 'left' },
];

export default function NetworkMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-16  px-4 md:px-16 flex flex-col md:flex-row gap-10">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/3 mt-12 ml-15 md:mt-20 text-center md:text-left">
        <h1 className="text-[80px] md:text-[180px] font-Grown text-[#1F3A93] leading-none">08</h1>
        <p className="text-[#1F3A93] font-Montserrat text-lg mb-6 -mt-4 md:ml-3">Cities worldwide</p>

        <div className="flex flex-col md:flex-row gap-8 mb-6 -mt-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center mb-1">
              <span className="text-lg">👤</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-700 font-Montserrat">1000+</p>
              <p className="text-sm text-gray-700 font-Montserrat">Manufacturing <br></br> units</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center mb-1">
              <span className="text-lg">👤</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-700 font-Montserrat">10+</p>
              <p className="text-sm text-gray-700 font-Montserrat">Years in<br></br> Wireless</p>
            </div>
          </div>
        </div>

       <div className="border-t-2 border-dotted border-gray-400 w-full my-6"></div>


        <div>
          <p className="text-[#1F3A93] font-semibold mt-[-15] mb-2">Areas of expertise</p>
          <div className="grid grid-cols-2 gap-x-0.5 text-sm text-gray-700">
            <div className="space-y-1">
              <div>Sourcing</div>
              <div>Buying Design</div>
            </div>
            <div className="space-y-1">
              <div>Intimate wear</div>
              <div>Sports wear</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - RESPONSIVE MAP WRAPPER */}
      <div className="relative w-full md:w-2/3 flex mr-15 items-center justify-center">
  <div className="relative w-full max-w-[1400px] aspect-[16/14]">
    {/* Background map image */}
    <Image
      src="/assets/NETWORK_page_map.svg"
      alt="World Map"
      fill
      className="object-center"
      priority
    />

    {/* City Markers */}
    {cities.map((city) => (
      <div
        key={city.name}
        onMouseEnter={() => setHoveredCity(city.name)}
        onMouseLeave={() => setHoveredCity(null)}
        className="absolute flex flex-col items-center group cursor-pointer"
        style={{
          top: city.top,
          left: city.left,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {city.downward ? (
          // DOWNWARD line
          <div className="relative flex flex-col items-center">
            {/* City Name */}
            <div
              className={`absolute text-[10px] whitespace-nowrap transition-all duration-200 text-[#1F3A93] ${
                hoveredCity === city.name ? 'font-bold' : ''
              } ${city.textPosition === 'left' ? 'right-[10px] text-right' : 'left-[10px] text-left'}`}
              style={{ top: '-12px', width: '60px' }}
            >
              {city.name}
            </div>

            {/* Vertical line */}
            <div
              className={`w-[1.5px] h-[200px] transition-all duration-300 ${
                hoveredCity === city.name ? 'bg-blue-300' : 'bg-[#1F3A93]'
              }`}
            />

            {/* Dot */}
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                hoveredCity === city.name ? 'bg-green-500 scale-125' : 'bg-[#1F3A93]'
              }`}
            />
          </div>
        ) : (
          // UPWARD line
          <div className="relative flex flex-col items-center">
            {/* Dot */}
            <div
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                hoveredCity === city.name ? 'bg-green-500 scale-125' : 'bg-[#1F3A93]'
              }`}
            />

            {/* Line */}
            <div
              className={`w-[1.5px] h-[105px] transition-all duration-300 ${
                hoveredCity === city.name ? 'bg-blue-300' : 'bg-[#1F3A93]'
              }`}
            />

            {/* City Name */}
            <div
              className={`absolute text-[10px] whitespace-nowrap transition-all duration-200 text-[#1F3A93] ${
                hoveredCity === city.name ? 'font-bold' : ''
              } ${city.textPosition === 'left' ? 'right-[5px] text-right' : 'left-[5px] text-left'}`}
              style={{ bottom: '-15px', width: '60px' }}
            >
              {city.name}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

    </section>
  );
}