import React from 'react';
import { StepProps } from '../LeadForm';

const StepOne: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep }) => {
  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [field]: e.target.value });
  };

  const handleMultipleSelect = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValues = data[field] ? data[field].split(',') : [];
    const value = e.target.value;
    
    let newValues;
    if (e.target.checked) {
      newValues = [...currentValues, value];
    } else {
      newValues = currentValues.filter(v => v !== value);
    }
    
    updateData({ [field]: newValues.join(',') });
  };

  const isSelected = (field: string, value: string) => {
    return data[field]?.split(',').includes(value) || false;
  };

  const SelectOption = ({ field, value, label, description }: { field: string; value: string; label: string; description: string }) => (
    <label className="flex items-center h-full p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
      <div className="flex items-start space-x-3 w-full">
        <input
          type="checkbox"
          value={value}
          checked={isSelected(field, value)}
          onChange={handleMultipleSelect(field)}
          className="mt-1 text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600"
        />
        <div className="flex flex-col">
          <span className="text-gray-300 font-medium">{label}</span>
          <span className="text-gray-500 text-sm">{description}</span>
        </div>
      </div>
    </label>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Identity & Personality</h2>
      
      <div className="space-y-8">
        {/* AI Agent Branding Section */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">AI Agent Branding</h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Preferred Name for AI Agent
              </label>
              <input
                type="text"
                value={data.agentName}
                onChange={handleChange('agentName')}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                placeholder="e.g., Sarah, Alex, Dr. Smith"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Brand Voice Style
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <SelectOption
                  field="brandVoiceStyle"
                  value="professional"
                  label="Professional"
                  description="Corporate, formal"
                />
                <SelectOption
                  field="brandVoiceStyle"
                  value="friendly"
                  label="Friendly"
                  description="Conversational, approachable"
                />
                <SelectOption
                  field="brandVoiceStyle"
                  value="technical"
                  label="Technical"
                  description="Precise, detailed"
                />
                <SelectOption
                  field="brandVoiceStyle"
                  value="casual"
                  label="Casual"
                  description="Relaxed, informal"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Personality Traits
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <SelectOption
                  field="personalityTraits"
                  value="empathetic"
                  label="Empathetic"
                  description="Understanding, supportive"
                />
                <SelectOption
                  field="personalityTraits"
                  value="direct"
                  label="Direct"
                  description="Straightforward, efficient"
                />
                <SelectOption
                  field="personalityTraits"
                  value="patient"
                  label="Patient"
                  description="Thorough, detailed"
                />
                <SelectOption
                  field="personalityTraits"
                  value="energetic"
                  label="Energetic"
                  description="Enthusiastic, proactive"
                />
              </div>
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

export default StepOne; 