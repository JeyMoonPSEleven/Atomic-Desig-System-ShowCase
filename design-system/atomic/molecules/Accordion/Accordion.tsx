import React, { useState } from 'react';
import { AccordionProps } from './Accordion.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icon';

export const Accordion: React.FC<AccordionProps> = ({
    items,
    allowMultiple = false,
    defaultOpenItems = [],
    className,
    variant = 'default',
}) => {
    const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

    const toggleItem = (itemId: string) => {
        setOpenItems(prev => {
            if (allowMultiple) {
                return prev.includes(itemId)
                    ? prev.filter(id => id !== itemId)
                    : [...prev, itemId];
            } else {
                return prev.includes(itemId) ? [] : [itemId];
            }
        });
    };

    return (
        <div className={cn('w-full', className)}>
            {items.map((item) => {
                const isOpen = openItems.includes(item.id);
                const isDisabled = item.disabled;

                return (
                    <div
                        key={item.id}
                        className={cn(
                            'border-b border-border last:border-b-0',
                            variant === 'bordered' && 'border border-border rounded-lg mb-sm last:mb-0'
                        )}
                    >
                        <button
                            className={cn(
                                'w-full flex items-center justify-between p-md text-left transition-all hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset',
                                variant === 'bordered' && 'rounded-t-lg',
                                isDisabled && 'opacity-50 cursor-not-allowed hover:bg-transparent'
                            )}
                            onClick={() => !isDisabled && toggleItem(item.id)}
                            disabled={isDisabled}
                            aria-expanded={isOpen}
                            aria-controls={`accordion-content-${item.id}`}
                        >
                            <span className="font-medium text-text-primary">{item.title}</span>
                            <Icon
                                name="ChevronDown"
                                className={cn(
                                    'w-5 h-5 transition-transform duration-200',
                                    isOpen && 'transform rotate-180',
                                    isDisabled && 'text-text-muted'
                                )}
                            />
                        </button>

                        <div
                            id={`accordion-content-${item.id}`}
                            className={cn(
                                'overflow-hidden transition-all duration-300',
                                isOpen ? 'max-h-96' : 'max-h-0'
                            )}
                            style={{
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            <div className={cn(
                                'p-md text-text-secondary',
                                variant === 'bordered' && 'border-t border-border'
                            )}>
                                {item.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
