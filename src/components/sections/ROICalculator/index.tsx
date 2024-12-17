import React, { useState, useEffect } from 'react';
import { InputSection } from './components/InputSection';
import { ResultsSection } from './components/ResultsSection';

export default function ROICalculator() {
  const [metrics, setMetrics] = useState({
    inboundCalls: 45,
    outboundCalls: 35,
    missedCalls: 15,
    returningPatientValue: 500,
    newPatientValue: 1200,
    avgCallDuration: 3.5,
    aiCostPerMinute: 0.40,
    receptionistSalary: 3500,
    newPatientConversion: 30,
    returningPatientRetention: 85
  });

  const [results, setResults] = useState({
    currentCosts: 0,
    aiCosts: 0,
    potentialNewRevenue: 0,
    retentionRevenue: 0,
    totalSavings: 0,
    roi: 0
  });

  useEffect(() => {
    // Calculate current monthly costs
    const currentCosts = metrics.receptionistSalary;

    // Calculate AI system costs
    const totalDailyCalls = metrics.inboundCalls + metrics.outboundCalls;
    const monthlyCallMinutes = totalDailyCalls * metrics.avgCallDuration * 22;
    const aiCosts = monthlyCallMinutes * metrics.aiCostPerMinute;

    // Calculate potential revenue from new patients
    const monthlyMissedCalls = metrics.inboundCalls * (metrics.missedCalls / 100) * 22;
    const potentialNewPatients = monthlyMissedCalls * (metrics.newPatientConversion / 100);
    const potentialNewRevenue = potentialNewPatients * metrics.newPatientValue;

    // Calculate improved retention revenue
    const monthlyReturnPatients = (metrics.outboundCalls * 22) * (metrics.returningPatientRetention / 100);
    const retentionRevenue = monthlyReturnPatients * metrics.returningPatientValue * 0.1;

    // Calculate total impact
    const totalSavings = (currentCosts - aiCosts) + potentialNewRevenue + retentionRevenue;
    const roi = (totalSavings / aiCosts) * 100;

    setResults({
      currentCosts,
      aiCosts,
      potentialNewRevenue,
      retentionRevenue,
      totalSavings,
      roi
    });
  }, [metrics]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-gray-700 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
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