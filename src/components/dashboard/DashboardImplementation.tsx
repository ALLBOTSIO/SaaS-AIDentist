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
  HeartHandshake
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
          'Verify Integration'
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
          'Provide documentation',
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

export const DashboardImplementation = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
          Implementation Process
        </span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          AI Dentist Implementation Framework
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our proven implementation methodology ensures a smooth transition and successful adoption
          of AI technology in your Dental practice.
        </p>
      </motion.div>

      <div className="space-y-12">
        {phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Phase Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
              <p className="text-lg font-medium text-[#00A6E6]">Duration: {phase.duration}</p>
            </div>

            {/* Phase Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phase.sections.map((section, sectionIndex) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                    className="relative group"
                  >
                    <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-3">
                        {section.title}
                      </h4>
                      
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
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
              <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-12">
                <div className="h-full w-px bg-gradient-to-b from-[#00A6E6] to-transparent" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};