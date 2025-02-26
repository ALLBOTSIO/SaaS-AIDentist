import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, CheckCircle, Globe, Users, Star } from 'lucide-react';
import CountUp from 'react-countup';

const benefits = [
  'Automated verification in seconds',
  'Real-time eligibility checks',
  'Reduced claim denials',
  'Improved cash flow',
  'Enhanced patient experience',
  'HIPAA compliant'
];

export const InsuranceHero = () => {
  return (
    <section className="relative py-32 overflow-hidden">
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#3B82F6]/20 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            AI-Powered Insurance Verification
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Never Call Insurance Again
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Automate your insurance verification process with AI. Save time, reduce errors, and improve your bottom line.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto hover:bg-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-8 text-gray-600 border-b border-gray-100 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Globe className="w-5 h-5 text-[#00A6E6]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Real-time Verification</h3>
                  <p className="text-sm text-gray-500">Instant eligibility checks</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Staff Efficiency</h3>
                  <p className="text-sm text-gray-500">Reduce manual work</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-50 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Improved Accuracy</h3>
                  <p className="text-sm text-gray-500">Minimize errors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00A6E6]" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-[#00A6E6] mb-1 backdrop-blur-sm">
                <CountUp end={95} suffix="%" duration={2} />
              </div>
              <p className="text-sm text-gray-600">Time Saved on Verifications</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-1 backdrop-blur-sm">
                <CountUp end={99.9} suffix="%" decimals={1} duration={2} />
              </div>
              <p className="text-sm text-gray-600">Verification Accuracy</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-xl">
              <div className="text-2xl font-bold text-yellow-600 mb-1 backdrop-blur-sm">
                <CountUp prefix="$" end={12000} duration={2} />
              </div>
              <p className="text-sm text-gray-600">Monthly Cost Savings</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/ai-consultant/ai-project-kickoff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A6E6] hover:bg-[#0095D1] rounded-xl transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              View Live Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Want to learn more about automating your insurance verification?
          </p>
          <a 
            href="https://calendly.com/ai-consultant/ai-project-kickoff"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#00A6E6] rounded-xl hover:bg-[#0095D1] transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};