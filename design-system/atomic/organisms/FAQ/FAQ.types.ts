export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
}

export interface FAQProps {
    items: FAQItem[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'grouped' | 'searchable';
    className?: string;
    showCategories?: boolean;
}
