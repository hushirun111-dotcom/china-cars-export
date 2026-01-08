import { MetadataRoute } from 'next';
import { vehicles } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://careal.com';
  const locales = ['en', 'ar'];
  const currentDate = new Date();

  // Static pages
  const staticPages = ['', '/vehicles', '/about', '/contact'];
  
  const staticUrls = locales.flatMap(locale => 
    staticPages.map(page => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: currentDate,
      changeFrequency: page === '' ? 'daily' as const : 'weekly' as const,
      priority: page === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${page}`,
          ar: `${baseUrl}/ar${page}`,
        },
      },
    }))
  );

  // Vehicle detail pages
  const vehicleUrls = locales.flatMap(locale =>
    vehicles.map(vehicle => ({
      url: `${baseUrl}/${locale}/vehicles/${vehicle.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/vehicles/${vehicle.id}`,
          ar: `${baseUrl}/ar/vehicles/${vehicle.id}`,
        },
      },
    }))
  );

  return [...staticUrls, ...vehicleUrls];
}
