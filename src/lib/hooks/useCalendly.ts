import { useState, useCallback } from 'react';
import { trackEvent } from '@/lib/analytics';

export const useCalendly = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = useCallback(() => {
    trackEvent('open_calendly', { location: window.location.pathname });
    setIsCalendlyOpen(true);
  }, []);

  const closeCalendly = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  return {
    isCalendlyOpen,
    openCalendly,
    closeCalendly
  };
};