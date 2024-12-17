import React, { useState } from 'react';

export default function RevenueImpact() {
  const [appointmentsPerMonth, setAppointmentsPerMonth] = useState(200);
  const [avgPatientValue, setAvgPatientValue] = useState(300);

  const calculateRevenueImpact = () => {
    const improvedBookingRate = 0.15; // 15% improvement
    const additionalAppointments = appointmentsPerMonth * improvedBookingRate;
    return (additionalAppointments * avgPatientValue).toFixed(2);
  };

  return (
    <div className="border rounded-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Revenue Impact</h4>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Appointments
          </label>
          <input
            type="range"
            min="50"
            max="500"
            value={appointmentsPerMonth}
            onChange={(e) => setAppointmentsPerMonth(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{appointmentsPerMonth} appointments</span>
            <span>+{Math.round(appointmentsPerMonth * 0.15)} potential</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Patient Value
          </label>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            value={avgPatientValue}
            onChange={(e) => setAvgPatientValue(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>${avgPatientValue}/patient</span>
            <span>${calculateRevenueImpact()}/month potential</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-700">Additional Monthly Revenue</p>
            <p className="text-2xl font-bold text-green-600">${calculateRevenueImpact()}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-700">Annual Revenue Impact</p>
            <p className="text-2xl font-bold text-green-600">${(parseFloat(calculateRevenueImpact()) * 12).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}