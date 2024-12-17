import React from 'react';
import { UserPlus, Users, Share2, TrendingUp } from 'lucide-react';

export default function PracticeGrowth() {
  const metrics = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      label: "New Patient Acquisition",
      value: "+35%",
      detail: "Increase in new patients"
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: "Patient Retention",
      value: "92%",
      detail: "Annual retention rate"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      label: "Referral Increase",
      value: "+25%",
      detail: "More patient referrals"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: "Market Reach",
      value: "3x",
      detail: "Extended service area"
    }
  ];

  return (
    <div className="border rounded-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Practice Growth Indicators</h4>
      
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