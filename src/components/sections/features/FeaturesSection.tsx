import React from 'react';
import { Bot, Calendar, Phone, Shield, Stethoscope, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    title: "24/7 Scheduling",
    description: "Automated appointment booking and management around the clock"
  },
  {
    icon: <Phone className="h-8 w-8 text-blue-600" />,
    title: "Smart Call Handling",
    description: "Intelligent call routing and patient inquiry management"
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "HIPAA Compliant",
    description: "Secure and compliant patient data handling"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Multi-Language Support",
    description: "Communicate with patients in their preferred language"
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
    title: "Specialty Templates",
    description: "Pre-configured for different dental specialties"
  },
  {
    icon: <Bot className="h-8 w-8 text-blue-600" />,
    title: "Custom Voice Selection",
    description: "Choose and customize your AI assistant's voice"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Powerful Features for Modern Dental Practices
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}