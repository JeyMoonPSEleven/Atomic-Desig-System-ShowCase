export interface ErrorTemplateProps {
    children?: React.ReactNode;
    errorCode?: '400' | '401' | '403' | '404' | '500' | '502' | '503';
    title?: string;
    subtitle?: string;
    description?: string;
    showHomeButton?: boolean;
    showContactButton?: boolean;
    homeButtonText?: string;
    homeButtonHref?: string;
    contactButtonText?: string;
    contactButtonHref?: string;
    className?: string;
}
