export type LogoSize = 'small' | 'medium' | 'large';

export interface LogoProps {
    src?: string;
    alt?: string;
    text?: string;
    size?: LogoSize;
    className?: string;
    onClick?: () => void;
    href?: string;
}
