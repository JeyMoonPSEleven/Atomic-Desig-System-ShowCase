import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Text, Heading, Icon } from '../../atoms';
import { StatisticsProps, Statistic } from './Statistics.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Statistics
 * Todos los valores basados en tokens del design system
 */
const statisticsVariants = cva('w-full py-xl bg-background', {
  variants: {
    variant: {
      default: '',
      minimal: 'py-lg',
      cards: 'bg-background-secondary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const gridVariants = cva('grid gap-lg', {
  variants: {
    variant: {
      default: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      minimal: 'grid-cols-1 md:grid-cols-4 gap-md',
      cards: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    },
  },
});

const cardVariants = cva('flex flex-col items-center text-center p-lg rounded-lg transition-all duration-300', {
  variants: {
    variant: {
      default: 'hover:bg-background-secondary',
      minimal: '',
      cards: 'bg-background border border-border hover:border-primary hover:shadow-lg',
    },
  },
});

export const Statistics = React.memo<StatisticsProps>(({
  statistics = [
    {
      id: '1',
      value: '500+',
      label: 'Clientes Satisfechos',
      description: 'Casos resueltos exitosamente',
      change: {
        value: '+15%',
        type: 'increase',
      },
    },
    {
      id: '2',
      value: '€2.5M',
      label: 'Compensaciones Obtenidas',
      description: 'En compensaciones para nuestros clientes',
      change: {
        value: '+25%',
        type: 'increase',
      },
    },
    {
      id: '3',
      value: '95%',
      label: 'Tasa de Éxito',
      description: 'Casos ganados en los últimos 2 años',
      change: {
        value: '+5%',
        type: 'increase',
      },
    },
    {
      id: '4',
      value: '15+',
      label: 'Años de Experiencia',
      description: 'Especializados en accidentes',
      change: {
        value: '+2',
        type: 'increase',
      },
    },
  ],
  title = 'Nuestros Resultados',
  subtitle = 'Datos que respaldan nuestra experiencia',
  variant = 'default',
  showIcons = true,
  animated = true,
  className = '',
}) => {
  const getIconComponent = (stat: Statistic) => {
    if (stat.icon) return stat.icon;

    // Default icons based on label
    const label = stat.label.toLowerCase();
    if (label.includes('cliente') || label.includes('persona')) {
      return <Icon name="Users" size="medium" />;
    } else if (label.includes('caso') || label.includes('éxito')) {
      return <Icon name="Award" size="medium" />;
    } else if (label.includes('tiempo') || label.includes('año')) {
      return <Icon name="Clock" size="medium" />;
    } else {
      return <Icon name="TrendingUp" size="medium" />;
    }
  };

  return (
    <section className={cn(statisticsVariants({ variant }), className)}>
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
          <Heading level={2} variant="heading" className="text-foreground">
            {title}
          </Heading>
        </motion.div>

        {/* Statistics Grid */}
        <div className={gridVariants({ variant })}>
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={cardVariants({ variant })}
              initial={animated ? { opacity: 0, y: 20 } : {}}
              animate={animated ? { opacity: 1, y: 0 } : {}}
              transition={animated ? { duration: 0.5, delay: index * 0.1 } : {}}
            >
              {/* Icon */}
              {showIcons && (
                <div className="w-16 h-16 mb-md flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {getIconComponent(stat)}
                </div>
              )}

              {/* Value */}
              <div className="mb-sm">
                <Text variant="large" className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </Text>
              </div>

              {/* Label */}
              <div className="mb-xs">
                <Text variant="body" className="font-semibold text-foreground">
                  {stat.label}
                </Text>
              </div>

              {/* Change Indicator */}
              {stat.change && (
                <div className="flex items-center gap-xs mb-xs">
                  <Icon
                    name={stat.change.type === 'increase' ? 'TrendingUp' : 'TrendingDown'}
                    size="small"
                    className={cn(
                      'transition-colors',
                      stat.change.type === 'increase' ? 'text-success' : 'text-danger'
                    )}
                  />
                  <Text
                    variant="small"
                    className={cn(
                      'font-medium',
                      stat.change.type === 'increase' ? 'text-success' : 'text-danger'
                    )}
                  >
                    {stat.change.value}
                  </Text>
                </div>
              )}

              {/* Description */}
              {stat.description && (
                <div>
                  <Text variant="small" className="text-foreground-secondary">
                    {stat.description}
                  </Text>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-xl space-y-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Text variant="body" color="secondary">
            Datos actualizados al{' '}
            {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}
          </Text>
          <Text variant="small" color="muted">
            * Los resultados pueden variar según las circunstancias específicas de cada caso
          </Text>
        </motion.div>
      </div>
    </section>
  );
});

Statistics.displayName = 'Statistics';
