'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const leftNavItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Clients', href: '/clients' },
  ];

  const rightNavItems = [
    { name: 'Network', href: '/network' },
    { name: 'Events', href: '/events' },
    { name: 'Connect', href: '/connect' },
    { name: 'Careers', href: '/careers' },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  return (
    // --- UPDATED: Changed bg-white/50 and removed backdrop-blur-md ---
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="w-full">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-baseline justify-between h-17 px-7">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            {leftNavItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-blue-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200 whitespace-nowrap font-Grown"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex items-center justify-center flex-shrink-0">
            <Image
              src="/assets/inticedelogo.png"
              alt="Inticede Logo"
              width={174}
              height={70}
              className="w-auto h-[60px] max-w-none"
              priority
            />
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-8">
            {rightNavItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-blue-700 hover:text-blue-600 px-3 text-base font-medium transition-colors duration-200 whitespace-nowrap font-Grown"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 sm:px-6 relative ">
          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/assets/inticedelogo.png"
              alt="Inticede Logo"
              width={174}
              height={70}
              className="w-auto h-[60px] max-w-none"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        
            className="lg:hidden fixed top-16 left-0 w-full z-40 bg-white border-t border-gray-200 flex flex-col items-center justify-center space-y-4 py-6"
          >
            {allNavItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
