import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Menu, X, Building2, Users, Brain, Shield, Stethoscope } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/lib/theme';
import { useScrollTo } from '@/lib/hooks/useScrollTo';

interface HeaderProps {
  transparent?: boolean;
  showDemoButton?: boolean;
  navigate?: (path: string) => void;
}

interface NavItem {
  name: string;
  href: string;
  icon?: React.ElementType;
  description?: string;
  highlight?: boolean;
  isExternal?: boolean;
  children?: {
    name: string;
    href: string;
    description: string;
    icon: React.ElementType;
  }[];
}

const navItems: NavItem[] = [
  {
    name: 'AI Solutions',
    href: '#',
    children: [
      {
        name: 'AI Assistant',
        href: '/ai-assistant',
        description: 'Intelligent voice AI for patient communication',
        icon: Brain
      },
      {
        name: 'Patient Retention',
        href: '/patient-retention',
        description: 'AI-driven patient engagement and retention system',
        icon: Users
      },
      {
        name: 'Insurance Verification',
        href: '/insur-verify',
        description: 'Automated insurance verification process',
        icon: Shield
      },
      {
        name: 'AI Supplies',
        href: '/ai-supplies',
        description: 'Smart inventory management system',
        icon: Stethoscope
      }
    ]
  },
  {
    name: 'FREE AI Impact Scan',
    href: '/ai-impact',
    description: 'Get your instant, comprehensive AI impact analysis',
    highlight: true
  },
  {
    name: 'Customers',
    href: '#',
    children: [
      {
        name: 'DSO',
        href: '/customers/dso',
        description: 'Solutions for Dental Service Organizations',
        icon: Building2
      },
      {
        name: 'Practitioners',
        href: '/customers/practitioners',
        description: 'Solutions for Individual Practitioners',
        icon: Users
      }
    ]
  },
  {
    name: 'Sign Up',
    href: '/signup',
    description: 'Create your account and set up your AI agent',
    highlight: true
  }
];

export const Header: React.FC<HeaderProps> = ({
  transparent = false,
  showDemoButton = true 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();
  const isHomePage = window.location.pathname === '/';
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else if (isHomePage && href.startsWith('#')) {
      scrollTo(href.slice(1));
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navClasses = transparent && !isScrolled
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-lg shadow-lg supports-[backdrop-filter]:bg-white/95 dark:bg-[#1E293B]/95 dark:supports-[backdrop-filter]:bg-[#1E293B]/95 transition-colors duration-300';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a 
            href="/"
            className="flex items-center space-x-3 group"
            aria-label="Return to homepage"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-[#00A6E6] shadow-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl animate-pulse bg-white/20" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-[#00A6E6] transition-colors duration-300 group-hover:text-white">AI</span>
              <span className="text-white">DENTIST</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors duration-300 ${
                    window.location.pathname === item.href || (item.href === '/setup' && window.location.pathname === '/signup')
                      ? 'text-blue-600 dark:text-[#00A6E6]'
                      : 'text-gray-600 hover:text-gray-900 dark:text-white/90 dark:hover:text-white'
                  } ${item.children ? 'flex items-center' : ''}`}
                  onClick={item.children ? (e) => e.preventDefault() : undefined}
                >
                  {item.name}
                  {item.children && (
                    <svg className="ml-2 h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.children && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl p-4 w-64">
                      {item.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <a
                            key={child.name}
                            href={child.href}
                            className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <div className="flex-shrink-0">
                              <Icon className="h-6 w-6 text-[#00A6E6]" />
                            </div>
                            <div>
                              <p className="text-gray-900 font-medium">{child.name}</p>
                              <p className="text-gray-500 text-sm">{child.description}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {showDemoButton && (
              <>
              <ThemeToggle />
              <a 
                href="https://calendly.com/ai-consultant/ai-project-kickoff"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg text-white text-[15px] font-medium transition-all duration-300 shadow-md hover:shadow-xl bg-[#00A6E6] hover:bg-[#0095D1] transform hover:-translate-y-0.5"
              >
                Book Demo
              </a>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1E293B]/95 backdrop-blur-lg border-t border-white/10">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="py-2">
                      <div className="text-white/90 font-medium mb-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => {
                          const Icon = child.icon;
                          return (
                            <a
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-2 text-white/80 hover:text-white py-2"
                            >
                              <Icon className="h-5 w-5" />
                              <span>{child.name}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <a href={item.href} className="text-white/90 hover:text-white py-2 block">{item.name}</a>
                  )}
                </div>
              ))}
              {showDemoButton && (
                <a 
                  href="https://calendly.com/ai-consultant/ai-project-kickoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00A6E6] hover:bg-[#0095D1] text-white py-3 px-6 rounded-lg text-center"
                >
                  Book Demo
                </a>
              )}
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};