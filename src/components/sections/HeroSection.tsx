import React from 'react';

export default function HeroSection() {
  const openConvaiWidget = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.setAttribute('visible', 'true');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Dental Practice with{' '}
              <span className="text-blue-100">AI Voice Agents</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed">
              Streamline patient communication and scheduling with intelligent AI assistants designed specifically for dental practices.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto button-primary">
                Start Free Trial
              </button>
              <button 
                onClick={openConvaiWidget}
                className="w-full sm:w-auto button-secondary hover:bg-white hover:text-blue-600"
              >
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg backdrop-blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
                alt="Modern dental office"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}