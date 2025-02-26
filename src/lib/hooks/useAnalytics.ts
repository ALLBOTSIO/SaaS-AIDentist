import { useEffect } from 'react';
import { trackPageView } from '../analytics';

export const usePageTracking = () => {
  useEffect(() => {
    // Track initial page load
    trackPageView(window.location.pathname);

    // Track route changes
    const handleRouteChange = () => {
      trackPageView(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
};