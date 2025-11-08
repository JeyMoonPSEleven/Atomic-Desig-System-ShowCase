// src/design-system/atomic/atoms/Link/Link.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { LinkProps } from './Link.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Link
 * Proporciona type-safety y mejor mantenibilidad
 */
const linkVariants = cva(
    'transition-colors cursor-pointer',
    {
        variants: {
            variant: {
                default: 'text-primary-600 hover:text-primary-800',
                primary: 'text-primary-600 hover:text-primary-800',
                secondary: 'text-text-secondary hover:text-text-primary',
                success: 'text-success-600 hover:text-success-800',
                danger: 'text-danger-600 hover:text-danger-800',
                muted: 'text-text-muted hover:text-text-secondary',
            },
            size: {
                small: 'text-sm',
                medium: 'text-base',
                large: 'text-lg',
            },
            underline: {
                true: 'underline',
                false: 'no-underline hover:underline',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
            underline: false,
        },
    }
);

export const Link = React.memo<LinkProps>(({
    href,
    variant = 'default',
    size = 'medium',
    children,
    isExternal = false,
    underline = false,
    className,
    ...props
}) => {
    const linkClasses = cn(
        linkVariants({ variant, size, underline }),
        className
    );

    if (isExternal) {
        return (
            <a
                href={href}
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={href}
            className={linkClasses}
            {...props}
        >
            {children}
        </a>
    );
});

Link.displayName = 'Link';
