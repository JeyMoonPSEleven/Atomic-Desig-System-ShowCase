// src/design-system/atomic/molecules/Alert/Alert.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertProps } from './Alert.types';
import { Icon } from '../../atoms/Icon';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Alert
 * Todos los colores basados en tokens del design system
 */
const alertVariants = cva(
  'rounded-lg border flex items-start gap-sm transition-all relative',
  {
    variants: {
      variant: {
        success: 'bg-success-50 border-success-200 text-success-900',
        danger: 'bg-danger-50 border-danger-200 text-danger-900',
        warning: 'bg-warning-50 border-warning-200 text-warning-900',
        info: 'bg-info-50 border-info-200 text-info-900',
        primary: 'bg-primary-50 border-primary-200 text-primary-900',
      },
      size: {
        small: 'p-sm text-sm',
        medium: 'p-md text-base',
        large: 'p-lg text-lg',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'medium',
    },
  }
);

export const Alert = React.memo<AlertProps>(({
  variant = 'info',
  size = 'medium',
  title,
  message,
  children,
  dismissible = false,
  onDismiss,
  show = true,
  icon,
  className,
  ...props
}) => {
  const getIconName = () => {
    switch (variant) {
      case 'success': return 'CheckCircle';
      case 'danger': return 'AlertCircle';
      case 'warning': return 'AlertTriangle';
      case 'info': return 'Info';
      case 'primary': return 'Info';
      default: return 'Info';
    }
  };

  const alertClasses = cn(
    alertVariants({ variant, size }),
    className
  );

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={alertClasses}
        role="alert"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        <div className="flex-shrink-0 mt-xs">
          {icon || <Icon name={getIconName()} size={size} />}
        </div>
        <div className="flex-1">
          {title && (
            <h3 className="font-semibold mb-xs">
              {title}
            </h3>
          )}
          {message && <p>{message}</p>}
          {children && <div className="mt-xs">{children}</div>}
        </div>
        {dismissible && onDismiss && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-1 rounded-sm"
            aria-label="Cerrar alerta"
            type="button"
          >
            <Icon name="X" size="small" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
});

Alert.displayName = 'Alert';
