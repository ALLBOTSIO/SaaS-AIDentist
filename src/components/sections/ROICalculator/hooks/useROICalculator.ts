import { useState, useEffect } from 'react';
import { Metrics, Results } from '../types';

const initialMetrics: Metrics = {
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
};

export function useROICalculator() {
  const [metrics, setMetrics] = useState<Metrics>(initialMetrics);
  const [results, setResults] = useState<Results>({
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

  return {
    metrics,
    setMetrics,
    results
  };
}