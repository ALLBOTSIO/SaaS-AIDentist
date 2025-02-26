import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import StepZero from './steps/StepZero';
import ContactInfo from './steps/ContactInfo';
import StepOne from './steps/StepOne';
import VoiceCharacteristics from './steps/VoiceCharacteristics';
import KnowledgeBase from './steps/KnowledgeBase';
import StepTwo from './steps/StepTwo';
import StepFour from './steps/StepFour';
import Confirmation from './steps/Confirmation';
import ProgressBar from './ProgressBar';

export interface FormData {
  [key: string]: string | undefined;

  // Business Details (Step Zero)
  businessName: string;
  businessUrl: string;
  phoneNumber: string;
  industry: string;
  specialty: string;
  contactType: string;

  // Contact Info
  contactFullName: string;
  contactEmail: string;
  contactPhone: string;
  timezone: string;
  contactNotes: string;

  // Identity & Personality (Step One)
  agentName: string;
  brandVoiceStyle: string;
  personalityTraits: string;
  voiceType: string;
  accentPreference: string;
  speakingPace: string;
  primaryLanguage: string;
  additionalLanguages: string;
  otherLanguages: string;
  industryTerminology: string;

  // Knowledge Base
  primaryUrl: string;
  additionalUrls: string;
  focusPages: string;
  documentFiles: string;
  customKnowledgeFiles: string;

  // Call Assistant Configuration (Step Two)
  // Inbound Settings
  inboundDailyVolume: string;
  inboundPeakHoursStart: string;
  inboundPeakHoursEnd: string;
  scheduleAppointments: string;
  liveHandoff: string;
  gatherInformation: string;
  smsCapabilities: string;
  voicemailSystem: string;
  emailIntegration: string;
  einNumber: string;

  // Outbound Settings
  outboundDailyTarget: string;
  outboundCallingHoursStart: string;
  outboundCallingHoursEnd: string;
  callPurpose: string;
  bookingSystemIntegration: string;
  calendarSoftware: string;
  confirmationMethod: string;

  // Additional Notes (Step Four)
  additionalNotes: string;

  // Legacy fields that might be referenced elsewhere
  whatToSolve: string;
  voicePreference: string;
  language: string;
  sympathetic: string;
  greeting: string;
  bookAppointments: string;
  inboundCalls: string;
  outboundCalls: string;
}

const generateVisitorId = () => {
  return 'visitor_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
};

const getUtmMedium = () => {
  // First try to get from localStorage
  const storedUtm = localStorage.getItem('leadform_utm_medium');
  if (storedUtm) return storedUtm;

  // If not in localStorage, try to get from URL
  const urlParams = new URLSearchParams(window.location.search);
  const utmMedium = urlParams.get('utm_medium');
  
  if (utmMedium) {
    localStorage.setItem('leadform_utm_medium', utmMedium);
    return utmMedium;
  }

  return null;
};

const getOrCreateVisitorId = () => {
  const storedId = localStorage.getItem('leadform_visitor_id');
  if (storedId) return storedId;
  
  const newId = generateVisitorId();
  localStorage.setItem('leadform_visitor_id', newId);
  return newId;
};

const loadCachedFormData = (): { data: FormData | null; step: number } => {
  try {
    const cachedData = localStorage.getItem('leadform_data');
    const cachedStep = localStorage.getItem('leadform_step');
    return {
      data: cachedData ? JSON.parse(cachedData) : null,
      step: cachedStep ? parseInt(cachedStep, 10) : 0
    };
  } catch (error) {
    console.error('Error loading cached form data:', error);
    return { data: null, step: 0 };
  }
};

