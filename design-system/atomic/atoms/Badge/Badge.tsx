// src/design-system/atomic/atoms/Badge/Badge.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { BadgeProps } from './Badge.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con cva (Class Variance Authority)
 * Para Badge, manejamos variantes de color, tamaño y forma
 */
const badgeVariants = cva(
    'inline-flex items-center justify-center gap-xs font-base font-semibold leading-none text-center whitespace-nowrap rounded-sm transition-all sm:text-xs',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-primary-foreground shadow-sm',
                secondary: 'bg-secondary text-secondary-foreground shadow-sm',
                success: 'bg-success text-success-foreground shadow-sm',
                danger: 'bg-danger text-danger-foreground shadow-sm',
                warning: 'bg-warning text-warning-foreground shadow-sm',
                info: 'bg-info text-info-foreground shadow-sm',
                light: 'bg-background-secondary text-foreground border border-border-light',
                dark: 'bg-gray-800 text-primary-foreground shadow-sm',
            },
            size: {
                small: 'px-sm py-xs text-xs min-h-5',
                medium: 'px-md py-sm text-sm min-h-6',
                large: 'px-lg py-md text-base min-h-8',
            },
            shape: {
                default: 'rounded-sm',
                pill: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'medium',
            shape: 'default',
        },
    }
);

export const Badge: React.FC<BadgeProps> = React.memo(({
    variant = 'primary',
    size = 'medium',
    pill = false,
    children,
    className,
}) => {
    const badgeClasses = cn(
        badgeVariants({ variant, size, shape: pill ? 'pill' : 'default' }),
        className
    );

    return (
        <motion.span
            className={badgeClasses}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
        >
            {children}
        </motion.span>
    );
});

Badge.displayName = 'Badge';