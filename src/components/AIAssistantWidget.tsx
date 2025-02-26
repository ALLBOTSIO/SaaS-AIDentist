import React from 'react';
import { motion } from 'framer-motion';

interface AIAssistantWidgetProps {
  isVisible: boolean;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed bottom-24 right-6 z-50"
    >
      <iframe 
        id="audio_iframe"
        src="https://widget.synthflow.ai/widget/v2/1740253777141x261384780994637900/1740253776920x524694119885592770"
        allow="microphone"
        width="400"
        height="550"
        style={{
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          background: 'transparent',
        }}
        title="AI Assistant"
      />
    </motion.div>
  );
};