export interface StepProps {
  data: FormData;
  updateData: (newData: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep?: () => void;
  visitorId: string;
}

interface LeadFormProps {
  onClose: () => void;
}

const steps = [StepZero, ContactInfo, StepOne, VoiceCharacteristics, KnowledgeBase, StepTwo, StepFour, Confirmation];
const stepNames = ['business_details', 'contact_info', 'identity', 'voice', 'knowledge', 'assistant_type', 'additional_notes', 'confirmation'];

const LeadForm: React.FC<LeadFormProps> = ({ onClose }) => {
  const { data: cachedData, step: cachedStep } = loadCachedFormData();
  const [currentStep, setCurrentStep] = useState(cachedStep);
  const [visitorId] = useState(getOrCreateVisitorId());
  const [utmMedium] = useState(getUtmMedium());
  const [formData, setFormData] = useState<FormData>(cachedData || {
    // Business Details (Step Zero)
    businessName: '',
    businessUrl: '',
    phoneNumber: '',
    industry: '',
    specialty: '',
    contactType: '',

    // Contact Info
    contactFullName: '',
    contactEmail: '',
    contactPhone: '',
    timezone: '',
    contactNotes: '',

    // Identity & Personality (Step One)
    agentName: '',
    brandVoiceStyle: '',
    personalityTraits: '',
    voiceType: '',
    accentPreference: '',
    speakingPace: '',
    primaryLanguage: '',
    additionalLanguages: '',
    otherLanguages: '',
    industryTerminology: '',

    // Knowledge Base
    primaryUrl: '',
    additionalUrls: '',
    focusPages: '',
    documentFiles: '',
    customKnowledgeFiles: '',

    // Call Assistant Configuration (Step Two)
    // Inbound Settings
    inboundDailyVolume: '',
    inboundPeakHoursStart: '',
    inboundPeakHoursEnd: '',
    scheduleAppointments: '',
    liveHandoff: '',
    gatherInformation: '',
    smsCapabilities: '',
    voicemailSystem: '',
    emailIntegration: '',
    einNumber: '',

    // Outbound Settings
    outboundDailyTarget: '',
    outboundCallingHoursStart: '',
    outboundCallingHoursEnd: '',
    callPurpose: '',
    bookingSystemIntegration: '',
    calendarSoftware: '',
    confirmationMethod: '',

    // Additional Notes (Step Four)
    additionalNotes: '',

    // Legacy fields that might be referenced elsewhere
    whatToSolve: '',
    voicePreference: '',
    language: '',
    sympathetic: '',
    greeting: '',
    bookAppointments: '',
    inboundCalls: '',
    outboundCalls: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const CurrentStepComponent = steps[currentStep];

  // Cache form data whenever it changes
  useEffect(() => {
    if (!submitted) {
      localStorage.setItem('leadform_data', JSON.stringify(formData));
      localStorage.setItem('leadform_step', currentStep.toString());
    }
  }, [formData, currentStep, submitted]);

  // Clear cache when form is submitted
  useEffect(() => {
    if (submitted) {
      // Clear all form-related data from localStorage
      localStorage.removeItem('leadform_data');
      localStorage.removeItem('leadform_step');
      localStorage.removeItem('leadform_visitor_id');
      localStorage.removeItem('leadform_utm_medium');
    }
  }, [submitted]);

  const submitStepData = async (stepIndex: number, data: FormData, isBack: boolean = false) => {
    // Define which fields belong to each step
    const stepFields = {
      business_details: ['businessName', 'businessUrl', 'phoneNumber', 'industry', 'specialty'],
      contact_info: ['contactFullName', 'contactEmail', 'contactPhone', 'timezone', 'contactNotes'],
      identity: ['agentName', 'brandVoiceStyle', 'personalityTraits'],
      voice: ['voiceType', 'accentPreference', 'speakingPace', 'primaryLanguage', 'additionalLanguages', 'otherLanguages', 'industryTerminology'],
      knowledge: ['primaryUrl', 'additionalUrls', 'focusPages', 'documentFiles', 'customKnowledgeFiles'],
      assistant_type: [
        'inboundDailyVolume', 'inboundPeakHoursStart', 'inboundPeakHoursEnd',
        'scheduleAppointments', 'liveHandoff', 'gatherInformation',
        'smsCapabilities', 'voicemailSystem', 'emailIntegration', 'einNumber',
        'outboundDailyTarget', 'outboundCallingHoursStart', 'outboundCallingHoursEnd',
        'callPurpose', 'bookingSystemIntegration', 'calendarSoftware', 'confirmationMethod'
      ],
      additional_notes: ['additionalNotes']
    };

    // Get the fields for the current step
    const currentStepFields = stepFields[stepNames[stepIndex] as keyof typeof stepFields] || [];
    
    // Filter the data to only include fields from the current step
    const stepData = Object.fromEntries(
      currentStepFields
        .map(field => [field, data[field]])
        .filter(([_, value]) => value !== undefined && value !== '')
    );

    try {
      const response = await fetch('https://allbots.dstat.io/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitorId,
          utmMedium,
          data: stepData,
          step: stepNames[stepIndex],
          isComplete: false,
          isBack,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit step data');
      }
    } catch (error) {
      console.error('Error submitting step data:', error);
    }
  };

  const nextStep = async () => {
    await submitStepData(currentStep, formData);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = async () => {
    if (currentStep > 0) {
      await submitStepData(currentStep - 1, formData, true);
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (newData: Partial<FormData>) => {
    setFormData({ ...formData, ...newData });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://allbots.dstat.io/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitorId,
          utmMedium,
          data: formData,
          step: 'final',
          isComplete: true,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit final data');
      }
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent pointer-events-none" />
      <div className="relative p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        {!submitted ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-6 text-white">Set up your AI Agent</h1>
            <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  {currentStep === steps.length - 1 ? (
                    <Confirmation
                      data={formData}
                      updateData={updateData}
                      nextStep={nextStep}
                      prevStep={prevStep}
                      onClose={onClose}
                      visitorId={visitorId}
                    />
                  ) : (
                    <CurrentStepComponent
                      data={formData}
                      updateData={updateData}
                      nextStep={nextStep}
                      prevStep={prevStep}
                      visitorId={visitorId}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="text-center text-white">
            <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
            <p className="mb-6">Your information has been submitted. Please schedule a time with us:</p>
            <iframe
              src="https://calendly.com/your-calendly-link"
              width="100%"
              height="600"
              frameBorder="0"
              className="border-none bg-white rounded-lg"
              title="Schedule Appointment"
            />
            <p className="mt-4 text-gray-400">If you don't schedule, we will reach out to you shortly!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadForm; 