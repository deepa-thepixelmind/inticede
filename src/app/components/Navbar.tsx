'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Split navigation items for left and right sides
  const leftNavItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Clients', href: '#Clients' }

  ];

  const rightNavItems = [
    { name: 'Network', href: '#network' },
    { name: 'Events', href: '#events' },
    { name: 'Connect', href: '#connect' },
    { name: 'Careers', href: '#Careers' }
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  return (
    <nav className="bg-white  shadow-sm border-b border-gray-200">
      <div className="w-full">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-20 px-10">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex items-center justify-center flex-shrink-0">
            <Image 
              src="/images/Homepage/logo.png" 
              alt="Inticede Logo" 
              width={174}
              height={70}
              className="w-auto h-[70px] max-w-none"
              priority
            />
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-8">
            {rightNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-20 px-4 sm:px-6">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>

          {/* Logo - Center */}
          <div className="flex items-center justify-center flex-shrink-0">
            <Image 
              src="/images/Homepage/logo.png" 
              alt="Inticede Logo" 
              width={174}
              height={70}
              className="w-auto h-[70px] max-w-none"
              priority
            />
          </div>

          {/* Placeholder for alignment */}
          <div className="w-10"></div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {allNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;