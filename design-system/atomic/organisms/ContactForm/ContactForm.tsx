import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Button, Input, Text, Heading, Checkbox, Icon } from '../../atoms';
import { Card, Form, Alert } from '../../molecules';
import { ContactFormProps, ContactFormData } from './ContactForm.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para ContactForm
 * Todos los valores basados en tokens del design system
 */
const contactFormVariants = cva('w-full py-xl bg-background', {
  variants: {
    variant: {
      default: '',
      centered: 'text-center',
      minimal: 'py-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const gridVariants = cva('grid gap-xl', {
  variants: {
    showContactInfo: {
      true: 'md:grid-cols-2',
      false: 'md:grid-cols-1 max-w-2xl mx-auto',
    },
  },
});

const contactCardVariants = cva(
  'flex items-start gap-md p-md rounded-md border border-border hover:border-primary transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-background-secondary',
        minimal: 'bg-transparent',
      },
    },
  }
);

export const ContactForm = React.memo<ContactFormProps>(({
  title = 'Consulta Gratuita',
  subtitle = 'Te ayudamos a obtener la compensación que mereces',
  showContactInfo = true,
  contactInfo = {
    phone: '+34 952 123 456',
    email: 'info@miabogadoaccidente.com',
    address: 'Calle Principal 123, Málaga',
    hours: 'Lunes a Viernes: 9:00 - 18:00',
  },
  services = [
    { value: 'accidente-trafico', label: 'Accidente de Tráfico' },
    { value: 'accidente-laboral', label: 'Accidente Laboral' },
    { value: 'negligencia-medica', label: 'Negligencia Médica' },
    { value: 'caida-publica', label: 'Caída en Vía Pública' },
    { value: 'otro', label: 'Otro' },
  ],
  onSubmit,
  variant = 'default',
  className = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (onSubmit) {
        onSubmit(data as ContactFormData);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        consent: false,
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={cn(contactFormVariants({ variant }), className)}>
      <div className="container mx-auto px-md">
        <div className={gridVariants({ showContactInfo })}>
          {/* Contact Info */}
          {showContactInfo && (
            <motion.div
              className="flex flex-col gap-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <Heading level={2} variant="heading" className="text-foreground mb-sm">
                  {title}
                </Heading>
                <Text variant="body" color="secondary">
                  {subtitle}
                </Text>
              </div>

              <div className="flex flex-col gap-md">
                {contactInfo.phone && (
                  <div className={contactCardVariants({ variant })}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Icon name="Phone" size="small" />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <Text variant="small" className="font-semibold text-foreground">
                        Teléfono
                      </Text>
                      <Text variant="body" className="text-foreground-secondary">
                        {contactInfo.phone}
                      </Text>
                    </div>
                  </div>
                )}

                {contactInfo.email && (
                  <div className={contactCardVariants({ variant })}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Icon name="Mail" size="small" />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <Text variant="small" className="font-semibold text-foreground">
                        Email
                      </Text>
                      <Text variant="body" className="text-foreground-secondary">
                        {contactInfo.email}
                      </Text>
                    </div>
                  </div>
                )}

                {contactInfo.address && (
                  <div className={contactCardVariants({ variant })}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Icon name="MapPin" size="small" />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <Text variant="small" className="font-semibold text-foreground">
                        Dirección
                      </Text>
                      <Text variant="body" className="text-foreground-secondary">
                        {contactInfo.address}
                      </Text>
                    </div>
                  </div>
                )}

                {contactInfo.hours && (
                  <div className={contactCardVariants({ variant })}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Icon name="Clock" size="small" />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <Text variant="small" className="font-semibold text-foreground">
                        Horario
                      </Text>
                      <Text variant="body" className="text-foreground-secondary">
                        {contactInfo.hours}
                      </Text>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="elevated" padding="lg">
              <Form onSubmit={handleSubmit} className="flex flex-col gap-md">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <Alert
                    variant="success"
                    title="¡Consulta enviada!"
                    message="Hemos recibido tu consulta. Te contactaremos en las próximas 24 horas."
                    dismissible
                    onDismiss={() => setSubmitStatus('idle')}
                  />
                )}

                {submitStatus === 'error' && (
                  <Alert
                    variant="danger"
                    title="Error al enviar"
                    message="Hubo un problema al enviar tu consulta. Por favor, inténtalo de nuevo."
                    dismissible
                    onDismiss={() => setSubmitStatus('idle')}
                  />
                )}

                {/* Name */}
                <div>
                  <label className="block mb-xs font-semibold text-foreground">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-xs font-semibold text-foreground">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-xs font-semibold text-foreground">Teléfono *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+34 123 456 789"
                    required
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block mb-xs font-semibold text-foreground">
                    Tipo de caso *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    required
                    className={cn(
                      'w-full px-md py-sm border rounded-md',
                      'border-border bg-background text-foreground',
                      'focus:outline-none focus:ring-2 focus:ring-primary',
                      'transition-colors'
                    )}
                  >
                    <option value="">Selecciona el tipo de caso</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-xs font-semibold text-foreground">
                    Describe tu caso *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Cuéntanos los detalles de tu accidente..."
                    className={cn(
                      'w-full px-md py-sm border rounded-md',
                      'border-border bg-background text-foreground',
                      'focus:outline-none focus:ring-2 focus:ring-primary',
                      'transition-colors resize-vertical min-h-[120px]'
                    )}
                    rows={4}
                    required
                  />
                </div>

                {/* Consent */}
                <div>
                  <Checkbox
                    checked={formData.consent}
                    onChange={(checked: boolean) => handleInputChange('consent', checked)}
                    label="Acepto el tratamiento de mis datos personales según la política de privacidad"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={isSubmitting || !formData.consent}
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  <Icon name="Send" size="small" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Consulta'}</span>
                </Button>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = 'ContactForm';
