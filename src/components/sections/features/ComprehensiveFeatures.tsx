import React from 'react';
import { Bot, Calendar, Phone, Shield, Stethoscope, Users, Clock, UserPlus, ClipboardList, AlertTriangle, CreditCard, BookOpen, Bell, Activity, MessageCircle, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    title: "Intelligent Scheduling",
    description: "Streamline appointment management",
    examples: [
      "Smart calendar integration",
      "Automated reminders",
      "No-show prevention"
    ]
  },
  {
    icon: <Phone className="h-8 w-8 text-blue-600" />,
    title: "Smart Call Handling",
    description: "Efficient call management system",
    examples: [
      "Intelligent routing",
      "Priority handling",
      "Call analytics"
    ]
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "HIPAA Compliance",
    description: "Secure patient data handling",
    examples: [
      "Encrypted communications",
      "Audit logging",
      "Access controls"
    ]
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "Analytics Dashboard",
    description: "Comprehensive practice metrics",
    examples: [
      "Response times",
      "Patient engagement",
      "Call analytics"
    ]
  },
  {
    icon: <Bot className="h-8 w-8 text-blue-600" />,
    title: "AI Assistant",
    description: "Intelligent patient interaction",
    examples: [
      "Natural conversations",
      "Multi-language support",
      "Context awareness"
    ]
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "24/7 Availability",
    description: "Round-the-clock service",
    examples: [
      "After-hours support",
      "Emergency triage",
      "Instant responses"
    ]
  }
];

export default function ComprehensiveFeatures() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Comprehensive Features
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Everything you need to streamline your practice communications
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.examples.map((example, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}