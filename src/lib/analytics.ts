export type EventParams = {
  [key: string]: string | number | boolean;
};

export const trackEvent = (eventName: string, params?: EventParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

export const trackPageView = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};

export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
  });
};

export const trackButtonClick = (buttonName: string): void => {
  trackEvent('button_click', {
    button_name: buttonName,
  });
};

export const trackError = (errorMessage: string, errorCode?: string): void => {
  trackEvent('error', {
    error_message: errorMessage,
    error_code: errorCode || 'unknown',
  });
};

interface SEOScanData {
  businessName: string;
  hasWebsite: boolean;
  scanCompleted: boolean;
  score?: number;
}

export const trackSEOScan = (data: SEOScanData): void => {
  trackEvent('seo_scan', {
    business_name: data.businessName,
    has_website: data.hasWebsite,
    scan_completed: data.scanCompleted,
    score: data.score,
    timestamp: new Date().toISOString()
  });
};