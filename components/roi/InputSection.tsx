"use client";

import { PhoneIncoming, PhoneOutgoing, Users, UserPlus } from "lucide-react";
import type { Metrics } from "./types";

interface MetricInputProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (value: number) => void;
  tooltip?: string;
}

function MetricInput({ icon, label, value, onChange, tooltip }: MetricInputProps) {
  return (
    <div className="relative group">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <label className="text-sm text-gray-300">{label}</label>
        {tooltip && (
          <span className="hidden group-hover:block absolute left-0 -top-10 bg-gray-900 text-white text-xs px-2 py-1 rounded z-10 w-48 shadow-lg">
            {tooltip}
          </span>
        )}
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-md bg-gray-800/50 border border-gray-700/50 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

interface InputSectionProps {
  metrics: Metrics;
  setMetrics: (metrics: Metrics) => void;
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
            onChange={(v) => setMetrics({ ...metrics, inboundCalls: v })}
            tooltip="Average number of incoming calls per day"
          />
          <MetricInput
            icon={<PhoneOutgoing className="h-4 w-4 text-blue-400" />}
            label="Daily Outbound Calls"
            value={metrics.outboundCalls}
            onChange={(v) => setMetrics({ ...metrics, outboundCalls: v })}
            tooltip="Average number of outgoing calls per day"
          />
          <MetricInput
            icon={<PhoneIncoming className="h-4 w-4 text-red-400" />}
            label="Missed Call Rate (%)"
            value={metrics.missedCalls}
            onChange={(v) => setMetrics({ ...metrics, missedCalls: v })}
            tooltip="Percentage of inbound calls that go unanswered"
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
            onChange={(v) => setMetrics({ ...metrics, returningPatientValue: v })}
            tooltip="Average revenue per returning patient visit"
          />
          <MetricInput
            icon={<UserPlus className="h-4 w-4 text-green-400" />}
            label="New Patient Value ($)"
            value={metrics.newPatientValue}
            onChange={(v) => setMetrics({ ...metrics, newPatientValue: v })}
            tooltip="Average lifetime value of a new patient"
          />
          <MetricInput
            icon={<Users className="h-4 w-4 text-purple-400" />}
            label="Monthly Staff Cost ($)"
            value={metrics.receptionistSalary}
            onChange={(v) => setMetrics({ ...metrics, receptionistSalary: v })}
            tooltip="Current monthly receptionist/front-desk salary cost"
          />
        </div>
      </div>
    </div>
  );
}
