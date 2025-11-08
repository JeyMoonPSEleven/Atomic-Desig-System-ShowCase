// src/design-system/atomic/atoms/Slider/Slider.tsx
import React from 'react';
import { SliderProps } from './Slider.types';
import { cn } from '../../../utils/cn';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { motion } from 'framer-motion';

export const Slider: React.FC<SliderProps> = ({
    label,
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    disabled = false,
    error = false,
    helperText,
    size = 'medium',
    showValue = true,
    className,
    id,
}) => {
    const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;

    const containerClasses = cn(
        'flex flex-col gap-xs',
        className
    );

    const labelClasses = cn(
        'text-sm font-medium text-foreground mb-xs',
        disabled && 'text-foreground-muted',
        error && 'text-danger',

        // Tamaños de texto
        size === 'small' && 'text-xs',
        size === 'large' && 'text-base'
    );

    const sliderContainerClasses = cn(
        'relative flex items-center gap-sm'
    );

    const trackClasses = cn(
        'relative bg-background-secondary rounded-full cursor-pointer transition-all flex-1',
        disabled && 'cursor-not-allowed opacity-60',
        error && 'bg-danger-50',

        // Tamaños del track
        size === 'small' && 'h-1',
        size === 'medium' && 'h-1.5',
        size === 'large' && 'h-2'
    );

    const rangeClasses = cn(
        'absolute top-0 left-0 h-full bg-primary rounded-full transition-all',
        error && 'bg-danger'
    );

    const thumbClasses = cn(
        'block w-5 h-5 bg-background border-2 border-primary rounded-full cursor-pointer transition-all shadow-sm',
        'hover:not-disabled:scale-110 hover:not-disabled:shadow-md',
        disabled && 'cursor-not-allowed border-border bg-background-secondary',
        error && 'border-danger',

        // Tamaños del thumb
        size === 'small' && 'w-4 h-4',
        size === 'large' && 'w-6 h-6'
    );

    const valueClasses = cn(
        'text-sm font-medium text-foreground-secondary min-w-12 text-right',
        size === 'small' && 'text-xs',
        size === 'large' && 'text-base'
    );

    const helperTextClasses = cn(
        'text-sm text-foreground-muted mt-xs',
        error && 'text-danger'
    );

    return (
        <div className={containerClasses}>
            {label && (
                <label htmlFor={sliderId} className={labelClasses}>
                    {label}
                </label>
            )}

            <div className={sliderContainerClasses}>
                <SliderPrimitive.Root
                    id={sliderId}
                    value={[value]}
                    onValueChange={(values) => onChange?.(values[0])}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    className={cn("relative flex w-full touch-none select-none items-center", className)}
                >
                    <SliderPrimitive.Track className={trackClasses}>
                        <SliderPrimitive.Range className={rangeClasses} />
                    </SliderPrimitive.Track>

                    <SliderPrimitive.Thumb asChild>
                        <motion.div
                            className={thumbClasses}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            }}
                        />
                    </SliderPrimitive.Thumb>
                </SliderPrimitive.Root>

                {showValue && (
                    <div className={valueClasses}>
                        {value}
                    </div>
                )}
            </div>

            {helperText && (
                <div className={helperTextClasses}>
                    {helperText}
                </div>
            )}
        </div>
    );
};