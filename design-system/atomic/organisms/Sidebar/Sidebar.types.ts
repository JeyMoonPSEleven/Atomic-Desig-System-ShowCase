export interface SidebarItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    href?: string;
    children?: SidebarItem[];
    isActive?: boolean;
    isExternal?: boolean;
}

export interface SidebarProps {
    items: SidebarItem[];
    title?: string;
    logo?: string;
    logoText?: string;
    variant?: 'default' | 'collapsed' | 'floating';
    width?: 'narrow' | 'medium' | 'wide';
    showLogo?: boolean;
    showTitle?: boolean;
    className?: string;
    onItemClick?: (item: SidebarItem) => void;
}
