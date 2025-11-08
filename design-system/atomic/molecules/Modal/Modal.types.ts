// src/design-system/atomic/molecules/Modal/Modal.types.ts
import React from 'react';

export type ModalSize = 'small' | 'medium' | 'large' | 'extra-large';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: ModalSize;
    className?: string;
    closeOnOverlayClick?: boolean;
    showCloseButton?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    footer?: React.ReactNode;
}
