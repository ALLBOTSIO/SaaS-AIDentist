import React from 'react';

interface EducationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function EducationCard({ icon, title, description }: EducationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}