import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@/lib/analytics';
import { SimpleChat } from '@/components/Chat';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  const title = isArabic 
    ? 'Careal - تصدير السيارات الصينية المستعملة إلى الشرق الأوسط'
    : 'Careal - Premium Chinese Used Cars Export to Middle East';
    
  const description = isArabic
    ? 'Careal - شريكك الموثوق لتصدير السيارات الصينية المستعملة عالية الجودة إلى الشرق الأوسط. BYD، Geely، Chery، Great Wall وأكثر. أسعار تنافسية وشحن موثوق.'
    : 'Careal - Your trusted partner for premium Chinese used cars export to Middle East. BYD, Geely, Chery, Great Wall, and more. Competitive prices, reliable shipping, quality assured.';

  return {
    title: {
      default: title,
      template: `%s | Careal`
    },
    description,
    keywords: [
      'Chinese cars export',
      'used cars China',
      'BYD export',
      'Geely export',
      'Chery cars',
      'Great Wall motors',
      'Chinese cars Middle East',
      'car export China',
      'used vehicles China',
      'Careal',
      'سيارات صينية',
      'تصدير السيارات',
      'سيارات مستعملة'
    ],
    authors: [{ name: 'Careal' }],
    creator: 'Careal',
    publisher: 'Careal',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://careal.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      url: '/',
      title,
      description,
      siteName: 'Careal',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Careal - Premium Chinese Used Cars',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
      creator: '@careal',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <SimpleChat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
