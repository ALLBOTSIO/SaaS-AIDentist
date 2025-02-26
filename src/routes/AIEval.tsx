import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { DSOValuation } from '@/components/DSOValuation';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Toaster } from '@/components/ui/toaster';

const decorativeElements = (
  <>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
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
  </>
);

const AIEval = () => {
  return (
    <>
      <Helmet>
        <title>AI Evaluation | AIDENTIST</title>
        <meta name="description" content="Transform your dental practice with AI-powered evaluation. Enhance patient care, streamline operations, and boost efficiency." />
        <meta name="keywords" content="dental AI evaluation, AI automation, dental practice management, practice assessment" />
        <meta property="og:title" content="AI Evaluation | AIDENTIST" />
        <meta property="og:description" content="Transform your dental practice with AI-powered evaluation. Enhance patient care, streamline operations, and boost efficiency." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aidentist.com/ai-eval" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A] relative">
        <Header transparent={false} />
        <div className="relative pt-20">
          {decorativeElements}
          <DSOValuation />
          <TransformCTA />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default AIEval;