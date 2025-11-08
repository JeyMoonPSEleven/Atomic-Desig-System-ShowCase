// src/design-system/atomic/atoms/FileUpload/FileUpload.tsx
import React, { useState, useRef } from 'react';
import { FileUploadProps } from './FileUpload.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../Icon';

export const FileUpload: React.FC<FileUploadProps> = ({
    label,
    accept,
    multiple = false,
    onChange,
    disabled = false,
    required = false,
    error = false,
    helperText,
    size = 'medium',
    className,
    dragAndDrop = true,
    id,
    ...props
}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const uploadId = id || `file-upload-${Math.random().toString(36).substr(2, 9)}`;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled && onChange) {
            onChange(event.target.files);
        }
    };

    const handleClick = () => {
        if (!disabled && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleDragOver = (event: React.DragEvent) => {
        if (!disabled && dragAndDrop) {
            event.preventDefault();
            setIsDragOver(true);
        }
    };

    const handleDragLeave = (event: React.DragEvent) => {
        if (!disabled && dragAndDrop) {
            event.preventDefault();
            setIsDragOver(false);
        }
    };

    const handleDrop = (event: React.DragEvent) => {
        if (!disabled && dragAndDrop) {
            event.preventDefault();
            setIsDragOver(false);

            if (onChange) {
                onChange(event.dataTransfer.files);
            }
        }
    };

    const sizeClasses = {
        small: 'p-sm min-h-20',
        medium: 'p-lg min-h-30',
        large: 'p-xl min-h-40',
    };

    return (
        <div className={cn('flex flex-col gap-xs', className)}>
            {label && (
                <label
                    htmlFor={uploadId}
                    className={cn(
                        'text-sm font-medium text-gray-700 mb-xs',
                        size === 'small' && 'text-xs',
                        size === 'large' && 'text-base',
                        disabled && 'text-gray-400',
                        error && 'text-danger-600'
                    )}
                >
                    {label}
                    {required && <span className="text-danger-500 ml-xs">*</span>}
                </label>
            )}

            <div className="relative inline-block">
                <div
                    className={cn(
                        'flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md bg-gray-50 cursor-pointer transition-all duration-fast text-center',
                        sizeClasses[size],
                        isDragOver && 'border-primary-500 bg-primary-100',
                        !isDragOver && !disabled && 'hover:border-primary-500 hover:bg-primary-50',
                        disabled && 'cursor-not-allowed opacity-60 bg-gray-100',
                        error && 'border-danger-500 bg-danger-50'
                    )}
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                    onKeyDown={(e) => {
                        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                            e.preventDefault();
                            handleClick();
                        }
                    }}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        id={uploadId}
                        accept={accept}
                        multiple={multiple}
                        onChange={handleFileChange}
                        disabled={disabled}
                        required={required}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        {...props}
                    />

                    <Icon
                        name="Upload"
                        size={size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium'}
                        className="text-gray-400 mb-sm"
                    />

                    <div className="text-sm text-gray-600 mb-xs">
                        {dragAndDrop ? 'Arrastra archivos aquí o' : 'Selecciona archivos'}
                    </div>

                    <div className="text-xs text-gray-500">
                        {accept ? `Tipos permitidos: ${accept}` : 'Cualquier tipo de archivo'}
                        {multiple && ' (múltiples archivos)'}
                    </div>

                    <button
                        type="button"
                        className="mt-sm px-md py-sm bg-primary-500 text-white border-none rounded-md text-sm font-medium cursor-pointer transition-all duration-fast hover:not-disabled:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        disabled={disabled}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        Seleccionar archivos
                    </button>
                </div>
            </div>

            {helperText && (
                <div className={cn('text-sm text-gray-500 mt-xs', error && 'text-danger-600')}>
                    {helperText}
                </div>
            )}
        </div>
    );
};
