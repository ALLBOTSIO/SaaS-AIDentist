import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Toaster } from '@/components/ui/toaster';
import { Users, MessageSquare, Calendar, Bell, LineChart as ChartLine, Heart } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Smart Communication',
    description: 'AI-powered messaging system that automatically engages patients with personalized communications',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Calendar,
    title: 'Appointment Reminders',
    description: 'Intelligent scheduling system that reduces no-shows and maintains patient engagement',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Bell,
    title: 'Follow-up Automation',
    description: 'Automated post-treatment care instructions and follow-up scheduling',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: ChartLine,
    title: 'Retention Analytics',
    description: 'Advanced analytics to identify at-risk patients and optimize retention strategies',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Heart,
    title: 'Patient Satisfaction',
    description: 'Automated satisfaction surveys and feedback collection to improve patient experience',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Users,
    title: 'Patient Reactivation',
    description: 'Smart reactivation campaigns for dormant patients using AI-driven engagement',
    color: 'from-[#00A6E6] to-[#0095D1]'
  }
];

const PatientRetention = () => {
  return (
    <>
      <Helmet>
        <title>AI Patient Retention | AIDENTIST</title>
        <meta name="description" content="Transform your patient retention with AI-powered engagement solutions. Keep patients active and satisfied with automated, personalized communication." />
        <meta name="keywords" content="patient retention, dental AI, patient engagement, dental practice management, patient communication" />
        <meta property="og:title" content="AI Patient Retention | AIDENTIST" />
        <meta property="og:description" content="Transform your patient retention with AI-powered engagement solutions. Keep patients active and satisfied with automated, personalized communication." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aidentist.com/patient-retention" />
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
                AI-Powered Patient Retention
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Keep Your Patients Coming Back
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Automate patient engagement and boost retention rates with intelligent AI-driven communication and follow-up systems.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <a 
                href="https://calendly.com/ai-consultant/ai-project-kickoff"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center px-8 py-4 text-lg font-semibold"
              >
                Schedule a Demo
              </a>
            </motion.div>
          </div>
        </section>

        <TransformCTA />
        <Toaster />
      </div>
    </>
  );
};

export default PatientRetention;