// src/design-system/atomic/atoms/Logo/Logo.tsx
import React from 'react';
import { LogoProps } from './Logo.types';
import { cn } from '../../../utils/cn';

const sizeStyles = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16',
};

export const Logo: React.FC<LogoProps> = ({
    src,
    alt = 'Logo',
    text,
    size = 'medium',
    className,
    onClick,
    href,
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const logoContent = (
        <>
            {src && (
                <img
                    src={src}
                    alt={alt}
                    className={cn('object-contain', sizeStyles[size])}
                />
            )}
            {text && (
                <span className="font-bold text-xl">
                    {text}
                </span>
            )}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={cn('flex items-center gap-2', onClick && 'cursor-pointer', className)}
                onClick={handleClick}
            >
                {logoContent}
            </a>
        );
    }

    return (
        <div
            className={cn(
                'flex items-center gap-2',
                onClick && 'cursor-pointer',
                className
            )}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {logoContent}
        </div>
    );
};
