// src/design-system/atomic/atoms/Switch/Switch.types.ts
import React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
