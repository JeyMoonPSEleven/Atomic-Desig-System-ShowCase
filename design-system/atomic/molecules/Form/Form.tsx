// src/design-system/atomic/molecules/Form/Form.tsx
import React from 'react';
import { FormProps } from './Form.types';
import { cn } from '../../../utils/cn';

const spacingStyles = {
    none: '',
    small: 'space-y-3',
    medium: 'space-y-4',
    large: 'space-y-6',
};

export const Form: React.FC<FormProps> = ({
    onSubmit,
    validation = true,
    children,
    spacing = 'md',
    className,
    ...props
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validation) {
            // Validación básica del formulario
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());

            // Validar campos requeridos
            const requiredFields = e.currentTarget.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach((field) => {
                const input = field as HTMLInputElement;
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error', 'border-border-error');
                } else {
                    input.classList.remove('error', 'border-border-error');
                }
            });

            if (isValid && onSubmit) {
                const stringData: Record<string, string> = {};
                Object.entries(data).forEach(([key, value]) => {
                    stringData[key] = String(value);
                });
                onSubmit(stringData);
            }
        } else if (onSubmit) {
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            const stringData: Record<string, string> = {};
            Object.entries(data).forEach(([key, value]) => {
                stringData[key] = String(value);
            });
            onSubmit(stringData);
        }
    };

    return (
        <form
            className={cn(
                'w-full',
                spacingStyles[spacing],
                className
            )}
            onSubmit={handleSubmit}
            {...props}
        >
            {children}
        </form>
    );
};
