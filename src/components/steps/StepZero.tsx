import React, { useState } from 'react';
import { StepProps } from '../LeadForm';
import { Loader2 } from 'lucide-react';

const industries = [
  'Healthcare',
  'Real Estate',
  'Finance',
  'E-commerce',
  'Counseling',
  'Technology',
  'Education',
  'Manufacturing',
  'Transportation',
  'Agriculture'
];

const StepZero: React.FC<StepProps> = ({ data, updateData, nextStep }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setError(null);
    updateData({ [field]: e.target.value });
  };

  const handleNext = async () => {
    if (!data.businessName?.trim()) {
      setError('Please enter your business name to continue');
      return;
    }
    setIsLoading(true);
    try {
      await nextStep();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Business Details</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.businessName}
            onChange={handleChange('businessName')}
            className={`w-full px-3 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 ${
              error ? 'border-red-500' : 'border-gray-700'
            }`}
            required
            placeholder="Enter your business name"
          />
          {error && (
            <p className="text-sm text-red-500 mt-1">{error}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Business URL
          </label>
          <input
            type="url"
            value={data.businessUrl}
            onChange={handleChange('businessUrl')}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
            placeholder="https://example.com"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            value={data.phoneNumber}
            onChange={handleChange('phoneNumber')}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
            placeholder="(555) 555-5555"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Industry
          </label>
          <select
            value={data.industry}
            onChange={handleChange('industry')}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
          >
            <option value="">Select an industry</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Specialty or Medical Focus
          </label>
          <input
            type="text"
            value={data.specialty}
            onChange={handleChange('specialty')}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
            placeholder="Enter your specialty"
          />
        </div>
      </div>

      <div className="pt-4">
        <button 
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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

export default StepZero;
