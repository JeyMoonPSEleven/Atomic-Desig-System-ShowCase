import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Button, Heading, Text, Icon } from '../../atoms';
import { DashboardProps, DashboardWidget } from './Dashboard.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Dashboard
 * Todos los valores basados en tokens del design system
 */
const dashboardVariants = cva('min-h-screen bg-background', {
  variants: {
    variant: {
      default: '',
      compact: '',
      full: 'h-screen',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const widgetVariants = cva(
  'bg-background rounded-lg border border-border p-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary',
  {
    variants: {
      size: {
        small: 'col-span-1',
        medium: 'col-span-1 md:col-span-2',
        large: 'col-span-1 md:col-span-2 lg:col-span-3',
        full: 'col-span-1 md:col-span-2 lg:col-span-3',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export const Dashboard = React.memo<DashboardProps>(({
  widgets = [],
  title = 'Dashboard',
  subtitle = 'Resumen de tu actividad',
  showHeader = true,
  showSidebar = true,
  sidebarItems = [
    { id: 'overview', label: 'Resumen', href: '/dashboard' },
    { id: 'cases', label: 'Casos', href: '/cases' },
    { id: 'clients', label: 'Clientes', href: '/clients' },
    { id: 'reports', label: 'Reportes', href: '/reports' },
    { id: 'settings', label: 'Configuración', href: '/settings' },
  ],
  variant = 'default',
  className = '',
  onWidgetClick,
}) => {
  const handleWidgetClick = (widget: DashboardWidget) => {
    if (onWidgetClick) {
      onWidgetClick(widget);
    }
  };

  return (
    <div className={cn(dashboardVariants({ variant }), className)}>
      {/* Header */}
      {showHeader && (
        <header className="bg-background shadow-sm border-b border-border">
          <div className="container mx-auto px-md py-md">
            <div className="flex items-center justify-between">
              <div>
                <Heading level={1} variant="heading" className="text-text-primary mb-xs">
                  {title}
                </Heading>
                <Text variant="body" color="secondary">
                  {subtitle}
                </Text>
              </div>
              <div>
                <Button variant="primary" size="medium">
                  Nuevo Caso
                </Button>
              </div>
            </div>
          </div>
        </header>
      )}

      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <aside className="w-64 bg-background-secondary border-r border-border min-h-screen">
            <div className="p-md">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-md">
                Navegación
              </div>
              <ul className="flex flex-col gap-xs">
                {sidebarItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={cn(
                        'flex items-center gap-sm px-md py-sm rounded-md transition-colors',
                        item.id === 'overview'
                          ? 'bg-primary text-text-on-primary'
                          : 'text-text-secondary hover:bg-background hover:text-text-primary'
                      )}
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-lg">
          {widgets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {widgets.map((widget, index) => (
                <motion.div
                  key={widget.id}
                  className={widgetVariants({ size: widget.size as any })}
                  onClick={() => handleWidgetClick(widget)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-md">
                    <Heading level={3} variant="subheading" className="text-text-primary">
                      {widget.title}
                    </Heading>
                  </div>
                  <div>{widget.content}</div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 mb-md text-text-muted">
                <Icon name="LayoutDashboard" size="large" />
              </div>
              <Text variant="large" className="text-text-primary mb-sm font-semibold">
                No hay widgets disponibles
              </Text>
              <Text variant="body" color="secondary">
                Agrega algunos widgets para personalizar tu dashboard
              </Text>
            </div>
          )}
        </main>
      </div>
    </div>
  );
});

Dashboard.displayName = 'Dashboard';
