"use client";

import { useState } from "react";
import { Calculator, DollarSign, Clock, Users } from "lucide-react";
import type { InsuranceCalculatorInputs, InsuranceResults } from "./types";

const initialInputs: InsuranceCalculatorInputs = {
  locations: 1,
  dailyPatients: 20,
  staffCount: 2,
  insuranceCallsHours: 3,
  portalNavigationHours: 2,
  daysOpen: 5,
  staffHourlyRate: 25,
  monthlyWriteOffs: 5000,
  verificationStaff: 1,
  processingTimePerPatient: 15,
};

function calcResults(inputs: InsuranceCalculatorInputs): InsuranceResults {
  const weeklyHoursSaved =
    inputs.locations *
    (inputs.insuranceCallsHours + inputs.portalNavigationHours) *
    inputs.daysOpen;

  const monthlyCostSavings = weeklyHoursSaved * inputs.staffHourlyRate * 4;

  // 24% reduction in write-offs
  const annualWriteOffReduction = inputs.monthlyWriteOffs * 0.24 * 12;

  // 65% reduction in processing time per patient
  const timePerPatientReduction = inputs.processingTimePerPatient * 0.65;

  return {
    weeklyHoursSaved,
    monthlyCostSavings,
    annualWriteOffReduction,
    timePerPatientReduction,
  };
}

interface FieldProps {
  label: string;
  field: keyof InsuranceCalculatorInputs;
  inputs: InsuranceCalculatorInputs;
  onChange: (field: keyof InsuranceCalculatorInputs, value: string) => void;
  prefix?: string;
  suffix?: string;
}

function Field({ label, field, inputs, onChange, prefix, suffix }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-gray-400 text-sm">{prefix}</span>
        )}
        <input
          type="number"
          min="0"
          value={inputs[field]}
          onChange={(e) => onChange(field, e.target.value)}
          className={`w-full rounded-lg bg-white/10 border border-white/20 text-white text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A6E6] placeholder:text-gray-400 ${prefix ? "pl-7" : ""} ${suffix ? "pr-12" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 text-gray-400 text-sm">{suffix}</span>
        )}
      </div>
    </div>
  );
}

export function InsuranceROICalculator() {
  const [inputs, setInputs] =
    useState<InsuranceCalculatorInputs>(initialInputs);

  const results = calcResults(inputs);

  function handleChange(
    field: keyof InsuranceCalculatorInputs,
    value: string
  ) {
    setInputs((prev) => ({ ...prev, [field]: Number(value) }));
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            ROI Calculator
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how much time and money you could save by automating your
            insurance verification process
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 transition-colors hover:bg-white/[0.15]">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="h-5 w-5 text-[#00A6E6]" />
              <h3 className="text-xl font-semibold text-white">
                Practice Metrics
              </h3>
            </div>

            <div className="space-y-4">
              <Field
                label="Number of Locations"
                field="locations"
                inputs={inputs}
                onChange={handleChange}
              />
              <Field
                label="Daily Patients"
                field="dailyPatients"
                inputs={inputs}
                onChange={handleChange}
              />
              <Field
                label="Insurance Call Hours / Day"
                field="insuranceCallsHours"
                inputs={inputs}
                onChange={handleChange}
                suffix="hrs"
              />
              <Field
                label="Portal Navigation Hours / Day"
                field="portalNavigationHours"
                inputs={inputs}
                onChange={handleChange}
                suffix="hrs"
              />
              <Field
                label="Days Open / Week"
                field="daysOpen"
                inputs={inputs}
                onChange={handleChange}
              />
              <Field
                label="Staff Hourly Rate"
                field="staffHourlyRate"
                inputs={inputs}
                onChange={handleChange}
                prefix="$"
              />
              <Field
                label="Monthly Write-Offs"
                field="monthlyWriteOffs"
                inputs={inputs}
                onChange={handleChange}
                prefix="$"
              />
            </div>
          </div>

          {/* Results card */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 transition-colors hover:bg-white/[0.15]">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign className="h-5 w-5 text-[#00A6E6]" />
                <h3 className="text-xl font-semibold text-white">
                  Projected Savings
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-[#00A6E6]" />
                    <span className="text-sm font-medium text-white">
                      Weekly Hours Saved
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-[#00A6E6]">
                    {results.weeklyHoursSaved.toFixed(1)} hrs/week
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Staff time recovered</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-white">
                      Monthly Cost Savings
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-400">
                    ${results.monthlyCostSavings.toLocaleString()}/mo
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Direct labor cost reduction
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-white">
                      Annual Write-Off Recovery
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-purple-400">
                    ${results.annualWriteOffReduction.toLocaleString()}/yr
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    24% reduction in write-offs
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">
                      Processing Time Saved
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-blue-400">
                    {results.timePerPatientReduction.toFixed(1)} min/patient
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    65% reduction per verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
