import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo, Link, Icon } from '../../atoms';
import { SidebarProps, SidebarItem } from './Sidebar.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Sidebar
 * Todos los valores basados en tokens del design system
 */
const sidebarVariants = cva(
  'h-screen flex flex-col bg-background border-r border-border transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'relative',
        collapsed: 'w-20',
        floating: 'fixed left-0 top-0 shadow-xl z-sidebar',
      },
      width: {
        narrow: 'w-56',
        medium: 'w-64',
        wide: 'w-80',
      },
      isCollapsed: {
        true: 'w-20',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'collapsed',
        isCollapsed: false,
        class: 'w-64',
      },
    ],
    defaultVariants: {
      variant: 'default',
      width: 'medium',
      isCollapsed: false,
    },
  }
);

const navLinkVariants = cva(
  'flex items-center gap-md px-md py-sm rounded-md transition-all duration-200 group',
  {
    variants: {
      isActive: {
        true: 'bg-primary text-primary-foreground',
        false: 'text-foreground-secondary hover:bg-background-secondary hover:text-foreground',
      },
      isCollapsed: {
        true: 'justify-center',
        false: '',
      },
    },
  }
);

const submenuVariants = cva('ml-lg pl-md border-l border-border flex flex-col gap-xs', {
  variants: {
    isOpen: {
      true: 'mt-xs',
      false: 'hidden',
    },
  },
});

export const Sidebar = React.memo<SidebarProps>(({
  items = [],
  title = 'Navegación',
  logo,
  logoText = 'Mi App',
  variant = 'default',
  width = 'medium',
  showLogo = true,
  showTitle = true,
  className = '',
  onItemClick,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleItemClick = (item: SidebarItem) => {
    if (item.children && item.children.length > 0) {
      setOpenSubmenu(openSubmenu === item.id ? null : item.id);
    }
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setOpenSubmenu(null);
    }
  };

  const renderNavItem = (item: SidebarItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isSubmenuOpen = openSubmenu === item.id;

    return (
      <li key={item.id}>
        <Link
          href={item.href || '#'}
          className={navLinkVariants({ isActive: item.isActive, isCollapsed })}
          onClick={() => handleItemClick(item)}
          isExternal={item.isExternal}
        >
          {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
          {!isCollapsed && (
            <>
              <span className="flex-1">{item.label}</span>
              {hasChildren && (
                <motion.div
                  animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="ChevronDown" size="small" />
                </motion.div>
              )}
            </>
          )}
        </Link>

        {hasChildren && !isCollapsed && (
          <AnimatePresence>
            {isSubmenuOpen && (
              <motion.ul
                className={submenuVariants({ isOpen: isSubmenuOpen })}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.children!.map((child) => (
                  <li key={child.id}>
                    <Link
                      href={child.href || '#'}
                      className={cn(
                        'flex items-center gap-sm px-md py-xs rounded-md transition-colors',
                        child.isActive
                          ? 'text-primary font-medium'
                          : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary'
                      )}
                      onClick={() => onItemClick && onItemClick(child)}
                      isExternal={child.isExternal}
                    >
                      {child.icon && <span className="flex-shrink-0">{child.icon}</span>}
                      <span>{child.label}</span>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        )}
      </li>
    );
  };

  return (
    <aside
      className={cn(
        sidebarVariants({ variant, width, isCollapsed }),
        className
      )}
    >
      {/* Header */}
      <div className="p-md border-b border-border flex-shrink-0">
        {showLogo && (
          <Link href="/" className="flex items-center gap-sm">
            <Logo text={logoText} size="small" />
            {!isCollapsed && <span className="font-semibold text-foreground">{logoText}</span>}
          </Link>
        )}

        {showTitle && !isCollapsed && (
          <div className="text-xs uppercase tracking-wide text-foreground-muted mt-md">{title}</div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-md">
        <ul className="flex flex-col gap-xs">{items.map(renderNavItem)}</ul>
      </nav>

      {/* Footer */}
      <div className="p-md border-t border-border flex-shrink-0">
        {!isCollapsed && (
          <div className="text-xs text-foreground-muted text-center">
            © {new Date().getFullYear()} {logoText}
          </div>
        )}
      </div>

      {/* Toggle Button */}
      {variant === 'default' && (
        <motion.button
          className={cn(
            'absolute -right-3 top-20',
            'w-6 h-6 flex items-center justify-center rounded-full',
            'bg-background border border-border shadow-md',
            'hover:bg-primary hover:text-primary-foreground hover:border-primary',
            'transition-colors focus:outline-none focus:ring-2 focus:ring-primary'
          )}
          onClick={handleToggleCollapse}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <motion.div
            animate={{ rotate: isCollapsed ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon name="ChevronLeft" size="small" />
          </motion.div>
        </motion.button>
      )}
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';
