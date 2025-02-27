import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import LeadForm from './LeadForm';
import { useCalendly } from '@/lib/hooks/useCalendly';
import { CalendlyModal } from '@/components/CalendlyModal';
import { trackEvent } from '@/lib/analytics';

interface TitleContent {
  heading: string;
  subtext: string;
}

const titles: TitleContent[] = [
  {
    heading: "Reclaim Your Unscheduled Revenue with AI",
    subtext: "Convert thousands in unscheduled treatment into actual appointments with AI-powered patient reactivation that works around the clock."
  },
  {
    heading: "AI That Fills Your Schedule & Increases Revenue",
    subtext: "Automatically confirm appointments, verify insurance, and recover patient data gaps while you focus on providing exceptional dental care."
  },
  {
    heading: "Transform Practice Metrics into Profitability",
    subtext: "Our AI agents convert unconfirmed appointments, follow up on treatment plans, and reactivate overdue hygiene visits without adding staff."
  },
  {
    heading: "Unlock $235,000+ in Monthly Revenue Potential",
    subtext: "AI-powered outbound calls convert just 5% of your unscheduled treatment into real appointments, creating significant new practice income."
  },
  {
    heading: "Your 24/7 AI Practice Growth Partner",
    subtext: "While your office is closed, our AI is confirming tomorrow's appointments, filling schedule gaps, and converting treatment plans into revenue."
  },
  {
    heading: "Never Call Insurance Companies Again",
    subtext: "Our AI handles 100% of insurance verifications in seconds, saving your practice 32 hours monthly with 99.9% accuracy."
  },
  {
    heading: "Automate Supply Management Across All Vendors",
    subtext: "AI-powered inventory system connects with top suppliers like Henry Schein and Patterson, cutting supply costs by 30% and saving 8 hours weekly."
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const { isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCreateAccount = () => {
    trackEvent('cta_click', {
      button: 'create_account',
      location: 'hero',
      type: 'modal_open'
    });
    setShowLeadForm(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-55px)] w-full flex items-center justify-center">
      {/* Professional Medical Background */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
        {/* Subtle Medical-themed Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#60A5FA]/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#93C5FD]/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#3B82F6]/20 rounded-full blur-2xl"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="relative w-full flex items-center justify-center px-0">
        <div className="flex flex-col items-center text-center w-full max-w-[1920px]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 transition-colors"
          >
            Transform Your Practice with AI
          </motion.span>
          
          <div className="h-[220px] sm:h-[180px] md:h-[160px] mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-x-0 px-4 sm:px-6 lg:px-8"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2] text-white max-w-[1400px] mx-auto tracking-tight">
                  {titles[currentIndex].heading}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="h-[180px] sm:h-[140px] mb-12">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-[1200px] mx-auto font-light px-4 sm:px-6 lg:px-8 relative"
              >
                {titles[currentIndex].subtext}
              </motion.p>
            </AnimatePresence>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button
              onClick={openCalendly}
              className="btn-secondary group flex items-center justify-center px-8 py-4 text-lg font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.a 
              href="/setup"
              onClick={(e) => {
                e.preventDefault();
                handleCreateAccount();
              }}
              className="btn-secondary px-8 py-4 text-lg font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create My AI Agent
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Lead Form Modal */}
      <AnimatePresence>
        {showLeadForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setShowLeadForm(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-4xl">
                <button
                  onClick={() => setShowLeadForm(false)}
                  className="absolute -top-2 -right-2 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors duration-300 z-50"
                  aria-label="Close form"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <LeadForm onClose={() => setShowLeadForm(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </div>
  );
};

export default React.memo(Hero);