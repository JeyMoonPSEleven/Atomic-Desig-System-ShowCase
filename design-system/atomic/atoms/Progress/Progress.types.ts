// src/design-system/atomic/atoms/Progress/Progress.types.ts
import React from 'react';

export type ProgressVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type ProgressSize = 'small' | 'medium' | 'large';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    variant?: ProgressVariant;
    size?: ProgressSize;
    showLabel?: boolean;
    label?: string;
    animated?: boolean;
}
