import React from 'react';
import { StepProps } from '../LeadForm';

const StepTwo: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep }) => {
  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [field]: e.target.value });
  };

  const handleCheckboxChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ [field]: e.target.checked });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Call Handling Preferences</h2>
      
      <div className="space-y-8">
        {/* Call Flow Settings */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Call Flow Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Call Greeting
              </label>
              <textarea
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                value={data.callGreeting}
                onChange={handleChange('callGreeting')}
                placeholder="Enter your preferred greeting message..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Call Handling Priority
              </label>
              <select
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                value={data.callPriority}
                onChange={handleChange('callPriority')}
              >
                <option value="">Select priority...</option>
                <option value="efficiency">Maximum Efficiency</option>
                <option value="engagement">High Engagement</option>
                <option value="balanced">Balanced Approach</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Call Transfer Threshold
              </label>
              <select
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                value={data.transferThreshold}
                onChange={handleChange('transferThreshold')}
              >
                <option value="">Select threshold...</option>
                <option value="low">Low (Transfer quickly)</option>
                <option value="medium">Medium (Balance AI and human)</option>
                <option value="high">High (Maximize AI handling)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Advanced Settings */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Advanced Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="afterHours"
                checked={data.afterHours}
                onChange={handleCheckboxChange('afterHours')}
                className="text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded"
              />
              <label htmlFor="afterHours" className="ml-2 text-sm text-gray-300">
                Enable after-hours handling
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="callRecording"
                checked={data.callRecording}
                onChange={handleCheckboxChange('callRecording')}
                className="text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded"
              />
              <label htmlFor="callRecording" className="ml-2 text-sm text-gray-300">
                Enable call recording
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="transcription"
                checked={data.transcription}
                onChange={handleCheckboxChange('transcription')}
                className="text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded"
              />
              <label htmlFor="transcription" className="ml-2 text-sm text-gray-300">
                Enable call transcription
              </label>
            </div>
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

export default StepTwo;