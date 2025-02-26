import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepZero from './steps/StepZero';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import VoiceCharacteristics from './steps/VoiceCharacteristics';
import KnowledgeBase from './steps/KnowledgeBase';
import ContactInfo from './steps/ContactInfo';
import StepFour from './steps/StepFour';
import Confirmation from './steps/Confirmation';
import ProgressBar from './ProgressBar';
import { useEffect } from 'react';

export interface FormData {
  [key: string]: any;
}

export interface StepProps {
  data: FormData;
  updateData: (update: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        const activeElement = document.activeElement;
        if (activeElement?.tagName === 'BUTTON') {
          (activeElement as HTMLButtonElement).click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const steps = [
    { component: StepZero, title: 'Business Details' },
    { component: StepOne, title: 'Identity & Personality' },
    { component: VoiceCharacteristics, title: 'Voice Settings' },
    { component: StepTwo, title: 'Call Handling' },
    { component: KnowledgeBase, title: 'Knowledge Base' },
    { component: ContactInfo, title: 'Contact Info' },
    { component: StepFour, title: 'Additional Notes' },
    { component: Confirmation, title: 'Confirmation' }
  ];

  const updateFormData = (update: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...update }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 relative">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A] rounded-xl"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20 rounded-xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#60A5FA]/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" 
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#93C5FD]/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />
      <div className="relative" role="form" aria-label={`Step ${currentStep + 1} of ${steps.length}: ${steps[currentStep].title}`}>
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          tabIndex={-1}
        >
          <CurrentStepComponent
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
            totalSteps={steps.length}
          />
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
};

export default LeadForm;