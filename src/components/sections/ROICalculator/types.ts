export interface MetricInputProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (value: number) => void;
  tooltip?: string;
}

export interface ResultCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  prefix?: string;
}

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