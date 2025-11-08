export type AvatarSize = 'small' | 'medium' | 'large' | 'xl';

export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: AvatarSize;
    fallback?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}
