// src/design-system/atomic/atoms/Select/Select.tsx
import React from 'react';
import { SelectProps } from './Select.types';
import { cn } from '../../../utils/cn';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';

export const Select: React.FC<SelectProps> = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Seleccionar...',
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    id,
}) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    const containerClasses = cn(
        'flex flex-col gap-xs',
        className
    );

    const labelClasses = cn(
        'text-sm font-medium text-text-primary mb-xs',
        disabled && 'text-text-muted',
        error && 'text-danger-600',

        // Tamaños de texto
        size === 'small' && 'text-xs',
        size === 'large' && 'text-base'
    );

    const triggerClasses = cn(
        'flex items-center justify-between w-full min-w-[200px]',
        'bg-background border-2 border-border rounded-md',
        'px-md py-sm text-base text-text-primary cursor-pointer',
        'transition-all hover:not-disabled:border-border-primary',
        'focus:outline-none focus:border-border-focus focus:shadow-focus',
        'disabled:bg-background-secondary disabled:text-text-muted disabled:cursor-not-allowed',
        error && 'border-danger-500',
        error && 'focus:border-danger-500 focus:shadow-[0_0_0_3px_rgba(244,67,54,0.1)]',

        // Tamaños
        size === 'small' && 'px-sm py-xs text-sm',
        size === 'large' && 'px-lg py-md text-lg'
    );

    const contentClasses = cn(
        'relative z-dropdown min-w-[8rem] overflow-hidden rounded-md border border-border bg-background shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
    );

    const itemClasses = cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-sm pl-md pr-8',
        'text-sm outline-none focus:bg-background-secondary focus:text-text-primary',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
    );

    const helperTextClasses = cn(
        'text-sm text-text-muted mt-xs',
        error && 'text-danger-600'
    );

    return (
        <div className={containerClasses}>
            {label && (
                <label htmlFor={selectId} className={labelClasses}>
                    {label}
                    {required && <span className="text-danger-500 ml-xs">*</span>}
                </label>
            )}

            <SelectPrimitive.Root value={value} onValueChange={onChange} disabled={disabled} required={required}>
                <SelectPrimitive.Trigger className={triggerClasses} id={selectId}>
                    <SelectPrimitive.Value placeholder={placeholder} />
                    <SelectPrimitive.Icon asChild>
                        <motion.div
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDownIcon className="h-4 w-4 opacity-50" />
                        </motion.div>
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>

                <SelectPrimitive.Portal>
                    <SelectPrimitive.Content className={contentClasses} position="popper">
                        <SelectPrimitive.Viewport className="p-1">
                            <AnimatePresence>
                                {options.map((option) => (
                                    <SelectPrimitive.Item
                                        key={option.value}
                                        value={option.value}
                                        disabled={option.disabled}
                                        className={itemClasses}
                                    >
                                        <SelectPrimitive.ItemText>
                                            {option.label}
                                        </SelectPrimitive.ItemText>
                                        <SelectPrimitive.ItemIndicator className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                                            <CheckIcon className="h-4 w-4" />
                                        </SelectPrimitive.ItemIndicator>
                                    </SelectPrimitive.Item>
                                ))}
                            </AnimatePresence>
                        </SelectPrimitive.Viewport>
                    </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
            </SelectPrimitive.Root>

            {helperText && (
                <div className={helperTextClasses}>
                    {helperText}
                </div>
            )}
        </div>
    );
};