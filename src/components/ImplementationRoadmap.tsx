import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileSpreadsheet, 
  PlaneTakeoff,
  Cog, 
  Bot,
  Shield,
  Users,
  TestTube,
  Settings,
  GraduationCap,
  ArrowDownToLine,
  HeartHandshake,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingUp,
  LineChart
} from 'lucide-react';

const phases = [
  {
    title: 'Phase 1: Analysis & Planning',
    duration: '1 weeks',
    sections: [
      {
        title: 'Discovery',
        items: [
          'Audit current call handling processes',
          'Document existing systems and workflows',
          'Identify integration requirements',
          'Map out custom conversation flows',
          'Define success metrics'
        ],
        icon: Search,
        color: 'from-blue-500 to-blue-600'
      },
      {
        title: 'Requirements Gathering',
        items: [
          'Interview key stakeholders',
          'Document business rules & logic',
          'Identify compliance requirements',
          'Map call routing & escalations',
          'Define reporting needs'
        ],
        icon: FileSpreadsheet,
        color: 'from-purple-500 to-purple-600'
      },
      {
        title: 'Planning',
        items: [
          'Create implementation timeline',
          'Define resource requirements',
          'Establish communication plan',
          'Set pilot criteria & KPIs',
          'Document training needs'
        ],
        icon: PlaneTakeoff,
        color: 'from-green-500 to-green-600'
      }
    ]
  },
  {
    title: 'Phase 2: Systems Integration',
    duration: '2-3 weeks',
    sections: [
      {
        title: 'Technical Setup',
        items: [
          'Configure cloud infrastructure',
          'Set up secure data connections',
          'Integrate with CRM/scheduling',
          'Configure call routing rules',
          'Enable data sync capabilities'
        ],
        icon: Cog,
        color: 'from-orange-500 to-orange-600'
      },
      {
        title: 'AI Configuration',
        items: [
          'Train AI conversation models',
          'Build custom workflows',
          'Set up business logic',
          'Configure monitoring',
          'Test integrations'
        ],
        icon: Bot,
        color: 'from-pink-500 to-pink-600'
      },
      {
        title: 'Training & Compliance',
        items: [
          'Implement Training protocols',
          'Set up transcript reviews',
          'Configure AI Persona',
          'Enable Agent Testing',
          'Agent Go Live'
        ],
        icon: Shield,
        color: 'from-indigo-500 to-indigo-600'
      }
    ]
  },
  {
    title: 'Phase 3: Pilot Program',
    duration: '3 weeks',
    sections: [
      {
        title: 'Limited Rollout',
        items: [
          'Deploy to pilot group',
          'Monitor performance',
          'Gather user feedback',
          'Track KPI metrics',
          'Feedback Loop'
        ],
        icon: Users,
        color: 'from-cyan-500 to-cyan-600'
      },
      {
        title: 'Testing & Validation',
        items: [
          'Test all workflows',
          'Validate data accuracy',
          'Check integrations',
          'Monitor call quality',
          'Verify Intefgration'
        ],
        icon: TestTube,
        color: 'from-teal-500 to-teal-600'
      },
      {
        title: 'Optimization',
        items: [
          'Analyze pilot data',
          'Refine conversation flows',
          'Adjust prompt rules',
          'Optimize responses',
          'Fine-tune performance'
        ],
        icon: Settings,
        color: 'from-yellow-500 to-yellow-600'
      }
    ]
  },
  {
    title: 'Phase 4: Full Deployment',
    duration: '4+ weeks',
    sections: [
      {
        title: 'Staff Preparation',
        items: [
          'Conduct training sessions',
          'Provide ',
          'Set up feedback loop',
          'Enable admin access',
          'Review Transcripts'
        ],
        icon: GraduationCap,
        color: 'from-red-500 to-red-600'
      },
      {
        title: 'Staged Rollout',
        items: [
          'Inbound by Outbound',
          'Monitor adoption',
          'Feedback loop',
          'Track metrics',
          'Support Staff'
        ],
        icon: ArrowDownToLine,
        color: 'from-emerald-500 to-emerald-600'
      },
      {
        title: 'Ongoing Support',
        items: [
          'Monitor performance',
          'Provide coaching',
          'Track utilization',
          'Generate reports',
          'Optimize system'
        ],
        icon: HeartHandshake,
        color: 'from-[#00A6E6] to-[#0095D1]'
      }
    ]
  }
];

const metrics = [
  { label: 'Call handling time', icon: BarChart3 },
  { label: 'Resolution rates', icon: CheckCircle2 },
  { label: 'Customer satisfaction', icon: HeartHandshake },
  { label: 'Staff productivity', icon: Users },
  { label: 'Cost savings', icon: BarChart3 }
];

export const ImplementationRoadmap = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      
      {/* Decorative Elements */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Implementation Process
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            AI Dentist Implementation Framework
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven implementation methodology ensures a smooth transition and successful adoption
            of AI technology in your Dental practice.
          </p>
        </motion.div>

        <div className="space-y-24">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Phase Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-3">{phase.title}</h1>
                <h2 className="text-2xl font-medium text-[#00A6E6]">Duration: {phase.duration}</h2>
              </div>

              {/* Phase Content */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {phase.sections.map((section, sectionIndex) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                      className="relative group"
                    >
                      <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mt-6 mb-4">
                          {section.title}
                        </h4>
                        
                        <ul className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00A6E6] mt-2 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Connecting Line */}
              {phaseIndex < phases.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-24">
                  <div className="h-full w-px bg-gradient-to-b from-[#00A6E6] to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Key Success Metrics</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md"
                >
                  <Icon className="w-5 h-5 text-[#00A6E6]" />
                  <span className="text-gray-900 font-medium">{metric.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};