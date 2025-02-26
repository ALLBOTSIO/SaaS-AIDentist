import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-white" />
      ) : (
        <Moon className="w-5 h-5 text-gray-900" />
      )}
    </motion.button>
  );
};