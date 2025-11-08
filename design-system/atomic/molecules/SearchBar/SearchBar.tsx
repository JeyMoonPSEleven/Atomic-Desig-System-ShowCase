import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { SearchBarProps } from './SearchBar.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';

/**
 * Definición de variantes con CVA para SearchBar
 * Todos los valores basados en tokens del design system
 */
const searchBarVariants = cva(
  'relative flex items-center gap-sm',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      fullWidth: true,
    },
  }
);

const inputWrapperVariants = cva(
  'relative flex-1',
  {
    variants: {
      hasIcon: {
        true: '',
        false: '',
      },
    },
  }
);

const inputVariants = cva(
  'w-full border border-border rounded-md bg-background text-text-primary placeholder:text-text-muted transition-all focus:outline-none focus:border-border-focus focus:shadow-focus disabled:bg-background-secondary disabled:text-text-muted disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        small: 'h-8 pl-10 pr-10 text-sm',
        medium: 'h-10 pl-10 pr-10 text-base',
        large: 'h-12 pl-12 pr-12 text-lg',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const iconVariants = cva(
  'absolute top-1/2 transform -translate-y-1/2 text-text-muted pointer-events-none',
  {
    variants: {
      position: {
        left: 'left-3',
        right: 'right-3',
      },
    },
  }
);

export const SearchBar = React.memo<SearchBarProps>(({
  value = '',
  onChange,
  onSearch,
  placeholder = 'Buscar...',
  disabled = false,
  size = 'medium',
  className,
  showClearButton = true,
  showSearchButton = false,
  fullWidth = true,
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.('');
  };

  const handleSearch = () => {
    onSearch?.(internalValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const iconSize = size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium';

  const searchBarClasses = cn(
    searchBarVariants({ fullWidth }),
    className
  );

  const inputWrapperClasses = cn(
    inputWrapperVariants({ hasIcon: true })
  );

  const inputClasses = cn(
    inputVariants({ size })
  );

  const leftIconClasses = cn(
    iconVariants({ position: 'left' })
  );

  return (
    <motion.div
      className={searchBarClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className={inputWrapperClasses}>
        <Icon
          name="Search"
          size={iconSize}
          className={leftIconClasses}
        />

        <input
          type="search"
          value={internalValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          aria-label="Campo de búsqueda"
        />

        {showClearButton && internalValue && (
          <motion.button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-sm"
            aria-label="Limpiar búsqueda"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <Icon name="X" size={iconSize} />
          </motion.button>
        )}
      </div>

      {showSearchButton && (
        <Button
          variant="primary"
          size={size}
          onClick={handleSearch}
          disabled={disabled}
          aria-label="Buscar"
        >
          <Icon name="Search" size={iconSize} />
        </Button>
      )}
    </motion.div>
  );
});

SearchBar.displayName = 'SearchBar';