'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const quickLinks = [
    { name: t('nav.home'), href: `/${currentLocale}` },
    { name: t('nav.vehicles'), href: `/${currentLocale}/vehicles` },
    { name: t('nav.about'), href: `/${currentLocale}/about` },
    { name: t('nav.contact'), href: `/${currentLocale}/contact` },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      {/* Tire track pattern */}
      <div className="absolute top-0 left-0 right-0 h-20 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerTireTrack" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0,20 Q 25,10 50,20 T 100,20" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M 0,25 Q 25,35 50,25 T 100,25" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerTireTrack)"/>
        </svg>
      </div>
      
      {/* Animated road lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-white/30 animate-roadLine"
            style={{
              left: `${25 + i * 25}%`,
              height: '100px',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="relative">
            <div className="mb-6 flex items-center gap-3 group cursor-pointer">
              {/* Animated car icon */}
              <div className="relative">
                <svg className="w-10 h-10 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 group-hover:animate-float" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Careal</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Decorative racing stripe */}
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {t('footer.followUs')}
            </h3>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="relative w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50 backdrop-blur-sm group overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} className="relative z-10" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              ))}
            </div>
            
            {/* Speedometer decoration */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <svg className="w-8 h-8 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-xs text-gray-400">
                  <p className="font-semibold text-white mb-1">Fast & Reliable</p>
                  <p>Export Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-300">
          <p className="flex items-center justify-center space-x-2">
            <span>©</span>
            <span className="font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Careal</span>
            <span>·</span>
            <span>{t('footer.copyright')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
