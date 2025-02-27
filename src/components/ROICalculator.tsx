import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Users, Clock, ArrowRight, PieChart, BarChart2 } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Pie, Cell, ResponsiveContainer, Tooltip, PieChart as RechartsChart } from 'recharts';
import CountUp from 'react-countup';

interface UnscheduledTreatment {
  name: string;
  value: number;
  color: string;
}

const initialUnscheduledData: UnscheduledTreatment[] = [
  { name: '1-3 months', value: 603000, color: '#00A6E6', min: 100000, max: 1000000 },
  { name: '3-6 months', value: 300000, color: '#0095D1', min: 100000, max: 1000000 },
  { name: '6-12 months', value: 500000, color: '#1E3A8A', min: 100000, max: 1000000 },
  { name: '12+ months', value: 2000000, color: '#1E40AF', min: 100000, max: 1000000 }
];
import { useCalendly } from '@/lib/hooks/useCalendly';
import { CalendlyModal } from '@/components/CalendlyModal';

export const ROICalculator = () => {
  const [unscheduledData, setUnscheduledData] = useState(initialUnscheduledData);
  const [inputs, setInputs] = useState({
    brokenAppointments: 20,
    hygieneRecallDue: 500,
    hygieneReappointmentRate: 65,
    aiConversionRate: 5
  });

  const totalUnscheduled = unscheduledData.reduce((acc, item) => acc + item.value, 0);
  const monthlyRevenue = (totalUnscheduled * inputs.aiConversionRate) / 100;
  const additionalHygieneRevenue = (inputs.hygieneRecallDue * inputs.hygieneReappointmentRate * 200) / 100;
  const totalMonthlyOpportunity = monthlyRevenue + additionalHygieneRevenue;
  const { isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{payload[0].name}</p>
          <p className="text-[#00A6E6] text-lg font-bold">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  const handleInputChange = (field: keyof typeof inputs) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleSliderChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const newData = [...unscheduledData];
    newData[index] = { ...newData[index], value };
    setUnscheduledData(newData);
  };

  return (
    <section className="relative py-12">
      {/* Background Elements */}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            AI Agent New Income Percentage Calculator 
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Calculate Your Practice's Income after adding an AI Agent to the work. 
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how much revenue your practice could unlock with AI-powered patient reactivation, reminders
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Current Practice Metrics */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]">
              <CardHeader className="pb-8 relative z-20">
                <CardTitle className="text-2xl font-bold text-white mb-3">
                  Hidden Revenue Dashboard: Your Practice's Untapped Potential
                </CardTitle>
                <p className="text-lg text-gray-300">
                  Activate your AI agent to automatically convert these dormant opportunities into scheduled appointments and real revenue.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-8">
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
                        className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm relative group hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-white font-medium">{entry.name}</span>
                          </div>
                          <span className="text-[#00A6E6] font-bold">
                            ${entry.value.toLocaleString()}
                          </span>
                        </div>
                        <div className="mt-2">
                          <input
                            type="range"
                            min={entry.min}
                            max={entry.max}
                            value={entry.value}
                            onChange={handleSliderChange(index)}
                            className="w-full [&::-webkit-slider-runnable-track]:bg-white/10 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(0,243,255,0.6)] [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#00f3ff] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-300 [&::-webkit-slider-thumb]:hover:shadow-[0_0_12px_rgba(0,243,255,0.8)]"
                          />
                        </div>
                      </motion.div>
                    ))}
                    
                    <div className="p-4 bg-[#00A6E6]/20 rounded-xl backdrop-blur-sm mt-6">
                      <p className="text-gray-300 mb-1">Total Unscheduled</p>
                      <p className="text-2xl font-bold text-white">
                        ${totalUnscheduled.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Other Income Opportunity Percentages produced by your AI Agent 
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-300">Broken Appointments (per month)</Label>
                    <Input
                      type="number"
                      value={inputs.brokenAppointments}
                      onChange={handleInputChange('brokenAppointments')}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>

                  <div>
                    <Label className="text-gray-300">Hygiene Recall Due (patients)</Label>
                    <Input
                      type="number"
                      value={inputs.hygieneRecallDue}
                      onChange={handleInputChange('hygieneRecallDue')}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>

                  <div>
                    <Label className="text-gray-300">Hygiene Reappointment Rate (%)</Label>
                    <Input
                      type="number"
                      value={inputs.hygieneReappointmentRate}
                      onChange={handleInputChange('hygieneReappointmentRate')}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - AI Conversion & Results */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  AI Agent Automation Outbound Patient Closing Percentage   
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Label className="text-gray-300">
                    AI Outbound Call Conversion Rate (%)
                  </Label>
                  <Input
                    type="range"
                    min="1"
                    max="100"
                    value={inputs.aiConversionRate}
                    onChange={handleInputChange('aiConversionRate')}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>1%</span>
                    <span>{inputs.aiConversionRate}%</span>
                    <span>100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  New Monthly Dental Office Income Created
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Additional Revenue from AI converting Unscheduled Treatment
                  </h3>
                  <div className="text-3xl font-bold text-[#00A6E6] mb-2">
                    <CountUp
                      end={monthlyRevenue}
                      prefix="$"
                      separator=","
                      duration={1}
                    />
                  </div>
                  <p className="text-sm text-gray-400">
                    Based on {inputs.aiConversionRate}% conversion of unscheduled treatment value
                  </p>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Additional Hygiene Appointments
                  </h3>
                  <div className="text-3xl font-bold text-[#00A6E6] mb-2">
                    <CountUp
                      end={additionalHygieneRevenue}
                      prefix="$"
                      separator=","
                      duration={1}
                    />
                  </div>
                  <p className="text-sm text-gray-400">
                    Based on recall conversion rate
                  </p>
                </div>

                <div className="p-6 bg-[#00A6E6] rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Total Monthly Revenue Opportunity
                  </h3>
                  <div className="text-4xl font-bold text-white">
                    <CountUp
                      end={totalMonthlyOpportunity}
                      prefix="$"
                      separator=","
                      duration={1}
                    />
                  </div>
                </div>

                <Button
                  onClick={openCalendly}
                  className="w-full bg-white/10 text-white relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]"
                  size="lg"
                >
                  Get Your Custom ROI Report
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </section>
  );
};