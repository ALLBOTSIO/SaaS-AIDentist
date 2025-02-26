import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import CountUp from 'react-countup';
import { Info } from 'lucide-react';

interface ConversationType {
  name: string;
  value: number;
  color: string;
  icon: string;
  description: string;
}

const data: ConversationType[] = [
  {
    name: 'Appointment Booking',
    value: 41.5,
    color: '#00A6E6',
    icon: '📅',
    description: 'New appointments and scheduling requests'
  },
  {
    name: 'Patient Inquiries',
    value: 23.4,
    color: '#34D399',
    icon: '❓',
    description: 'General questions about services and procedures'
  },
  {
    name: 'Insurance Verification',
    value: 15.2,
    color: '#F59E0B',
    icon: '📋',
    description: 'Coverage and benefits verification requests'
  },
  {
    name: 'Follow-up Care',
    value: 12.6,
    color: '#8B5CF6',
    icon: '🔄',
    description: 'Post-treatment follow-up communications'
  },
  {
    name: 'Emergency Requests',
    value: 7.3,
    color: '#EF4444',
    icon: '🚨',
    description: 'Urgent care and emergency situations'
  }
];

const totalConversations = 15742;

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="relative z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{data.icon}</span>
            <p className="font-semibold text-gray-900">{data.name}</p>
          </div>
          <p className="text-2xl font-bold text-[#00A6E6]">
            {data.value.toFixed(1)}%
          </p>
          <p className="text-sm text-gray-600 mt-1">{data.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            {Math.round((data.value / 100) * totalConversations).toLocaleString()} conversations
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {payload.map((entry: any, index: number) => (
        <motion.div
          key={entry.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div
            className="w-3 h-3 rounded-full mr-3"
            style={{ backgroundColor: entry.color }}
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{entry.value}</p>
            <p className="text-xs text-gray-500">
              {Math.round((data[index].value / 100) * totalConversations).toLocaleString()} conversations
            </p>
          </div>
          <p className="ml-auto text-lg font-semibold text-gray-900">
            {data[index].value}%
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const Statistics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Conversation Analytics
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Understanding how our AI handles different types of patient interactions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <div className="relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={150}
                      paddingAngle={2}
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                      onMouseLeave={onPieLeave}
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="white"
                          strokeWidth={2}
                          style={{
                            filter: activeIndex === index ? 'brightness(1.1)' : 'none',
                            transform: activeIndex === index ? 'scale(1.05)' : 'none',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} wrapperStyle={{ zIndex: 100 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-sm text-gray-600">Total Conversations</p>
                  <CountUp
                    end={totalConversations}
                    duration={2}
                    separator=","
                    className="text-2xl font-bold text-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <Info className="w-6 h-6 text-[#00A6E6] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Conversation Distribution Insights
                  </h4>
                  <p className="text-gray-600">
                    Our AI system handles various types of patient interactions, with appointment
                    booking being the most common at 41.5%. This data helps us optimize our
                    system for better patient service.
                  </p>
                </div>
              </div>
              
              <CustomLegend payload={data} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Statistics);