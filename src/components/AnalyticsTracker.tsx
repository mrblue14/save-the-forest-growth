
import { useEffect } from 'react';

// Extend Window interface to include gtag and dataLayer
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics tracking function
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Initialize Google Analytics
export const initAnalytics = (measurementId: string) => {
  if (typeof window !== 'undefined') {
    // Add the Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Add the configuration script
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);

    // Make gtag available globally
    window.gtag = window.gtag || function(...args: any[]) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(args);
    };
  }
};

const AnalyticsTracker = ({ measurementId = 'G-XXXXXXXXXX' }: { measurementId?: string }) => {
  useEffect(() => {
    initAnalytics(measurementId);
  }, [measurementId]);

  return null;
};

export default AnalyticsTracker;
