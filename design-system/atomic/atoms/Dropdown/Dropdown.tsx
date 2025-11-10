// src/design-system/atomic/atoms/Dropdown/Dropdown.tsx
import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { DropdownProps } from './Dropdown.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../Icon';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';

export const Dropdown: React.FC<DropdownProps> = ({
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
}) => {
    const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;

    const sizeClasses = {
        small: 'h-8 px-sm py-xs text-sm',
        medium: 'h-11 px-md py-sm text-base',
        large: 'h-12 px-lg py-md text-lg',
    };

    const selectedOption = options.find(option => option.value === value);

    return (
        <div className={cn('flex flex-col gap-xs relative', className)}>
            {label && (
                <label
                    htmlFor={dropdownId}
                    className={cn(
                        'text-sm font-medium text-foreground mb-xs',
                        size === 'small' && 'text-xs',
                        size === 'large' && 'text-base',
                        disabled && 'text-foreground-muted',
                        error && 'text-danger'
                    )}
                >
                    {label}
                    {required && <span className="text-danger ml-xs">*</span>}
                </label>
            )}

            <SelectPrimitive.Root value={value} onValueChange={onChange} disabled={disabled}>
                <SelectPrimitive.Trigger
                    className={cn(
                        'flex items-center justify-between w-full bg-background border border-border rounded-md text-foreground cursor-pointer transition-all duration-fast',
                        'hover:not-disabled:border-border-secondary',
                        'focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-50',
                        'disabled:bg-background-secondary disabled:text-foreground-muted disabled:cursor-not-allowed',
                        error && 'border-danger focus:border-danger focus:ring-danger-50',
                        sizeClasses[size]
                    )}
                >
                    <SelectPrimitive.Value placeholder={placeholder}>
                        {selectedOption?.label}
                    </SelectPrimitive.Value>
                    <SelectPrimitive.Icon asChild>
                        <ChevronDownIcon className="h-4 w-4 text-foreground-muted" />
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>

                <SelectPrimitive.Portal>
                    <SelectPrimitive.Content className="relative z-dropdown min-w-[8rem] overflow-hidden rounded-md border border-border bg-background shadow-lg">
                        <SelectPrimitive.Viewport className="p-1">
                            {options.map((option) => (
                                <SelectPrimitive.Item
                                    key={option.value}
                                    value={option.value}
                                    disabled={option.disabled}
                                    className={cn(
                                        'relative flex cursor-default select-none items-center gap-sm rounded-sm py-sm pl-md pr-md text-sm outline-none',
                                        'focus:bg-background-secondary focus:text-foreground',
                                        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                                        'data-[state=checked]:bg-primary-50 data-[state=checked]:text-primary-700',
                                        size === 'small' && 'py-xs pl-sm pr-sm text-xs',
                                        size === 'large' && 'py-md pl-lg pr-lg text-base'
                                    )}
                                >
                                    <SelectPrimitive.ItemIndicator className="absolute left-0 flex h-full w-md items-center justify-center">
                                        <CheckIcon className="h-4 w-4" />
                                    </SelectPrimitive.ItemIndicator>
                                    {option.icon && (
                                        <Icon
                                            name={option.icon}
                                            size={size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium'}
                                        />
                                    )}
                                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                                </SelectPrimitive.Item>
                            ))}
                        </SelectPrimitive.Viewport>
                    </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
            </SelectPrimitive.Root>

            {helperText && (
                <div className={cn('text-sm text-foreground-muted mt-xs', error && 'text-danger')}>
                    {helperText}
                </div>
            )}
        </div>
    );
};
