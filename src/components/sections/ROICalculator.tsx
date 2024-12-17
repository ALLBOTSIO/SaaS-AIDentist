import React, { useState } from 'react';

export default function ROICalculator() {
  const [callsPerDay, setCallsPerDay] = useState(100); // 50 inbound + 50 outbound
  const costPerMinute = 0.40;
  const avgCallDuration = 3.5; // 3-4 minutes average
  
  const calculateMonthlySavings = () => {
    const callsPerMonth = callsPerDay * 20; // Assuming 20 working days
    const totalMinutesPerMonth = callsPerMonth * avgCallDuration;
    const monthlyCost = totalMinutesPerMonth * costPerMinute;
    return monthlyCost.toFixed(2);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">ROI Calculator</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Calls per Day
          </label>
          <input
            type="range"
            min="20"
            max="200"
            value={callsPerDay}
            onChange={(e) => setCallsPerDay(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{callsPerDay} calls/day</span>
            <span>${calculateMonthlySavings()}/month</span>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800">Potential Monthly Savings</h4>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            ${calculateMonthlySavings()}
          </p>
          <p className="text-sm text-blue-700 mt-1">
            Based on ${costPerMinute.toFixed(2)}/minute and {avgCallDuration} minutes average call duration
          </p>
        </div>
      </div>
    </div>
  );
}