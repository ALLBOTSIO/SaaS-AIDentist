import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CountUp from 'react-countup';

const metrics = [
  {
    title: "Operational Efficiency",
    subtitle: "Streamline your practice with AI automation",
    stats: [
      { prefix: "", value: 45, suffix: "%", label: "Reduction in no-shows" },
      { prefix: "", value: 3.5, suffix: "hrs", label: "Daily time saved on admin" },
      { prefix: "$", value: 25000, suffix: "", label: "Monthly cost savings" }
    ]
  },
  {
    title: "Patient Satisfaction",
    subtitle: "Enhance patient experience with 24/7 availability",
    stats: [
      { prefix: "", value: 98, suffix: "%", label: "Patient satisfaction rate" },
      { prefix: "", value: 15, suffix: "sec", label: "Average response time" },
      { prefix: "", value: 92, suffix: "%", label: "First-call resolution" }
    ]
  },
  {
    title: "Practice Growth",
    subtitle: "Scale your practice with intelligent automation",
    stats: [
      { prefix: "", value: 35, suffix: "%", label: "Increase in new patients" },
      { prefix: "", value: 28, suffix: "%", label: "Revenue growth" },
      { prefix: "", value: 40, suffix: "%", label: "More online bookings" }
    ]
  }
];

export const MetricsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % metrics.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % metrics.length);
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? metrics.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative overflow-hidden">
      {/* Fixed Title Section */}
      <div className="sticky top-20 z-10 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A] py-8 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              38% of calls to dental practices go unanswered,
            </h2>
            <h3 className="text-3xl font-bold text-[#00A6E6]">
              leading to lost appointments and missed revenue opportunities
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-24">
      {/* Background Elements */}
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Transform Your Practice with AI
          </span>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Power Your Practice with Intelligent Automation
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-2xl shadow-xl p-8 lg:p-12 transition-all duration-300"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {metrics[currentIndex].title}
                </h3>
                <p className="text-lg text-gray-300">
                  {metrics[currentIndex].subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {metrics[currentIndex].stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.prefix}
                      <CountUp
                        end={stat.value}
                        duration={2}
                        separator=","
                        decimal="."
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                      />
                      {stat.suffix}
                    </div>
                    <p className="text-gray-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-300" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-300" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {metrics.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-[#00A6E6] scale-110'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};