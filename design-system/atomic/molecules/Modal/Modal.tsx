// src/design-system/atomic/molecules/Modal/Modal.tsx
import React from 'react';
import { ModalProps } from './Modal.types';
import { cn } from '../../../utils/cn';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'medium',
    className,
    closeOnOverlayClick = true,
    showCloseButton = true,
    showHeader = true,
    showFooter = false,
    footer,
}) => {
    const overlayClasses = cn(
        'fixed inset-0 bg-black/50 flex items-center justify-center z-modal p-md'
    );

    const modalClasses = cn(
        'bg-background rounded-lg shadow-lg w-full max-h-[90vh] overflow-hidden flex flex-col',

        // Tamaños
        size === 'small' && 'max-w-sm',
        size === 'medium' && 'max-w-md',
        size === 'large' && 'max-w-lg',
        size === 'extra-large' && 'max-w-xl',

        className
    );

    const headerClasses = cn(
        'flex items-center justify-between px-lg py-md border-b border-border-light'
    );

    const titleClasses = cn(
        'text-lg font-bold text-text-primary m-0'
    );

    const closeButtonClasses = cn(
        'bg-transparent border-none cursor-pointer p-sm rounded-sm text-text-muted transition-all',
        'hover:bg-background-secondary hover:text-text-primary',
        'focus:outline-none focus:shadow-focus'
    );

    const contentClasses = cn(
        'px-lg py-md overflow-y-auto flex-1'
    );

    const footerClasses = cn(
        'px-lg py-md border-t border-border-light flex justify-end gap-sm'
    );

    return (
        <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
            <DialogPrimitive.Portal>
                <AnimatePresence>
                    {isOpen && (
                        <DialogPrimitive.Overlay asChild>
                            <motion.div
                                className={overlayClasses}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        </DialogPrimitive.Overlay>
                    )}
                </AnimatePresence>

                <DialogPrimitive.Content asChild>
                    <motion.div
                        className={modalClasses}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        {(showHeader && (title || showCloseButton)) && (
                            <div className={headerClasses}>
                                {title && (
                                    <DialogPrimitive.Title className={titleClasses}>
                                        {title}
                                    </DialogPrimitive.Title>
                                )}
                                {showCloseButton && (
                                    <DialogPrimitive.Close asChild>
                                        <button
                                            className={closeButtonClasses}
                                            aria-label="Cerrar modal"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </DialogPrimitive.Close>
                                )}
                            </div>
                        )}

                        {/* Content */}
                        <DialogPrimitive.Description asChild>
                            <div className={contentClasses}>
                                {children}
                            </div>
                        </DialogPrimitive.Description>

                        {/* Footer */}
                        {showFooter && footer && (
                            <div className={footerClasses}>
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    );
};