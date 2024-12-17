import React from 'react';
import { Input } from '@/components/ui/input';
import { MetricInputProps } from '../types';

export function MetricInput({ icon: Icon, label, value, onChange, tooltip }: MetricInputProps) {
  return (
    <div className="relative group">
      <div className="flex items-center space-x-2 mb-1">
        <Icon className="h-4 w-4 text-blue-600" />
        <label className="text-sm text-gray-600">{label}</label>
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
        className="border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      />
    </div>
  );
}