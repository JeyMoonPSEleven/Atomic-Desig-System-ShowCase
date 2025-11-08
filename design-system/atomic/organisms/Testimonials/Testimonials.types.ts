export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company?: string;
    content: string;
    rating: number;
    avatar?: string;
    location?: string;
    caseType?: string;
    compensation?: string;
}

export interface TestimonialsProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'carousel' | 'grid';
    showRating?: boolean;
    showNavigation?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    className?: string;
}
