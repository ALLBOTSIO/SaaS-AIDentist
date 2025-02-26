import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/shared/Header';
import { AIImpactScan } from '@/components/AIImpactScan';
import { TransformCTA } from '@/components/shared/TransformCTA';
import { Toaster } from '@/components/ui/toaster';

const AIImpactScanPage = () => {
  return (
    <>
      <Helmet>
        <title>Free AI Impact Analysis | AIDENTIST</title>
        <meta name="description" content="Get your free AI impact analysis for your dental practice. Discover opportunities for automation, efficiency improvements, and cost savings." />
        <meta name="keywords" content="dental AI analysis, practice automation, efficiency assessment, ROI calculator" />
        <meta property="og:title" content="Free AI Impact Analysis | AIDENTIST" />
        <meta property="og:description" content="Get your free AI impact analysis for your dental practice. Discover opportunities for automation, efficiency improvements, and cost savings." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aidentist.com/ai-impact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
        <Header transparent={false} />
        <div className="pt-20">
          <AIImpactScan />
          <TransformCTA />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default AIImpactScanPage;