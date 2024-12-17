import React from 'react';
import { ResultCardProps } from '../types';

export function ResultCard({ label, value, icon: Icon, color, prefix = '' }: ResultCardProps) {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
      <div className="flex items-center gap-2">
        <Icon className={`h-5 w-5 ${color}`} />
        <span className="text-gray-300">{label}</span>
      </div>
      <span className={`font-semibold ${color}`}>
        {prefix}${value.toLocaleString(undefined, {maximumFractionDigits: 0})}
      </span>
    </div>
  );
}