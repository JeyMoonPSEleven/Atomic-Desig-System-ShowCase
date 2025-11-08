// src/design-system/atomic/atoms/Button/Button.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ButtonProps } from './Button.types';
import { cn } from '../../../utils/cn';
import { microInteractions, transitions } from '../../../hooks/useAnimation';

/**
 * Definición de variantes con cva (Class Variance Authority)
 * Esto hace el código mucho más limpio y mantenible que usar if/else o switch
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-sm relative isolate px-lg py-md border border-transparent rounded-md font-base font-medium leading-tight text-center no-underline whitespace-nowrap cursor-pointer select-none touch-manipulation outline-none transition-colors transition-transform min-w-[44px] min-h-[44px] hover:not-disabled:transform hover:not-disabled:-translate-y-px hover:not-disabled:shadow-md active:not-disabled:transform active:not-disabled:translate-y-0 active:not-disabled:scale-[0.98] active:not-disabled:shadow-sm focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 focus-visible:shadow-focus disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none sm:min-w-full md:min-w-[120px]',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:not-disabled:bg-primary-600 active:not-disabled:bg-primary-700',
        secondary: 'bg-secondary text-secondary-foreground hover:not-disabled:bg-secondary-600 active:not-disabled:bg-secondary-700',
        success: 'bg-success text-success-foreground hover:not-disabled:bg-success-600 active:not-disabled:bg-success-700',
        danger: 'bg-danger text-danger-foreground hover:not-disabled:bg-danger-600 active:not-disabled:bg-danger-700',
        warning: 'bg-warning text-warning-foreground hover:not-disabled:bg-warning-600 active:not-disabled:bg-warning-700',
        info: 'bg-info text-info-foreground hover:not-disabled:bg-info-600 active:not-disabled:bg-info-700',
        light: 'bg-background-secondary text-foreground border-border-primary hover:not-disabled:bg-background-tertiary',
        dark: 'bg-gray-800 text-primary-foreground hover:not-disabled:bg-gray-700',
        link: 'bg-transparent text-primary border-transparent font-normal p-0 min-w-auto min-h-auto hover:not-disabled:text-primary-600 hover:not-disabled:underline hover:not-disabled:transform-none hover:not-disabled:shadow-none',
      },
      size: {
        small: 'px-md py-sm text-sm min-h-8 gap-xs',
        medium: 'px-lg py-md text-base min-h-[44px]',
        large: 'px-xl py-lg text-lg min-h-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

export const Button = React.memo<ButtonProps>(({
  variant = 'primary',
  size = 'medium',
  isFullWidth = false,
  isLoading = false,
  children,
  className,
  disabled,
  onClick,
  ...restProps
}) => {
  const buttonClasses = cn(
    buttonVariants({ variant, size }),
    // Modificadores
    isFullWidth && 'w-full flex',
    isLoading && 'relative text-transparent pointer-events-none',
    // Clases externas
    className
  );

  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      whileHover={disabled || isLoading ? {} : microInteractions.hover}
      whileTap={disabled || isLoading ? {} : microInteractions.tap}
      transition={transitions.fast}
      onClick={onClick}
      {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {isLoading ? (
        <span
          className="absolute w-4 h-4 top-1/2 left-1/2 -mt-2 -ml-2 border-2 border-current border-r-transparent rounded-full animate-spin"
          role="status"
          aria-label="Cargando"
        />
      ) : (
        <span className="inline-flex items-center gap-xs">
          {children}
        </span>
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';