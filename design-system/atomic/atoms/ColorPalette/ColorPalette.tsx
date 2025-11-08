// src/design-system/atomic/atoms/ColorPalette/ColorPalette.tsx
import React, { useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { cn } from '../../../utils/cn';

export interface ColorPaletteProps {
    colors: Array<{
        name: string;
        value: string;
        description?: string;
        category?: string;
    }>;
    showCopyButton?: boolean;
    showDescription?: boolean;
    groupByColor?: boolean;
    className?: string;
}

export const ColorPalette = React.memo<ColorPaletteProps>(({
    colors,
    showCopyButton = true,
    showDescription = true,
    groupByColor = true,
    className
}) => {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const copyToClipboard = async (text: string, name: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedColor(name);
            setTimeout(() => setCopiedColor(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    // Agrupar colores por categoría si está habilitado
    const groupedColors = groupByColor
        ? colors.reduce((acc, color) => {
            const category = color.category || 'Otros';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(color);
            return acc;
        }, {} as Record<string, typeof colors>)
        : { 'Todos': colors };

    return (
        <div className={cn('flex flex-col gap-xl', className)}>
            {Object.entries(groupedColors).map(([category, categoryColors]) => (
                <div key={category} className="flex flex-col gap-lg">
                    <Text variant="large" weight="bold" className="mb-md pb-sm border-b border-border-light text-text-primary">
                        {category}
                    </Text>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-lg">
                        {categoryColors.map((color) => (
                            <div key={color.name} className="flex flex-col gap-sm bg-surface-base border border-border-light rounded-lg overflow-hidden transition-all duration-base ease-out animate-fade-in-scale hover:-translate-y-0.5 hover:shadow-md hover:border-primary-300">
                                <div
                                    className="relative w-full h-30 border-b border-border-light cursor-pointer transition-all duration-base hover:scale-105"
                                    style={{ backgroundColor: color.value }}
                                    onClick={() => copyToClipboard(color.value, color.name)}
                                >
                                    {showCopyButton && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-overlay-dark opacity-0 transition-opacity duration-base hover:opacity-100">
                                            <Button
                                                variant="secondary"
                                                size="small"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    copyToClipboard(color.value, color.name);
                                                }}
                                                className="bg-surface-base border border-border-primary text-text-primary transition-all duration-base hover:bg-primary-500 hover:text-text-on-primary hover:border-primary-500"
                                            >
                                                {copiedColor === color.name ? (
                                                    <>
                                                        <Icon name="Check" size="small" />
                                                        Copiado!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Icon name="Copy" size="small" />
                                                        Copiar
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    )}
                                </div>
                                <div className="p-md flex flex-col gap-xs">
                                    <Text variant="small" weight="bold" className="text-text-primary">
                                        {color.name}
                                    </Text>
                                    <div className="px-xs py-xs bg-gray-100 rounded-sm border border-border-light font-mono dark:bg-gray-800 dark:border-gray-600">
                                        <Text variant="caption" color="muted">
                                            {color.value}
                                        </Text>
                                    </div>
                                    {showDescription && color.description && (
                                        <Text variant="caption" color="muted" className="leading-relaxed">
                                            {color.description}
                                        </Text>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
});

ColorPalette.displayName = 'ColorPalette';