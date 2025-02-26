import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, CheckCircle } from 'lucide-react';
import { Header } from '@/components/shared/Header';
import { AIFeatures } from '@/components/AIFeatures';
import { AIAssistantWidget } from '@/components/AIAssistantWidget';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Toaster } from '@/components/ui/toaster';

const AIAssistant = () => {
  return (
    <>
      <Helmet>
        <title>AI Voice Assistant | AIDENTIST</title>
        <meta name="description" content="Transform your dental practice with AI-powered voice assistance. Enhance patient care and streamline operations with intelligent automation." />
        <meta name="keywords" content="dental AI assistant, voice automation, practice management, patient communication" />
        <link rel="canonical" href="https://aidentist.com/ai-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-primary">
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
                AI Voice Assistant
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Intelligent Voice AI for Modern Dentistry
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our AI-powered voice system combines cutting-edge technology with intuitive design to deliver exceptional patient experiences and streamline practice operations.
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
                  Try Live Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <AIFeatures />

        {/* AI Assistant Widget */}
        <AIAssistantWidget isVisible={true} />

        <TransformCTA />
        <Toaster />
      </div>
    </>
  );
};

export default AIAssistant;