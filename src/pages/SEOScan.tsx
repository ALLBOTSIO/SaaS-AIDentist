import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, CheckCircle, Globe, Users, Star, AlertTriangle } from 'lucide-react';
import { trackEvent, trackError, trackSEOScan } from '@/lib/analytics';
import { SEOResults } from '@/components/SEOResults';
import { useSEOScan } from '@/lib/hooks/useSEOScan';
import { TransformCTA } from '@/components/shared/TransformCTA';

declare global {
  interface Window {
    LMRLeadGenWidget?: any;
    onerror?: (message: string, source?: string, lineno?: number, colno?: number, error?: Error) => void;
  }
}

const SEOScan = () => {
  const { scanResult, isScanning, startScan } = useSEOScan();
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;

    const loadWidget = () => {
      // Remove any existing widget instances
      const existingWidget = document.getElementById('local-marketing-widget');
      if (existingWidget) {
        while (existingWidget.firstChild) {
          existingWidget.removeChild(existingWidget.firstChild);
        }
      }

      trackEvent('widget_load_attempt', { attempt: retryCount + 1 });

      // Create and append the widget script
      const script = document.createElement('script');
      script.src = 'https://www.local-marketing-reports.com/m/assets-v2/lead-gen/js/external/widget-builder.js';
      script.dataset.widgetId = '6d0978c47a4cce41d5cee6ae7275b5eac688e3bd';
      script.crossOrigin = 'anonymous';
      script.async = true;

      script.onerror = async () => {
        trackError('Widget script load failed', `ATTEMPT_${retryCount + 1}`);
        
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(`Retrying widget load (${retryCount}/${maxRetries})...`);
          script.remove();
          setTimeout(loadWidget, 1000 * retryCount); // Exponential backoff
          return;
        }

        // After all retries failed, show fallback UI
        const container = document.getElementById('local-marketing-widget');
        if (container) {
          container.innerHTML = `
            <div class="text-center p-8">
              <div class="mb-6">
                <div class="w-16 h-16 mx-auto mb-4 text-yellow-500">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <p class="text-gray-600 mb-2">We're having trouble loading the SEO analysis tool.</p>
                <p class="text-sm text-gray-500 mb-4">Please try refreshing the page or contact our support team.</p>
              </div>
              <div class="space-x-4">
                <button onclick="window.location.reload()" class="px-6 py-2 bg-[#00A6E6] text-white rounded-lg hover:bg-[#0095D1]">
                Refresh Page
              </button>
                <a href="#contact" class="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                  Contact Support
                </a>
              </div>
            </div>
          `;
        }
      };

      script.onload = () => {
        // Track successful widget load
        trackEvent('widget_load_success', {
          businessName: window.LMRLeadGenWidget?.getBusinessName() || 'Unknown',
          hasWebsite: true,
          scanCompleted: false
        });

        // Add widget completion callback
        if (window.LMRLeadGenWidget) {
          window.LMRLeadGenWidget.onComplete = (data: any) => {
            startScan({
              name: data.businessName,
              website: data.website
            });
            setShowResults(true);
          };
        }
      };

      document.body.appendChild(script);
    };

    loadWidget();

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[data-widget-id="6d0978c47a4cce41d5cee6ae7275b5eac688e3bd"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Clean up any global widget instance
      if (window.LMRLeadGenWidget) {
        delete window.LMRLeadGenWidget;
      }

      // Remove any error message containers
      const container = document.getElementById('local-marketing-widget');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [startScan]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* SEO Meta Tags are handled in the head */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Free Analysis Tool
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your FREE Local SEO Analysis
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how your dental practice performs online and get actionable insights to improve your local visibility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8 text-gray-600 border-b border-gray-100 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Globe className="w-5 h-5 text-[#00A6E6]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Website Analysis</h3>
                  <p className="text-sm text-gray-500">Technical SEO review</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Local Presence</h3>
                  <p className="text-sm text-gray-500">Directory listings check</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-50 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Review Analysis</h3>
                  <p className="text-sm text-gray-500">Reputation monitoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get:</h3>
            <div className="space-y-3">
              {[
                'Comprehensive SEO score for your dental practice',
                'Analysis of your Google Business Profile',
                'Review of local directory listings',
                'Website performance metrics',
                'Competitor comparison',
                'Actionable recommendations'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00A6E6]" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Widget Container */}
          <div 
            id="local-marketing-widget" 
            className="min-h-[600px] border border-gray-100 rounded-lg p-4"
          >
            {/* Widget will be injected here */}
            <div className="flex justify-center items-center h-[600px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00A6E6]"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Want to learn more about improving your practice's online presence?
          </p>
          <a 
            href="https://calendly.com/ai-consultant/ai-project-kickoff"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#00A6E6] rounded-xl hover:bg-[#0095D1] transition-colors duration-200"
          >
            Speak to an Expert
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
      <TransformCTA />
      
      {/* Results Modal */}
      {showResults && scanResult && (
        <SEOResults
          score={75} // Example score
          recommendations={[
            'Optimize your Google Business Profile with more photos and posts',
            'Improve website loading speed on mobile devices',
            'Add more local keywords to your website content',
            'Encourage more patient reviews on key platforms',
            'Ensure consistent NAP (Name, Address, Phone) across directories'
          ]}
          onClose={() => setShowResults(false)}
        />
      )}
    </div>
  );
};

export default SEOScan;