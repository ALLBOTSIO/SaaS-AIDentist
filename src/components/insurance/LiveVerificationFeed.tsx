import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Verification {
  id: string;
  patientName: string;
  insurance: string;
  status: 'verified' | 'in_progress' | 'unverified';
  timestamp: string;
}

const initialVerifications: Verification[] = [
  { id: '1', patientName: 'Emily Johnson', insurance: 'Aetna Dental', status: 'verified', timestamp: '2 mins ago' },
  { id: '2', patientName: 'Michael Chen', insurance: 'Guardian', status: 'verified', timestamp: '5 mins ago' },
  { id: '3', patientName: 'Olivia Rodriguez', insurance: 'MetLife', status: 'verified', timestamp: '10 mins ago' },
  { id: '4', patientName: 'William Taylor', insurance: 'Delta Dental', status: 'verified', timestamp: '15 mins ago' },
  { id: '5', patientName: 'Amanda Kumar', insurance: 'Cigna', status: 'in_progress', timestamp: '20 mins ago' },
  { id: '6', patientName: 'David Thompson', insurance: 'United Healthcare', status: 'in_progress', timestamp: '25 mins ago' },
  { id: '7', patientName: 'Rachel Martinez', insurance: 'Humana', status: 'unverified', timestamp: '30 mins ago' },
  { id: '8', patientName: 'Christopher Lee', insurance: 'Blue Cross', status: 'unverified', timestamp: '35 mins ago' }
];

const statusConfig = {
  verified: {
    color: '#22C55E',
    bgColor: 'bg-green-50',
    icon: CheckCircle,
    text: 'Verified'
  },
  in_progress: {
    color: '#EAB308',
    bgColor: 'bg-yellow-50',
    icon: Clock,
    text: 'In Progress'
  },
  unverified: {
    color: '#6B7280',
    bgColor: 'bg-gray-50',
    icon: AlertCircle,
    text: 'Unverified'
  }
};

export const LiveVerificationFeed = () => {
  const [verifications, setVerifications] = useState(initialVerifications);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new verifications
      const newVerification: Verification = {
        id: Date.now().toString(),
        patientName: 'New Patient',
        insurance: 'Sample Insurance',
        status: Math.random() > 0.5 ? 'verified' : 'in_progress',
        timestamp: 'Just now'
      };

      setVerifications(prev => [newVerification, ...prev.slice(0, 7)]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Real-time Verification Feed
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Watch AI in Action
          </h2>
          <p className="text-lg text-gray-300">
            Watch as our AI system processes insurance verifications in real-time
          </p>
        </motion.div>

        <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="text-white">Recent Verifications</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              <AnimatePresence initial={false}>
                {verifications.map((verification) => {
                  const status = statusConfig[verification.status];
                  const StatusIcon = status.icon;
                  
                  return (
                    <motion.div
                      key={verification.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-full ${status.bgColor}`}>
                            <StatusIcon
                              className="w-4 h-4"
                              style={{ color: status.color }}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-white hover:text-[#00A6E6] transition-colors">
                              {verification.patientName}
                            </p>
                            <p className="text-sm text-gray-400">
                              {verification.insurance}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium" style={{ color: status.color }}>
                            {status.text}
                          </p>
                          <p className="text-xs text-gray-400">
                            {verification.timestamp}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};