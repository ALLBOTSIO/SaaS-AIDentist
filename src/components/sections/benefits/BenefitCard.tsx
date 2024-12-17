import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

export default function BenefitCard({ icon, title, description, imageUrl }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-blue-50 p-2 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}