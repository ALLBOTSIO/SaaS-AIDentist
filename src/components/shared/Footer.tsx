import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Bot,
  ArrowRight,
  Shield,
  Globe
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const currentYear = new Date().getFullYear();

const footerLinks = {
  solutions: [
    { name: 'AI Assistant', href: '/ai-assistant' },
    { name: 'Insurance Verification', href: '/insur-verify' },
    { name: 'Patient Retention', href: '/patient-retention' },
    { name: 'AI Supplies', href: '/ai-supplies' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'HIPAA Notice', href: '/hipaa' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/aidentist' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/aidentist' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/aidentist' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/aidentist' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          className="lg:col-span-3 space-y-8"
          >
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-xl bg-[#00A6E6] shadow-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl animate-pulse bg-white/20" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-[#00A6E6]">AI</span>
                <span className="text-white">DENTIST</span>
              </span>
            </div>

            <p className="text-gray-300 max-w-xs">
              Revolutionizing dental care through advanced AI technology and compassionate service.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#00A6E6]" />
                <a href="mailto:contact@aidentist.com" className="hover:text-white transition-colors">
                  contact@aidentist.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#00A6E6]" />
                <a href="tel:+1-800-AIDENTIST" className="hover:text-white transition-colors">
                  1-800-AIDENTIST
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#00A6E6]" />
                <span>123 Innovation Drive, Tech City</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-5 h-5 text-[#00A6E6]" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Solutions</h3>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-4 h-4" />
              <span className="text-sm">HIPAA Compliant</span>
            </div>

            <div className="flex items-center space-x-6">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="text-sm text-gray-400">
              © {currentYear} AIDENTIST. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };