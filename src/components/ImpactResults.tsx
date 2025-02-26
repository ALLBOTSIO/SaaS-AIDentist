import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Clock, DollarSign, TrendingUp, Users, ArrowUpRight, LineChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: React.ElementType;
  color: string;
  increase: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  description,
  icon: Icon,
  color,
  increase
}) => (
  <Card className="overflow-hidden">
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className={`p-2 rounded-lg bg-${color}/10 w-fit`}>
            <Icon className={`w-5 h-5 text-${color}`} />
          </div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        </div>
        <div className="flex items-center gap-1 text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <ArrowUpRight className="w-3 h-3" />
          <span>+{increase}%</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-900">
          {prefix}
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            decimal="."
            decimals={suffix === '%' ? 1 : 0}
          />
          {suffix}
        </div>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <div className="mt-4 h-2 rounded-full bg-gray-100 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(increase, 100)}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full bg-${color}`}
        />
      </div>
    </CardContent>
  </Card>
);

export const ImpactResults = () => {
  const timeMetrics = [
    {
      title: 'Hours Saved Weekly',
      value: 32,
      suffix: 'hrs',
      description: 'Administrative time recovered',
      icon: Clock,
      color: 'blue-500',
      increase: 65
    },
    {
      title: 'Staff Time Recovered',
      value: 25.5,
      suffix: '%',
      description: 'Increase in productive time',
      icon: Users,
      color: 'green-500',
      increase: 45
    },
    {
      title: 'Additional Patient Capacity',
      value: 42,
      suffix: '%',
      description: 'Growth in appointment slots',
      icon: TrendingUp,
      color: 'purple-500',
      increase: 55
    }
  ];

  const financialMetrics = [
    {
      title: 'Monthly Labor Savings',
      value: 8500,
      prefix: '$',
      description: 'Reduction in overtime costs',
      icon: DollarSign,
      color: 'emerald-500',
      increase: 75
    },
    {
      title: 'Reduced Write-offs',
      value: 12000,
      prefix: '$',
      description: 'Monthly revenue recovered',
      icon: LineChart,
      color: 'yellow-500',
      increase: 85
    },
    {
      title: 'Net Annual Benefit',
      value: 246000,
      prefix: '$',
      description: 'Total financial impact',
      icon: TrendingUp,
      color: 'indigo-500',
      increase: 95
    }
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Impact Analysis
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Transformative Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the measurable impact our AI solution brings to dental practices through improved efficiency and growth.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Time Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MetricCard {...metric} />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Financial Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {financialMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MetricCard {...metric} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};