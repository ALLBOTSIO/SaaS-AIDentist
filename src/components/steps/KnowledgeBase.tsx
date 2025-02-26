import React from 'react';
import { StepProps } from '../LeadForm';

const KnowledgeBase: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep }) => {
  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateData({ [field]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Knowledge Base Setup</h2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Common Questions & Responses
            </label>
            <textarea
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
              value={data.commonQuestions}
              onChange={handleChange('commonQuestions')}
              placeholder="Enter common questions and their ideal responses..."
              rows={5}
            />
            <p className="text-sm text-gray-500">
              List frequently asked questions and how you'd like them answered
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Service Information
            </label>
            <textarea
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
              value={data.serviceInfo}
              onChange={handleChange('serviceInfo')}
              placeholder="Describe your services, pricing, and policies..."
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Special Instructions
            </label>
            <textarea
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
              value={data.specialInstructions}
              onChange={handleChange('specialInstructions')}
              placeholder="Any special handling instructions or unique scenarios..."
              rows={4}
            />
          </div>
        </div>
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

export default KnowledgeBase;