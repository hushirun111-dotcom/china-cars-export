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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${currentLocale}`} className="flex items-center gap-3 group">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <span className="text-2xl font-bold text-gray-900">Careal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <Link
              href={switchLocalePath}
              className="ml-4 px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              {currentLocale === 'en' ? 'العربية' : 'English'}
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
