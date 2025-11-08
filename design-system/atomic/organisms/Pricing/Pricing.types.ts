export interface PricingPlan {
    id: string;
    name: string;
    description: string;
    price: number;
    currency?: string;
    period?: string;
    features: string[];
    isPopular?: boolean;
    isRecommended?: boolean;
    buttonText?: string;
    buttonVariant?: 'primary' | 'secondary';
}

export interface PricingProps {
    title?: string;
    subtitle?: string;
    description?: string;
    plans: PricingPlan[];
    onSelectPlan?: (plan: PricingPlan) => void;
    variant?: 'default' | 'centered' | 'minimal';
    showCurrency?: boolean;
    showPeriod?: boolean;
    className?: string;
}
