import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function ComparativeAnalysis() {
  const comparisons = [
    {
      category: "Industry Average",
      metrics: {
        callHandling: "65%",
        patientSatisfaction: "3.8/5",
        responseTime: "4min",
        costPerCall: "$2.50"
      }
    },
    {
      category: "With AIDentist",
      metrics: {
        callHandling: "98%",
        patientSatisfaction: "4.8/5",
        responseTime: "30sec",
        costPerCall: "$0.40"
      }
    }
  ];

  return (
    <div className="border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <BarChart3 className="h-6 w-6 text-blue-600" />
        <h4 className="text-lg font-semibold text-gray-800">Comparative Analysis</h4>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left pb-4">Metric</th>
              {comparisons.map((comp, index) => (
                <th key={index} className="text-left pb-4">{comp.category}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(comparisons[0].metrics).map((metric, index) => (
              <tr key={index} className="border-b last:border-0">
                <td className="py-4 text-gray-600">
                  {metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </td>
                {comparisons.map((comp, compIndex) => (
                  <td key={compIndex} className={`py-4 font-semibold ${
                    compIndex === 1 ? 'text-blue-600' : 'text-gray-800'
                  }`}>
                    {comp.metrics[metric]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}