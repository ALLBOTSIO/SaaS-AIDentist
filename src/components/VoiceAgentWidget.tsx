import React from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

const BOTTOM_PADDING = 40; // Padding from bottom in pixels

export const VoiceAgentWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`fixed right-6 z-50 transition-all duration-300 ease-in-out`} style={{ bottom: `${BOTTOM_PADDING}px` }}>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative bg-white/10 backdrop-blur-md rounded-2xl border-[3px] border-white/20 shadow-lg transition-all duration-300 hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]"
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
              background: 'transparent'
            }}
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 border-[3px] border-white/20 hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]"
            aria-label="Close voice agent"
          >
            <svg
              className="w-4 h-4"
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
          className="flex items-center gap-2 px-6 py-3 text-white rounded-full relative border-[3px] border-white/40 transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] hover:bg-white/10 backdrop-blur-sm"
        >
          <Mic className="w-5 h-5" />
          <span className="font-medium">Voice Assistant</span>
        </motion.button>
      )}
    </div>
  );
};