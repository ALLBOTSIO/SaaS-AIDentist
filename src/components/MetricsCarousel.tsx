import React from 'react';
import CountUp from 'react-countup';
import { ArrowUpRight, Users, TrendingUp, Clock } from 'lucide-react';

const metrics = [
  {
    title: 'Practice Growth',
    description: 'Scale your practice with intelligent automation',
    icon: TrendingUp,
    stats: [
      { value: 35, suffix: '%', label: 'Increase in new patients' },
      { value: 28, suffix: '%', label: 'Revenue growth' },
      { value: 40, suffix: '%', label: 'More online bookings' }
    ]
  }
];

export const MetricsCarousel = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transform Your Practice with AI
          </h2>
          <p className="text-xl text-gray-300">
            Power Your Practice with Intelligent Automation
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics[0].stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[#00A6E6]/10 rounded-xl">
                  {index === 0 ? (
                    <Users className="w-6 h-6 text-[#00A6E6]" />
                  ) : index === 1 ? (
                    <TrendingUp className="w-6 h-6 text-[#00A6E6]" />
                  ) : (
                    <Clock className="w-6 h-6 text-[#00A6E6]" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-[#00A6E6] bg-[#00A6E6]/10 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+{stat.value}%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                    separator=","
                  />
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};