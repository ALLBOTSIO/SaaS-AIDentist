import React from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

export const VoiceAgentWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative"
        >
          <iframe
            id="audio_iframe"
            src="https://widget.synthflow.ai/widget/v2/1734936602056x450762035263871900/1734936601893x980182472960660700"
            allow="microphone"
            width="400"
            height="600"
            style={{
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              background: 'transparent',
            }}
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Close voice agent"
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      ) : (
        <motion.button
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-[#00A6E6] text-white rounded-full shadow-lg hover:bg-[#0095D1] transition-colors"
        >
          <Mic className="w-5 h-5" />
          <span className="font-medium">Voice Assistant</span>
        </motion.button>
      )}
    </div>
  );
};