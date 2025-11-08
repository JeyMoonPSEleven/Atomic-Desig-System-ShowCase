// src/design-system/atomic/atoms/Avatar/Avatar.tsx
import React from 'react';
import { AvatarProps } from './Avatar.types';
import { cn } from '../../../utils/cn';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { motion } from 'framer-motion';

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    size = 'medium',
    fallback,
    className,
    onClick,
    disabled = false,
}) => {
    const getInitials = (text: string) => {
        return text
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const avatarClasses = cn(
        'relative inline-flex items-center justify-center rounded-full bg-background-secondary text-text-secondary font-medium overflow-hidden transition-all',
        onClick && !disabled && 'cursor-pointer hover:scale-105 hover:shadow-sm',
        disabled && 'opacity-50 cursor-not-allowed',

        // Tamaños
        size === 'small' && 'w-6 h-6 text-xs',
        size === 'medium' && 'w-8 h-8 text-sm',
        size === 'large' && 'w-12 h-12 text-base',
        size === 'xl' && 'w-16 h-16 text-lg',

        className
    );

    return (
        <AvatarPrimitive.Root className={avatarClasses}>
            <AvatarPrimitive.Image
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
            <AvatarPrimitive.Fallback asChild>
                <motion.div
                    className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {fallback ? getInitials(fallback) : '?'}
                </motion.div>
            </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
    );
};