import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/shared/Header';
import LeadForm from '@/components/LeadForm';
import { Toaster } from '@/components/ui/toaster';

const LeadFormPage = () => {
  return (
    <>
      <Helmet>
        <title>Set Up Your AI Agent | AIDENTIST</title>
        <meta name="description" content="Configure your AI voice agent with our easy step-by-step setup process. Customize voice, personality, and handling preferences." />
        <meta name="keywords" content="AI voice agent, dental AI, voice configuration, practice automation" />
        <link rel="canonical" href="https://aidentist.com/setup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
        <Header transparent={false} showDemoButton={false} />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <LeadForm onClose={() => window.location.href = '/'} />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default LeadFormPage;