// src/design-system/atomic/molecules/Toast/Toast.tsx
import React, { useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastProps } from './Toast.types';
import { Icon } from '../../atoms/Icon';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Toast
 * Todos los colores basados en tokens del design system
 */
const toastVariants = cva(
  'fixed z-toast rounded-lg border shadow-lg max-w-md w-full flex items-start gap-sm p-md transition-all',
  {
    variants: {
      variant: {
        success: 'bg-success-50 border-success-200 text-success-800',
        danger: 'bg-danger-50 border-danger-200 text-danger-800',
        warning: 'bg-warning-50 border-warning-200 text-warning-800',
        info: 'bg-info-50 border-info-200 text-info-800',
        primary: 'bg-primary-50 border-primary-200 text-primary-800',
      },
      position: {
        'top-left': 'top-md left-md',
        'top-right': 'top-md right-md',
        'top-center': 'top-md left-1/2 transform -translate-x-1/2',
        'bottom-left': 'bottom-md left-md',
        'bottom-right': 'bottom-md right-md',
        'bottom-center': 'bottom-md left-1/2 transform -translate-x-1/2',
      },
    },
    defaultVariants: {
      variant: 'info',
      position: 'top-right',
    },
  }
);

export const Toast = React.memo<ToastProps>(({
  variant = 'info',
  title,
  message,
  duration = 5000,
  onClose,
  position = 'top-right',
  className,
  show = true,
}) => {
  // Auto-close después de la duración especificada
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [duration, onClose]);

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

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={cn(toastVariants({ variant, position }), className)}
          role="alert"
          aria-live="assertive"
          initial={{ opacity: 0, y: position.startsWith('top') ? -20 : 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex-shrink-0 mt-xs">
            <Icon name={getIconName()} size="small" />
          </div>

          <div className="flex-1">
            {title && (
              <h4 className="font-semibold mb-xs">
                {title}
              </h4>
            )}
            <p className="text-sm">
              {message}
            </p>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="flex-shrink-0 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-1 rounded-sm"
              aria-label="Cerrar notificación"
              type="button"
            >
              <Icon name="X" size="small" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

Toast.displayName = 'Toast';
