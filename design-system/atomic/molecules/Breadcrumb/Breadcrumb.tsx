import React from 'react';
import { BreadcrumbProps, BreadcrumbItem } from './Breadcrumb.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icon';

const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator,
    showHome = true,
    homeHref = '/',
    className,
    size = 'medium',
    onItemClick,
}) => {
    const handleItemClick = (item: BreadcrumbItem) => {
        if (onItemClick) {
            onItemClick(item);
        }
    };

    const allItems = showHome
        ? [{ id: 'home', label: 'Inicio', href: homeHref, icon: <Icon name="Home" size="small" /> }, ...items]
        : items;

    const defaultSeparator = <Icon name="ChevronRight" size="small" />;

    return (
        <nav
            className={cn('flex items-center gap-2 flex-wrap', className)}
            aria-label="Breadcrumb"
        >
            {allItems.map((item, index) => {
                const isLast = index === allItems.length - 1;

                return (
                    <React.Fragment key={item.id}>
                        {index > 0 && (
                            <span className="text-text-muted flex-shrink-0">
                                {separator || defaultSeparator}
                            </span>
                        )}

                        {isLast ? (
                            <span className={cn(
                                'flex items-center gap-xs text-text-primary font-medium',
                                sizeClasses[size]
                            )}>
                                {item.icon && (
                                    <span className="flex-shrink-0">
                                        {item.icon}
                                    </span>
                                )}
                                <span>{item.label}</span>
                            </span>
                        ) : (
                            <button
                                className={cn(
                                    'flex items-center gap-xs text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-sm',
                                    sizeClasses[size]
                                )}
                                onClick={() => handleItemClick(item)}
                                type="button"
                            >
                                {item.icon && (
                                    <span className="flex-shrink-0">
                                        {item.icon}
                                    </span>
                                )}
                                <span>{item.label}</span>
                            </button>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};
