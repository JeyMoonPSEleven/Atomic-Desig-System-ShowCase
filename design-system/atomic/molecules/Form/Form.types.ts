// src/design-system/atomic/molecules/Form/Form.types.ts
import React from 'react';

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: (data: Record<string, string>) => void;
    validation?: boolean;
    children: React.ReactNode;
    spacing?: 'sm' | 'md' | 'lg';
}
