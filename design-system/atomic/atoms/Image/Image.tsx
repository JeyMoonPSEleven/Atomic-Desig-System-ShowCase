// src/design-system/atomic/atoms/Image/Image.tsx
import React, { useState } from 'react';
import { ImageProps } from './Image.types';
import { cn } from '../../../utils/cn';

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    fit = 'cover',
    position = 'center',
    overlay = false,
    overlayOpacity = 0.5,
    loading = 'lazy',
    className,
    onClick,
    onLoad,
    onError,
}) => {
    const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');

    const handleLoad = () => {
        setImageState('loaded');
        onLoad?.();
    };

    const handleError = () => {
        setImageState('error');
        onError?.();
    };

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const containerStyle: React.CSSProperties = {
        width: width || '100%',
        height: height || 'auto',
    };

    const overlayStyle: React.CSSProperties = {
        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    };

    const fitClasses = {
        cover: 'object-cover',
        contain: 'object-contain',
        fill: 'object-fill',
        none: 'object-none',
        'scale-down': 'object-scale-down',
    };

    const positionClasses: Record<typeof position, string> = {
        center: 'object-center',
        top: 'object-top',
        bottom: 'object-bottom',
        left: 'object-left',
        right: 'object-right',
        'top-left': 'object-left-top',
        'top-right': 'object-right-top',
        'bottom-left': 'object-left-bottom',
        'bottom-right': 'object-right-bottom',
    };

    return (
        <div
            className={cn(
                'relative overflow-hidden',
                onClick && 'cursor-pointer',
                className
            )}
            style={containerStyle}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {imageState === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center bg-background-secondary">
                    <span className="text-text-muted">Cargando...</span>
                </div>
            )}

            {imageState === 'error' && (
                <div className="absolute inset-0 flex items-center justify-center bg-background-secondary">
                    <span className="text-danger-600">Error al cargar imagen</span>
                </div>
            )}

            <img
                src={src}
                alt={alt}
                className={cn(
                    'w-full h-full',
                    fitClasses[fit],
                    positionClasses[position],
                    imageState !== 'loaded' && 'hidden'
                )}
                loading={loading}
                onLoad={handleLoad}
                onError={handleError}
                style={{ display: imageState === 'loaded' ? 'block' : 'none' }}
            />

            {overlay && imageState === 'loaded' && (
                <div
                    className="absolute inset-0"
                    style={overlayStyle}
                />
            )}
        </div>
    );
};
