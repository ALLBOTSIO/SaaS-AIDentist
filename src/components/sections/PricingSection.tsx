import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "299",
    description: "Perfect for small practices",
    features: [
      "Up to 500 calls per month",
      "Basic appointment scheduling",
      "Business hours availability",
      "Email support",
      "1 AI voice personality"
    ]
  },
  {
    name: "Professional",
    price: "599",
    description: "Ideal for growing practices",
    popular: true,
    features: [
      "Up to 2,000 calls per month",
      "Advanced scheduling system",
      "24/7 availability",
      "Priority support",
      "3 AI voice personalities",
      "Custom voice training",
      "Integration with major PMS"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large practices & DSOs",
    features: [
      "Unlimited calls",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
      "Unlimited AI voices",
      "Advanced analytics",
      "White-label option"
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your practice. All plans include our core AI technology and HIPAA compliance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'border-2 border-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">${plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}