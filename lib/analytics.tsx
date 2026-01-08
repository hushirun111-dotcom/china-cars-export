'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Track page views
export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const url = pathname + searchParams.toString();
    
    // Send pageview with URL
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);
}

// Google Analytics Component
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  
  if ((window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions
export const trackVehicleView = (vehicleId: string, vehicleName: string) => {
  trackEvent('view_item', 'Vehicle', vehicleName);
};

export const trackContactClick = (method: 'whatsapp' | 'email' | 'form') => {
  trackEvent('contact_click', 'Contact', method);
};

export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent('language_switch', 'Localization', `${fromLang}_to_${toLang}`);
};

export const trackFilterUsage = (filterType: string, filterValue: string) => {
  trackEvent('filter_use', 'Search', `${filterType}: ${filterValue}`);
};
