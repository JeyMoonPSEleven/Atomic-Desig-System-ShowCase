import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Button, Input, Text, Heading, Icon } from '../../atoms';
import { Alert } from '../../molecules';
import { NewsletterProps } from './Newsletter.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Newsletter
 * Todos los valores basados en tokens del design system
 */
const newsletterVariants = cva('w-full py-xl bg-background-secondary', {
  variants: {
    variant: {
      default: '',
      centered: 'text-center',
      minimal: 'py-lg',
      inline: 'py-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const containerVariants = cva('container mx-auto px-md', {
  variants: {
    variant: {
      default: 'grid md:grid-cols-2 gap-xl items-center',
      centered: 'max-w-2xl mx-auto text-center',
      minimal: 'max-w-4xl mx-auto',
      inline: 'flex flex-col md:flex-row gap-lg items-center',
    },
  },
});

const contentVariants = cva('flex flex-col gap-md', {
  variants: {
    variant: {
      default: '',
      centered: 'items-center',
      minimal: 'items-center text-center',
      inline: 'flex-1',
    },
  },
});

const formVariants = cva('flex flex-col gap-md p-lg bg-background rounded-lg border border-border shadow-md', {
  variants: {
    variant: {
      default: '',
      centered: 'max-w-lg mx-auto w-full',
      minimal: 'max-w-lg mx-auto w-full',
      inline: 'flex-1',
    },
  },
});

export const Newsletter = React.memo<NewsletterProps>(({
  title = 'Mantente Informado',
  subtitle = 'Newsletter',
  description = 'Recibe las últimas noticias sobre accidentes de tráfico, cambios legales y consejos de nuestros expertos.',
  placeholder = 'tu@email.com',
  buttonText = 'Suscribirse',
  onSubmit,
  variant = 'default',
  showBenefits = true,
  benefits = [
    'Consejos legales exclusivos',
    'Actualizaciones sobre cambios en la ley',
    'Casos de éxito recientes',
    'Seminarios y eventos gratuitos',
  ],
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Por favor, introduce un email válido');
      return;
    }

    setStatus('loading');

    try {
      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (onSubmit) {
        onSubmit(email);
      }

      setStatus('success');
      setMessage('¡Te has suscrito correctamente!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Error al suscribirse. Inténtalo de nuevo.');
    }
  };

  return (
    <section className={cn(newsletterVariants({ variant }), className)}>
      <div className={containerVariants({ variant })}>
        {/* Content */}
        <motion.div
          className={contentVariants({ variant })}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text variant="small" color="accent" className="uppercase tracking-wider font-semibold">
            {subtitle}
          </Text>
          <Heading level={2} variant="heading" className="text-foreground">
            {title}
          </Heading>
          <Text variant="body" color="secondary">
            {description}
          </Text>

          {/* Benefits */}
          {showBenefits && benefits.length > 0 && variant !== 'minimal' && (
            <ul className="flex flex-col gap-sm mt-md">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Icon name="CheckCircle" size="small" className="text-success flex-shrink-0" />
                  <Text variant="small" className="text-foreground-secondary">
                    {benefit}
                  </Text>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Form */}
        <motion.div
          className={formVariants({ variant })}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-md">
            {/* Status Messages */}
            {status === 'success' && (
              <Alert
                variant="success"
                title="¡Suscrito!"
                message={message}
                dismissible
                onDismiss={() => setStatus('idle')}
              />
            )}

            {status === 'error' && (
              <Alert
                variant="danger"
                title="Error"
                message={message}
                dismissible
                onDismiss={() => setStatus('idle')}
              />
            )}

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-md top-1/2 transform -translate-y-1/2 text-foreground-muted pointer-events-none">
                <Icon name="Mail" size="small" />
              </div>
              <Input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="pl-10"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={status === 'loading'}
              isLoading={status === 'loading'}
              className="w-full"
            >
              <Icon name="Send" size="small" />
              <span>{status === 'loading' ? 'Suscribiendo...' : buttonText}</span>
            </Button>

            {/* Privacy Notice */}
            <Text variant="small" color="muted" className="text-center">
              Al suscribirte, aceptas recibir emails informativos. Puedes darte de baja en cualquier
              momento.
            </Text>
          </form>
        </motion.div>
      </div>
    </section>
  );
});

Newsletter.displayName = 'Newsletter';
