// src/design-system/atomic/molecules/Stepper/Stepper.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { StepperProps, StepperStep } from './Stepper.types';
import { cn } from '../../../utils/cn';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';
import { Divider } from '../../atoms/Divider';

/**
 * Definición de variantes con CVA para Stepper
 * Todos los valores basados en tokens del design system
 */
const stepperContainerVariants = cva(
  'flex w-full',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row items-center',
        vertical: 'flex-col',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);

const stepVariants = cva(
  'flex items-center transition-all',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
      state: {
        active: '',
        completed: '',
        pending: 'opacity-50',
        disabled: 'opacity-30 cursor-not-allowed',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      state: 'pending',
    },
  }
);

const stepIndicatorVariants = cva(
  'flex items-center justify-center rounded-full border-2 transition-all',
  {
    variants: {
      variant: {
        default: 'w-8 h-8',
        numbered: 'w-10 h-10 font-semibold',
        dots: 'w-3 h-3',
      },
      state: {
        active: 'border-primary bg-primary text-text-on-primary',
        completed: 'border-success bg-success text-text-on-success',
        pending: 'border-border bg-background-secondary text-text-muted',
        disabled: 'border-border bg-background-secondary text-text-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
      state: 'pending',
    },
  }
);

export const Stepper = React.memo<StepperProps>(({
  steps,
  currentStep,
  orientation = 'horizontal',
  variant = 'default',
  onStepClick,
  className,
  ...props
}) => {
  const getStepState = (step: StepperStep, index: number): 'active' | 'completed' | 'pending' | 'disabled' => {
    if (step.disabled) return 'disabled';
    if (step.completed || index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'pending';
  };

  const renderStepIndicator = (step: StepperStep, index: number, state: string) => {
    const stepNumber = index + 1;

    if (variant === 'dots') {
      return (
        <div className={cn(stepIndicatorVariants({ variant, state: state as any }))} />
      );
    }

    if (variant === 'numbered') {
      return (
        <div className={cn(stepIndicatorVariants({ variant, state: state as any }))}>
          {state === 'completed' ? (
            <Icon name="Check" size="small" />
          ) : (
            <span>{stepNumber}</span>
          )}
        </div>
      );
    }

    // Default variant
    return (
      <div className={cn(stepIndicatorVariants({ variant, state: state as any }))}>
        {state === 'completed' && <Icon name="Check" size="small" />}
        {state === 'active' && <Icon name="Circle" size="small" />}
        {state === 'pending' && <div className="w-2 h-2 rounded-full bg-current" />}
      </div>
    );
  };

  return (
    <div
      className={cn(stepperContainerVariants({ orientation }), className)}
      {...props}
    >
      {steps.map((step, index) => {
        const state = getStepState(step, index);
        const isClickable = !step.disabled && onStepClick;

        return (
          <React.Fragment key={step.id}>
            <motion.div
              className={cn(
                stepVariants({ orientation, state }),
                isClickable && 'cursor-pointer'
              )}
              onClick={() => isClickable && onStepClick?.(index)}
              initial={{ opacity: 0, y: orientation === 'vertical' ? -10 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {orientation === 'horizontal' ? (
                <>
                  {renderStepIndicator(step, index, state)}
                  <div className={cn('ml-md', orientation === 'horizontal' && 'flex flex-col')}>
                    <span className={cn(
                      'text-sm font-medium',
                      state === 'active' && 'text-primary',
                      state === 'completed' && 'text-success',
                      state === 'pending' && 'text-text-muted'
                    )}>
                      {step.label}
                    </span>
                    {step.description && (
                      <span className="text-xs text-text-secondary mt-xs">
                        {step.description}
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {renderStepIndicator(step, index, state)}
                  <div className="mt-sm text-center">
                    <span className={cn(
                      'text-sm font-medium block',
                      state === 'active' && 'text-primary',
                      state === 'completed' && 'text-success',
                      state === 'pending' && 'text-text-muted'
                    )}>
                      {step.label}
                    </span>
                    {step.description && (
                      <span className="text-xs text-text-secondary mt-xs block">
                        {step.description}
                      </span>
                    )}
                  </div>
                </>
              )}
            </motion.div>

            {index < steps.length - 1 && (
              <Divider
                orientation={orientation === 'horizontal' ? 'vertical' : 'horizontal'}
                className={cn(
                  orientation === 'horizontal' ? 'mx-md' : 'my-md',
                  state === 'completed' && 'border-success'
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
});

Stepper.displayName = 'Stepper';

