import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormTestingDashboard } from '@/components/testing/FormTestingDashboard';
import { Header } from '@/components/shared/Header';
import { Toaster } from '@/components/ui/toaster';

const TestRunner = () => {
  return (
    <>
      <Helmet>
        <title>Form Testing Dashboard | AIDENTIST</title>
        <meta name="description" content="Internal testing dashboard for form validation and functionality" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header transparent={false} showDemoButton={false} />
        <div className="pt-20">
          <FormTestingDashboard />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default TestRunner;