import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="fixed left-4 right-4 top-20 max-w-4xl mx-auto z-50 bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Close calendar"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/ai-consultant/vip?hide_event_type_details=1&hide_gdpr_banner=1" 
            style={{ minWidth: '320px', height: '700px' }}
          />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      </motion.div>
    </>
  );
};