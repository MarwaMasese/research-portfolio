'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/updates' },
    { name: 'Research', href: '/research' },
    { name: 'Teaching & Talks', href: '/teaching' },
    { name: 'Contact', href: '/contact', className: 'text-blue-600' }
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center items-center min-h-16 py-2">
          {/* Responsive Navigation */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm sm:text-base font-medium transition-colors hover:text-gray-600 px-2 sm:px-3 py-2 rounded-md whitespace-nowrap ${
                  pathname === item.href 
                    ? 'text-gray-900 bg-gray-100' 
                    : item.className || 'text-gray-500'
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
