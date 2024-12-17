import React from 'react';
import { Award, Users, LineChart } from 'lucide-react';
import EducationCard from './EducationCard';

const educationalCards = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Why AI for Dentistry?",
    description: "Discover how AI voice agents are specifically designed to handle dental practice communications and improve patient care."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Patient Experience",
    description: "Learn how AI enhances patient satisfaction through 24/7 availability, quick responses, and personalized interactions."
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Practice Growth",
    description: "See how automated communication leads to better appointment scheduling, reduced no-shows, and increased revenue."
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Transform Your Dental Practice with AI
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Learn how AI voice agents are revolutionizing dental practices across the globe
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {educationalCards.map((card, index) => (
            <EducationCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}