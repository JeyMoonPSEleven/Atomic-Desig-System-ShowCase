import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderProps, NavigationItem } from './Header.types';
import { cn } from '../../../utils/cn';
import { Button, Logo, Icon, Link } from '../../atoms';

/**
 * Definición de variantes con CVA para Header
 * Todos los valores basados en tokens del design system
 */
const headerVariants = cva(
  'w-full bg-background border-b border-border sticky top-0 z-sticky shadow-sm',
  {
    variants: {
      variant: {
        default: 'py-md',
        compact: 'py-sm',
        full: 'py-lg',
        transparent: 'bg-transparent border-transparent backdrop-blur-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const containerVariants = cva(
  'container mx-auto px-md flex items-center justify-between',
  {
    variants: {
      centered: {
        true: 'justify-center',
        false: 'justify-between',
      },
    },
  }
);

export const Header = React.memo<HeaderProps>(({
  logo,
  logoText = 'MiApp',
  navigation = [],
  ctaText,
  ctaHref,
  phone,
  address,
  variant = 'default',
  className,
  onMenuToggle,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    onMenuToggle?.();
  };

  const renderNavigationItem = (item: NavigationItem, index: number) => (
    <li key={index}>
      <Link
        href={item.href}
        className={cn(
          'text-text-primary hover:text-primary transition-colors py-sm px-md rounded-md hover:bg-background-secondary',
          'flex items-center gap-xs'
        )}
      >
        {item.label}
        {item.children && item.children.length > 0 && (
          <Icon name="ChevronDown" size="small" />
        )}
      </Link>
    </li>
  );

  return (
    <header className={cn(headerVariants({ variant }), className)}>
      <div className={cn(containerVariants({ centered: variant === 'centered' }))}>
        {/* Logo Section */}
        <div className="flex items-center">
          {logo || <Logo text={logoText} size="medium" />}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-xs">
            {navigation.map(renderNavigationItem)}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-md">
          {phone && (
            <Link 
              href={`tel:${phone}`}
              className="flex items-center gap-xs text-text-secondary hover:text-primary transition-colors"
            >
              <Icon name="Phone" size="small" />
              <span className="text-sm">{phone}</span>
            </Link>
          )}
          {ctaText && ctaHref && (
            <Link href={ctaHref}>
              <Button variant="primary" size="medium">
                {ctaText}
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={cn(
            'lg:hidden p-sm rounded-md hover:bg-background-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
            mobileMenuOpen && 'bg-background-secondary'
          )}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          whileTap={{ scale: 0.95 }}
        >
          <Icon
            name={mobileMenuOpen ? "X" : "Menu"}
            size="medium"
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-border bg-background"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-md py-md">
              <nav className="mb-md">
                <ul className="flex flex-col gap-xs">
                  {navigation.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-md px-md rounded-md hover:bg-background-secondary text-text-primary transition-colors"
                      >
                        <span>{item.label}</span>
                        {item.children && item.children.length > 0 && (
                          <Icon name="ChevronRight" size="small" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-md pt-md border-t border-border">
                {phone && (
                  <Link
                    href={`tel:${phone}`}
                    className="flex items-center gap-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    <Icon name="Phone" size="small" />
                    <span>{phone}</span>
                  </Link>
                )}
                {address && (
                  <div className="flex items-center gap-sm text-text-secondary">
                    <Icon name="MapPin" size="small" />
                    <span className="text-sm">{address}</span>
                  </div>
                )}
                {ctaText && ctaHref && (
                  <Link href={ctaHref}>
                    <Button variant="primary" size="medium" isFullWidth>
                      {ctaText}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = 'Header';
