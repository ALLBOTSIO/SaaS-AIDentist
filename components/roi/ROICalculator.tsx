"use client";

import { useROICalculator } from "./useROICalculator";
import { InputSection } from "./InputSection";
import { ResultsSection } from "./ResultsSection";

export default function ROICalculator() {
  const { metrics, setMetrics, results } = useROICalculator();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl rounded-xl border border-gray-700 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Calculate Your Practice ROI
          </h2>
          <p className="text-gray-400 mt-2">
            See how much your practice can save with AI-powered communication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <InputSection metrics={metrics} setMetrics={setMetrics} />
          <ResultsSection results={results} />
        </div>
      </div>
    </div>
  );
}
