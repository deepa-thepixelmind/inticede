'use client';
import React from 'react';
import Image from 'next/image';

type Brand = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

const brandLogos: Brand[] = [
  {
    id: 1,
    name: "Naked",
    src: "/images/Homepage/View1.jpg",
    alt: "Naked Brand Logo"
  },
  {
    id: 2,
    name: "Clovis",
    src: "/images/Homepage/View2.jpg",
    alt: "Clovis Brand Logo"
  },
  {
    id: 3,
    name: "Enamor",
    src: "/images/Homepage/View3.jpg",
    alt: "Enamor Brand Logo"
  },
  {
    id: 4,
    name: "Jockey",
    src: "/images/Homepage/View4.png",
    alt: "Jockey Brand Logo"
  },
  {
    id: 5,
    name: "Zivame",
    src: "/images/Homepage/View5.jpg",
    alt: "Zivame Brand Logo"
  }
];

const BrandLogosViewport = () => {
  return (
    <section className="w-full bg-white py-0 sm:py-2 md:py-2">
      <div className="max-w-12xl px-9 sm:px-10 lg:px-9">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {brandLogos.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center text-center w-[220px] sm:w-[230px] md:w-[240px] lg:w-[250px]"
            >
              <div className="w-full h-auto">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={180}
                  height={100}
                  className="object-contain w-full h-auto"
                />
              </div>
              <p className="mt-7 text-sm sm:text-base font-bold text-black">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogosViewport;
