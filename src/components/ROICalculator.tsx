import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Users, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    patientsPerMonth: 200,
    avgAppointmentValue: 150,
    noShowRate: 15,
    staffHours: 40
  });

  const calculateROI = () => {
    const monthlyPatients = inputs.patientsPerMonth;
    const appointmentValue = inputs.avgAppointmentValue;
    const currentNoShows = (monthlyPatients * inputs.noShowRate) / 100;
    const improvedNoShows = currentNoShows * 0.4; // 60% reduction
    const savedAppointments = currentNoShows - improvedNoShows;
    const revenueIncrease = savedAppointments * appointmentValue;
    const staffTimeSaved = inputs.staffHours * 0.3; // 30% time savings
    const staffCostSaved = staffTimeSaved * 25 * 4; // $25/hour, 4 weeks

    return {
      revenueIncrease: Math.round(revenueIncrease),
      staffTimeSaved: Math.round(staffTimeSaved),
      staffCostSaved: Math.round(staffCostSaved),
      totalValue: Math.round(revenueIncrease + staffCostSaved)
    };
  };

  const roi = calculateROI();

  return (
    <section className="relative py-12 bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#60A5FA]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#93C5FD]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            ROI Calculator
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Calculate Your Practice's AI Value
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how much your practice could save with AI automation. Input your numbers below to get a personalized estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calculator className="h-5 w-5 text-[#00A6E6]" />
                  Practice Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Patients
                  </label>
                  <Input
                    type="number"
                    value={inputs.patientsPerMonth}
                    onChange={(e) => setInputs({ ...inputs, patientsPerMonth: Number(e.target.value) })}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#00A6E6] focus:ring-[#00A6E6]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Average Appointment Value ($)
                  </label>
                  <Input
                    type="number"
                    value={inputs.avgAppointmentValue}
                    onChange={(e) => setInputs({ ...inputs, avgAppointmentValue: Number(e.target.value) })}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#00A6E6] focus:ring-[#00A6E6]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current No-Show Rate (%)
                  </label>
                  <Input
                    type="number"
                    value={inputs.noShowRate}
                    onChange={(e) => setInputs({ ...inputs, noShowRate: Number(e.target.value) })}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#00A6E6] focus:ring-[#00A6E6]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Weekly Staff Hours on Admin
                  </label>
                  <Input
                    type="number"
                    value={inputs.staffHours}
                    onChange={(e) => setInputs({ ...inputs, staffHours: Number(e.target.value) })}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#00A6E6] focus:ring-[#00A6E6]"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <DollarSign className="h-5 w-5 text-[#00A6E6]" />
                  Monthly Value Created
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-[#00A6E6]" />
                        <span className="text-sm font-medium text-gray-300">Additional Revenue</span>
                      </div>
                      <span className="text-lg font-bold text-white">${roi.revenueIncrease.toLocaleString()}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[#00A6E6]" />
                        <span className="text-sm font-medium text-gray-300">Staff Cost Savings</span>
                      </div>
                      <span className="text-lg font-bold text-white">${roi.staffCostSaved.toLocaleString()}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 bg-[#00A6E6]/90 backdrop-blur-sm rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-white">Total Monthly Value</span>
                      <span className="text-2xl font-bold text-white">${roi.totalValue.toLocaleString()}</span>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="https://calendly.com/ai-consultant/ai-project-kickoff"
                    target="_blank"
                    href="https://calendly.com/ai-consultant/ai-project-kickoff"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-full bg-[#00A6E6]/90 hover:bg-[#0095D1] text-white rounded-xl px-6 py-4 font-medium transition-all backdrop-blur-sm shadow-lg hover:shadow-xl"
                  >
                    Get Your Custom ROI Report
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};