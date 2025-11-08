import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { MaintenanceTemplateProps } from './Maintenance.types';
import { cn } from '../../../utils/cn';
import { Heading, Text, Icon } from '../../atoms';

const maintenanceVariants = cva(
  'min-h-screen flex items-center justify-center bg-background py-xl',
  {
    variants: {
      variant: {
        default: '',
        minimal: 'bg-background-secondary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const MaintenanceTemplate = React.memo<MaintenanceTemplateProps>(({
  title = 'Mantenimiento Programado',
  message = 'Estamos realizando mejoras en nuestro sistema para brindarte una mejor experiencia. Volveremos pronto.',
  estimatedTime = '2-4 horas',
  contactEmail = 'support@example.com',
  showLogo = true,
  logoUrl = '/logo.svg',
  variant = 'default',
  className,
}) => {
  return (
    <div className={cn(maintenanceVariants({ variant }), className)}>
      <motion.div
        className="container mx-auto px-md max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {showLogo && (
          <div className="mb-lg">
            <img src={logoUrl} alt="Logo" className="w-24 h-24 mx-auto" />
          </div>
        )}

        <div className="w-32 h-32 mx-auto mb-lg text-warning">
          <Icon name="AlertTriangle" size="large" />
        </div>

        <Heading level={1} className="text-text-primary mb-md">
          {title}
        </Heading>
        <Text variant="large" color="secondary" className="mb-xl">
          {message}
        </Text>

        <div className="p-lg bg-background-secondary rounded-lg border border-border mb-lg">
          <Text variant="small" className="font-semibold text-text-primary mb-sm">
            Tiempo estimado de mantenimiento:
          </Text>
          <Text variant="large" className="text-primary font-bold">
            {estimatedTime}
          </Text>
        </div>

        <div className="text-center">
          <Text variant="body" color="secondary">
            ¿Necesitas ayuda? Contacta a{' '}
            <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
              {contactEmail}
            </a>
          </Text>
        </div>
      </motion.div>
    </div>
  );
});

MaintenanceTemplate.displayName = 'MaintenanceTemplate';
