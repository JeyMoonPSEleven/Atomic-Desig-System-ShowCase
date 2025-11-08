// src/design-system/atomic/atoms/Switch/Switch.tsx
import React from 'react';
import { SwitchProps } from './Switch.types';
import { cn } from '../../../utils/cn';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { motion } from 'framer-motion';

export const Switch: React.FC<SwitchProps> = ({
    label,
    checked,
    onChange,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
    ...props
}) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const [internalChecked, setInternalChecked] = React.useState(checked ?? false);
    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const handleCheckedChange = (newChecked: boolean) => {
        if (!isControlled) {
            setInternalChecked(newChecked);
        }
        if (onChange) {
            onChange(newChecked);
        }
    };

    const containerClasses = cn(
        'flex flex-col gap-xs',
        className
    );

    const switchContainerClasses = cn(
        'flex items-center gap-sm cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60'
    );

    const switchRootClasses = cn(
        'relative inline-flex cursor-pointer transition-all rounded-full border-2 border-transparent',
        'bg-background-secondary',
        checked && 'bg-primary',
        error && 'bg-danger',
        disabled && 'cursor-not-allowed opacity-60',

        // Tamaños del track
        size === 'small' && 'w-8 h-4',
        size === 'medium' && 'w-10 h-5',
        size === 'large' && 'w-12 h-6'
    );

    const thumbClasses = cn(
        'block bg-background rounded-full shadow-sm transition-all pointer-events-none',
        'absolute top-1/2 -translate-y-1/2',

        // Tamaños del thumb
        size === 'small' && 'w-3 h-3',
        size === 'medium' && 'w-4 h-4',
        size === 'large' && 'w-5 h-5',

        // Posiciones iniciales
        size === 'small' && 'left-0.5',
        size === 'medium' && 'left-0.5',
        size === 'large' && 'left-0.5'
    );

    const labelClasses = cn(
        'text-base text-foreground cursor-pointer select-none flex-1',
        disabled && 'cursor-not-allowed text-foreground-muted',
        error && 'text-danger',

        // Tamaños de texto
        size === 'small' && 'text-sm',
        size === 'large' && 'text-lg'
    );

    const helperTextClasses = cn(
        'text-sm text-foreground-muted mt-xs',
        error && 'text-danger'
    );

    return (
        <div className={containerClasses}>
            <div className={switchContainerClasses}>
                <SwitchPrimitive.Root
                    id={switchId}
                    checked={isControlled ? checked : undefined}
                    defaultChecked={!isControlled ? internalChecked : undefined}
                    onCheckedChange={handleCheckedChange}
                    disabled={disabled}
                    required={required}
                    className={switchRootClasses}
                    {...(props as Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'checked' | 'defaultChecked' | 'onCheckedChange'>)}
                >
                    <motion.div
                        className={thumbClasses}
                        animate={{
                            x: currentChecked
                                ? (size === 'small' ? 16 : size === 'medium' ? 20 : 24)
                                : 2,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                        }}
                    />
                </SwitchPrimitive.Root>

                {label && (
                    <label
                        htmlFor={switchId}
                        className={labelClasses}
                    >
                        {label}
                        {required && <span className="text-danger ml-xs">*</span>}
                    </label>
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