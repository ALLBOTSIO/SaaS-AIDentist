import React, { useState } from 'react';
import { StepProps } from '../LeadForm';
import { Loader2 } from 'lucide-react';

const ContactInfo: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(prev => ({ ...prev, [field]: '' }));
    updateData({ [field]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[\d\s-()]{10,}$/.test(phone);
  };

  const handleNext = () => {
    const newErrors: Record<string, string> = {};

    if (!data.contactName?.trim()) {
      newErrors.contactName = 'Contact name is required';
    }

    if (!data.contactEmail?.trim()) {
      newErrors.contactEmail = 'Email is required';
    } else if (!validateEmail(data.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address';
    }

    if (!data.contactPhone?.trim()) {
      newErrors.contactPhone = 'Phone number is required';
    } else if (!validatePhone(data.contactPhone)) {
      newErrors.contactPhone = 'Please enter a valid phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      nextStep();
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Contact Information</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Contact Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.contactName}
            onChange={handleChange('contactName')}
            className={`w-full px-3 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 ${
              errors.contactName ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="Enter your full name"
          />
          {errors.contactName && (
            <p className="text-sm text-red-500 mt-1">{errors.contactName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={data.contactEmail}
            onChange={handleChange('contactEmail')}
            className={`w-full px-3 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 ${
              errors.contactEmail ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="you@example.com"
          />
          {errors.contactEmail && (
            <p className="text-sm text-red-500 mt-1">{errors.contactEmail}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={data.contactPhone}
            onChange={handleChange('contactPhone')}
            className={`w-full px-3 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 ${
              errors.contactPhone ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="(555) 555-5555"
          />
          {errors.contactPhone && (
            <p className="text-sm text-red-500 mt-1">{errors.contactPhone}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Best Time to Contact
          </label>
          <input
            type="text"
            value={data.bestTimeToContact}
            onChange={handleChange('bestTimeToContact')}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
            placeholder="e.g., Weekdays 9am-5pm EST"
          />
        </div>
      </div>

      <div className="flex justify-between space-x-4 pt-4">
        <button 
          className="flex-1 px-4 py-2 text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
          onClick={prevStep}
          disabled={isLoading}
        >
          Back
        </button>
        <button 
          className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          onClick={handleNext}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Next'
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;