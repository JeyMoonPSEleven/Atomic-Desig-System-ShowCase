export interface DashboardTemplateProps {
    children?: React.ReactNode;
    showSidebar?: boolean;
    showHeader?: boolean;
    sidebarItems?: Array<{
        id: string;
        label: string;
        href: string;
        icon?: React.ReactNode;
    }>;
    headerTitle?: string;
    headerSubtitle?: string;
    headerProps?: any;
    sidebarProps?: any;
    className?: string;
}
