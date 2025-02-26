import React, { useState } from 'react';
import { StepProps } from '../LeadForm';

const VoiceCharacteristics: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep }) => {
  const [showOtherLanguages, setShowOtherLanguages] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [field]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Voice & Language Settings</h2>
      
      <div className="space-y-8">
        {/* Voice Characteristics Section */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Voice Characteristics</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Voice Type</label>
              <select 
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                value={data.voiceType}
                onChange={handleChange('voiceType')}
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Accent Preference</label>
              <select 
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                value={data.accentPreference}
                onChange={handleChange('accentPreference')}
              >
                <option value="">Select...</option>
                <option value="american">American</option>
                <option value="british">British</option>
                <option value="australian">Australian</option>
                <option value="indian">Indian</option>
                <option value="neutral">Neutral</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Speaking Pace</label>
              <select 
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                value={data.speakingPace}
                onChange={handleChange('speakingPace')}
              >
                <option value="">Select...</option>
                <option value="measured">Measured (slower, more deliberate)</option>
                <option value="natural">Natural (conversational speed)</option>
                <option value="dynamic">Dynamic (adapts to caller)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Language Settings Section */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Language Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Primary Language</label>
              <select 
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                value={data.primaryLanguage}
                onChange={handleChange('primaryLanguage')}
              >
                <option value="">Select...</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="mandarin">Mandarin</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Additional Languages</label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700">
                  <input
                    type="checkbox"
                    value="spanish"
                    checked={data.additionalLanguages?.includes('spanish')}
                    onChange={(e) => {
                      const current = data.additionalLanguages?.split(',').filter(Boolean) || [];
                      if (e.target.checked) {
                        updateData({ additionalLanguages: [...current, 'spanish'].join(',') });
                      } else {
                        updateData({ additionalLanguages: current.filter(lang => lang !== 'spanish').join(',') });
                      }
                    }}
                    className="text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600"
                  />
                  <span className="text-gray-300">Spanish</span>
                </label>
                <label className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700">
                  <input
                    type="checkbox"
                    value="french"
                    checked={data.additionalLanguages?.includes('french')}
                    onChange={(e) => {
                      const current = data.additionalLanguages?.split(',').filter(Boolean) || [];
                      if (e.target.checked) {
                        updateData({ additionalLanguages: [...current, 'french'].join(',') });
                      } else {
                        updateData({ additionalLanguages: current.filter(lang => lang !== 'french').join(',') });
                      }
                    }}
                    className="text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600"
                  />
                  <span className="text-gray-300">French</span>
                </label>
                <label className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700">
                  <input
                    type="checkbox"
                    value="german"
                    checked={data.additionalLanguages?.includes('german')}
                    onChange={(e) => {
                      const current = data.additionalLanguages?.split(',').filter(Boolean) || [];
                      if (e.target.checked) {
                        updateData({ additionalLanguages: [...current, 'german'].join(',') });
                      } else {
                        updateData({ additionalLanguages: current.filter(lang => lang !== 'german').join(',') });
                      }
                    }}
                    className="text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600"
                  />
                  <span className="text-gray-300">German</span>
                </label>
                <label className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700">
                  <input
                    type="checkbox"
                    value="mandarin"
                    checked={data.additionalLanguages?.includes('mandarin')}
                    onChange={(e) => {
                      const current = data.additionalLanguages?.split(',').filter(Boolean) || [];
                      if (e.target.checked) {
                        updateData({ additionalLanguages: [...current, 'mandarin'].join(',') });
                      } else {
                        updateData({ additionalLanguages: current.filter(lang => lang !== 'mandarin').join(',') });
                      }
                    }}
                    className="text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600"
                  />
                  <span className="text-gray-300">Mandarin</span>
                </label>
              </div>
              
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setShowOtherLanguages(!showOtherLanguages)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-left text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  Other Languages
                </button>
                {showOtherLanguages && (
                  <div className="mt-2">
                    <textarea
                      value={data.otherLanguages || ''}
                      onChange={handleChange('otherLanguages')}
                      placeholder="Enter additional languages, separated by commas..."
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                      rows={3}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Industry-Specific Terminology
              </label>
              <textarea
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                value={data.industryTerminology}
                onChange={handleChange('industryTerminology')}
                placeholder="Enter any industry-specific terms or jargon the AI should be familiar with..."
                rows={3}
              />
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

export default VoiceCharacteristics; 