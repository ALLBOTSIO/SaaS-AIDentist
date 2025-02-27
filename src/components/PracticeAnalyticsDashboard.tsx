import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, UserPlus, AlertCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';

interface MetricCardProps {
  icon: React.ElementType;
  title: string;
  value: number;
  subtitle: string;
  description: string;
  trend: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  description,
  trend
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative group"
  >
    <Card className="bg-white/10 backdrop-blur-md relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] group-hover:border-[#00f3ff] group-hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
          <div className="flex items-center gap-3 text-[#00f3ff]">
            <span className="text-2xl font-bold"><CountUp end={value} duration={2} separator="," /></span>
            <div className="flex items-center gap-1 text-sm bg-[#00f3ff]/10 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-4 h-4" />
              <span>+{trend}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export const PracticeAnalyticsDashboard = () => {
  const [aiImpactSlider, setAiImpactSlider] = useState(50);
  const [showResults, setShowResults] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setAiImpactSlider(value);
    setShowResults(true);
  };

  // Calculate impact values based on slider
  const calculateImpact = (baseValue: number) => {
    return Math.round((baseValue * aiImpactSlider) / 100);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Practice Health Metrics
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Practice Health Metrics: 7-Day Overview
          </h2>
          <p className="text-lg text-gray-300">
            Your practice's key performance indicators from {new Date().toLocaleDateString()} to{' '}
            {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
          </p>
        </motion.div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <MetricCard
            icon={Calendar}
            title="Unconfirmed Appointments"
            value={97}
            subtitle="Patients with unconfirmed appointments"
            description="Displays patients without 'Confirmed' appointment status"
            trend={15}
          />
          <MetricCard
            icon={UserPlus}
            title="New Patients No Insurance"
            value={18}
            subtitle="New patients missing insurance data"
            description="New patient visits without attached insurance plans"
            trend={8}
          />
          <MetricCard
            icon={AlertCircle}
            title="Missing Data or Balance"
            value={194}
            subtitle="Patients with incomplete records"
            description="Patients missing phone, email, address, referral or with balance"
            trend={12}
          />
        </div>

        {/* AI Impact Slider */}
        <Card className="bg-white/10 backdrop-blur-md relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-white">Potential AI Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label className="text-white text-lg font-medium mb-3 block">Automation Level</Label>
                <div className="relative">
                  <Input
                    type="range"
                    min="0"
                    max="100"
                    value={aiImpactSlider}
                    onChange={handleSliderChange}
                    className="w-full [&::-webkit-slider-runnable-track]:bg-white/10 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(0,243,255,0.6)] [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#00f3ff] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-300 [&::-webkit-slider-thumb]:hover:shadow-[0_0_12px_rgba(0,243,255,0.8)]"
                  />
                  <div className="flex justify-between text-base font-medium text-white/90 mt-3">
                    <span className="bg-white/10 px-3 py-1 rounded-full">Conservative</span>
                    <span className="bg-[#00A6E6]/20 px-3 py-1 rounded-full relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] text-[#00f3ff] font-bold">{aiImpactSlider}%</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">Aggressive</span>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: showResults ? 1 : 0, height: showResults ? 'auto' : 0 }}
                className="space-y-6"
              >
                <div className="p-6 bg-white/5 rounded-xl relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]">
                  <h3 className="text-lg font-semibold text-white mb-6">
                    Projected Monthly Impact with AI Automation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-white text-lg font-medium mb-2">Additional Confirmed Appointments</p>
                      <p className="text-2xl font-bold text-[#00f3ff] filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300">
                        <CountUp end={calculateImpact(97)} duration={1} />
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-lg font-medium mb-2">Value of Confirmed Appointments</p>
                      <p className="text-2xl font-bold text-[#00f3ff] filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300">
                        $<CountUp end={calculateImpact(97) * 150} duration={1} separator="," />
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-lg font-medium mb-2">Insurance Verification Completed</p>
                      <p className="text-2xl font-bold text-[#00f3ff] filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300">
                        <CountUp end={calculateImpact(18)} duration={1} />
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-lg font-medium mb-2">Staff Hours Saved</p>
                      <p className="text-2xl font-bold text-[#00f3ff] filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300">
                        <CountUp end={calculateImpact(40)} duration={1} /> hrs
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-6 bg-[#00f3ff] rounded-xl flex items-center justify-between">
                    <p className="text-white text-lg">Total Projected Monthly Value</p>
                    <p className="text-5xl font-bold text-white filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">
                      $<CountUp end={calculateImpact(97) * 150 + calculateImpact(40) * 50} duration={1} separator="," />
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#00f3ff] text-white px-8 py-6 text-lg font-semibold relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]"
          >
            Schedule AI Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-gray-300 mt-4">
            See how AI can transform your practice operations
          </p>
        </motion.div>
      </div>
    </section>
  );
};