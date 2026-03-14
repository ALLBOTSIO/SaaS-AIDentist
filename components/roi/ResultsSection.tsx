"use client";

import { DollarSign, TrendingUp, UserPlus, Users } from "lucide-react";
import type { Results } from "./types";

function fmt(n: number) {
  return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

interface ResultsSectionProps {
  results: Results;
}

export function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
        <h3 className="font-semibold text-purple-400 flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5" />
          Monthly Impact
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-red-400" />
              <span className="text-sm text-gray-300">Current Staff Costs</span>
            </div>
            <span className="font-semibold text-red-400">
              ${fmt(results.currentCosts)}
            </span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">AI System Costs</span>
            </div>
            <span className="font-semibold text-green-400">
              ${fmt(results.aiCosts)}
            </span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
            <div className="flex items-center gap-2">
              <UserPlus className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-300">New Patient Revenue</span>
            </div>
            <span className="font-semibold text-blue-400">
              +${fmt(results.potentialNewRevenue)}
            </span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-300">Retention Revenue</span>
            </div>
            <span className="font-semibold text-purple-400">
              +${fmt(results.retentionRevenue)}
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-700/50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-gray-300">
              Total Monthly Impact
            </span>
            <span className="text-2xl font-bold text-green-400">
              ${fmt(results.totalSavings)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Return on Investment</span>
            <span className="text-lg font-semibold text-blue-400">
              {results.roi.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-800/50">
        <h4 className="font-semibold text-blue-400 mb-3 text-sm">
          Impact Breakdown
        </h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-blue-200">
            <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
            Save ${fmt(results.currentCosts - results.aiCosts)} in operational
            costs
          </li>
          <li className="flex items-center gap-2 text-green-200">
            <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
            Capture ${fmt(results.potentialNewRevenue)} in new patient revenue
          </li>
          <li className="flex items-center gap-2 text-purple-200">
            <span className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
            Generate ${fmt(results.retentionRevenue)} through improved retention
          </li>
        </ul>
      </div>
    </div>
  );
}
