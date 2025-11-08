export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
export type ImagePosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    fit?: ImageFit;
    position?: ImagePosition;
    overlay?: boolean;
    overlayOpacity?: number;
    loading?: 'lazy' | 'eager';
    className?: string;
    onClick?: () => void;
    onLoad?: () => void;
    onError?: () => void;
}
