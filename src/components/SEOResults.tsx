import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface SEOResultsProps {
  score: number;
  recommendations: string[];
  onClose: () => void;
}

export const SEOResults: React.FC<SEOResultsProps> = ({
  score,
  recommendations,
  onClose
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return CheckCircle;
    if (score >= 60) return AlertTriangle;
    return XCircle;
  };

  const Icon = getScoreIcon(score);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8">
        <div className="text-center mb-8">
          <Icon className={`w-16 h-16 mx-auto mb-4 ${getScoreColor(score)}`} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your SEO Score: {score}
          </h2>
          <p className="text-gray-600">
            {score >= 80 ? 'Excellent! Your site is well-optimized.' :
             score >= 60 ? 'Good, but there\'s room for improvement.' :
             'Your site needs significant optimization.'}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recommendations
            </h3>
            <ul className="space-y-3">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-blue-50 rounded-full mt-0.5">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#00A6E6] text-white rounded-xl hover:bg-[#0095D1] transition-colors"
            >
              Got It
            </button>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Get Expert Help
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};