import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  SmilePlus, 
  DollarSign, 
  CheckCircle2, 
  RefreshCcw, 
  Globe2, 
  PhoneForwarded,
  BarChart2,
  Scale,
  Shield,
  Calendar,
  ClipboardList,
  CalendarClock,
  UserPlus,
  FileText,
  ClipboardEdit,
  Stethoscope,
  PillIcon,
  AlertCircle,
  Network,
  HeartPulse
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Continuous service for patients, ensuring no call goes unanswered.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: SmilePlus,
    title: 'Consistently Cheerful',
    description: 'Maintains a friendly and professional tone throughout all interactions.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Reduces the requirement for a large telemarketing team, resulting in significant cost savings.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: CheckCircle2,
    title: 'Accurate Information',
    description: 'Provides reliable and consistent information to patients, reducing the risk of errors.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: RefreshCcw,
    title: 'Rapid Updates',
    description: 'Easily updated with new information or changes in protocols to ensure accuracy.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Globe2,
    title: 'Multilingual Support',
    description: 'Accommodates a diverse patient population by providing service in multiple languages.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: PhoneForwarded,
    title: 'Efficient Call Routing',
    description: 'Directs calls to the appropriate department or staff member, improving overall efficiency.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: BarChart2,
    title: 'Data Collection and Analytics',
    description: 'Gathers insights from patient interactions to optimize service and drive data-driven decisions.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Scale,
    title: 'Scalability',
    description: 'Handles increased call volumes without the need for additional staffing.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Enterprise-grade security ensuring complete patient privacy and data protection.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Calendar,
    title: 'Virtual Consultation Scheduling',
    description: 'AI-powered scheduling for virtual consultations with automated preparation instructions.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: ClipboardList,
    title: 'Pre-Appointment Instructions',
    description: 'Automated delivery of pre-appointment instructions and requirements.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: CalendarClock,
    title: 'Appointment Rescheduling',
    description: 'Seamless rescheduling system to reduce no-shows and maintain efficiency.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  },
  {
    icon: Network,
    title: 'Smart Call Routing',
    description: 'Advanced routing system that connects patients with appropriate resources.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-12 bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-0 w-72 h-72 bg-[#00A6E6]/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#00A6E6]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
              Advanced Capabilities
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Features of Conversational Voice AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered voice system combines cutting-edge technology with intuitive design to deliver exceptional patient experiences and streamline practice operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full"
                >
                  <div className="group h-full bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-full p-8">
                      <div className="flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mt-6 mb-4">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed flex-grow">
                          {feature.description}
                        </p>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center space-x-4"
          >
            <a 
              href="https://calendly.com/ai-consultant/ai-project-kickoff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#00A6E6] rounded-xl hover:bg-[#0095D1] transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-gray-600 rounded-xl hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);