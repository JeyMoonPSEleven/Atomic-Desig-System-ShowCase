export interface BreadcrumbItem {
    id: string;
    label: string;
    href?: string;
    icon?: React.ReactNode;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    showHome?: boolean;
    homeHref?: string;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    onItemClick?: (item: BreadcrumbItem) => void;
}
