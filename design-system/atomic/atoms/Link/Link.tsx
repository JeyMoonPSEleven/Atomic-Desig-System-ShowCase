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
                default: 'text-primary hover:text-primary-700',
                primary: 'text-primary hover:text-primary-700',
                secondary: 'text-foreground-secondary hover:text-foreground',
                success: 'text-success hover:text-success-700',
                danger: 'text-danger hover:text-danger-700',
                muted: 'text-foreground-muted hover:text-foreground-secondary',
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
