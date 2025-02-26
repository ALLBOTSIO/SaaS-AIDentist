import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, CheckCircle, Package, BarChart2, Brain, Boxes, AlertCircle, Calendar, DollarSign, LineChart, Truck, FileText } from 'lucide-react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Toaster } from '@/components/ui/toaster';
import CountUp from 'react-countup';

const partners = [
  {
    name: 'Henry Schein Dental',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Patterson Dental',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Benco Dental',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Darby Dental Supply',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Dentsply Sirona',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: '3M Oral Care',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Ivoclar Vivadent',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'GC America',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'DentalEZ',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Kerr Dental',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  }
];

const features = [
  {
    icon: Package,
    title: 'Smart Inventory Management',
    description: 'AI-powered tracking system with automated reorder points, real-time stock alerts, and expiration date tracking.',
    details: [
      'Automated reorder points based on usage',
      'Real-time stock level monitoring',
      'Expiration date tracking and alerts',
      'Batch tracking and management',
      'Multi-location inventory sync'
    ],
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: BarChart2,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics with usage patterns, cost optimization, budget tracking, and custom reports.',
    details: [
      'Usage pattern analysis',
      'Cost optimization suggestions',
      'Budget tracking and forecasting',
      'Inventory turnover metrics',
      'Custom report generation'
    ],
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Brain,
    title: 'AI-Powered Assistant',
    description: 'Advanced AI assistant with predictive ordering, seasonal forecasting, and supply chain optimization.',
    details: [
      'Predictive ordering system',
      'Seasonal demand forecasting',
      'Supply chain optimization',
      'Custom par level suggestions',
      'Procedure-based recommendations'
    ],
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Boxes,
    title: 'Supplier Integration Hub',
    description: 'Direct integration with major suppliers, price comparison, and consolidated ordering interface.',
    details: [
      'Multi-supplier integration',
      'Price comparison across vendors',
      'Consolidated ordering system',
      'Order history tracking',
      'Automated fulfillment'
    ],
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
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
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

            {/* Partner Logo Carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1E3A8A] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1E3A8A] to-transparent z-10" />
              <div className="flex space-x-12 animate-[scroll_30s_linear_infinite]">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 h-16 w-48 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center px-6"
                  >
                    <span className="text-white font-medium">{partner.name}</span>
                  </div>
                ))}
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
                      <ul className="mt-6 space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-[#00A6E6]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <a 
                href="https://calendly.com/ai-consultant/ai-project-kickoff"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
              >
                Watch Demo Video
              </button>
            </motion.div>
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
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default AISupplies;