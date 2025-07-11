'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const leftNavItems = [
    { name: 'About Us', href: '/About_Us' },
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
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="w-full">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-20 px-10">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap font-grown"
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
                className="text-blue-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap font-grown"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-20 px-4 sm:px-6 relative">
          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/Homepage/logo.png"
              alt="Inticede Logo"
              width={174}
              height={70}
              className="w-auto h-[70px] max-w-none"
              priority
            />
          </div>

          {/* Hamburger Menu - Right */}
          <button
            onClick={toggleMenu}
            className="ml-auto inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 flex flex-col items-center justify-center space-y-4 py-6">
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
      )}
    </nav>
  );
};

export default Navbar;
