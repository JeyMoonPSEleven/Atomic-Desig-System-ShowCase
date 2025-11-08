// src/design-system/atomic/atoms/Text/Text.tsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { TextProps } from './Text.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Text
 * Proporciona type-safety y mejor mantenibilidad
 */
const textVariants = cva(
    'font-base leading-normal',
    {
        variants: {
            variant: {
                body: 'text-base',
                caption: 'text-sm',
                small: 'text-sm',
                large: 'text-lg',
                xl: 'text-xl',
            },
            color: {
                primary: 'text-foreground',
                secondary: 'text-foreground-secondary',
                muted: 'text-foreground-muted',
                accent: 'text-foreground-accent',
                success: 'text-success',
                danger: 'text-danger',
                warning: 'text-warning',
                info: 'text-info',
            },
            weight: {
                light: 'font-light',
                normal: 'font-normal',
                medium: 'font-medium',
                semibold: 'font-semibold',
                bold: 'font-bold',
            },
            align: {
                left: 'text-left',
                center: 'text-center',
                right: 'text-right',
                justify: 'text-justify',
            },
        },
        defaultVariants: {
            variant: 'body',
            color: 'primary',
            weight: 'normal',
            align: 'left',
        },
    }
);

export const Text = React.memo<TextProps>(({
    as: Component = 'span',
    variant = 'body',
    color = 'primary',
    weight = 'normal',
    align = 'left',
    children,
    className,
    ...props
}) => {
    const textClasses = cn(
        textVariants({ variant, color, weight, align }),
        className
    );

    return (
        <Component className={textClasses} {...props}>
            {children}
        </Component>
    );
});

Text.displayName = 'Text';