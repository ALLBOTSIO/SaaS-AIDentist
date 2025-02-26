import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Users, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CalculatorInputs {
  locations: number;
  dailyPatients: number;
  staffCount: number;
  insuranceCallsHours: number;
  portalNavigationHours: number;
  daysOpen: number;
  staffHourlyRate: number;
  monthlyWriteOffs: number;
  verificationStaff: number;
  processingTimePerPatient: number;
}

const initialInputs: CalculatorInputs = {
  locations: 1,
  dailyPatients: 20,
  staffCount: 2,
  insuranceCallsHours: 3,
  portalNavigationHours: 2,
  daysOpen: 5,
  staffHourlyRate: 25,
  monthlyWriteOffs: 5000,
  verificationStaff: 1,
  processingTimePerPatient: 15
};

export const InsuranceROICalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);
  const [step, setStep] = useState(1);

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: Number(value)
    }));
  };

  const calculateResults = () => {
    // Time Savings
    const weeklyHoursSaved = 
      inputs.locations * 
      (inputs.insuranceCallsHours + inputs.portalNavigationHours) * 
      inputs.daysOpen;

    // Cost Savings
    const monthlyCostSavings = 
      weeklyHoursSaved * 
      inputs.staffHourlyRate * 
      4; // 4 weeks per month

    const annualWriteOffReduction = 
      inputs.monthlyWriteOffs * 
      0.24 * // 24% reduction in write-offs
      12; // 12 months

    // Efficiency Gains
    const timePerPatientReduction = 
      inputs.processingTimePerPatient * 
      0.65; // 65% reduction in processing time

    return {
      weeklyHoursSaved,
      monthlyCostSavings,
      annualWriteOffReduction,
      timePerPatientReduction
    };
  };

  const results = calculateResults();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#60A5FA]/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#93C5FD]/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            ROI Calculator
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how much time and money you could save by automating your insurance verification process
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl p-8 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calculator className="h-5 w-5 text-[#00A6E6]" />
                  <span className="text-xl font-semibold">Practice Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Monthly Insurance Verifications
                      </label>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Enter number of verifications"
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Average Time Per Verification (minutes)
                      </label>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Enter average time"
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Staff Hourly Rate ($)
                      </label>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Enter hourly rate"
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl p-8 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <DollarSign className="h-5 w-5 text-[#00A6E6]" />
                  <span className="text-xl font-semibold">Projected Savings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-[#00A6E6]" />
                      <h4 className="font-medium text-white">Time Savings</h4>
                    </div>
                    <p className="text-2xl font-bold text-[#00A6E6]">32 hours/month</p>
                    <p className="text-sm text-gray-300 mt-1">Staff time recovered</p>
                  </div>

                  <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <h4 className="font-medium text-white">Cost Savings</h4>
                    </div>
                    <p className="text-2xl font-bold text-green-600">$4,800/month</p>
                    <p className="text-sm text-gray-300 mt-1">Direct labor cost reduction</p>
                  </div>

                  <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      <h4 className="font-medium text-white">Efficiency Gain</h4>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">85% reduction</p>
                    <p className="text-sm text-gray-300 mt-1">In processing time per verification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};