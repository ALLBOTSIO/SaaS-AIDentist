import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="bg-gray-800 rounded-full h-2 mb-8 overflow-hidden">
      <div 
        className="bg-blue-500 h-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar; 