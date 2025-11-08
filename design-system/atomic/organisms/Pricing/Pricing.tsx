import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Button, Text, Heading, Icon, Badge } from '../../atoms';
import { PricingProps, PricingPlan } from './Pricing.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Pricing
 * Todos los valores basados en tokens del design system
 */
const pricingVariants = cva('w-full py-xl bg-background', {
  variants: {
    variant: {
      default: '',
      dark: 'bg-background-secondary',
      gradient: 'bg-gradient-to-b from-background to-background-secondary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const cardVariants = cva(
  'relative flex flex-col p-lg rounded-lg border transition-all duration-300 hover:shadow-xl',
  {
    variants: {
      isPopular: {
        true: 'border-primary bg-background shadow-lg scale-105 lg:scale-110',
        false: 'border-border bg-background hover:border-primary',
      },
      isRecommended: {
        true: 'border-secondary bg-background shadow-md',
        false: '',
      },
    },
    defaultVariants: {
      isPopular: false,
      isRecommended: false,
    },
  }
);

export const Pricing = React.memo<PricingProps>(({
  title = 'Planes de Precios',
  subtitle = 'Pricing',
  description = 'Elige el plan que mejor se adapte a tus necesidades',
  plans = [
    {
      id: 'basic',
      name: 'Básico',
      description: 'Perfecto para empezar',
      price: 29,
      currency: '€',
      period: '/mes',
      features: ['Consultas básicas', 'Soporte por email', 'Documentos estándar', 'Hasta 5 casos'],
      buttonText: 'Comenzar',
      buttonVariant: 'secondary',
    },
    {
      id: 'professional',
      name: 'Profesional',
      description: 'Para profesionales exigentes',
      price: 79,
      currency: '€',
      period: '/mes',
      features: [
        'Consultas ilimitadas',
        'Soporte prioritario',
        'Documentos personalizados',
        'Casos ilimitados',
        'Análisis avanzado',
        'Integración API',
      ],
      isPopular: true,
      buttonText: 'Más Popular',
      buttonVariant: 'primary',
    },
    {
      id: 'enterprise',
      name: 'Empresa',
      description: 'Para grandes organizaciones',
      price: 199,
      currency: '€',
      period: '/mes',
      features: [
        'Todo del plan Profesional',
        'Soporte 24/7',
        'Consultoría personalizada',
        'Integración completa',
        'Reportes avanzados',
        'SLA garantizado',
      ],
      buttonText: 'Contactar',
      buttonVariant: 'secondary',
    },
  ],
  onSelectPlan,
  variant = 'default',
  showCurrency = true,
  showPeriod = true,
  className = '',
}) => {
  const handleSelectPlan = (plan: PricingPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan);
    }
  };

  return (
    <section className={cn(pricingVariants({ variant }), className)}>
      <div className="container mx-auto px-md">
        {/* Header */}
        <motion.div
          className="text-center mb-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text variant="small" color="accent" className="uppercase tracking-wider font-semibold mb-sm">
            {subtitle}
          </Text>
          <Heading level={2} variant="heading" className="text-text-primary mb-md">
            {title}
          </Heading>
          <Text variant="body" color="secondary">
            {description}
          </Text>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={cardVariants({
                isPopular: plan.isPopular,
                isRecommended: plan.isRecommended,
              })}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary" size="medium">
                    Más Popular
                  </Badge>
                </div>
              )}
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" size="medium">
                    Recomendado
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-lg">
                <Heading level={3} variant="subheading" className="text-text-primary mb-sm">
                  {plan.name}
                </Heading>
                <Text variant="body" color="secondary" className="mb-md">
                  {plan.description}
                </Text>

                {/* Price */}
                <div className="flex items-baseline justify-center gap-xs">
                  {showCurrency && (
                    <span className="text-2xl font-bold text-text-primary">{plan.currency}</span>
                  )}
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  {showPeriod && (
                    <span className="text-lg text-text-secondary">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-sm mb-lg flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-sm">
                    <Icon name="CheckCircle" size="small" className="text-success mt-1 flex-shrink-0" />
                    <Text variant="small" className="text-text-secondary">
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.buttonVariant || 'primary'}
                size="large"
                onClick={() => handleSelectPlan(plan)}
                className="w-full"
              >
                {plan.buttonText || 'Seleccionar'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';
