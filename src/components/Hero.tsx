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
    heading: "AI-Powered Excellence in Modern Dentistry",
    subtext: "Transform your dental practice with intelligent automation patient, streamlines operations, and automates patient follow-up. Experience the power of AI that works as precisely as you do."
  },
  {
    heading: "Precision Dentistry Meets Artificial Intelligence",
    subtext: "Where clinical expertise meets AI innovation, creating smarter workflows and superior patient outcomes. Join leading practices in the future of dental care."
  },
  {
    heading: "Revolutionizing Dental Care Through AI Innovation",
    subtext: "Enhance your supply accuracy, automate routine tasks, and deliver exceptional patient experiences with AI technology designed specifically for dental professionals."
  },
  {
    heading: "Smart Solutions for Modern Dental Practices",
    subtext: "Harness the power of AI to enhance clinical decisions, streamline practice management, and provide outstanding patient care. Join the dental professionals."
  },
  {
    heading: "AI Excellence in Every Dental Decision",
    subtext: "Empower your practice with AI automation that enhances opperations, simplifies workflows, and transforms patient follow-up. The future of dentistry is here."
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
    <div className="relative min-h-[85vh]">
      {/* Professional Medical Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="relative w-full px-4 sm:px-6 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium mb-12 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 transition-colors"
          >
            AI-Powered Voice Agents
          </motion.span>
          
          <div className="h-[220px] sm:h-[180px] md:h-[160px] mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 right-0"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2] text-white max-w-5xl mx-auto tracking-tight">
                  {titles[currentIndex].heading}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="h-[180px] sm:h-[140px] mb-16">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light"
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
              className="btn-secondary flex items-center justify-center px-8 py-4 text-lg font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Free Account
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
              className="fixed left-4 right-4 top-20 max-w-4xl mx-auto z-50"
            >
              <LeadForm onClose={() => setShowLeadForm(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </div>
  );
};

export default React.memo(Hero);