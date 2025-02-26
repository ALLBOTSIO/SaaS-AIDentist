import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256',
    bio: 'Leading AI innovation in dental care with 15+ years of experience in machine learning and healthcare.',
    social: {
      linkedin: 'https://linkedin.com/in/drsarahchen',
      twitter: 'https://twitter.com/drsarahchen',
      github: 'https://github.com/drsarahchen'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256',
    bio: 'Architecting the future of dental practice management with cutting-edge AI solutions.',
    social: {
      linkedin: 'https://linkedin.com/in/mrodriguez',
      twitter: 'https://twitter.com/mrodriguez',
      github: 'https://github.com/mrodriguez'
    }
  },
  {
    name: 'Emily Thompson',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256',
    bio: 'Transforming dental workflows through intuitive AI-driven product experiences.',
    social: {
      linkedin: 'https://linkedin.com/in/ethompson',
      twitter: 'https://twitter.com/ethompson',
      github: 'https://github.com/ethompson'
    }
  },
  {
    name: 'Dr. James Wilson',
    role: 'Clinical Director',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=256',
    bio: 'Ensuring AI solutions meet the highest standards of dental care and practice efficiency.',
    social: {
      linkedin: 'https://linkedin.com/in/drjwilson',
      twitter: 'https://twitter.com/drjwilson',
      github: 'https://github.com/drjwilson'
    }
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet the Innovators
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team of experts combines deep expertise in AI technology with extensive dental industry experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#00A6E6]">{member.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 min-h-[80px]">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;