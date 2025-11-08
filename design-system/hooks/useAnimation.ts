/**
 * Hook personalizado para animaciones consistentes usando Framer Motion
 * Proporciona presets de animación reutilizables basados en los tokens del design system
 */

import { Variants, Transition } from 'framer-motion';

/**
 * Presets de animación basados en los tokens del design system
 */
export const animationPresets = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  
  scaleUp: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
  
  // Slide animations
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  
  // Stagger animations (para listas)
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
} as const;

/**
 * Transiciones consistentes basadas en tokens CSS
 */
export const transitions = {
  // Transiciones rápidas (200ms)
  fast: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1], // ease-smooth
  },
  
  // Transiciones base (300ms)
  base: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
  
  // Transiciones lentas (500ms)
  slow: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  },
  
  // Spring animations
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },
  
  springGentle: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 25,
  },
  
  springBouncy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 20,
  },
} as const;

/**
 * Microinteracciones para hover y tap
 */
export const microInteractions = {
  hover: {
    scale: 1.02,
    transition: transitions.fast,
  },
  
  tap: {
    scale: 0.98,
    transition: transitions.fast,
  },
  
  hoverLift: {
    y: -2,
    transition: transitions.fast,
  },
  
  hoverGlow: {
    boxShadow: '0 0 20px rgba(33, 150, 243, 0.3)',
    transition: transitions.fast,
  },
} as const;

/**
 * Hook para usar animaciones consistentes
 */
export const useAnimation = (preset: keyof typeof animationPresets = 'fadeIn') => {
  return {
    ...animationPresets[preset],
    transition: transitions.base,
  };
};

/**
 * Hook para animaciones de lista con stagger
 */
export const useStaggerAnimation = (delay: number = 0.1) => {
  return {
    container: {
      ...animationPresets.staggerContainer,
      transition: {
        staggerChildren: delay,
      },
    },
    item: animationPresets.staggerItem,
  };
};

/**
 * Variantes para componentes con estados
 */
export const createStateVariants = (
  baseVariants: Variants,
  states: {
    hover?: Record<string, any>;
    tap?: Record<string, any>;
    focus?: Record<string, any>;
  }
): Variants => {
  return {
    ...baseVariants,
    hover: states.hover || {},
    tap: states.tap || {},
    focus: states.focus || {},
  };
};

