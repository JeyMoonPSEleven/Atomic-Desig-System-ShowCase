// src/design-system/atomic/molecules/Toast/Toast.types.ts
export type ToastVariant = 'success' | 'danger' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastProps {
    id?: string;
    variant?: ToastVariant;
    title?: string;
    message: string;
    duration?: number;
    onClose?: () => void;
    position?: ToastPosition;
    className?: string;
    show?: boolean;
}
