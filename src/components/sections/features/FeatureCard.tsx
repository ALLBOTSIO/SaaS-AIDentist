import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-full w-fit mb-6">
        <div className="animate-float">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 gradient-text">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}