export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    consent: boolean;
}

export interface ContactInfo {
    phone?: string;
    email?: string;
    address?: string;
    hours?: string;
}

export interface ServiceOption {
    value: string;
    label: string;
}

export interface ContactFormProps {
    title?: string;
    subtitle?: string;
    showContactInfo?: boolean;
    contactInfo?: ContactInfo;
    services?: ServiceOption[];
    onSubmit?: (data: ContactFormData) => void;
    className?: string;
}
