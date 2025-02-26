import React from 'react';
import { StepProps } from '../LeadForm';

const StepFour: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep }) => {
  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateData({ [field]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Additional Notes / Comments</h2>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Anything else we should know?</label>
        <textarea
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 min-h-[120px]"
          value={data.additionalNotes}
          onChange={handleChange('additionalNotes')}
          placeholder="Your notes..."
        />
      </div>
      <div className="flex justify-between space-x-4 pt-4">
        <button 
          className="flex-1 px-4 py-2 text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
          onClick={prevStep}
        >
          Back
        </button>
        <button 
          className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepFour; 