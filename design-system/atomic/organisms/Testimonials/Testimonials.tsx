import React, { useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, Text, Heading, Icon } from '../../atoms';
import { Rating } from '../../molecules';
import { TestimonialsProps, Testimonial } from './Testimonials.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Testimonials
 * Todos los valores basados en tokens del design system
 */
const testimonialsVariants = cva('w-full py-xl bg-background-secondary', {
  variants: {
    variant: {
      default: '',
      carousel: '',
      grid: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const cardVariants = cva(
  'relative p-lg rounded-lg bg-background border border-border shadow-md transition-all duration-300 hover:shadow-xl',
  {
    variants: {
      variant: {
        default: '',
        carousel: 'max-w-4xl mx-auto',
        grid: '',
      },
    },
  }
);

export const Testimonials = React.memo<TestimonialsProps>(({
  testimonials = [
    {
      id: '1',
      name: 'María González',
      role: 'Víctima de accidente',
      company: 'Accidente de Tráfico',
      content:
        'El equipo me ayudó a obtener una compensación justa después de mi accidente. Su profesionalidad y dedicación fueron excepcionales.',
      rating: 5,
      avatar: 'https://via.placeholder.com/40',
      location: 'Madrid',
      caseType: 'Accidente de Tráfico',
      compensation: '€15,000',
    },
    {
      id: '2',
      name: 'Carlos Ruiz',
      role: 'Trabajador',
      company: 'Accidente Laboral',
      content:
        'Gracias a su experiencia, pude recuperar los daños de mi accidente laboral. Recomiendo sus servicios sin dudarlo.',
      rating: 5,
      avatar: 'https://via.placeholder.com/40',
      location: 'Barcelona',
      caseType: 'Accidente Laboral',
      compensation: '€25,000',
    },
    {
      id: '3',
      name: 'Ana Martín',
      role: 'Paciente',
      company: 'Negligencia Médica',
      content:
        'Su apoyo durante todo el proceso fue fundamental. Obtuvieron una compensación que cubrió todos mis gastos médicos.',
      rating: 5,
      avatar: 'https://via.placeholder.com/40',
      location: 'Valencia',
      caseType: 'Negligencia Médica',
      compensation: '€40,000',
    },
  ],
  title = 'Lo que dicen nuestros clientes',
  subtitle = 'Casos reales con resultados excepcionales',
  variant = 'default',
  showRating = true,
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && variant === 'carousel') {
      const interval = setInterval(nextTestimonial, autoPlayInterval);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [autoPlay, autoPlayInterval, variant, currentIndex]);

  const renderTestimonial = (testimonial: Testimonial, index?: number) => (
    <motion.div
      key={testimonial.id}
      className={cardVariants({ variant })}
      initial={variant === 'carousel' ? false : { opacity: 0, y: 20 }}
      animate={variant === 'carousel' ? {} : { opacity: 1, y: 0 }}
      transition={
        variant === 'carousel' ? {} : { duration: 0.5, delay: (index || 0) * 0.1 }
      }
    >
      {/* Quote Icon */}
      <div className="absolute top-lg right-lg opacity-10">
        <Icon name="Quote" size="large" className="text-primary" />
      </div>

      {/* Rating */}
      {showRating && (
        <div className="mb-md">
          <Rating value={testimonial.rating} readOnly size="small" />
        </div>
      )}

      {/* Content */}
      <Text variant="body" className="text-text-primary mb-lg italic">
        "{testimonial.content}"
      </Text>

      {/* Case Details */}
      {(testimonial.caseType || testimonial.compensation) && (
        <div className="grid grid-cols-2 gap-md mb-lg p-md bg-background-secondary rounded-md border border-border">
          {testimonial.caseType && (
            <div className="flex flex-col gap-xs">
              <Text variant="small" className="text-text-muted uppercase tracking-wide">
                Tipo de caso:
              </Text>
              <Text variant="small" className="text-text-primary font-medium">
                {testimonial.caseType}
              </Text>
            </div>
          )}
          {testimonial.compensation && (
            <div className="flex flex-col gap-xs">
              <Text variant="small" className="text-text-muted uppercase tracking-wide">
                Compensación:
              </Text>
              <Text variant="small" className="text-success font-bold text-lg">
                {testimonial.compensation}
              </Text>
            </div>
          )}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-md">
        <Avatar src={testimonial.avatar} alt={testimonial.name} size="medium" />
        <div className="flex flex-col">
          <Text variant="small" className="font-semibold text-text-primary">
            {testimonial.name}
          </Text>
          <Text variant="small" color="secondary">
            {testimonial.role}
            {testimonial.company && ` • ${testimonial.company}`}
          </Text>
          {testimonial.location && (
            <Text variant="small" color="muted" className="flex items-center gap-xs">
              <Icon name="MapPin" size="small" />
              {testimonial.location}
            </Text>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={cn(testimonialsVariants({ variant }), className)}>
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
          <Heading level={2} variant="heading" className="text-text-primary">
            {title}
          </Heading>
        </motion.div>

        {/* Content */}
        {variant === 'carousel' ? (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                {renderTestimonial(testimonials[currentIndex])}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {showNavigation && testimonials.length > 1 && (
              <>
                <motion.button
                  onClick={prevTestimonial}
                  className={cn(
                    'absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full',
                    'w-12 h-12 flex items-center justify-center rounded-full',
                    'bg-background border border-border hover:bg-primary hover:text-text-on-primary',
                    'transition-colors shadow-lg'
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous testimonial"
                >
                  <Icon name="ChevronLeft" size="medium" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className={cn(
                    'absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full',
                    'w-12 h-12 flex items-center justify-center rounded-full',
                    'bg-background border border-border hover:bg-primary hover:text-text-on-primary',
                    'transition-colors shadow-lg'
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next testimonial"
                >
                  <Icon name="ChevronRight" size="medium" />
                </motion.button>
              </>
            )}

            {/* Dots */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-center gap-sm mt-lg">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-border hover:bg-primary/50'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : variant === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
          </div>
        ) : (
          <div className="flex flex-col gap-lg max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
          </div>
        )}
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
