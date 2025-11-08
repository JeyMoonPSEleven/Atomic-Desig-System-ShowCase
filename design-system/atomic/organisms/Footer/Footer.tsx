import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { FooterProps, FooterSection } from './Footer.types';
import { cn } from '../../../utils/cn';
import { Logo, Text, Link, Icon } from '../../atoms';

/**
 * Definición de variantes con CVA para Footer
 * Todos los valores basados en tokens del design system
 */
const footerVariants = cva(
  'w-full bg-background-secondary border-t border-border',
  {
    variants: {
      variant: {
        default: 'py-xl',
        compact: 'py-lg',
        minimal: 'py-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const containerVariants = cva('container mx-auto px-md');

const gridVariants = cva(
  'grid gap-xl mb-lg',
  {
    variants: {
      columns: {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      },
    },
    defaultVariants: {
      columns: 4,
    },
  }
);

export const Footer = React.memo<FooterProps>(({
  logo,
  logoText = 'MiApp',
  description = 'Especialistas en soluciones digitales con más de 10 años de experiencia ayudando a empresas a crecer y prosperar.',
  links = [],
  contact,
  social,
  legal = [],
  copyright = `© ${new Date().getFullYear()} MiApp. Todos los derechos reservados.`,
  variant = 'default',
  className,
}) => {
  const socialIcons: Record<string, string> = {
    facebook: 'Facebook',
    twitter: 'Twitter',
    instagram: 'Instagram',
    linkedin: 'Linkedin',
    youtube: 'Youtube',
    github: 'Github',
  };

  const renderSocialLinks = () => {
    if (!social) return null;

    return (
      <div className="flex items-center gap-sm mt-md">
        {Object.entries(social).map(([platform, url]) => {
          if (!url) return null;
          const iconName = socialIcons[platform];
          return (
            <motion.div key={platform} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={url}
                isExternal={true}
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-full',
                  'bg-background hover:bg-primary text-text-secondary hover:text-text-on-primary',
                  'transition-colors border border-border hover:border-primary'
                )}
                aria-label={platform}
              >
                <Icon name={iconName} size="small" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    );
  };

  const renderFooterSection = (section: FooterSection) => (
    <div key={section.title} className="flex flex-col gap-md">
      <Text
        variant="small"
        className="text-text-primary font-semibold uppercase tracking-wide"
      >
        {section.title}
      </Text>
      <ul className="flex flex-col gap-sm">
        {section.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              isExternal={link.isExternal}
              className="text-text-secondary hover:text-primary transition-colors text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const totalColumns = 1 + links.length + (contact ? 1 : 0);
  const gridColumns = totalColumns <= 2 ? 2 : totalColumns === 3 ? 3 : 4;

  return (
    <footer className={cn(footerVariants({ variant }), className)}>
      <div className={containerVariants()}>
        <div className={gridVariants({ columns: gridColumns as 2 | 3 | 4 })}>
          {/* Company Info */}
          <div className="flex flex-col gap-md">
            <div className="flex items-center gap-sm mb-sm">
              {logo || <Logo text={logoText} size="medium" />}
            </div>

            <Text variant="body" className="text-text-secondary max-w-xs">
              {description}
            </Text>

            {renderSocialLinks()}
          </div>

          {/* Links Sections */}
          {links.map(renderFooterSection)}

          {/* Contact Info */}
          {contact && (
            <div className="flex flex-col gap-md">
              <Text
                variant="small"
                className="text-text-primary font-semibold uppercase tracking-wide"
              >
                Contacto
              </Text>
              <div className="flex flex-col gap-sm">
                {contact.phone && (
                  <div className="flex items-start gap-sm">
                    <Icon
                      name="Phone"
                      size="small"
                      className="text-text-muted mt-1 flex-shrink-0"
                    />
                    <Link
                      href={`tel:${contact.phone}`}
                      className="text-text-secondary hover:text-primary transition-colors text-sm"
                    >
                      {contact.phone}
                    </Link>
                  </div>
                )}

                {contact.email && (
                  <div className="flex items-start gap-sm">
                    <Icon
                      name="Mail"
                      size="small"
                      className="text-text-muted mt-1 flex-shrink-0"
                    />
                    <Link
                      href={`mailto:${contact.email}`}
                      className="text-text-secondary hover:text-primary transition-colors text-sm"
                    >
                      {contact.email}
                    </Link>
                  </div>
                )}

                {contact.address && (
                  <div className="flex items-start gap-sm">
                    <Icon
                      name="MapPin"
                      size="small"
                      className="text-text-muted mt-1 flex-shrink-0"
                    />
                    <Text variant="body" className="text-text-secondary text-sm">
                      {contact.address}
                    </Text>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div
          className={cn(
            'flex flex-col md:flex-row items-center justify-between gap-md',
            'pt-lg border-t border-border'
          )}
        >
          <Text variant="small" className="text-text-muted text-center md:text-left">
            {copyright}
          </Text>

          {legal.length > 0 && (
            <ul className="flex items-center gap-md flex-wrap justify-center">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    isExternal={item.isExternal}
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
