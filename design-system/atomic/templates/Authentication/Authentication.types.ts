export interface AuthenticationTemplateProps {
    children?: React.ReactNode;
    variant?: 'login' | 'register' | 'forgot-password' | 'reset-password';
    title?: string;
    subtitle?: string;
    showLogo?: boolean;
    logoText?: string;
    backgroundImage?: string;
    className?: string;
}
