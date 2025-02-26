import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Toaster } from '@/components/ui/toaster';

const Practitioners = () => {
  return (
    <>
      <Helmet>
        <title>Solutions for Practitioners | AIDENTIST</title>
        <meta name="description" content="AI-powered solutions designed specifically for individual dental practitioners. Streamline your practice operations and enhance patient care." />
        <meta name="keywords" content="dental practitioners, solo practice, dental AI, practice management, patient care" />
        <meta property="og:title" content="Solutions for Practitioners | AIDENTIST" />
        <meta property="og:description" content="AI-powered solutions designed specifically for individual dental practitioners. Streamline your practice operations and enhance patient care." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aidentist.com/customers/practitioners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A] relative">
        <Header transparent={false} />
        <div className="relative pt-20">
          {/* Content for Practitioners page */}
          <TransformCTA />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Practitioners;