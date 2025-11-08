import React, { useState } from 'react';
import { RatingProps } from './Rating.types';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icon';

export const Rating: React.FC<RatingProps> = ({
    value = 0,
    max = 5,
    onChange,
    readOnly = false,
    size = 'medium',
    className,
    showValue = false,
    allowHalf = false,
}) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    const getStarFill = (index: number) => {
        const currentValue = isHovering ? hoverValue : value;
        if (!currentValue) return 0;

        if (allowHalf) {
            if (currentValue >= index + 1) return 1;
            if (currentValue >= index + 0.5) return 0.5;
            return 0;
        }

        return currentValue >= index + 1 ? 1 : 0;
    };

    const handleStarClick = (index: number) => {
        if (readOnly || !onChange) return;

        const newValue = allowHalf ? index + 0.5 : index + 1;
        onChange(newValue);
    };

    const handleStarHover = (index: number) => {
        if (readOnly) return;
        setHoverValue(index + 1);
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        if (readOnly) return;
        setHoverValue(null);
        setIsHovering(false);
    };

    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-5 h-5',
        large: 'w-6 h-6',
    };

    const containerClasses = cn(
        'flex items-center gap-1',
        !readOnly && 'cursor-pointer',
        className
    );

    return (
        <div className={containerClasses} onMouseLeave={handleMouseLeave}>
            {Array.from({ length: max }, (_, index) => {
                const fill = getStarFill(index);
                const isHalf = fill === 0.5;
                const isFull = fill === 1;

                return (
                    <button
                        key={index}
                        type="button"
                        className={cn(
                            'transition-colors duration-200',
                            !readOnly && 'hover:scale-110',
                            sizeClasses[size]
                        )}
                        onClick={() => handleStarClick(index)}
                        onMouseEnter={() => handleStarHover(index)}
                        disabled={readOnly}
                        aria-label={`Rate ${index + 1} out of ${max}`}
                    >
                        <Icon
                            name="Star"
                            className={cn(
                                'transition-colors duration-200',
                                isFull && 'text-warning',
                                isHalf && 'text-warning',
                                !isFull && !isHalf && 'text-border'
                            )}
                        />
                    </button>
                );
            })}

            {showValue && (
                <span className="ml-sm text-sm text-text-secondary">
                    {value.toFixed(allowHalf ? 1 : 0)}/{max}
                </span>
            )}
        </div>
    );
};

export default Rating;