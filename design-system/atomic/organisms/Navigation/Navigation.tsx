import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Logo, Link, Icon } from '../../atoms';
import { NavigationProps } from './Navigation.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Navigation
 * Todos los valores basados en tokens del design system
 */
const navigationVariants = cva(
  'w-full bg-background border-b border-border',
  {
    variants: {
      variant: {
        default: 'relative',
        sticky: 'sticky top-0 z-sticky shadow-md',
        transparent: 'absolute top-0 left-0 right-0 bg-transparent border-transparent backdrop-blur-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const Navigation = React.memo<NavigationProps>(({
  logo,
  logoText = 'Mi Abogado Accidente',
  items = [
    { label: 'Inicio', href: '/' },
    {
      label: 'Servicios',
      href: '/servicios',
      children: [
        { label: 'Accidentes de Tráfico', href: '/servicios/accidentes-trafico' },
        { label: 'Accidentes Laborales', href: '/servicios/accidentes-laborales' },
        { label: 'Negligencia Médica', href: '/servicios/negligencia-medica' },
      ],
    },
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ],
  ctaText = 'Consulta Gratuita',
  ctaHref = '/contacto',
  phone,
  address,
  className = '',
  variant = 'default',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (itemLabel: string) => {
    setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cn(navigationVariants({ variant }), className)}>
      {/* Top Bar */}
      {(phone || address) && (
        <div className="bg-background-secondary border-b border-border">
          <div className="container mx-auto px-md py-sm">
            <div className="flex items-center justify-end gap-lg text-sm">
              {phone && (
                <Link
                  href={`tel:${phone}`}
                  className="flex items-center gap-xs text-foreground-secondary hover:text-primary transition-colors"
                >
                  <Icon name="Phone" size="small" />
                  <span>{phone}</span>
                </Link>
              )}
              {address && (
                <div className="flex items-center gap-xs text-foreground-secondary">
                  <Icon name="MapPin" size="small" />
                  <span>{address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="container mx-auto px-md py-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-sm">
            <Logo text={logoText} size="medium" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-sm">
            {items.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={cn(
                        'flex items-center gap-xs px-md py-sm rounded-md',
                        'text-foreground hover:text-primary hover:bg-background-secondary',
                        'transition-colors focus:outline-none focus:ring-2 focus:ring-primary'
                      )}
                      onClick={() => handleDropdownToggle(item.label)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon name="ChevronDown" size="small" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          className={cn(
                            'absolute top-full left-0 mt-xs',
                            'bg-background border border-border rounded-md shadow-lg',
                            'min-w-[200px] py-sm z-dropdown'
                          )}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              isExternal={child.isExternal}
                              className={cn(
                                'block px-md py-sm',
                                'text-foreground hover:text-primary hover:bg-background-secondary',
                                'transition-colors'
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    isExternal={item.isExternal}
                    className={cn(
                      'flex items-center px-md py-sm rounded-md',
                      'text-foreground hover:text-primary hover:bg-background-secondary',
                      'transition-colors'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-md">
            <Link href={ctaHref || '/contacto'}>
              <Button variant="primary" size="medium">
                {ctaText}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={cn(
              'lg:hidden p-sm rounded-md',
              'hover:bg-background-secondary transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary'
            )}
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size="medium" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-border bg-background"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-md py-md">
              <nav className="flex flex-col gap-xs">
                {items.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <div className="text-foreground-muted text-sm font-semibold uppercase tracking-wide px-md py-sm">
                          {item.label}
                        </div>
                        <div className="flex flex-col gap-xs pl-md">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              isExternal={child.isExternal}
                              className={cn(
                                'flex items-center px-md py-sm rounded-md',
                                'text-foreground-secondary hover:text-primary hover:bg-background-secondary',
                                'transition-colors'
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        isExternal={item.isExternal}
                        className={cn(
                          'flex items-center px-md py-sm rounded-md',
                          'text-foreground hover:text-primary hover:bg-background-secondary',
                          'transition-colors'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-md border-t border-border mt-md">
                  <Link href={ctaHref || '/contacto'}>
                    <Button variant="primary" size="medium" isFullWidth>
                      {ctaText}
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
