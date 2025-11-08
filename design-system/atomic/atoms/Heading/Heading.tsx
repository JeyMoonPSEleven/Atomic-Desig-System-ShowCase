// src/design-system/atomic/atoms/Heading/Heading.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { HeadingProps } from './Heading.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Heading
 * Proporciona type-safety y mejor mantenibilidad
 */
const headingVariants = cva(
    'font-heading leading-tight',
    {
        variants: {
            level: {
                1: 'text-4xl md:text-5xl lg:text-6xl',
                2: 'text-3xl md:text-4xl lg:text-5xl',
                3: 'text-2xl md:text-3xl lg:text-4xl',
                4: 'text-xl md:text-2xl lg:text-3xl',
                5: 'text-lg md:text-xl lg:text-2xl',
                6: 'text-base md:text-lg lg:text-xl',
            },
            variant: {
                heading: 'font-semibold',
                display: 'font-bold',
                subheading: 'font-medium',
            },
            color: {
                primary: 'text-text-primary',
                secondary: 'text-text-secondary',
                accent: 'text-text-accent',
                muted: 'text-text-muted',
                success: 'text-success-600',
                warning: 'text-warning-600',
                danger: 'text-danger-600',
                info: 'text-info-600',
            },
            align: {
                left: 'text-left',
                center: 'text-center',
                right: 'text-right',
                justify: 'text-justify',
            },
        },
        defaultVariants: {
            level: 1,
            variant: 'heading',
            color: 'primary',
            align: 'left',
        },
    }
);

export const Heading = React.memo<HeadingProps>(({
    level = 1,
    variant = 'heading',
    color = 'primary',
    align = 'left',
    children,
    className,
    animated = false,
    ...props
}) => {
    const headingClasses = cn(
        headingVariants({ level, variant, color, align }),
        className
    );

    const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

    if (animated) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Tag className={headingClasses} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>
                    {children}
                </Tag>
            </motion.div>
        );
    }

    return (
        <Tag className={headingClasses} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>
            {children}
        </Tag>
    );
});

Heading.displayName = 'Heading';
