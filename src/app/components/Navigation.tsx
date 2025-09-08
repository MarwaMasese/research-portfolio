'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Updates', href: '/updates' },
    { name: 'Research', href: '/research' },
    { name: 'Teaching & Talks', href: '/teaching' },
    { name: 'Alternate Website', href: '/alternate', className: 'text-purple-500' }
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-medium transition-colors hover:text-gray-600 ${
                pathname === item.href 
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                  : item.className || 'text-gray-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
