// src/design-system/atomic/atoms/SectionDivider/SectionDivider.tsx
import React from 'react';
import { cn } from '../../../utils/cn';

export interface SectionDividerProps {
    variant?: 'line' | 'dashed' | 'dotted' | 'gradient' | 'text' | 'icon';
    orientation?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';
    text?: string;
    icon?: string;
    className?: string;
}

export const SectionDivider = React.memo<SectionDividerProps>(({
    variant = 'line',
    orientation = 'horizontal',
    size = 'medium',
    color = 'neutral',
    text,
    icon,
    className
}) => {
    // Mapear variantes a clases Tailwind
    const variantClasses = {
        line: 'border-t',
        dashed: 'border-t border-dashed',
        dotted: 'border-t border-dotted',
        gradient: 'h-px bg-gradient-to-r from-transparent via-current to-transparent',
        text: 'flex items-center',
        icon: 'flex items-center'
    };

    const sizeClasses = {
        small: orientation === 'horizontal' ? 'h-px' : 'w-px',
        medium: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
        large: orientation === 'horizontal' ? 'h-1' : 'w-1'
    };

    const colorClasses = {
        primary: 'border-primary-500 text-primary-500',
        secondary: 'border-secondary-500 text-secondary-500',
        neutral: 'border-gray-300 text-gray-300',
        success: 'border-success-500 text-success-500',
        warning: 'border-warning-500 text-warning-500',
        danger: 'border-danger-500 text-danger-500',
        info: 'border-info-500 text-info-500'
    };

    const dividerClasses = cn(
        variantClasses[variant],
        sizeClasses[size],
        colorClasses[color],
        orientation === 'vertical' && 'inline-block h-auto',
        className
    );

    if (variant === 'text' && text) {
        return (
            <div className={cn('flex items-center gap-4 w-full', className)}>
                <div className={cn('flex-1', colorClasses[color], 'border-t')} />
                <div className={cn('flex items-center gap-2 text-sm font-medium', colorClasses[color])}>
                    {icon && <span>{icon}</span>}
                    {text}
                </div>
                <div className={cn('flex-1', colorClasses[color], 'border-t')} />
            </div>
        );
    }

    if (variant === 'icon' && icon) {
        return (
            <div className={cn('flex items-center gap-4 w-full', className)}>
                <div className={cn('flex-1', colorClasses[color], 'border-t')} />
                <div className={cn('flex items-center justify-center w-8 h-8 rounded-full bg-gray-100', colorClasses[color])}>
                    <span>{icon}</span>
                </div>
                <div className={cn('flex-1', colorClasses[color], 'border-t')} />
            </div>
        );
    }

    return <div className={dividerClasses} />;
});

SectionDivider.displayName = 'SectionDivider';
