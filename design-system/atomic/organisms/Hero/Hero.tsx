import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { HeroProps } from './Hero.types';
import { cn } from '../../../utils/cn';
import { Button, Heading, Text, Image, Link } from '../../atoms';

/**
 * Definición de variantes con CVA para Hero
 * Todos los valores basados en tokens del design system
 */
const heroVariants = cva(
  'relative overflow-hidden bg-background',
  {
    variants: {
      variant: {
        default: 'py-xl lg:py-2xl',
        centered: 'py-xl lg:py-2xl text-center',
        split: 'py-xl lg:py-2xl',
        minimal: 'py-lg lg:py-xl',
        full: 'min-h-screen flex items-center py-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const containerVariants = cva('container mx-auto px-md relative z-10', {
  variants: {
    variant: {
      default: '',
      centered: '',
      split: 'lg:grid lg:grid-cols-2 lg:gap-xl lg:items-center',
      minimal: 'max-w-3xl',
      full: '',
    },
  },
});

const contentVariants = cva('flex flex-col gap-lg', {
  variants: {
    variant: {
      default: '',
      centered: 'text-center items-center',
      split: 'lg:order-1',
      minimal: 'text-center items-center',
      full: 'text-center items-center',
    },
  },
});

export const Hero = React.memo<HeroProps>(({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  image,
  backgroundImage,
  variant = 'default',
  className,
  stats,
}) => {
  const renderButton = (
    button: HeroProps['primaryButton'],
    buttonVariant: 'primary' | 'secondary' = 'primary'
  ) => {
    if (!button) return null;

    const buttonElement = (
      <Button
        variant={button.variant || buttonVariant}
        size="large"
        onClick={button.onClick}
      >
        {button.text}
      </Button>
    );

    if (button.href) {
      return <Link href={button.href}>{buttonElement}</Link>;
    }

    return buttonElement;
  };

  return (
    <section className={cn(heroVariants({ variant }), className)}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fit="cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      <div className={containerVariants({ variant })}>
        {/* Content */}
        <motion.div
          className={contentVariants({ variant })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Text
                variant="small"
                color="accent"
                className="uppercase tracking-wider font-semibold"
              >
                {subtitle}
              </Text>
            </motion.div>
          )}

          {/* Title */}
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Heading
                level={1}
                variant="display"
                className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl"
              >
                {title}
              </Heading>
            </motion.div>
          )}

          {/* Description */}
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="max-w-2xl"
            >
              <Text variant="large" color="secondary" className="leading-relaxed">
                {description}
              </Text>
            </motion.div>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <motion.div
              className={cn(
                'flex flex-col sm:flex-row gap-md pt-md',
                variant === 'centered' && 'justify-center'
              )}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {renderButton(primaryButton, 'primary')}
              {renderButton(secondaryButton, 'secondary')}
            </motion.div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-lg pt-xl border-t border-border mt-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-xs">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Image */}
        {image && (
          <motion.div
            className={cn(
              'mt-xl',
              variant === 'split' && 'lg:mt-0 lg:order-2'
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src={image.src}
              alt={image.alt || 'Hero image'}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';