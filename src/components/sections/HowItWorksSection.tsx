import React from 'react';
import { Phone, Calendar, MessageSquare, Settings } from 'lucide-react';

const steps = [
  {
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    title: "Quick Setup",
    description: "Set up your AI voice agent in minutes. Choose your preferred voice and customize responses."
  },
  {
    icon: <Phone className="h-8 w-8 text-blue-600" />,
    title: "Handle Calls",
    description: "AI automatically answers calls, understands patient needs, and manages inquiries 24/7."
  },
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    title: "Schedule Appointments",
    description: "Seamlessly schedule and manage appointments based on your practice's availability."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: "Follow Up",
    description: "Send automated confirmations and reminders to reduce no-shows and maintain engagement."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with AIDentist in four simple steps. Our intelligent system integrates seamlessly with your practice.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
                <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}