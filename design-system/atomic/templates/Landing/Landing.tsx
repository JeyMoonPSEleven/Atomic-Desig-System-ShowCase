import React from 'react';
import { Navigation, Hero, Statistics, Testimonials, Newsletter, Footer } from '../../organisms';
import { LandingProps } from './Landing.types';
import { cn } from '../../../utils/cn';

const Landing: React.FC<LandingProps> = ({
    children,
    showHero = true,
    showFeatures = true,
    showTestimonials = true,
    showNewsletter = true,
    showFooter = true,
    heroTitle = 'Transforma tu Negocio',
    heroSubtitle = 'Soluciones Digitales',
    heroDescription = 'Ayudamos a empresas a crecer y prosperar con tecnología de vanguardia y estrategias innovadoras.',
    heroCtaText = 'Comenzar Ahora',
    heroCtaHref = '/contacto',
    className = '',
    ...props
}) => {
    const navigationItems = [
        { label: 'Inicio', href: '/' },
        { label: 'Servicios', href: '/servicios' },
        { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
        { label: 'Contacto', href: '/contacto' }
    ];

    const statistics = [
        {
            id: '1',
            value: '500+',
            label: 'Clientes Satisfechos',
            description: 'Empresas que confían en nosotros',
            change: { value: '+15%', type: 'increase' as const }
        },
        {
            id: '2',
            value: '€2.5M',
            label: 'Ingresos Generados',
            description: 'Para nuestros clientes',
            change: { value: '+25%', type: 'increase' as const }
        },
        {
            id: '3',
            value: '95%',
            label: 'Tasa de Éxito',
            description: 'Proyectos completados',
            change: { value: '+5%', type: 'increase' as const }
        },
        {
            id: '4',
            value: '15+',
            label: 'Años de Experiencia',
            description: 'En el mercado',
            change: { value: '+2', type: 'increase' as const }
        }
    ];

    const testimonials = [
        {
            id: '1',
            name: 'María González',
            role: 'CEO',
            company: 'TechCorp',
            content: 'Su equipo transformó completamente nuestra presencia digital. Los resultados han sido excepcionales.',
            rating: 5,
            avatar: 'https://via.placeholder.com/40',
            location: 'Madrid'
        },
        {
            id: '2',
            name: 'Carlos Ruiz',
            role: 'Director',
            company: 'InnovateLab',
            content: 'Profesionales excepcionales que entendieron perfectamente nuestras necesidades.',
            rating: 5,
            avatar: 'https://via.placeholder.com/40',
            location: 'Barcelona'
        },
        {
            id: '3',
            name: 'Ana Martín',
            role: 'Fundadora',
            company: 'StartupXYZ',
            content: 'El mejor equipo con el que hemos trabajado. Altamente recomendados.',
            rating: 5,
            avatar: 'https://via.placeholder.com/40',
            location: 'Valencia'
        }
    ];

    return (
        <div className={cn('min-h-screen bg-background', className)} {...props}>
            {/* Navigation */}
            <Navigation
                logoText="MiApp"
                items={navigationItems}
                ctaText="Consulta Gratuita"
                ctaHref="/contacto"
                variant="sticky"
            />

            <div className="w-full">
                {/* Hero Section */}
                {showHero && (
                    <Hero
                        title={heroTitle}
                        subtitle={heroSubtitle}
                        description={heroDescription}
                        primaryButton={{
                            text: heroCtaText,
                            href: heroCtaHref,
                            variant: 'primary'
                        }}
                        variant="centered"
                    />
                )}

                {/* Statistics Section */}
                {showFeatures && (
                    <Statistics
                        statistics={statistics}
                        title="Nuestros Resultados"
                        subtitle="Datos que respaldan nuestra experiencia"
                        variant="default"
                        showIcons={true}
                    />
                )}

                {/* Testimonials Section */}
                {showTestimonials && (
                    <Testimonials
                        testimonials={testimonials}
                        title="Lo que dicen nuestros clientes"
                        subtitle="Casos reales con resultados excepcionales"
                        variant="grid"
                        showRating={true}
                    />
                )}

                {/* Newsletter Section */}
                {showNewsletter && (
                    <Newsletter
                        title="Mantente Informado"
                        subtitle="Newsletter"
                        description="Recibe las últimas noticias sobre tecnología, estrategias digitales y consejos de nuestros expertos."
                        placeholder="tu@email.com"
                        buttonText="Suscribirse"
                        variant="centered"
                        showBenefits={true}
                        benefits={[
                            'Consejos exclusivos',
                            'Actualizaciones del mercado',
                            'Casos de éxito',
                            'Webinars gratuitos'
                        ]}
                    />
                )}

                {/* Custom Content */}
                {children && (
                    <section className="w-full">
                        {children}
                    </section>
                )}

                {/* Footer */}
                {showFooter && (
                    <Footer
                        logoText="MiApp"
                        description="Especialistas en soluciones digitales con más de 10 años de experiencia ayudando a empresas a crecer y prosperar."
                        links={[
                            {
                                title: 'Servicios',
                                links: [
                                    { label: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
                                    { label: 'Marketing Digital', href: '/servicios/marketing-digital' },
                                    { label: 'Consultoría', href: '/servicios/consultoria' }
                                ]
                            },
                            {
                                title: 'Empresa',
                                links: [
                                    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
                                    { label: 'Equipo', href: '/equipo' },
                                    { label: 'Carreras', href: '/carreras' }
                                ]
                            }
                        ]}
                        contact={{
                            phone: '+34 952 123 456',
                            email: 'info@miapp.com',
                            address: 'Calle Principal 123, Málaga'
                        }}
                        social={{
                            facebook: 'https://facebook.com/miapp',
                            twitter: 'https://twitter.com/miapp',
                            linkedin: 'https://linkedin.com/company/miapp',
                            instagram: 'https://instagram.com/miapp'
                        }}
                        legal={[
                            { label: 'Política de Privacidad', href: '/privacidad' },
                            { label: 'Términos de Servicio', href: '/terminos' },
                            { label: 'Cookies', href: '/cookies' }
                        ]}
                    />
                )}
            </div>
        </div>
    );
};

export default Landing;
