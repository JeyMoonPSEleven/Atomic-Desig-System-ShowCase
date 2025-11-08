export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
}

export interface HeaderProps {
    logo?: React.ReactNode;
    logoText?: string;
    navigation?: NavigationItem[];
    ctaText?: string;
    ctaHref?: string;
    phone?: string;
    address?: string;
    variant?: 'default' | 'compact' | 'full' | 'transparent' | 'centered';
    className?: string;
    onMenuToggle?: () => void;
    isMenuOpen?: boolean;
}
