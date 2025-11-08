// src/design-system/atomic/atoms/Checkbox/Checkbox.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { CheckboxProps } from './Checkbox.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Checkbox
 * Proporciona type-safety y mejor mantenibilidad
 */
const checkboxVariants = cva(
    'appearance-none bg-background border-2 border-border rounded-sm cursor-pointer transition-all focus:outline-none focus:shadow-focus',
    {
        variants: {
            size: {
                small: 'w-4 h-4',
                medium: 'w-5 h-5',
                large: 'w-6 h-6',
            },
            checked: {
                true: 'bg-primary border-primary',
                false: '',
            },
            disabled: {
                true: 'bg-background-secondary border-border-secondary cursor-not-allowed opacity-65',
                false: '',
            },
            error: {
                true: 'border-danger focus:shadow-focus-danger',
                false: '',
            },
        },
        compoundVariants: [
            {
                checked: true,
                disabled: true,
                className: 'bg-foreground-muted border-foreground-muted',
            },
        ],
        defaultVariants: {
            size: 'medium',
            checked: false,
            disabled: false,
            error: false,
        },
    }
);

export const Checkbox = React.memo<CheckboxProps>(({
    checked = false,
    onChange,
    label,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
    ...props
}) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const checkboxClasses = cn(
        checkboxVariants({ size, checked, disabled, error }),
        className
    );

    const containerClasses = cn(
        'flex flex-col gap-xs'
    );

    const wrapperClasses = cn(
        'relative inline-flex items-center'
    );

    const labelClasses = cn(
        'text-sm font-normal text-foreground cursor-pointer ml-sm',
        disabled && 'cursor-not-allowed text-foreground-muted'
    );

    const helperTextClasses = cn(
        'text-sm text-foreground-muted ml-sm',
        error && 'text-danger'
    );

    return (
        <div className={containerClasses}>
            <div className={wrapperClasses}>
                <input
                    id={checkboxId}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    disabled={disabled}
                    required={required}
                    className={checkboxClasses}
                    {...props}
                />
                {checked && (
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-2.5 border-solid border-primary-foreground border-r-2 border-b-2 rotate-45 pointer-events-none" />
                )}
            </div>
            {label && (
                <label htmlFor={checkboxId} className={labelClasses}>
                    {label}
                    {required && <span className="text-danger ml-xs">*</span>}
                </label>
            )}
            {helperText && (
                <span className={helperTextClasses}>
                    {helperText}
                </span>
            )}
        </div>
    );
});

Checkbox.displayName = 'Checkbox';