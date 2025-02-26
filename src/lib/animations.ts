import { Variants } from 'framer-motion';

// Enhanced fade animations with better timing
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing
    },
  },
};

// Stagger children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Enhanced slide animations
export const slideVariants = {
  hidden: (direction: 'left' | 'right' | 'up' | 'down') => ({
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    opacity: 0,
  }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

// Scale animations with bounce
export const scaleVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

// Hover animations
export const hoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};