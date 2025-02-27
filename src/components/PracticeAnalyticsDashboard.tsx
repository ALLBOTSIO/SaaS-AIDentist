import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, UserPlus, AlertCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';
import { useCalendly } from '@/lib/hooks/useCalendly';
import { CalendlyModal } from '@/components/CalendlyModal';
import { ResponsiveContainer, PieChart as RechartsChart, Pie, Cell, Tooltip } from 'recharts';

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
    className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 card-hover flex flex-col"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-[#00A6E6]/10 rounded-xl">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex items-center gap-1 text-sm bg-[#00A6E6]/10 px-2 py-1 rounded-full">
        <ArrowUpRight className="w-6 h-6 text-white" />
        <span className="text-white">+{trend}%</span>
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
          end={value}
          duration={2}
          separator=","
        />
      </motion.div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const PracticeAnalyticsDashboard = () => {
  const [aiImpactSlider, setAiImpactSlider] = useState(50);
  const [brokenAppointments, setBrokenAppointments] = useState(20);
  const [hygieneRecallDue, setHygieneRecallDue] = useState(500);
  const [reappointmentRate, setReappointmentRate] = useState(65);
  const [showResults, setShowResults] = useState(false);
  const { isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const unscheduledData = [
    { name: 'Unconfirmed Appointments', value: 194000, color: '#00f3ff' },
    { name: 'No Insurance', value: 85000, color: '#00A6E6' },
    { name: 'Missing Data', value: 500000, color: '#0066ff' }
  ];

  const totalUnscheduled = unscheduledData.reduce((sum, entry) => sum + entry.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
          <p className="text-white font-medium">{data.name}</p>
          <p className="text-[#00f3ff] font-bold">${data.value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setAiImpactSlider(value);
    setShowResults(true);
  };

  // Calculate impact values based on slider
  const calculateImpact = (baseValue: number) => {
    return Math.round((baseValue * aiImpactSlider) / 100);
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setter(value);
      setShowResults(true);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Unlock Revenue with AI Dentist Patient Engagement Automation
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your dental practice's growth with your own virtual AI Agent — trained to engaging patients through calls, messages, emails, and more to capture immediate revenue opportunities
          </p>
        </motion.div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <MetricCard
            icon={Calendar}
            title="Unconfirmed Appointments"
            value={194}
            subtitle="Patients without confirmed status"
           description="Automatically confirms pending appointments by contacting patients with unconfirmed status"
            trend={35}
          />
          <MetricCard
            icon={UserPlus}
            title="New Patients No Insurance"
            value={85}
            subtitle="Missing insurance verification"
           description="Verifies insurance coverage for new patients. Proactively contacts new patients without attached insurance plans to collect and verify coverage information"
            trend={28}
          />
          <MetricCard
            icon={AlertCircle}
            title="Missing Data or Balance"
            value={500}
            subtitle="Incomplete patient records"
            description="Patients missing phone, email, address, referral or with balance"
            trend={62}
          />
        </div>

        {/* AI Impact Slider */}
        <Card className="bg-white/10 backdrop-blur-md relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white mb-8 text-left sm:text-center">Watch what happens when a AI virtual is assigned these challenges:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                {/* Donut Chart */}
                <div className="flex items-start gap-8 mb-8">
                  <div className="flex-1 h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsChart>
                        <Pie
                          data={unscheduledData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120} 
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {unscheduledData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </RechartsChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    {unscheduledData.map((entry, index) => (
                      <motion.div
                        key={entry.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm relative group hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-white font-medium">{entry.name}</span>
                          </div>
                          <span className="text-[#00f3ff] font-bold">
                            ${entry.value.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(entry.value / totalUnscheduled) * 100}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: entry.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                    
                    <div className="p-4 bg-[#00A6E6]/20 rounded-xl backdrop-blur-sm mt-6">
                      <p className="text-gray-300 mb-1">Total Treatments Unscheduled</p>
                      <p className="text-2xl font-bold text-white">
                        ${totalUnscheduled.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <Label className="text-white text-lg font-medium mb-3 block">AI Agent Automation Level</Label>
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
                    <div className="flex flex-col items-center">
                      <span className="text-[#00f3ff] font-bold text-2xl mb-1">{aiImpactSlider}%</span>
                      <span className="text-white/60 text-sm">Automation</span>
                    </div>
                    <span className="bg-white/10 px-3 py-1 rounded-full">Aggressive</span>
                  </div>
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 p-6 rounded-xl">
                <div>
                  <Label className="text-white mb-2 block">Broken Appointments (monthly)</Label>
                  <Input
                    type="number"
                    value={brokenAppointments}
                    onChange={handleInputChange(setBrokenAppointments)}
                    className="bg-white/10 border-white/20 text-white transition-all duration-300 hover:border-[#00f3ff] hover:shadow-[0_0_8px_rgba(0,243,255,0.6)] focus:border-[#00f3ff] focus:shadow-[0_0_8px_rgba(0,243,255,0.6)] text-[#00f3ff] font-bold"
                    placeholder="Enter number"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Hygiene Recall Due</Label>
                  <Input
                    type="number"
                    value={hygieneRecallDue}
                    onChange={handleInputChange(setHygieneRecallDue)}
                    className="bg-white/10 border-white/20 text-white transition-all duration-300 hover:border-[#00f3ff] hover:shadow-[0_0_8px_rgba(0,243,255,0.6)] focus:border-[#00f3ff] focus:shadow-[0_0_8px_rgba(0,243,255,0.6)] text-[#00f3ff] font-bold"
                    placeholder="Enter number"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Hygiene Reappointment Rate (%)</Label>
                  <Input
                    type="number"
                    value={reappointmentRate}
                    onChange={handleInputChange(setReappointmentRate)}
                    className="bg-white/10 border-white/20 text-white transition-all duration-300 hover:border-[#00f3ff] hover:shadow-[0_0_8px_rgba(0,243,255,0.6)] focus:border-[#00f3ff] focus:shadow-[0_0_8px_rgba(0,243,255,0.6)] text-[#00f3ff] font-bold"
                    placeholder="Enter percentage"
                  />
                </div>
              </div>
              <p className="text-center text-gray-300 text-sm">Adjust these values to match your practice</p>

              {/* Results Panel */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: showResults ? 1 : 0, height: showResults ? 'auto' : 0 }}
                className="space-y-6"
              >
                <div className="p-6 bg-white/5 rounded-xl relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Projected Monthly Impact with AI Agent Automation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-white text-lg font-medium mb-2">Additional Confirmed Appointments</p>
                      <p className="text-2xl font-bold text-[#00f3ff] filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300">
                        <CountUp end={calculateImpact(194)} duration={1} />
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-lg font-medium mb-2">Value of Confirmed Appointments</p>
                      <p className="text-2xl font-bold text-[#00f3ff] filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300">
                        $<CountUp end={calculateImpact(194) * 150} duration={1} separator="," />
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-lg font-medium mb-2">Insurance Verification Completed</p>
                      <p className="text-2xl font-bold text-[#00f3ff] filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300">
                        <CountUp end={calculateImpact(85)} duration={1} />
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-lg font-medium mb-2">Staff Hours Saved</p>
                      <p className="text-2xl font-bold text-[#00f3ff] filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-all duration-300">
                        <CountUp end={calculateImpact(85)} duration={1} /> hrs
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-6 rounded-xl flex items-center justify-between">
                    <p className="text-white text-xl">Total Esteim Monthly Value</p>
                    <p className="text-5xl font-bold text-white filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">
                      $<CountUp end={calculateImpact(194) * 150 + calculateImpact(85) * 50} duration={1} separator="," />
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
          <p className="text-gray-300 mb-6">Ready to see exactly how AI would transform your practice?</p>
          <a
            onClick={openCalendly}
            href="#"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-xl relative border-[3px] border-white/40 transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] hover:bg-white/10"
          >
            See How AI Dentist Agents Solves These Issues
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <p className="text-gray-300 mt-4 text-sm">
            Enter You Detial Clini into the AI Practitioner 50k Price. 
          </p>
        </motion.div>
      </div>
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </section>
  );
};