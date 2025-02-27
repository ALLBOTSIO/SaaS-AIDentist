import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ArrowUpRight, Users, TrendingUp, Clock } from 'lucide-react';

const metrics = [
  {
    title: 'Practice Growth',
    description: 'Scale your practice with intelligent automation',
    icon: TrendingUp,
    stats: [
      { value: 35, suffix: '%', label: 'Local Impact resulting in new Patients' },
      { value: 28, suffix: '%', label: 'New Revenue growth' },
      { value: 40, suffix: '%', label: 'Higher Patient Satisfaction' },
      { value: 62, suffix: '%', label: 'Reduction in Billing Errors' },
      { value: 85, suffix: '%', label: 'Decrease in Insurance Verification Time' },
      { value: 47, suffix: '%', label: 'Increase in Treatment Plan Acceptance' },
      { value: 23, suffix: 'hrs', label: 'Weekly Staff Time Saved' }
    ]
  }
];

export const MetricsCarousel = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transform Your Dental Practice with AI
          </h2>
          <p className="text-xl text-gray-300">
            Increase Your Practice Activities with Intelligent Automation
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics[0].stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 card-hover flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[#00A6E6]/10 rounded-xl">
                  {index === 0 ? (
                    <Users className="w-6 h-6 text-white" />
                  ) : index === 1 ? (
                    <TrendingUp className="w-6 h-6 text-white" />
                  ) : (
                    <Clock className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm bg-[#00A6E6]/10 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5 }}
                  className="text-[45px] font-bold text-white tracking-tight text-center value-text transition-all duration-300"
                >
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                    separator=","
                  />
                </motion.div>
                <p className="text-gray-300 text-center">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};