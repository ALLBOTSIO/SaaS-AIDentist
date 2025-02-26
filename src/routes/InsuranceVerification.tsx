import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { InsuranceHero } from '@/components/insurance/InsuranceHero';
import { LiveVerificationFeed } from '@/components/insurance/LiveVerificationFeed';
import { InsuranceROICalculator } from '@/components/insurance/InsuranceROICalculator';
import { InsuranceResults } from '@/components/insurance/InsuranceResults';
import { InsuranceContactForm } from '@/components/insurance/InsuranceContactForm';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Header } from '@/components/shared/Header';
import { Toaster } from '@/components/ui/toaster';

const sectionStyle = "relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]";
const decorativeElements = (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
  </>
);

const InsuranceVerification = () => {
  return (
    <>
      <Helmet>
        <title>AI Insurance Verification | AIDENTIST</title>
        <meta name="description" content="Transform your dental insurance verification process with AI automation. Save time, reduce errors, and improve your bottom line." />
        <meta name="keywords" content="dental insurance verification, AI automation, dental practice management, insurance eligibility" />
        <meta property="og:title" content="AI Insurance Verification | AIDENTIST" />
        <meta property="og:description" content="Transform your dental insurance verification process with AI automation. Save time, reduce errors, and improve your bottom line." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aidentist.com/insur-verify" />
      </Helmet>
      <div className="min-h-screen relative">
        <Header transparent={false} />
        <div id="hero" className={sectionStyle}>
          {decorativeElements}
          <div className="relative pt-20">
            <InsuranceHero />
          </div>
        </div>
        <div id="verification" className={sectionStyle}>
          {decorativeElements}
          <div className="relative">
            <LiveVerificationFeed />
          </div>
        </div>
        <div id="calculator" className={sectionStyle}>
          {decorativeElements}
          <div className="relative">
            <InsuranceROICalculator />
          </div>
        </div>
        <div id="results" className={sectionStyle}>
          {decorativeElements}
          <div className="relative">
            <InsuranceResults />
          </div>
        </div>
        <div id="contact" className={sectionStyle}>
          {decorativeElements}
          <div className="relative">
            <InsuranceContactForm />
          </div>
        </div>
        <div id="cta" className={sectionStyle}>
          {decorativeElements}
          <div className="relative">
            <TransformCTA />
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default InsuranceVerification;