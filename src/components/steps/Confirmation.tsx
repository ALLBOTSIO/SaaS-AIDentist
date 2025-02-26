import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { StepProps } from '../LeadForm';

const Confirmation: React.FC<StepProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <div className="flex justify-center">
        <div className="rounded-full bg-green-500/10 p-3">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white">
        Thank You for Your Interest!
      </h2>

      <p className="text-gray-300">
        We've received your information and will contact you shortly at{' '}
        <span className="text-white font-medium">{data.contactEmail}</span>
      </p>

      <div className="bg-gray-800/50 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-medium text-white mb-4">Next Steps</h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            Our team will review your requirements
          </li>
          <li className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            We'll prepare a custom demo for your business
          </li>
          <li className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            Schedule a personalized walkthrough
          </li>
        </ul>
      </div>

      <div className="pt-8">
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Homepage
        </a>
      </div>
    </motion.div>
  );
};

export default Confirmation;