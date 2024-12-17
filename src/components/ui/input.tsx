import React from 'react';

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  );
}