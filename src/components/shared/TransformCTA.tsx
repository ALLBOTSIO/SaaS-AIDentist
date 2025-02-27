import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Check } from 'lucide-react';

const benefits = [
  'Free 30-minute consultation',
  'Custom ROI calculation',
  'Live demo with your data',
  'Implementation roadmap'
];

export const TransformCTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to Transform Your Practice?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Book a personalized demo to see how our AI solution can streamline your practice operations and enhance patient care.
            </p>
            
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <Check className="h-5 w-5 text-[#00A6E6]" />
                  <span className="ml-3 text-gray-600 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Schedule Your Demo</h3>
                <Calendar className="h-6 w-6 text-[#00A6E6]" />
              </div>

              <div className="mt-6 space-y-6">
                <a
                  href="https://calendly.com/ai-consultant/ai-project-kickoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary block w-full text-center font-medium"
                >
                  Book Your Free Demo
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5 inline-block" />
                </a>

                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No credit card required • 30-minute session
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};