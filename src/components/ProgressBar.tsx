import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="relative h-2 bg-gray-800 rounded-full mb-8 overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 h-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ProgressBar;