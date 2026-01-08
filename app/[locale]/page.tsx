import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedVehicles, brands } from '@/lib/data';
import { Search } from 'lucide-react';
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
      {/* Hero Section - CarMax Style */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
              WANNA EXPORT?
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-medium leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <Link
              href={`/${locale}/vehicles`}
              className="inline-block px-10 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 shadow-lg"
            >
              {t('home.hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={t('home.search.placeholder')}
                className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services Section - Simplified */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.b2b.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.b2b.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { key: 'wholesale', icon: '📦', color: 'bg-blue-100 text-blue-600' },
              { key: 'customization', icon: '🔧', color: 'bg-purple-100 text-purple-600' },
              { key: 'logistics', icon: '🚚', color: 'bg-green-100 text-green-600' },
              { key: 'support', icon: '💼', color: 'bg-orange-100 text-orange-600' },
            ].map((service) => (
              <div
                key={service.key}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.color} rounded-lg mb-4 text-2xl`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {t(`home.b2b.${service.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`home.b2b.${service.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands Section - Simplified */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center border border-gray-200 cursor-pointer"
              >
                <div className="flex justify-center mb-3 text-gray-700">
                  <BrandIcon brandName={brand.name} className="w-16 h-16" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{brand.name}</h3>
                <p className="text-sm text-gray-500">
                  {brand.models.length} models
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section - Simplified */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.featured.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={vehicle.images[0]}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <p>{vehicle.year} • {vehicle.mileage.toLocaleString()} {t('common.km')}</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${vehicle.price.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    href={`/${locale}/vehicles/${vehicle.id}`}
                    className="block w-full text-center px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
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
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.featured.contactUs')}
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact us via WhatsApp or Email for inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8613800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
