export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
    isExternal?: boolean;
}

export interface NavigationProps {
    logo?: string;
    logoText?: string;
    items: NavigationItem[];
    ctaText?: string;
    ctaHref?: string;
    phone?: string;
    address?: string;
    className?: string;
    variant?: 'default' | 'transparent' | 'sticky';
}
