export interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface FooterContact {
    phone?: string;
    email?: string;
    address?: string;
}

export interface FooterSocial {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    github?: string;
}

export interface FooterProps {
    logo?: React.ReactNode;
    logoText?: string;
    description?: string;
    links?: FooterSection[];
    contact?: FooterContact;
    social?: FooterSocial;
    legal?: FooterLink[];
    copyright?: string;
    variant?: 'default' | 'compact' | 'minimal';
    className?: string;
}
