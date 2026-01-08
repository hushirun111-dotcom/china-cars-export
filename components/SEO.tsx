import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
  locale?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  keywords = [],
  locale = 'en'
}: SEOProps) {
  const siteUrl = 'https://careal.com';
  const fullTitle = `${title} | Careal`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Careal" />
      <meta property="og:locale" content={locale === 'ar' ? 'ar_AE' : 'en_US'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@careal" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${canonical || ''}`} />
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}/ar${canonical || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en${canonical || ''}`} />
    </Head>
  );
}
