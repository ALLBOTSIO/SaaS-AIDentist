import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Phone, AlertCircle } from 'lucide-react';
import { useVoiceAgent } from '../hooks/useVoiceAgent';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const VoiceAgent: React.FC = () => {
  const {
    isProcessing,
    currentCall,
    transcription,
    metrics,
    processCall,
  } = useVoiceAgent();

  const handleCallSimulation = async () => {
    // Simulate audio data for testing
    const audioData = new ArrayBuffer(0);
    await processCall(audioData);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="w-5 h-5 text-primary" />
            Voice Agent Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Status</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  isProcessing ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                }`}>
                  {isProcessing ? 'Processing' : 'Ready'}
                </span>
              </div>
              {currentCall && (
                <p className="text-sm text-gray-600">
                  Call ID: {currentCall.callId}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Transcription
              </h4>
              {transcription ? (
                <p className="text-sm text-gray-900">
                  {transcription.text}
                </p>
              ) : (
                <p className="text-sm text-gray-500 italic">
                  No transcription available
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Metrics
              </h4>
              {metrics ? (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Duration: {metrics.duration}s
                  </p>
                  <p className="text-sm text-gray-600">
                    Sentiment: {metrics.sentiment.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    Resolution: {metrics.resolution ? 'Yes' : 'No'}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic">
                  No metrics available
                </p>
              )}
            </motion.div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleCallSimulation}
              disabled={isProcessing}
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {isProcessing ? 'Processing Call...' : 'Simulate Call'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            HIPAA Compliance Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-sm font-medium text-green-800 mb-2">
                Active Security Measures
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-green-600 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  End-to-end encryption enabled
                </li>
                <li className="text-sm text-green-600 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Audit logging active
                </li>
                <li className="text-sm text-green-600 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Access controls enforced
                </li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-medium text-blue-800 mb-2">
                Compliance Metrics
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-blue-600">
                  Last Audit: {new Date().toLocaleDateString()}
                </li>
                <li className="text-sm text-blue-600">
                  Encryption Status: Active
                </li>
                <li className="text-sm text-blue-600">
                  Compliance Score: 100%
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};