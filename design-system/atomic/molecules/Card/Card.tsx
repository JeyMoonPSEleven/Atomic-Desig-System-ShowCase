// src/design-system/atomic/molecules/Card/Card.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { CardProps } from './Card.types';
import { cn } from '../../../utils/cn';
import { animationPresets, transitions, microInteractions } from '../../../hooks/useAnimation';

/**
 * Definición de variantes con CVA (Class Variance Authority)
 * Para Card, manejamos variantes de estilo, padding y efectos hover
 * TODOS los valores basados en tokens del design system
 */
const cardVariants = cva(
  // Clases base - SOLO tokens
  'flex flex-col w-full bg-background border border-border rounded-lg overflow-hidden transition-all',
  {
    variants: {
      variant: {
        default: 'shadow-sm',
        elevated: 'shadow-lg border-transparent hover:shadow-xl',
        outlined: 'shadow-none hover:border-primary',
        filled: 'bg-background-secondary border-transparent hover:bg-background-tertiary',
      },
      padding: {
        none: 'p-0',
        sm: 'p-sm',
        md: 'p-md',
        lg: 'p-lg',
        xl: 'p-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

export const Card = React.memo<CardProps>(({
  variant = 'default',
  padding = 'md',
  children,
  header,
  footer,
  hover = false,
  className,
  ...props
}) => {
  const cardClasses = cn(
    cardVariants({ variant, padding }),
    className
  );

  const headerClasses = cn(
    'px-lg py-md border-b border-border bg-background-secondary'
  );

  const contentClasses = cn(
    'flex-1',
    !header && !footer && (
      padding === 'none' ? 'p-0' : 
      padding === 'sm' ? 'p-sm' : 
      padding === 'md' ? 'p-md' : 
      padding === 'lg' ? 'p-lg' : 
      'p-xl'
    ),
    (header || footer) && 'p-md'
  );

  const footerClasses = cn(
    'px-lg py-md border-t border-border bg-background-secondary'
  );

  return (
    <motion.div
      className={cardClasses}
      {...animationPresets.fadeInUp}
      whileHover={hover ? { ...microInteractions.hoverLift, scale: 1.01 } : {}}
      transition={transitions.spring}
      {...props}
    >
      {header && (
        <motion.div
          className={headerClasses}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.2 }}
        >
          {header}
        </motion.div>
      )}
      <motion.div
        className={contentClasses}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        {children}
      </motion.div>
      {footer && (
        <motion.div
          className={footerClasses}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.2 }}
        >
          {footer}
        </motion.div>
      )}
    </motion.div>
  );
});

Card.displayName = 'Card';