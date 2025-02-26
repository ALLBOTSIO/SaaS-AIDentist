import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Bluetooth as Tooth } from 'lucide-react';

const currentYear = new Date().getFullYear();

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
  ],
  resources: [
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faqs' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'HIPAA Notice', href: '/hipaa' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#1a2942] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <Tooth className="h-8 w-8 text-[#00A6E6]" />
              <span className="text-2xl font-bold">
                <span className="text-[#00A6E6]">AI</span>
                <span className="text-white">DENTIST</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Revolutionizing dental care through advanced AI technology and compassionate service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#00A6E6]" />
                <a
                  href="mailto:contact@aidentist.com"
                  className="text-gray-300 hover:text-[#00A6E6] transition-colors"
                >
                  contact@aidentist.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#00A6E6]" />
                <a
                  href="tel:+1-800-AIDENTIST"
                  className="text-gray-300 hover:text-[#00A6E6] transition-colors"
                >
                  1-800-AIDENTIST
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#00A6E6]" />
                <span className="text-gray-300">
                  123 Innovation Drive, Tech City
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#00A6E6] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#00A6E6] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#00A6E6] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar with Copyright and Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <div className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-[#00A6E6] hover:text-white transform hover:-translate-y-1 transition-all duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm text-gray-300">
              <span>© {currentYear} AIDENTIST. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span>Built by 1Tool.AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);