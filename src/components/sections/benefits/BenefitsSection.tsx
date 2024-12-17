import React from 'react';
import { MessageCircle, Brain, Clock } from 'lucide-react';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
    title: "Natural Conversations",
    description: "Advanced AI that understands context, dental terminology, and handles complex patient inquiries with human-like understanding.",
    imageUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80"
  },
  {
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    title: "Intelligent Scheduling",
    description: "Smart AI that manages appointments, sends reminders, and reduces no-shows while optimizing your practice's schedule.",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80"
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "24/7 Availability",
    description: "Round-the-clock AI voice agent that handles patient calls, emergencies, and inquiries even after hours.",
    imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Voice Agent Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of intelligent conversation in dental practice management
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}