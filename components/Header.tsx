'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const currentLocale = pathname.split('/')[1] || 'en';
  const otherLocale = currentLocale === 'en' ? 'ar' : 'en';
  
  const navigation = [
    { name: t('nav.home'), href: `/${currentLocale}` },
    { name: t('nav.vehicles'), href: `/${currentLocale}/vehicles` },
    { name: t('nav.about'), href: `/${currentLocale}/about` },
    { name: t('nav.contact'), href: `/${currentLocale}/contact` },
  ];

  const switchLocalePath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b-2 border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex h-20 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${currentLocale}`} className="flex items-center gap-3 group">
              {/* Car icon logo */}
              <div className="relative">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-300 group-hover:animate-float" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                {/* Speed lines decoration */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-0.5 bg-gradient-to-r from-blue-600 to-transparent mb-1 animate-speedLines" style={{ width: '20px', animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">Careal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-gray-50 group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* Language Switcher */}
            <Link
              href={switchLocalePath}
              className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">{currentLocale === 'en' ? 'العربية' : 'English'}</span>
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={switchLocalePath}
                className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {currentLocale === 'en' ? 'العربية' : 'English'}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
