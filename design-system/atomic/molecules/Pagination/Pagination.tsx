import React from 'react';
import { PaginationProps } from './Pagination.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icon';

const sizeClasses = {
    small: 'px-sm py-xs text-sm',
    medium: 'px-md py-sm text-base',
    large: 'px-lg py-md text-lg',
};

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    showFirstLast = true,
    showPrevNext = true,
    maxVisiblePages = 5,
    className,
    size = 'medium',
}) => {
    const getVisiblePages = () => {
        const pages: (number | 'ellipsis')[] = [];
        const halfVisible = Math.floor(maxVisiblePages / 2);

        let startPage = Math.max(1, currentPage - halfVisible);
        let endPage = Math.min(totalPages, currentPage + halfVisible);

        // Ajustar si estamos cerca del inicio o final
        if (endPage - startPage + 1 < maxVisiblePages) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            } else {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
        }

        // Agregar primera página y elipsis si es necesario
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push('ellipsis');
            }
        }

        // Agregar páginas visibles
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Agregar elipsis y última página si es necesario
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push('ellipsis');
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <nav className={cn('flex items-center gap-1', className)} aria-label="Pagination">
            {showFirstLast && (
                <button
                    className={cn(
                        'flex items-center justify-center rounded-md border border-border bg-background hover:bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                        sizeClasses[size]
                    )}
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    aria-label="First page"
                >
                    <Icon name="ChevronLeft" size="small" />
                    <Icon name="ChevronLeft" size="small" />
                </button>
            )}

            {showPrevNext && (
                <button
                    className={cn(
                        'flex items-center justify-center rounded-md border border-border bg-background hover:bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                        sizeClasses[size]
                    )}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <Icon name="ChevronLeft" size="small" />
                </button>
            )}

            {visiblePages.map((page, index) => {
                if (page === 'ellipsis') {
                    return (
                        <span
                            key={`ellipsis-${index}`}
                            className={cn(
                                'flex items-center justify-center text-text-muted',
                                sizeClasses[size]
                            )}
                        >
                            ...
                        </span>
                    );
                }

                return (
                    <button
                        key={page}
                        className={cn(
                            'flex items-center justify-center rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                            sizeClasses[size],
                            currentPage === page
                                ? 'border-primary bg-primary text-text-on-primary'
                                : 'border-border bg-background hover:bg-background-secondary text-text-primary'
                        )}
                        onClick={() => onPageChange(page)}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                    >
                        {page}
                    </button>
                );
            })}

            {showPrevNext && (
                <button
                    className={cn(
                        'flex items-center justify-center rounded-md border border-border bg-background hover:bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                        sizeClasses[size]
                    )}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <Icon name="ChevronRight" size="small" />
                </button>
            )}

            {showFirstLast && (
                <button
                    className={cn(
                        'flex items-center justify-center rounded-md border border-border bg-background hover:bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
                        sizeClasses[size]
                    )}
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    aria-label="Last page"
                >
                    <Icon name="ChevronRight" size="small" />
                    <Icon name="ChevronRight" size="small" />
                </button>
            )}
        </nav>
    );
};
