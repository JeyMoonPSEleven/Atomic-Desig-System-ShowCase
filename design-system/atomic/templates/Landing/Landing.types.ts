export interface LandingProps {
    children?: React.ReactNode;
    showHero?: boolean;
    showFeatures?: boolean;
    showTestimonials?: boolean;
    showNewsletter?: boolean;
    showFooter?: boolean;
    heroTitle?: string;
    heroSubtitle?: string;
    heroDescription?: string;
    heroCtaText?: string;
    heroCtaHref?: string;
    className?: string;
}
