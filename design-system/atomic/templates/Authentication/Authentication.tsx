import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Logo, Text, Heading } from '../../atoms';
import { AuthenticationTemplateProps } from './Authentication.types';
import { cn } from '../../../utils/cn';

const authVariants = cva('min-h-screen grid md:grid-cols-2', {
  variants: {
    variant: {
      login: '',
      register: '',
      'forgot-password': '',
      'reset-password': '',
    },
  },
  defaultVariants: {
    variant: 'login',
  },
});

export const AuthenticationTemplate = React.memo<AuthenticationTemplateProps>(({
  children,
  variant = 'login',
  title,
  subtitle,
  showLogo = true,
  logoText = 'MiApp',
  backgroundImage,
  className = '',
}) => {
  const getDefaultTitle = () => {
    const titles = {
      login: 'Iniciar Sesión',
      register: 'Crear Cuenta',
      'forgot-password': 'Recuperar Contraseña',
      'reset-password': 'Restablecer Contraseña',
    };
    return titles[variant] || 'Autenticación';
  };

  const getDefaultSubtitle = () => {
    const subtitles = {
      login: 'Accede a tu cuenta para continuar',
      register: 'Crea una nueva cuenta para comenzar',
      'forgot-password': 'Ingresa tu email para recuperar tu contraseña',
      'reset-password': 'Ingresa tu nueva contraseña',
    };
    return subtitles[variant] || 'Completa el proceso de autenticación';
  };

  const getRightPanelContent = () => {
    const contents = {
      login: {
        title: '¡Bienvenido de vuelta!',
        subtitle: 'Accede a tu cuenta',
        description:
          'Gestiona tus proyectos, colabora con tu equipo y mantén el control total de tu trabajo desde un solo lugar.',
      },
      register: {
        title: 'Únete a nosotros',
        subtitle: 'Crea tu cuenta',
        description:
          'Forma parte de nuestra comunidad y descubre todas las herramientas que tenemos para ofrecerte.',
      },
      'forgot-password': {
        title: 'No te preocupes',
        subtitle: 'Recupera tu acceso',
        description: 'Te ayudaremos a recuperar el acceso a tu cuenta de forma rápida y segura.',
      },
      'reset-password': {
        title: 'Casi listo',
        subtitle: 'Nueva contraseña',
        description: 'Establece una nueva contraseña segura para proteger tu cuenta.',
      },
    };
    return contents[variant] || contents.login;
  };

  const rightPanelContent = getRightPanelContent();

  return (
    <div className={cn(authVariants({ variant }), className)}>
      {/* Left Panel - Authentication Form */}
      <motion.div
        className="flex items-center justify-center p-lg bg-background"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md">
          <div className="mb-xl">
            {showLogo && (
              <div className="mb-lg">
                <Logo text={logoText} size="large" />
              </div>
            )}
            <Heading level={1} variant="heading" className="text-foreground mb-sm">
              {title || getDefaultTitle()}
            </Heading>
            <Text variant="body" color="secondary">
              {subtitle || getDefaultSubtitle()}
            </Text>
          </div>

          <div className="mb-lg">
            {children || (
              <div className="text-center py-xl">
                <Text variant="body" color="secondary">
                  Contenido de autenticación personalizado
                </Text>
              </div>
            )}
          </div>

          <div className="text-center">
            {variant === 'login' && (
              <Text variant="small" color="secondary">
                ¿No tienes cuenta?{' '}
                <a href="/register" className="text-primary hover:underline">
                  Regístrate aquí
                </a>
              </Text>
            )}
            {variant === 'register' && (
              <Text variant="small" color="secondary">
                ¿Ya tienes cuenta?{' '}
                <a href="/login" className="text-primary hover:underline">
                  Inicia sesión aquí
                </a>
              </Text>
            )}
            {variant === 'forgot-password' && (
              <Text variant="small" color="secondary">
                ¿Recordaste tu contraseña?{' '}
                <a href="/login" className="text-primary hover:underline">
                  Inicia sesión aquí
                </a>
              </Text>
            )}
            {variant === 'reset-password' && (
              <Text variant="small" color="secondary">
                ¿Tienes problemas?{' '}
                <a href="/contact" className="text-primary hover:underline">
                  Contacta soporte
                </a>
              </Text>
            )}
          </div>
        </div>
      </motion.div>

      {/* Right Panel - Branding/Info */}
      <motion.div
        className={cn(
          'hidden md:flex items-center justify-center p-xl',
          'bg-gradient-to-br from-primary to-primary-600 text-primary-foreground',
          backgroundImage && 'bg-cover bg-center'
        )}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-md text-center">
          <Heading level={2} variant="heading" className="text-white mb-md">
            {rightPanelContent.title}
          </Heading>
          <Text variant="large" className="text-white/90 mb-md">
            {rightPanelContent.subtitle}
          </Text>
          <Text variant="body" className="text-white/80">
            {rightPanelContent.description}
          </Text>
        </div>
      </motion.div>
    </div>
  );
});

AuthenticationTemplate.displayName = 'AuthenticationTemplate';
