
import React from 'react';
import Image from 'next/image';

const ExpertisePage = () => {
  const expertiseItems = [
    {
      id: 1,
      title: "Buying Sourcing and Vendor Management",
      image: "/images/Homepage/Expertise1.jpg",
      highlighted: false
    },
    {
      id: 2,
      title: "Design and Product Development",
      image: "/images/Homepage/Expertise2.jpg",
      highlighted: false
    },
    {
      id: 3,
      title: "Quality Assurance and Compliance",
      image: "/images/Homepage/Expertise3.png",
      highlighted: false
    },
    {
      id: 4,
      title: "Product Execution and Logistics",
      image: "/images/Homepage/Expertise4.jpg",
      highlighted: false
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gray-100 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-[#1F3A93] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
            Our Expertise
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p 
              className="text-gray-700"
              style={{
                fontFamily: 'Montserrat Alternates, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '27px',
                letterSpacing: '0%',
                textAlign: 'center'
              }}
            >
              With deep industry knowledge and a global supply network, we specialize in sourcing, product development, and quality assurance.
            </p>
            
            <p 
              className="text-gray-700"
              style={{
                fontFamily: 'Montserrat Alternates, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '27px',
                letterSpacing: '0%',
                textAlign: 'center'
              }}
            >
              Our expertise lies in delivering tailored, end-to-end solutions for intimate and lifestyle apparel brands.
            </p>
          </div>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {expertiseItems.map((item) => (
            <div 
              key={item.id}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                item.highlighted ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Image Container with specified dimensions */}
              <div 
                className="relative overflow-hidden"
                style={{
                  width: '100%',
                  height: '447px',
                  maxWidth: '252px',
                  margin: '0 auto',
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              {/* Title */}
              <div className="p-4 sm:p-6">
                <h3 
                  className="text-gray-800 font-medium"
                  style={{
                    fontFamily: 'Montserrat Alternates, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '27px',
                    letterSpacing: '0%',
                    textAlign: 'center'
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisePage;