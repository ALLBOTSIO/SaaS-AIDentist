import React, { useState } from 'react';

export default function CostAnalysis() {
  const [staffHours, setStaffHours] = useState(160);
  const [callsPerDay, setCallsPerDay] = useState(100);
  
  const calculateMonthlySavings = () => {
    const hourlyRate = 25;
    const staffCost = staffHours * hourlyRate * 4; // Monthly staff cost
    const callCost = callsPerDay * 0.40 * 3.5 * 20; // Monthly call cost
    return (staffCost + callCost).toFixed(2);
  };

  return (
    <div className="border rounded-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Cost Analysis</h4>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Staff Hours on Phone Tasks
          </label>
          <input
            type="range"
            min="40"
            max="320"
            value={staffHours}
            onChange={(e) => setStaffHours(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{staffHours} hours/month</span>
            <span>${(staffHours * 25).toFixed(2)}/month</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Daily Call Volume
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
            <span>${(callsPerDay * 0.40 * 3.5 * 20).toFixed(2)}/month</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Monthly Savings</p>
            <p className="text-2xl font-bold text-gray-800">${calculateMonthlySavings()}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Annual Savings</p>
            <p className="text-2xl font-bold text-gray-800">${(parseFloat(calculateMonthlySavings()) * 12).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}