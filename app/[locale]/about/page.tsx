import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import { CheckCircle, Award, DollarSign, HeadphonesIcon, Globe, Target, Eye, Lightbulb, Warehouse } from 'lucide-react';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'من نحن - Careal'
      : 'About Us - Careal',
    description: isArabic
      ? 'Careal - شريكك الموثوق في تصدير السيارات الصينية المستعملة. أكثر من 10 سنوات من الخبرة، 5000+ سيارة مصدرة، نسبة رضا العملاء 98٪.'
      : 'Careal - Your trusted partner in Chinese used car export. 10+ years experience, 5000+ cars exported, 98% customer satisfaction rate.',
    openGraph: {
      title: isArabic ? 'من نحن - Careal' : 'About Us - Careal',
      description: isArabic
        ? 'تعرف على Careal - المصدر الرائد للسيارات الصينية المستعملة عالية الجودة'
        : 'Learn about Careal - Leading exporter of premium Chinese used cars',
    },
  };
}

export default function AboutPage() {
  const t = useTranslations();

  const features = [
    {
      icon: CheckCircle,
      title: t('about.why.quality.title'),
      description: t('about.why.quality.description'),
    },
    {
      icon: DollarSign,
      title: t('about.why.price.title'),
      description: t('about.why.price.description'),
    },
    {
      icon: HeadphonesIcon,
      title: t('about.why.support.title'),
      description: t('about.why.support.description'),
    },
    {
      icon: Globe,
      title: t('about.why.experience.title'),
      description: t('about.why.experience.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              About Careal
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {t('about.company.title')}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {t('about.company.intro')}
              </p>
              <p>
                {t('about.company.achievement')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.culture.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 transform group-hover:scale-110 transition-transform">
                <Eye className="text-white" size={32} />
              </div>
              <div className="mb-4 inline-block px-4 py-1 bg-blue-100 rounded-full">
                <span className="text-blue-600 font-bold">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t('about.culture.vision.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.culture.vision.description')}
              </p>
            </div>

            {/* Values */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-6 transform group-hover:scale-110 transition-transform">
                <Award className="text-white" size={32} />
              </div>
              <div className="mb-4 inline-block px-4 py-1 bg-purple-100 rounded-full">
                <span className="text-purple-600 font-bold">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t('about.culture.values.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.culture.values.description')}
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl mb-6 transform group-hover:scale-110 transition-transform">
                <Target className="text-white" size={32} />
              </div>
              <div className="mb-4 inline-block px-4 py-1 bg-pink-100 rounded-full">
                <span className="text-pink-600 font-bold">03</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t('about.culture.mission.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.culture.mission.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Our Advantages
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('about.why.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.stats.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">20+</div>
              <div className="text-gray-600 font-semibold">{t('about.stats.years')}</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">40+</div>
              <div className="text-gray-600 font-semibold">{t('about.stats.countries')}</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">20,000+</div>
              <div className="text-gray-600 font-semibold">{t('about.stats.customers')}</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">13</div>
              <div className="text-gray-600 font-semibold">{t('about.stats.warehouses')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overseas Warehouses */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl">
              <Warehouse className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('about.warehouses.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.warehouses.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              'about.warehouses.list.russia',
              'about.warehouses.list.belarus',
              'about.warehouses.list.kazakhstan',
              'about.warehouses.list.uzbekistan',
              'about.warehouses.list.moldova',
              'about.warehouses.list.poland',
              'about.warehouses.list.thailand',
              'about.warehouses.list.cambodia',
              'about.warehouses.list.gabon',
              'about.warehouses.list.uae',
              'about.warehouses.list.iran',
              'about.warehouses.list.burkina',
              'about.warehouses.list.congo',
            ].map((warehouse, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Warehouse className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                      {t(warehouse)}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-6">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {t('about.commitment.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.commitment.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
