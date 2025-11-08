// src/design-system/atomic/atoms/Divider/Divider.tsx
import React from 'react';
import { DividerProps } from './Divider.types';
import { cn } from '../../../utils/cn';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Divider: React.FC<DividerProps> = ({
    variant = 'solid',
    orientation = 'horizontal',
    thickness = 'medium',
    color = 'default',
    className,
    ...props
}) => {
    const dividerClasses = cn(
        'block',

        // Orientaciones
        orientation === 'horizontal' && 'w-full h-px',
        orientation === 'vertical' && 'w-px h-full inline-block',

        // Variantes de estilo
        variant === 'solid' && 'border-solid',
        variant === 'dashed' && 'border-dashed',
        variant === 'dotted' && 'border-dotted',

        // Grosor
        thickness === 'thin' && 'border-1',
        thickness === 'medium' && 'border-2',
        thickness === 'thick' && 'border-3',

        // Colores
        color === 'default' && 'border-border',
        color === 'light' && 'border-border-light',
        color === 'muted' && 'border-border-secondary',

        className
    );

    return (
        <SeparatorPrimitive.Root
            orientation={orientation}
            className={dividerClasses}
            {...props}
        />
    );
};