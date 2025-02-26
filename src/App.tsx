import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { Header } from '@/components/shared/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import { MetricsCarousel } from './components/MetricsCarousel';
import { ROICalculator } from './components/ROICalculator';
import { SocialProof } from './components/SocialProof';
import TeamSection from './components/TeamSection';
import { CTABanner } from './components/CTABanner';
import { ImplementationRoadmap } from './components/ImplementationRoadmap';
import Footer from './components/Footer';
import { VoiceAgentWidget } from './components/VoiceAgentWidget';
import { Toaster } from './components/ui/toaster';
import InsuranceVerification from './routes/InsuranceVerification';
import SignUp from './routes/SignUp';
import AIImpactScanPage from './routes/AIImpactScan';
import AIAssistant from './routes/AIAssistant';
import PatientRetention from './routes/PatientRetention';
import AISupplies from './routes/AISupplies';
import DSO from './routes/customers/DSO';
import Practitioners from './routes/customers/Practitioners';
import LeadFormPage from './routes/LeadFormPage';

const useRouting = () => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  const navigate = React.useCallback((path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  }, []);

  React.useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { currentPath, navigate };
};

function App() {
  const { currentPath, navigate } = useRouting();
  const { theme } = useTheme();

  const sectionStyle = "relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]";
  const decorativeElements = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
    </>
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#1E3A8A] dark:via-[#1E40AF] dark:to-[#1E3A8A] transition-colors duration-300">
      {currentPath === '/insur-verify' ? (
        <InsuranceVerification navigate={navigate} />
      ) : currentPath === '/customers/dso' ? (
        <DSO navigate={navigate} />
      ) : currentPath === '/customers/practitioners' ? (
        <Practitioners navigate={navigate} />
      ) : currentPath === '/setup' ? (
        <LeadFormPage navigate={navigate} />
      ) : currentPath === '/ai-assistant' ? (
        <AIAssistant navigate={navigate} />
      ) : currentPath === '/ai-impact' ? (
        <AIImpactScanPage navigate={navigate} />
      ) : currentPath === '/patient-retention' ? (
        <PatientRetention navigate={navigate} />
      ) : currentPath === '/ai-supplies' ? (
        <AISupplies navigate={navigate} />
      ) : currentPath === '/signup' ? (
        <SignUp navigate={navigate} />
      ) : (
        <>
          <Header transparent={true} />
          <div id="home" className={sectionStyle}>
            {decorativeElements}
            <Hero />
          </div>
          <div id="metrics" className={sectionStyle}>
            {decorativeElements}
            <MetricsCarousel />
          </div>
          <div id="ai-features" className={sectionStyle}>
            {decorativeElements}
            <Features />
          </div>
          <div id="roi" className={sectionStyle}>
            {decorativeElements}
            <ROICalculator />
          </div>
          <div id="proof" className={sectionStyle}>
            {decorativeElements}
            <SocialProof />
            <TeamSection />
          </div>
          <div id="cta" className={sectionStyle}>
            {decorativeElements}
            <CTABanner />
          </div>
          <div id="contact" className={sectionStyle}>
            {decorativeElements}
            <Footer />
          </div>
          <VoiceAgentWidget />
          <Toaster />
        </>
      )}
    </div>
  );
}

export default App;