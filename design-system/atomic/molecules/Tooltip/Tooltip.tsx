// src/design-system/atomic/molecules/Tooltip/Tooltip.tsx
import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { TooltipProps } from './Tooltip.types';
import { cn } from '../../../utils/cn';
import { Text } from '../../atoms/Text';

/**
 * Definición de variantes con CVA para Tooltip
 * Todos los valores basados en tokens del design system
 */
const tooltipVariants = cva(
  'absolute z-tooltip px-md py-sm rounded-md text-sm shadow-lg pointer-events-none max-w-xs',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white',
        dark: 'bg-gray-900 text-white',
        light: 'bg-white text-gray-900 border border-border',
      },
      position: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'bottom',
    },
  }
);

const arrowVariants = cva(
  'absolute w-2 h-2 rotate-45',
  {
    variants: {
      variant: {
        default: 'bg-gray-900',
        dark: 'bg-gray-900',
        light: 'bg-white border border-border',
      },
      position: {
        top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
        bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
        left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
        right: 'right-full top-1/2 -translate-y-1/2 -mr-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'bottom',
    },
  }
);

export const Tooltip = React.memo<TooltipProps>(({
  content,
  children,
  position = 'bottom',
  variant = 'default',
  show: controlledShow,
  delay = 200,
  disabled = false,
  className,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledShow !== undefined;
  const isVisible = isControlled ? controlledShow : show;

  const handleMouseEnter = () => {
    if (disabled || isControlled) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShow(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (disabled || isControlled) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShow(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && !disabled && (
          <motion.div
            className={cn(tooltipVariants({ position, variant }), className)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            {...props}
          >
            <div className={cn(arrowVariants({ position, variant }))} />
            <Text variant="small" className="whitespace-normal">
              {content}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Tooltip.displayName = 'Tooltip';

