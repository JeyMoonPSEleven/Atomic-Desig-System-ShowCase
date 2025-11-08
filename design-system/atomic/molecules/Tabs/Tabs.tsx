// src/design-system/atomic/molecules/Tabs/Tabs.tsx
import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { TabsProps } from './Tabs.types';
import { cn } from '../../../utils/cn';

/**
 * Definición de variantes con CVA para Tabs
 * Todos los valores basados en tokens del design system
 */
const tabsContainerVariants = cva(
  'flex',
  {
    variants: {
      variant: {
        default: 'space-x-xs',
        pills: 'bg-background-secondary p-xs rounded-lg gap-xs',
        underline: 'border-b border-border',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      fullWidth: false,
    },
  }
);

const tabButtonVariants = cva(
  'px-md py-sm text-sm font-medium rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1',
  {
    variants: {
      variant: {
        default: '',
        pills: 'rounded-md',
        underline: 'border-b-2 border-transparent rounded-none',
      },
      size: {
        small: 'px-sm py-xs text-xs',
        medium: 'px-md py-sm text-sm',
        large: 'px-lg py-md text-base',
      },
      active: {
        true: '',
        false: 'text-foreground-secondary',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'hover:text-foreground',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        active: true,
        className: 'bg-primary-50 text-primary-700',
      },
      {
        variant: 'pills',
        active: true,
        className: 'bg-background text-primary shadow-sm',
      },
      {
        variant: 'underline',
        active: true,
        className: 'border-primary text-primary',
      },
      {
        variant: 'default',
        active: false,
        disabled: false,
        className: 'hover:bg-background-secondary',
      },
      {
        variant: 'pills',
        active: false,
        disabled: false,
        className: 'hover:bg-background-tertiary',
      },
      {
        variant: 'underline',
        active: false,
        disabled: false,
        className: 'hover:border-border',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'medium',
      active: false,
      disabled: false,
    },
  }
);

export const Tabs = React.memo<TabsProps>(({
  items,
  defaultActiveTab,
  onTabChange,
  variant = 'default',
  size = 'medium',
  className,
  fullWidth = false,
}) => {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || items.find(item => !item.disabled)?.id || items[0]?.id
  );

  const handleTabClick = (tabId: string) => {
    const tab = items.find(item => item.id === tabId);
    if (tab && !tab.disabled) {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    }
  };

  const activeTabContent = items.find(item => item.id === activeTab);

  const tabsClasses = cn(
    tabsContainerVariants({ variant, fullWidth }),
    className
  );

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className={tabsClasses} role="tablist">
        {items.map((item) => {
          const isActive = activeTab === item.id;
          const isDisabled = item.disabled || false;

          return (
            <motion.button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              id={`tab-${item.id}`}
              className={cn(
                tabButtonVariants({
                  variant,
                  size,
                  active: isActive,
                  disabled: isDisabled,
                })
              )}
              onClick={() => handleTabClick(item.id)}
              disabled={isDisabled}
              whileHover={!isDisabled ? { scale: 1.02 } : {}}
              whileTap={!isDisabled ? { scale: 0.98 } : {}}
              transition={{ duration: 0.15 }}
            >
              {item.icon && (
                <span className="mr-sm inline-flex items-center">{item.icon}</span>
              )}
              {item.label}
            </motion.button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTabContent && (
        <motion.div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="mt-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {activeTabContent.content}
        </motion.div>
      )}
    </div>
  );
});

Tabs.displayName = 'Tabs';