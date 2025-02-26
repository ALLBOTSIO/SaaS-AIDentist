import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, CheckCircle, Package, BarChart2, Brain, Boxes } from 'lucide-react';
import { Header } from '@/components/shared/Header';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Toaster } from '@/components/ui/toaster';
import CountUp from 'react-countup';

const features = [
  {
    icon: Package,
    title: 'Smart Inventory Management',
    description: 'AI-powered tracking and automated reordering based on usage patterns and predictive analytics.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: BarChart2,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into supply usage, costs, and optimization opportunities.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Brain,
    title: 'AI-Powered Assistant',
    description: 'Intelligent recommendations for supply optimization and cost reduction.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Boxes,
    title: 'Supplier Integration Hub',
    description: 'Seamless connection with multiple suppliers for automated ordering and fulfillment.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  }
];

const testimonials = [
  {
    quote: "The AI supply management has reduced our inventory costs by 30% while ensuring we never run out of essential items.",
    author: "Dr. Sarah Chen",
    role: "Practice Owner",
    practice: "Bright Smile Dental"
  },
  {
    quote: "Automated ordering has saved our staff countless hours and eliminated emergency supply runs.",
    author: "Dr. Michael Rodriguez",
    role: "Clinical Director",
    practice: "Advanced Dental Care"
  },
  {
    quote: "The analytics have helped us optimize our supply chain and reduce waste significantly.",
    author: "Dr. Emily Thompson",
    role: "Managing Partner",
    practice: "Family First Dental"
  }
];

const faqs = [
  {
    question: "How does the AI inventory management work?",
    answer: "Our AI system tracks your supply usage in real-time, learns your patterns, and automatically places orders based on predicted needs. It considers factors like seasonality, procedure schedules, and supplier lead times."
  },
  {
    question: "Can it integrate with my existing practice management software?",
    answer: "Yes! We support integration with major practice management systems including Dentrix, Open Dental, and many others."
  },
  {
    question: "What kind of cost savings can I expect?",
    answer: "On average, practices see a 20-30% reduction in supply costs through optimized ordering, reduced waste, and better negotiated prices with suppliers."
  },
  {
    question: "How long does it take to implement?",
    answer: "Most practices are up and running within 1-2 weeks. Our team handles the entire setup process, including staff training."
  },
  {
    question: "Is there a minimum practice size requirement?",
    answer: "No! Our system scales to practices of all sizes, from single-provider offices to large multi-location groups."
  }
];

const AISupplies = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered Dental Supply Management | AIDENTIST</title>
        <meta name="description" content="Transform your dental practice's supply chain with AI-powered inventory management, automated ordering, and cost optimization." />
        <meta name="keywords" content="dental supplies, AI inventory management, dental practice automation, supply chain optimization" />
        <link rel="canonical" href="https://aidentist.com/ai-supplies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
        <Header transparent={false} />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
                AI-Powered Supply Management
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Automate Your Dental Supply Orders with AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Simplify inventory tracking, automate reordering, and optimize your dental practice's supply chain with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <a 
                  href="https://calendly.com/ai-consultant/ai-project-kickoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A6E6] hover:bg-[#0095D1] rounded-xl transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
                >
                  Start Free Trial
                </button>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUp end={30} suffix="%" duration={2} />
                </div>
                <p className="text-gray-300">Average Cost Savings</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUp end={95} suffix="%" duration={2} />
                </div>
                <p className="text-gray-300">Order Accuracy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUp end={8} suffix="hrs" duration={2} />
                </div>
                <p className="text-gray-300">Time Saved Weekly</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Supply Chain Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered system streamlines every aspect of your dental supply management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mt-6 mb-4">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
                >
                  <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.practice}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TransformCTA />
        <Toaster />
      </div>
    </>
  );
};

export default AISupplies;