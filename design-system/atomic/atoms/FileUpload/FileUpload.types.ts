// src/design-system/atomic/atoms/FileUpload/FileUpload.types.ts
import React from 'react';

export interface FileUploadProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    accept?: string;
    multiple?: boolean;
    onChange?: (files: FileList | null) => void;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    dragAndDrop?: boolean;
}
