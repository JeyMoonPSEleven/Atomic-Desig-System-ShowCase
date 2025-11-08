// src/design-system/atomic/atoms/Icon/Icon.types.ts
import React from 'react';

export type IconSize = 'small' | 'medium' | 'large';
export type IconVariant = 'default' | 'outlined' | 'filled';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    name?: string;
    size?: IconSize;
    variant?: IconVariant;
    children?: React.ReactNode;
}
