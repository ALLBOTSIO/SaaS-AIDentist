import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import SearchBar from '../common/SearchBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-white" />
            <span className="text-xl sm:text-2xl font-bold text-white">AIDentist</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <SearchBar />
            <Navigation />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <SearchBar />
            <Navigation isMobile />
            <button className="w-full mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}