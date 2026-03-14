export interface Metrics {
  inboundCalls: number;
  outboundCalls: number;
  missedCalls: number;
  returningPatientValue: number;
  newPatientValue: number;
  avgCallDuration: number;
  aiCostPerMinute: number;
  receptionistSalary: number;
  newPatientConversion: number;
  returningPatientRetention: number;
}

export interface Results {
  currentCosts: number;
  aiCosts: number;
  potentialNewRevenue: number;
  retentionRevenue: number;
  totalSavings: number;
  roi: number;
}

export interface InsuranceCalculatorInputs {
  locations: number;
  dailyPatients: number;
  staffCount: number;
  insuranceCallsHours: number;
  portalNavigationHours: number;
  daysOpen: number;
  staffHourlyRate: number;
  monthlyWriteOffs: number;
  verificationStaff: number;
  processingTimePerPatient: number;
}

export interface InsuranceResults {
  weeklyHoursSaved: number;
  monthlyCostSavings: number;
  annualWriteOffReduction: number;
  timePerPatientReduction: number;
}
