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
  Shield
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Continuous service for patients, ensuring no call goes unanswered.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: SmilePlus,
    title: 'Consistently Cheerful',
    description: 'Maintains a friendly and professional tone throughout all interactions.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Reduces the requirement for a large telemarketing team, resulting in significant cost savings.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: CheckCircle2,
    title: 'Accurate Information',
    description: 'Provides reliable and consistent information to patients, reducing the risk of errors.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: RefreshCcw,
    title: 'Rapid Updates',
    description: 'Easily updated with new information or changes in protocols to ensure accuracy.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Globe2,
    title: 'Multilingual Support',
    description: 'Accommodates a diverse patient population by providing service in multiple languages.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: PhoneForwarded,
    title: 'Efficient Call Routing',
    description: 'Directs calls to the appropriate department or staff member, improving overall efficiency.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: BarChart2,
    title: 'Data Collection and Analytics',
    description: 'Gathers insights from patient interactions to optimize service and drive data-driven decisions.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Scale,
    title: 'Scalability',
    description: 'Handles increased call volumes without the need for additional staffing.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Ensures adherence to HIPAA and other data privacy regulations, maintaining the security of patient information.',
    color: 'from-[#00A6E6] to-[#0095D1]'
  }
];

export const AIFeatures = () => {
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
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Advanced Capabilities
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Key Features of Conversational Voice AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered voice system combines cutting-edge technology with intuitive design to deliver
            exceptional patient experiences and streamline practice operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 group-hover:ring-gray-900/20 transition-all duration-300" />
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
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#00A6E6] rounded-xl hover:bg-[#0095D1] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};