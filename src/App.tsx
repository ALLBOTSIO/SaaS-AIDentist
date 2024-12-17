import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import EducationSection from './components/sections/education/EducationSection';
import BenefitsSection from './components/sections/benefits/BenefitsSection';
import ComprehensiveFeatures from './components/sections/features/ComprehensiveFeatures';
import SuccessSection from './components/sections/success/SuccessSection';
import ROICalculator from './components/sections/ROICalculator';
import ElevenLabsWidget from './components/common/ElevenLabsWidget';
import { Bot } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <EducationSection />
      <BenefitsSection />
      <ComprehensiveFeatures />
      <SuccessSection />
      
      {/* ROI Calculator Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              See Your Potential Savings
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Calculate how much your practice can save with AI voice agents
            </p>
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of forward-thinking dental practices using AIDentist
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Start Free Trial
            </button>
            <button 
              onClick={() => {
                const widget = document.querySelector('elevenlabs-convai');
                if (widget) {
                  widget.setAttribute('visible', 'true');
                }
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-6 w-6" />
                <span className="text-xl font-bold">AIDentist</span>
              </div>
              <p className="text-gray-400">
                Transforming dental practices with intelligent AI solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#success" className="hover:text-white">Success Stories</a></li>
                <li><a href="#calculator" className="hover:text-white">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-white">Knowledge Base</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">HIPAA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 AIDentist. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <ElevenLabsWidget />
    </div>
  );
}

export default App;