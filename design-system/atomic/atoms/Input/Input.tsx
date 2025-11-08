// src/design-system/atomic/atoms/Input/Input.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { InputProps } from './Input.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con cva (Class Variance Authority)
 * Para Input, manejamos variantes de estilo, tamaño y estados
 */
const inputVariants = cva(
    'w-full font-base leading-normal bg-background border border-border rounded-md text-text-primary transition-all appearance-none outline-none focus:border-border-focus focus:shadow-focus focus:bg-background hover:not-disabled:not-focus:border-gray-400 sm:text-sm',
    {
        variants: {
            variant: {
                default: '',
                filled: 'bg-gray-100 border-0 focus:bg-background focus:shadow-inner',
                outlined: 'border-2',
            },
            size: {
                small: 'h-8 text-sm px-sm py-xs',
                medium: 'h-10 text-base px-md py-sm',
                large: 'h-12 text-lg px-lg py-md',
            },
            state: {
                default: '',
                error: 'border-danger-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]',
                success: 'border-success-500 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
            state: 'default',
        },
    }
);

export const Input: React.FC<InputProps> = React.memo(({
    type = 'text',
    value,
    onChange,
    placeholder = '',
    required = false,
    disabled = false,
    error = false,
    success = false,
    helperText,
    label,
    variant = 'default',
    size = 'medium',
    className,
    id,
    defaultValue,
}) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const isControlled = value !== undefined;

    // Determinar el estado basado en las props
    let inputState: 'default' | 'error' | 'success' = 'default';
    if (error) inputState = 'error';
    else if (success) inputState = 'success';

    const inputClasses = cn(
        inputVariants({
            variant,
            size,
            state: inputState
        }),
        disabled && 'bg-gray-100 text-text-muted cursor-not-allowed opacity-60',
        className
    );

    const containerClasses = 'flex flex-col gap-xs';

    const labelClasses = cn(
        'text-sm font-medium text-text-primary',
        error && 'text-danger-600',
        disabled && 'text-text-muted'
    );

    const helperTextClasses = cn(
        'text-xs text-text-muted',
        error && 'text-danger-600'
    );

    return (
        <motion.div
            className={containerClasses}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            {label && (
                <motion.label
                    htmlFor={inputId}
                    className={labelClasses}
                    initial={{ y: -5 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {label}
                    {required && <span className="text-danger-500 ml-xs">*</span>}
                </motion.label>
            )}
            <motion.input
                id={inputId}
                type={type}
                value={isControlled ? value : undefined}
                defaultValue={!isControlled ? (defaultValue ?? '') : undefined}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={inputClasses}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
            />
            {helperText && (
                <motion.span
                    className={helperTextClasses}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                >
                    {helperText}
                </motion.span>
            )}
        </motion.div>
    );
});

Input.displayName = 'Input';