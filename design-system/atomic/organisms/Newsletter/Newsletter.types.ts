export interface NewsletterProps {
    title?: string;
    subtitle?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
    variant?: 'default' | 'centered' | 'minimal' | 'inline';
    showBenefits?: boolean;
    benefits?: string[];
    className?: string;
}
