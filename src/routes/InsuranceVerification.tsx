import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { InsuranceHero } from '@/components/insurance/InsuranceHero';
import { LiveVerificationFeed } from '@/components/insurance/LiveVerificationFeed';
import { InsuranceROICalculator } from '@/components/insurance/InsuranceROICalculator';
import { InsuranceResults } from '@/components/insurance/InsuranceResults';
import { InsuranceContactForm } from '@/components/insurance/InsuranceContactForm';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Footer } from '@/components/shared/Footer';
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
        <PageHeader
          title="Insurance Verification"
          subtitle="Transform your dental insurance verification process with AI automation. Save time, reduce errors, and improve your bottom line."
          badge="AI-Powered Insurance Verification"
          breadcrumbs={[
            { label: 'AI Solutions', href: '#' },
            { label: 'Insurance Verification' }
          ]}
        />
        <div id="hero" className={sectionStyle}>
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
            <Footer />
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default InsuranceVerification;