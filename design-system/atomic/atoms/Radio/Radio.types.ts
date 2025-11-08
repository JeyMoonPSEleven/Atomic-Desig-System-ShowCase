// src/design-system/atomic/atoms/Radio/Radio.types.ts
import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
