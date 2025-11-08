import React from 'react';
import { LayoutBaseProps } from './LayoutBase.types';
import { cn } from '../../../utils/cn';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';

export const LayoutBase: React.FC<LayoutBaseProps> = ({
    children,
    headerProps,
    footerProps,
    showHeader = true,
    showFooter = true,
    className,
    contentClassName,
    variant = 'default',
}) => {
    // Variantes de layout usando Tailwind + Tokens
    const variantClasses: Record<NonNullable<typeof variant>, string> = {
        default: 'bg-background',
        minimal: 'bg-background',
        'full-width': 'bg-background w-full',
        sidebar: 'bg-background grid grid-cols-1 lg:grid-cols-[250px_1fr]'
    };

    return (
        <div className={cn(
            'min-h-screen flex flex-col',
            variantClasses[variant],
            className
        )}>
            {showHeader && (
                <Header
                    logoText="Boilerplate Atomic"
                    navigation={[
                        { label: 'Inicio', href: '/' },
                        { label: 'Componentes', href: '/components' },
                        { label: 'Documentación', href: '/docs' },
                        { label: 'Ejemplos', href: '/examples' },
                    ]}
                    ctaText="Comenzar"
                    ctaHref="/get-started"
                    phone="+1 (555) 123-4567"
                    {...headerProps}
                />
            )}

            <main className={cn('flex-1 w-full', contentClassName)}>
                <div className="w-full">
                    {children}
                </div>
            </main>

            {showFooter && (
                <Footer
                    logoText="Boilerplate Atomic"
                    description="Sistema de diseño completo con Atomic Design, Tailwind CSS v4 y TypeScript. Perfecto para crear aplicaciones modernas y escalables."
                    links={[
                        {
                            title: 'Recursos',
                            links: [
                                { label: 'Documentación', href: '/docs' },
                                { label: 'Guías', href: '/guides' },
                                { label: 'Ejemplos', href: '/examples' },
                                { label: 'API Reference', href: '/api' },
                            ],
                        },
                        {
                            title: 'Comunidad',
                            links: [
                                { label: 'GitHub', href: 'https://github.com/JeyMoonPSEleven/Boilerplate-AtomicDesign', isExternal: true },
                                { label: 'Discord', href: '#', isExternal: true },
                                { label: 'Twitter', href: '#', isExternal: true },
                                { label: 'Blog', href: '/blog' },
                            ],
                        },
                        {
                            title: 'Soporte',
                            links: [
                                { label: 'Centro de Ayuda', href: '/help' },
                                { label: 'Contacto', href: '/contact' },
                                { label: 'Reportar Bug', href: '/bug-report' },
                                { label: 'Solicitar Feature', href: '/feature-request' },
                            ],
                        },
                    ]}
                    contact={{
                        phone: '+1 (555) 123-4567',
                        email: 'hello@boilerplate-atomic.com',
                        address: '123 Design Street, Creative City, CC 12345',
                    }}
                    social={{
                        github: 'https://github.com/JeyMoonPSEleven/Boilerplate-AtomicDesign',
                        twitter: '#',
                        linkedin: '#',
                    }}
                    legal={[
                        { label: 'Política de Privacidad', href: '/privacy' },
                        { label: 'Términos de Servicio', href: '/terms' },
                        { label: 'Licencia MIT', href: '/license' },
                    ]}
                    {...footerProps}
                />
            )}
        </div>
    );
};
