import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, CheckCircle, Globe, Users, Star, AlertTriangle } from 'lucide-react';
import { trackEvent, trackError } from '@/lib/analytics';
import { SEOResults } from '@/components/SEOResults';
import { useSEOScan } from '@/lib/hooks/useSEOScan';

declare global {
  interface Window {
    LMRLeadGenWidget?: any;
    onerror?: (message: string, source?: string, lineno?: number, colno?: number, error?: Error) => void;
  }
}

export const AIImpactScan = () => {
  const { scanResult, isScanning, startScan } = useSEOScan();
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;

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
    script.defer = true;
    
    script.onerror = async () => {
      trackError('Widget script load failed', `ATTEMPT_${retryCount + 1}`);
      
      if (retryCount < maxRetries) {
        retryCount++;
        console.log(`Retrying widget load (${retryCount}/${maxRetries})...`);
        script.remove();
        setTimeout(() => {
          document.body.appendChild(script);
        }, 1000 * retryCount); // Exponential backoff
        return;
      }

      // After all retries failed, show fallback UI
      const container = document.getElementById('local-marketing-widget');
      if (container) {
        container.innerHTML = `
          <div class="text-center p-8">
            <div class="mb-6">
              <div class="w-16 h-16 mx-auto mb-4 text-yellow-500">
                <AlertTriangle className="w-16 h-16" />
              </div>
              <p class="text-gray-600 mb-2">We're having trouble loading the AI analysis tool.</p>
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
      trackEvent('widget_load_success', {
        businessName: window.LMRLeadGenWidget?.getBusinessName() || 'Unknown',
        hasWebsite: true,
        scanCompleted: false
      });

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

    // Append the script to the document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[data-widget-id="6d0978c47a4cce41d5cee6ae7275b5eac688e3bd"]');
      if (existingScript) {
        existingScript.remove();
      }
      if (window.LMRLeadGenWidget) {
        delete window.LMRLeadGenWidget;
      }
      const container = document.getElementById('local-marketing-widget');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [startScan]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src="https://cmlrtjuvqrrwcqspczur.supabase.co/storage/v1/object/public/Images//ai_dentist_results.png"
              alt="1 Month AI Impact Analysis"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
              Free Analysis Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your FREE AI Impact Analysis
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI can transform your dental practice and get actionable insights to improve your efficiency and patient care.
            </p>
          </motion.div>
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
                  <h3 className="font-medium text-gray-900">Practice Analysis</h3>
                  <p className="text-sm text-gray-500">Comprehensive review</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">AI Opportunities</h3>
                  <p className="text-sm text-gray-500">Growth potential check</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-50 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">ROI Analysis</h3>
                  <p className="text-sm text-gray-500">Value assessment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get:</h3>
            <div className="space-y-3">
              {[
                'Comprehensive AI readiness score for your practice',
                'Analysis of automation opportunities',
                'Cost savings potential assessment',
                'Efficiency improvement metrics',
                'Implementation roadmap',
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
            className="min-h-[600px] rounded-lg p-4 bg-white/10 backdrop-blur-md card-hover"
          >
            <script
              data-widget-id="6d0978c47a4cce41d5cee6ae7275b5eac688e3bd"
              src="https://www.local-marketing-reports.com/m/assets-v2/lead-gen/js/external/widget-builder.js"
              async
              defer
              crossOrigin="anonymous"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Want to learn more about transforming your practice with AI?
          </p>
          <a 
            href="https://calendly.com/ai-consultant/ai-project-kickoff"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center px-8 py-4 text-lg font-semibold"
          >
            Speak to an Expert
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
      
      {/* Results Modal */}
      {showResults && scanResult && (
        <SEOResults
          score={75} // Example score
          recommendations={[
            'Implement AI-powered patient scheduling',
            'Automate insurance verification process',
            'Deploy voice AI for after-hours support',
            'Integrate AI analytics for practice insights',
            'Enhance patient communication with AI tools'
          ]}
          onClose={() => setShowResults(false)}
        />
      )}
    </section>
  );
};