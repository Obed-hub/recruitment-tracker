import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-T7S3TQ38MV';

/**
 * Tracks SPA page views in Google Analytics (GA4) across all route changes.
 */
export const GoogleAnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const pagePath = location.pathname + location.search + location.hash;
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
        send_to: GA_MEASUREMENT_ID,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalyticsTracker;
