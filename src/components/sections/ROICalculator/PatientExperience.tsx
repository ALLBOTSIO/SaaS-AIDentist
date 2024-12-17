import React from 'react';
import { Clock, Globe, PhoneCall, Heart } from 'lucide-react';

export default function PatientExperience() {
  const metrics = [
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Average Wait Time Reduction",
      value: "85%",
      detail: "From 3 minutes to 27 seconds"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      label: "24/7 Availability Impact",
      value: "40%",
      detail: "More after-hours bookings"
    },
    {
      icon: <PhoneCall className="h-6 w-6" />,
      label: "First-Call Resolution",
      value: "92%",
      detail: "Of common inquiries resolved"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      label: "Patient Satisfaction",
      value: "4.8/5",
      detail: "Average rating for AI interactions"
    }
  ];

  return (
    <div className="border rounded-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Patient Experience Metrics</h4>
      
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <div className="text-blue-600">
                {metric.icon}
              </div>
              <p className="text-sm font-medium text-gray-700">{metric.label}</p>
            </div>
            <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}