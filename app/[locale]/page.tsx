import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedVehicles, brands } from '@/lib/data';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'شراء سيارات مستعملة من الصين - Careal'
      : 'Buy Used Cars from China | Quality Inspected | Best Prices - Careal',
    description: isArabic
      ? 'شراء سيارات مستعملة عالية الجودة من الصين. تقارير فحص معتمدة، أفضل الأسعار، توصيل مرن. BYD، Geely، Chery، Great Wall.'
      : 'Import quality used cars from China. Certified inspection reports, wholesale prices, flexible worldwide delivery. Massive inventory of BYD, Geely, Chery, Great Wall and more.',
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();
  const featuredVehicles = getFeaturedVehicles();

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Careal',
    description: 'Import quality used cars from China with certified inspection and flexible delivery',
    url: 'https://careal.com',
    logo: 'https://careal.com/logo.png',
    priceRange: '$$$',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-138-0000-0000',
      contactType: 'Customer Service',
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
      {/* Hero Section - Warm & Welcoming */}
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Decorative warm elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
              {t('home.hero.title')}
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

      {/* Quick Inquiry Form */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-600">
                Tell us what you're looking for and we'll find your perfect car
              </p>
            </div>
            
            <form className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="USA, UAE, Mexico..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Vehicle Requirements */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What car are you looking for? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Example: I'm looking for a 2022 BYD Tang SUV with low mileage, budget around $15,000-$20,000..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  ⚡ Fast response within 24 hours
                </p>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Free Quote 🚗
                </button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span>No obligations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span>100% Free quote</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span>Secure & confidential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Story Section - Warm & Inviting */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder - represents family with car */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">👨‍👩‍👧‍👦 🚗</div>
                    <p className="text-2xl font-bold mb-2">Happy Family</p>
                    <p className="text-lg opacity-90">Living Their Dream</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('home.familyStory.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {t('home.familyStory.subtitle')}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t('home.familyStory.description')}
              </p>
              <div className="flex items-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">10,000+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - 4 Core Advantages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('home.advantages.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.advantages.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'inventory', icon: '🚗', gradient: 'from-blue-500 to-blue-600' },
              { key: 'inspection', icon: '✅', gradient: 'from-green-500 to-green-600' },
              { key: 'pricing', icon: '💰', gradient: 'from-yellow-500 to-yellow-600' },
              { key: 'delivery', icon: '🚚', gradient: 'from-purple-500 to-purple-600' },
            ].map((advantage) => (
              <div
                key={advantage.key}
                className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-2xl mb-5 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {t(`home.advantages.${advantage.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`home.advantages.${advantage.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials - Happy Moments */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['story1', 'story2', 'story3'].map((story, index) => (
              <div
                key={story}
                className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group"
              >
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  {index === 0 ? '👨‍👩‍👧‍👦' : index === 1 ? '👨‍👩‍👦' : '👨‍👩‍👧'}
                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      ✓ Verified
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{t(`home.testimonials.${story}.quote`)}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900 mb-1">
                      {t(`home.testimonials.${story}.name`)}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      📍 {t(`home.testimonials.${story}.location`)}
                    </p>
                    <p className="text-sm font-semibold text-blue-600">
                      🚗 {t(`home.testimonials.${story}.car`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border-2 border-gray-100 cursor-pointer group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md border-2 border-blue-200">
                    <span className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">{brand.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{brand.name}</h3>
                <p className="text-sm text-gray-500 font-medium">
                  {brand.models.length} models
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section - Unified Design */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.featured.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.slice(0, 6).map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  {vehicle.fuelType === 'electric' && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                      ⚡ Electric
                    </div>
                  )}
                  {vehicle.fuelType === 'hybrid' && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                      🔋 Hybrid
                    </div>
                  )}
                  <Image
                    src={vehicle.images[0]}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        {vehicle.brand.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {vehicle.brand} {vehicle.model}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📅</span>
                      <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">🔧</span>
                      <span>{vehicle.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">🎨</span>
                      <span>{vehicle.color}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">🚗</span>
                      <span>{vehicle.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Price</p>
                      <p className="text-2xl font-bold text-blue-600">
                        ${vehicle.price.toLocaleString()}
                      </p>
                    </div>
                    <Link
                      href={`/${locale}/vehicles/${vehicle.id}`}
                      className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                    >
                      View
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/vehicles`}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Vehicles
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            {t('home.featured.contactUs')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Get your dream car from China today. Fast response, transparent pricing, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8613800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-all duration-200 shadow-2xl hover:shadow-green-500/50 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-white/50 hover:scale-105"
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
