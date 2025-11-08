// src/design-system/atomic/atoms/Spinner/Spinner.types.ts
import React from 'react';

export type SpinnerVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: SpinnerVariant;
    size?: SpinnerSize;
    text?: string;
}
