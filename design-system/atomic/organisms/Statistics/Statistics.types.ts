export interface Statistic {
    id: string;
    value: string;
    label: string;
    icon?: React.ReactNode;
    change?: {
        value: string;
        type: 'increase' | 'decrease';
    };
    description?: string;
}

export interface StatisticsProps {
    statistics: Statistic[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'grid' | 'carousel' | 'minimal';
    showIcons?: boolean;
    animated?: boolean;
    className?: string;
}
