import React from 'react';
import { Button, Heading, Text, Link } from '../../atoms';
import { ErrorTemplateProps } from './Error.types';
import { cn } from '../../../utils/cn';

const ErrorTemplate: React.FC<ErrorTemplateProps> = ({
    children,
    errorCode = '404',
    title,
    subtitle,
    description,
    showHomeButton = true,
    showContactButton = true,
    homeButtonText = 'Ir al Inicio',
    homeButtonHref = '/',
    contactButtonText = 'Contactar Soporte',
    contactButtonHref = '/contacto',
    className = '',
    ...props
}) => {
    const getErrorContent = () => {
        switch (errorCode) {
            case '400':
                return {
                    title: title || 'Solicitud Incorrecta',
                    subtitle: subtitle || 'Error 400',
                    description: description || 'La solicitud que has enviado no es válida. Por favor, revisa los datos e inténtalo de nuevo.'
                };
            case '401':
                return {
                    title: title || 'No Autorizado',
                    subtitle: subtitle || 'Error 401',
                    description: description || 'Necesitas iniciar sesión para acceder a esta página.'
                };
            case '403':
                return {
                    title: title || 'Acceso Denegado',
                    subtitle: subtitle || 'Error 403',
                    description: description || 'No tienes permisos para acceder a esta página.'
                };
            case '404':
                return {
                    title: title || 'Página No Encontrada',
                    subtitle: subtitle || 'Error 404',
                    description: description || 'La página que buscas no existe o ha sido movida.'
                };
            case '500':
                return {
                    title: title || 'Error del Servidor',
                    subtitle: subtitle || 'Error 500',
                    description: description || 'Ha ocurrido un error interno del servidor. Estamos trabajando para solucionarlo.'
                };
            case '502':
                return {
                    title: title || 'Puerta de Enlace Incorrecta',
                    subtitle: subtitle || 'Error 502',
                    description: description || 'El servidor está temporalmente fuera de servicio.'
                };
            case '503':
                return {
                    title: title || 'Servicio No Disponible',
                    subtitle: subtitle || 'Error 503',
                    description: description || 'El servicio está temporalmente no disponible debido a mantenimiento.'
                };
            default:
                return {
                    title: title || 'Error Desconocido',
                    subtitle: subtitle || `Error ${errorCode}`,
                    description: description || 'Ha ocurrido un error inesperado.'
                };
        }
    };

    const errorContent = getErrorContent();

    const getErrorIcon = () => {
        switch (errorCode) {
            case '400':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                );
            case '401':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                );
            case '403':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                        <path d="M10 10l4 4" />
                        <path d="M14 10l-4 4" />
                    </svg>
                );
            case '404':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                );
            case '500':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            case '502':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                );
            case '503':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
                        <polyline points="7.5,19.79 7.5,14.6 3,16" />
                        <polyline points="21,16 16.5,14.6 16.5,19.79" />
                    </svg>
                );
            default:
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                );
        }
    };

    return (
        <div className={cn('min-h-screen flex items-center justify-center bg-background py-xl', className)} {...props}>
            <div className="container mx-auto px-md max-w-2xl text-center">
                {/* Error Illustration */}
                <div className="mb-lg">
                    <div className="w-32 h-32 mx-auto text-danger">
                        {getErrorIcon()}
                    </div>
                </div>

                {/* Error Code */}
                <div className="text-8xl font-bold text-primary mb-md">
                    {errorCode}
                </div>

                {/* Error Title */}
                <Heading level={1} variant="heading" className="text-foreground mb-md">
                    {errorContent.title}
                </Heading>

                {/* Error Subtitle */}
                <Text variant="large" color="secondary" className="mb-sm">
                    {errorContent.subtitle}
                </Text>

                {/* Error Description */}
                <Text variant="body" color="secondary" className="mb-lg max-w-lg mx-auto">
                    {errorContent.description}
                </Text>

                {/* Custom Content */}
                {children}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-md justify-center mt-xl">
                    {showHomeButton && (
                        <Link href={homeButtonHref}>
                            <Button variant="primary" size="large">
                                {homeButtonText}
                            </Button>
                        </Link>
                    )}
                    {showContactButton && (
                        <Link href={contactButtonHref}>
                            <Button variant="secondary" size="large">
                                {contactButtonText}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ErrorTemplate;
