// src/design-system/atomic/atoms/ColorSwatch/ColorSwatch.tsx
import React from 'react';
import { ColorSwatchProps } from './ColorSwatch.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../Icon';

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
    color,
    name,
    size = 'medium',
    showName = true,
    className,
    onClick,
    selected = false,
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(color);
        }
    };

    const sizeClasses = {
        small: 'w-lg h-lg',
        medium: 'w-xl h-xl',
        large: 'w-2xl h-2xl',
    };

    const textSizeClasses = {
        small: 'text-xs',
        medium: 'text-xs',
        large: 'text-sm',
    };

    return (
        <div
            className={cn(
                'flex flex-col items-center gap-xs cursor-pointer transition-transform duration-fast',
                selected && 'scale-110',
                !selected && 'hover:scale-105',
                className
            )}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            <div
                className={cn(
                    'rounded-md border-2 border-border transition-all duration-fast relative overflow-hidden',
                    sizeClasses[size],
                    selected
                        ? 'border-primary shadow-focus'
                        : 'hover:border-border-secondary hover:shadow-md'
                )}
                style={{ backgroundColor: color }}
            >
                {selected && (
                    <Icon
                        name="Check"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary-foreground text-sm font-bold drop-shadow-sm"
                    />
                )}
            </div>

            {showName && name && (
                <div className={cn('text-foreground-secondary text-center font-medium', textSizeClasses[size])}>
                    {name}
                </div>
            )}
        </div>
    );
};
