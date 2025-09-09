'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/updates' },
    { name: 'Research', href: '/research' },
    { name: 'Teaching & Talks', href: '/teaching' },
    { name: 'Contact', href: '/contact', className: 'text-blue-600' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Cornelius Maroa
            </Link>
          </div>

          {/* Desktop Navigation - Only show on large screens */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-gray-600 px-3 py-2 rounded-md ${
                  pathname === item.href 
                    ? 'text-gray-900 bg-gray-100' 
                    : item.className || 'text-gray-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - Show on medium and smaller screens */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Show on medium and smaller screens */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  pathname === item.href 
                    ? 'text-gray-900 bg-gray-100' 
                    : item.className || 'text-gray-500 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
