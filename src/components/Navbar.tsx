import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot, Search } from 'lucide-react';
import { useScrollTo } from '@/lib/hooks/useScrollTo';

const AIIcon = () => (
  <div className="relative w-10 h-10">
    <div className="absolute inset-0 rounded-xl bg-[#00A6E6] shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <Bot className="w-6 h-6 text-white" />
      </div>
    </div>
    <div className="absolute inset-0 rounded-xl animate-pulse bg-white/20" />
  </div>
);

const navItems = [
  {
    name: 'AI Agent',
    href: 'ai-agent',
    description: 'Transform your practice with AI-powered agents that enhance patient care and streamline operations.',
    highlight: true,
    isExternal: true
  },
  {
    name: 'FREE AI Impact Scan',
    href: 'ai-impact',
    description: 'Get your instant, comprehensive AI impact analysis for your dental practice.',
    highlight: true,
    isExternal: false
  },
  {
    name: 'Insurance Verification',
    href: 'insur-verify',
    description: 'Automate your insurance verification process with AI. Save time and reduce errors.',
    highlight: true,
    isExternal: true
  },
  { 
    name: 'AI Supplies', 
    href: 'features',
    description: 'Advanced AI tools and solutions for modern dental practices. Enhance your practice with cutting-edge technology.'
  },
  {
    name: 'Sign Up',
    href: 'signup',
    description: 'Create your account and start transforming your dental practice with AI.',
    highlight: true
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (navItems.find(item => item.href === sectionId)?.isExternal) {
      window.location.href = `/${sectionId}`;
    } else {
      scrollTo(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#2A3342]/70 backdrop-blur-lg shadow-lg supports-[backdrop-filter]:bg-[#2A3342]/60' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <AIIcon />
              <span className="text-2xl font-bold text-white">
                <span className="text-[#00A6E6]">AI</span>
                <span className="text-white">DENTIST</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                aria-label="Return to homepage"
              >
                <div className="relative">
                  <a
                    href={item.isExternal ? `/${item.href}` : `#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[15px] font-medium transition-colors duration-300 text-white/90 hover:text-white"
                    aria-current={window.location.pathname === `/${item.href}` ? 'page' : undefined}
                    aria-label={item.name}
                  >
                    {item.name}
                  </a>
                  {window.location.pathname === `/${item.href}` && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00A6E6] rounded-full" />
                  )}
                </div>
                {hoveredItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 p-4 bg-white rounded-lg shadow-lg text-sm text-gray-600"
                  >
                    {item.description}
                  </motion.div>
                )}
              </div>
            ))}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-expanded={isSearchOpen}
              aria-controls="search-modal"
              aria-label="Open search"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
            <a 
              href="https://calendly.com/ai-consultant/ai-project-kickoff"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg text-white text-[15px] font-medium transition-all duration-300 shadow-md hover:shadow-lg bg-[#00A6E6] hover:bg-[#0095D1]"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg text-white transition-colors duration-300"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed left-4 right-4 top-4 max-w-2xl mx-auto z-50"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-6 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#00A6E6]"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#2A3342]/90 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <a
                    href={item.isExternal ? `/${item.href}` : `#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-300 rounded-lg"
                    aria-current={window.location.pathname === `/${item.href}` ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                  <p className="px-4 text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="pt-4">
                <a 
                  href="https://calendly.com/ai-consultant/ai-project-kickoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a demo"
                  className="block w-full px-6 py-3 rounded-lg bg-[#00A6E6] text-white font-medium hover:bg-[#0095D1] transition-all duration-200 text-center"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;