import React from 'react';
import { PhoneCall, Clock, Shield, Zap } from 'lucide-react';

export default function OperationalEfficiency() {
  const metrics = [
    {
      icon: <PhoneCall className="h-6 w-6" />,
      label: "Call Handling Capacity",
      value: "∞",
      detail: "Unlimited concurrent calls"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Peak Hour Management",
      value: "100%",
      detail: "No missed calls during rush"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      label: "Emergency Response",
      value: "< 30s",
      detail: "Average response time"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      label: "Resource Optimization",
      value: "95%",
      detail: "Staff time optimization"
    }
  ];

  return (
    <div className="border rounded-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Operational Efficiency</h4>
      
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