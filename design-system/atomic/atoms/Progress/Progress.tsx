// src/design-system/atomic/atoms/Progress/Progress.tsx
import React from 'react';
import { ProgressProps } from './Progress.types';
import { cn } from '../../../utils/cn';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { motion } from 'framer-motion';

export const Progress: React.FC<ProgressProps> = ({
    value,
    max = 100,
    variant = 'primary',
    size = 'medium',
    showLabel = false,
    label,
    animated = false,
    className,
    ...props
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const containerClasses = cn(
        'flex flex-col gap-sm w-full',
        className
    );

    const labelContainerClasses = cn(
        'flex justify-between items-center gap-sm'
    );

    const labelClasses = cn(
        'text-sm font-medium text-foreground'
    );

    const percentageClasses = cn(
        'text-sm font-semibold text-foreground-secondary font-mono'
    );

    const trackClasses = cn(
        'relative w-full overflow-hidden rounded-full bg-background-secondary',

        // Tamaños
        size === 'small' && 'h-1',
        size === 'medium' && 'h-2',
        size === 'large' && 'h-3'
    );

    const indicatorClasses = cn(
        'h-full w-full flex-1 transition-all duration-500 ease-out rounded-full',

        // Variantes de color
        variant === 'primary' && 'bg-gradient-to-r from-primary-500 to-primary-600 shadow-sm',
        variant === 'secondary' && 'bg-gradient-to-r from-secondary-500 to-secondary-600 shadow-sm',
        variant === 'success' && 'bg-gradient-to-r from-success-500 to-success-600 shadow-sm',
        variant === 'danger' && 'bg-gradient-to-r from-danger-500 to-danger-600 shadow-sm',
        variant === 'warning' && 'bg-gradient-to-r from-warning-500 to-warning-600 shadow-sm',
        variant === 'info' && 'bg-gradient-to-r from-info-500 to-info-600 shadow-sm',

        // Animaciones
        animated && 'animate-pulse'
    );

    return (
        <div className={containerClasses} {...props}>
            {(showLabel || label) && (
                <div className={labelContainerClasses}>
                    {label && <span className={labelClasses}>{label}</span>}
                    {showLabel && <span className={percentageClasses}>{Math.round(percentage)}%</span>}
                </div>
            )}

            <ProgressPrimitive.Root className={trackClasses} value={percentage} max={max}>
                <ProgressPrimitive.Indicator asChild>
                    <motion.div
                        className={indicatorClasses}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}
                        role="progressbar"
                        aria-valuenow={value}
                        aria-valuemin={0}
                        aria-valuemax={max}
                    />
                </ProgressPrimitive.Indicator>
            </ProgressPrimitive.Root>
        </div>
    );
};