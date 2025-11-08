export interface DashboardWidget {
    id: string;
    title: string;
    content: React.ReactNode;
    size?: 'small' | 'medium' | 'large' | 'full';
    type?: 'card' | 'chart' | 'table' | 'metric';
}

export interface DashboardProps {
    widgets: DashboardWidget[];
    title?: string;
    subtitle?: string;
    showHeader?: boolean;
    showSidebar?: boolean;
    sidebarItems?: Array<{
        id: string;
        label: string;
        href: string;
        icon?: React.ReactNode;
    }>;
    className?: string;
    onWidgetClick?: (widget: DashboardWidget) => void;
}
