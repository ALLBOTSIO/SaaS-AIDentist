import React from 'react';
import { DollarSign, TrendingUp, UserPlus, Users } from 'lucide-react';

interface ResultCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  prefix?: string;
}

const ResultCard = ({ label, value, icon: Icon, color, prefix = '' }: ResultCardProps) => (
  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
    <div className="flex items-center gap-2">
      {Icon}
      <span className="text-gray-300">{label}</span>
    </div>
    <span className={`font-semibold ${color}`}>
      {prefix}${value.toLocaleString(undefined, {maximumFractionDigits: 0})}
    </span>
  </div>
);

interface ResultsSectionProps {
  results: {
    currentCosts: number;
    aiCosts: number;
    potentialNewRevenue: number;
    retentionRevenue: number;
    totalSavings: number;
    roi: number;
  };
}

export function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
        <h3 className="font-semibold text-purple-400 flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5" />
          Monthly Impact
        </h3>
        <div className="space-y-4">
          <ResultCard
            label="Current Staff Costs"
            value={results.currentCosts}
            icon={<DollarSign className="h-5 w-5 text-red-400" />}
            color="text-red-400"
          />
          <ResultCard
            label="AI System Costs"
            value={results.aiCosts}
            icon={<TrendingUp className="h-5 w-5 text-green-400" />}
            color="text-green-400"
          />
          <ResultCard
            label="New Patient Revenue"
            value={results.potentialNewRevenue}
            icon={<UserPlus className="h-5 w-5 text-blue-400" />}
            color="text-blue-400"
            prefix="+"
          />
          <ResultCard
            label="Retention Revenue"
            value={results.retentionRevenue}
            icon={<Users className="h-5 w-5 text-purple-400" />}
            color="text-purple-400"
            prefix="+"
          />
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-700/50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-gray-300">Total Monthly Impact:</span>
            <span className="text-2xl font-bold text-green-400">
              ${results.totalSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Return on Investment:</span>
            <span className="text-lg font-semibold text-blue-400">
              {results.roi.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-800/50">
        <h4 className="font-semibold text-blue-400 mb-3">Impact Breakdown</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-blue-200">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Save ${(results.currentCosts - results.aiCosts).toLocaleString()} in operational costs
          </li>
          <li className="flex items-center gap-2 text-green-200">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Capture ${results.potentialNewRevenue.toLocaleString()} in new patient revenue
          </li>
          <li className="flex items-center gap-2 text-purple-200">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Generate ${results.retentionRevenue.toLocaleString()} through improved retention
          </li>
        </ul>
      </div>
    </div>
  );
}