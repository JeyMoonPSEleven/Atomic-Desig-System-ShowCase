// src/design-system/atomic/molecules/Timeline/Timeline.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { TimelineProps, TimelineItem } from './Timeline.types';
import { cn } from '../../../utils/cn';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import { Divider } from '../../atoms/Divider';

/**
 * Definición de variantes con CVA para Timeline
 * Todos los valores basados en tokens del design system
 */
const timelineContainerVariants = cva(
  'relative',
  {
    variants: {
      orientation: {
        vertical: 'flex flex-col',
        horizontal: 'flex flex-row overflow-x-auto pb-md',
      },
      variant: {
        default: '',
        compact: 'gap-sm',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
      variant: 'default',
    },
  }
);

const timelineItemVariants = cva(
  'relative flex',
  {
    variants: {
      orientation: {
        vertical: 'flex-row',
        horizontal: 'flex-col min-w-[200px]',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  }
);

const timelineIconVariants = cva(
  'flex items-center justify-center rounded-full border-2 flex-shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary border-primary text-text-on-primary',
        success: 'bg-success border-success text-text-on-success',
        warning: 'bg-warning border-warning text-text-on-warning',
        danger: 'bg-danger border-danger text-text-on-danger',
        info: 'bg-info border-info text-text-on-info',
      },
      size: {
        default: 'w-10 h-10',
        compact: 'w-8 h-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const Timeline = React.memo<TimelineProps>(({
  items,
  orientation = 'vertical',
  variant = 'default',
  className,
  ...props
}) => {
  const getDefaultIcon = (itemVariant?: string) => {
    switch (itemVariant) {
      case 'success': return 'CheckCircle';
      case 'warning': return 'AlertTriangle';
      case 'danger': return 'AlertCircle';
      case 'info': return 'Info';
      default: return 'Circle';
    }
  };

  return (
    <div
      className={cn(timelineContainerVariants({ orientation, variant }), className)}
      {...props}
    >
      {orientation === 'vertical' && (
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />
      )}
      {orientation === 'horizontal' && (
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
      )}

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={cn(timelineItemVariants({ orientation }))}
          initial={{ opacity: 0, y: orientation === 'vertical' ? 20 : 0, x: orientation === 'horizontal' ? 20 : 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Icon/Indicator */}
          <div className={cn(
            'relative z-10',
            orientation === 'vertical' && 'mr-md',
            orientation === 'horizontal' && 'mb-md mx-auto'
          )}>
            <div className={cn(
              timelineIconVariants({
                variant: item.variant || 'default',
                size: variant === 'compact' ? 'compact' : 'default'
              })
            )}>
              {item.icon ? (
                <Icon name={item.icon as any} size="small" />
              ) : (
                <Icon name={getDefaultIcon(item.variant) as any} size="small" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className={cn(
            'flex-1 pb-lg',
            orientation === 'vertical' && '',
            orientation === 'horizontal' && 'text-center'
          )}>
            {item.timestamp && (
              <Text variant="small" color="muted" className="mb-xs">
                {item.timestamp}
              </Text>
            )}
            <Text variant="body" weight="semibold" className="mb-xs">
              {item.title}
            </Text>
            {item.description && (
              <Text variant="small" color="secondary">
                {item.description}
              </Text>
            )}
          </div>

          {/* Connector Line */}
          {index < items.length - 1 && orientation === 'vertical' && (
            <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-border" />
          )}
        </motion.div>
      ))}
    </div>
  );
});

Timeline.displayName = 'Timeline';

