export interface HeroButton {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

export interface HeroImage {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
}

export interface HeroStat {
    value: string;
    label: string;
}

export interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    primaryButton?: HeroButton;
    secondaryButton?: HeroButton;
    image?: HeroImage;
    backgroundImage?: string;
    variant?: 'default' | 'centered' | 'split' | 'minimal' | 'full';
    className?: string;
    stats?: HeroStat[];
}
