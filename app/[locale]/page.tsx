import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedVehicles, brands } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import BrandIcon from '@/components/BrandIcon';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'الصفحة الرئيسية - Careal'
      : 'Home - B2B Chinese Automotive Export Solutions',
    description: isArabic
      ? 'حلول تصدير السيارات الصينية الاحترافية للشركات. خدمات الجملة، التخصيص، والخدمات اللوجستية العالمية. BYD، Geely، Chery، Great Wall.'
      : 'Professional B2B Chinese automotive export solutions for global distributors and dealers. Wholesale, customization, and logistics services. BYD, Geely, Chery, Great Wall.',
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();
  const featuredVehicles = getFeaturedVehicles();

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Careal',
    description: 'B2B Chinese automotive export solutions for global distributors',
    url: 'https://careal.com',
    logo: 'https://careal.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-138-0000-0000',
      contactType: 'Business Sales',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Arabic', 'Chinese', 'Russian', 'Spanish']
    },
    sameAs: [
      'https://facebook.com/careal',
      'https://twitter.com/careal',
      'https://instagram.com/careal'
    ]
  };

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Speed lines effect */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-white animate-speedLines"
              style={{
                top: `${20 + i * 15}%`,
                width: '200px',
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Tire track pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tireTrack" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0,20 Q 25,10 50,20 T 100,20" stroke="white" strokeWidth="3" fill="none" opacity="0.3"/>
                <path d="M 0,25 Q 25,35 50,25 T 100,25" stroke="white" strokeWidth="3" fill="none" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tireTrack)"/>
          </svg>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider">
              Premium Chinese Vehicles
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block">{t('home.hero.title')}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <Link
              href={`/${locale}/vehicles`}
              className="inline-flex items-center px-10 py-4 bg-white text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              {t('home.hero.cta')}
              <ArrowRight className="ml-2 text-blue-600 group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* B2B Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Professional Services
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('home.b2b.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.b2b.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'wholesale', icon: '📦', gradient: 'from-blue-500 to-blue-600' },
              { key: 'customization', icon: '🔧', gradient: 'from-purple-500 to-purple-600' },
              { key: 'logistics', icon: '🚚', gradient: 'from-pink-500 to-pink-600' },
              { key: 'support', icon: '💼', gradient: 'from-indigo-500 to-indigo-600' },
            ].map((service, index) => (
              <div
                key={service.key}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-purple-300 hover:-translate-y-3"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg text-3xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {t(`home.b2b.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`home.b2b.${service.key}.description`)}
                </p>
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Trusted Brands
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('home.brands.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.brands.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 hover:border-purple-200 hover:-translate-y-3 cursor-pointer overflow-hidden"
              >
                {/* Speed effect on hover */}
                <div className="absolute inset-0 bg-speed-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Tire icon decoration */}
                <div className="absolute -right-6 -top-6 w-20 h-20 opacity-5 group-hover:opacity-10 group-hover:animate-tireRotate transition-all duration-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4 text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    <BrandIcon brandName={brand.name} className="w-20 h-20 transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">{brand.name}</h3>
                  <p className="text-sm text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold">
                    {brand.models.length} models
                  </p>
                  
                  {/* Engine pulse effect */}
                  <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 mx-auto rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Premium Selection
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.featured.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 hover:-translate-y-3 animate-enginePulse"
              >
                {/* Racing stripe decoration */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500 transition-all duration-500 z-10" />
                <div className="absolute top-0 right-0 w-1 h-0 group-hover:h-full bg-gradient-to-b from-pink-500 via-purple-600 to-blue-600 transition-all duration-500 z-10" />
                
                <div className="relative h-52 overflow-hidden">
                  {/* Speed lines overlay */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-0.5 bg-white/50 animate-speedLines"
                        style={{
                          top: `${30 + i * 20}%`,
                          width: '100px',
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                  
                  <Image
                    src={vehicle.images[0]}
                    alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year} - Used car for sale, ${vehicle.mileage.toLocaleString()} km, ${vehicle.transmission}, ${vehicle.fuelType}`}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p className="flex items-center justify-between">
                      <span className="font-medium">{t('home.featured.year')}:</span>
                      <span className="font-semibold text-gray-900">{vehicle.year}</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="font-medium">{t('home.featured.mileage')}:</span>
                      <span className="font-semibold text-gray-900">{vehicle.mileage.toLocaleString()} {t('common.km')}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${vehicle.price.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    href={`/${locale}/vehicles/${vehicle.id}`}
                    className="block w-full text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    {t('home.featured.viewDetails')}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href={`/${locale}/vehicles`}
              className="inline-flex items-center px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              View All Vehicles
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Animated speed lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 bg-white animate-speedLines"
              style={{
                top: `${15 + i * 12}%`,
                width: '150px',
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Floating car icons */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              className="absolute w-16 h-16 text-white animate-float"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
              }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
          ))}
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fadeInUp">
            {t('home.featured.contactUs')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-50 max-w-2xl mx-auto">
            Contact us via WhatsApp or Email for inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/8613800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-3 group-hover:animate-float" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            <Link
              href={`/${locale}/contact`}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/95 backdrop-blur-sm text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text rounded-2xl font-bold hover:bg-white hover:shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-600 group-hover:animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
