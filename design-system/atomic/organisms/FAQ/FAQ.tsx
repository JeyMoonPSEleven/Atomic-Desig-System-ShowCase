import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Heading, Text, Button } from '../../atoms';
import { Accordion } from '../../molecules';
import { FAQProps, FAQItem } from './FAQ.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para FAQ
 * Todos los valores basados en tokens del design system
 */
const faqVariants = cva('w-full py-xl bg-background', {
  variants: {
    variant: {
      default: '',
      grouped: '',
      minimal: 'py-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const FAQ = React.memo<FAQProps>(({
  items = [
    {
      id: '1',
      question: '¿Cuánto tiempo tarda un proceso de compensación?',
      answer:
        'El tiempo puede variar según la complejidad del caso, pero generalmente oscila entre 6 meses y 2 años. Casos más simples pueden resolverse en 3-6 meses.',
      category: 'Proceso',
    },
    {
      id: '2',
      question: '¿Qué documentos necesito para iniciar mi caso?',
      answer:
        'Necesitarás el parte de accidente, informes médicos, facturas de gastos, fotografías del accidente y cualquier comunicación con las aseguradoras.',
      category: 'Documentación',
    },
    {
      id: '3',
      question: '¿Cuánto cuesta contratar sus servicios?',
      answer:
        'Trabajamos con honorarios de éxito, lo que significa que solo cobramos si obtenemos una compensación favorable para ti. No hay costos iniciales.',
      category: 'Costos',
    },
    {
      id: '4',
      question: '¿Puedo cambiar de abogado durante el proceso?',
      answer:
        'Sí, tienes derecho a cambiar de abogado en cualquier momento. Te ayudaremos con la transición para que no se interrumpa tu caso.',
      category: 'Proceso',
    },
    {
      id: '5',
      question: '¿Qué tipos de accidentes cubren?',
      answer:
        'Cubrimos accidentes de tráfico, laborales, caídas en vía pública, negligencia médica y otros tipos de accidentes personales.',
      category: 'Cobertura',
    },
  ],
  title = 'Preguntas Frecuentes',
  subtitle = 'Encuentra respuestas a las dudas más comunes',
  variant = 'default',
  className = '',
  showCategories = false,
}) => {
  // Group items by category if needed
  const groupedItems = showCategories
    ? items.reduce((acc, item) => {
        const category = item.category || 'General';
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {} as Record<string, FAQItem[]>)
    : { General: items };

  const accordionItems = items.map((item) => ({
    id: item.id,
    title: item.question,
    content: (
      <div className="p-md">
        <Text variant="body" color="secondary">
          {item.answer}
        </Text>
      </div>
    ),
  }));

  return (
    <section className={cn(faqVariants({ variant }), className)}>
      <div className="container mx-auto px-md max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-xl"
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

        {/* Content */}
        {variant === 'grouped' && showCategories ? (
          <div className="flex flex-col gap-xl">
            {Object.entries(groupedItems).map(([category, categoryItems]) => (
              <motion.div
                key={category}
                className="flex flex-col gap-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading
                  level={3}
                  variant="subheading"
                  className="text-foreground border-b border-border pb-sm"
                >
                  {category}
                </Heading>
                <Accordion
                  items={categoryItems.map((item) => ({
                    id: item.id,
                    title: item.question,
                    content: (
                      <div className="p-md">
                        <Text variant="body" color="secondary">
                          {item.answer}
                        </Text>
                      </div>
                    ),
                  }))}
                  allowMultiple
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex flex-col gap-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion items={accordionItems} allowMultiple />
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-xl p-lg bg-background-secondary rounded-lg border border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Text variant="body" color="secondary" className="mb-md">
            ¿No encuentras la respuesta que buscas?
          </Text>
          <Button variant="primary" size="large" onClick={() => (window.location.href = '/contacto')}>
            Contacta con nosotros
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';
