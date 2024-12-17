import React from 'react';
import { PhoneIncoming, PhoneOutgoing, Users, UserPlus } from 'lucide-react';
import { Input } from '../../../ui/input';

interface MetricInputProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (value: number) => void;
  tooltip?: string;
}

const MetricInput = ({ icon: Icon, label, value, onChange, tooltip }: MetricInputProps) => (
  <div className="relative group">
    <div className="flex items-center space-x-2 mb-1">
      {Icon}
      <label className="text-sm text-gray-300">{label}</label>
      {tooltip && (
        <div className="hidden group-hover:block absolute left-0 -top-12 bg-gray-800 text-white text-xs p-2 rounded z-10 w-48">
          {tooltip}
        </div>
      )}
    </div>
    <Input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="bg-gray-800/50 border-gray-700/50"
    />
  </div>
);

interface InputSectionProps {
  metrics: {
    inboundCalls: number;
    outboundCalls: number;
    returningPatientValue: number;
    newPatientValue: number;
  };
  setMetrics: (metrics: any) => void;
}

export function InputSection({ metrics, setMetrics }: InputSectionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 space-y-4">
        <h3 className="font-semibold text-blue-400 flex items-center gap-2">
          <PhoneIncoming className="h-5 w-5" />
          Call Volume Metrics
        </h3>
        <div className="space-y-4">
          <MetricInput
            icon={<PhoneIncoming className="h-4 w-4 text-blue-400" />}
            label="Daily Inbound Calls"
            value={metrics.inboundCalls}
            onChange={(value) => setMetrics({...metrics, inboundCalls: value})}
            tooltip="Average number of incoming calls per day"
          />
          <MetricInput
            icon={<PhoneOutgoing className="h-4 w-4 text-blue-400" />}
            label="Daily Outbound Calls"
            value={metrics.outboundCalls}
            onChange={(value) => setMetrics({...metrics, outboundCalls: value})}
            tooltip="Average number of outgoing calls per day"
          />
        </div>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 space-y-4">
        <h3 className="font-semibold text-green-400 flex items-center gap-2">
          <Users className="h-5 w-5" />
          Patient Value Metrics
        </h3>
        <div className="space-y-4">
          <MetricInput
            icon={<Users className="h-4 w-4 text-green-400" />}
            label="Returning Patient Value ($)"
            value={metrics.returningPatientValue}
            onChange={(value) => setMetrics({...metrics, returningPatientValue: value})}
            tooltip="Average revenue per returning patient visit"
          />
          <MetricInput
            icon={<UserPlus className="h-4 w-4 text-green-400" />}
            label="New Patient Value ($)"
            value={metrics.newPatientValue}
            onChange={(value) => setMetrics({...metrics, newPatientValue: value})}
            tooltip="Average lifetime value of a new patient"
          />
        </div>
      </div>
    </div>
  );
}