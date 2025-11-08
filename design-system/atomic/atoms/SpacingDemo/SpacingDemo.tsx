// src/design-system/atomic/atoms/SpacingDemo/SpacingDemo.tsx
import React from 'react';
import { cn } from '../../../utils/cn';

export interface SpacingDemoProps {
  className?: string;
}

export const SpacingDemo = React.memo<SpacingDemoProps>(({
  className
}) => {
  const spacingTokens = [
    { name: 'XS', value: 'var(--spacing-xs)', size: '4px', description: 'Espaciado extra pequeño' },
    { name: 'SM', value: 'var(--spacing-sm)', size: '8px', description: 'Espaciado pequeño' },
    { name: 'MD', value: 'var(--spacing-md)', size: '16px', description: 'Espaciado medio' },
    { name: 'LG', value: 'var(--spacing-lg)', size: '24px', description: 'Espaciado grande' },
    { name: 'XL', value: 'var(--spacing-xl)', size: '32px', description: 'Espaciado extra grande' },
    { name: '2XL', value: 'var(--spacing-2xl)', size: '48px', description: 'Espaciado 2X grande' },
    { name: '3XL', value: 'var(--spacing-3xl)', size: '64px', description: 'Espaciado 3X grande' },
    { name: '4XL', value: 'var(--spacing-4xl)', size: '80px', description: 'Espaciado 4X grande' },
    { name: '5XL', value: 'var(--spacing-5xl)', size: '96px', description: 'Espaciado 5X grande' },
  ];

  const fluidSpacingTokens = [
    { name: 'Fluid XS', value: 'var(--spacing-fluid-xs)', description: 'Espaciado fluido extra pequeño' },
    { name: 'Fluid SM', value: 'var(--spacing-fluid-sm)', description: 'Espaciado fluido pequeño' },
    { name: 'Fluid MD', value: 'var(--spacing-fluid-md)', description: 'Espaciado fluido medio' },
    { name: 'Fluid LG', value: 'var(--spacing-fluid-lg)', description: 'Espaciado fluido grande' },
    { name: 'Fluid XL', value: 'var(--spacing-fluid-xl)', description: 'Espaciado fluido extra grande' },
    { name: 'Fluid 2XL', value: 'var(--spacing-fluid-2xl)', description: 'Espaciado fluido 2X grande' },
    { name: 'Fluid 3XL', value: 'var(--spacing-fluid-3xl)', description: 'Espaciado fluido 3X grande' },
  ];

  return (
    <div className={cn('w-full space-y-8 p-6', className)}>
      {/* Espaciados Fijos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-text-primary">Espaciados Fijos</h3>
        <p className="text-sm text-text-secondary">
          Espaciados fijos en píxeles que se mantienen constantes en todos los dispositivos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex flex-col gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-end h-24 bg-gray-100 dark:bg-gray-900 rounded">
                <div
                  className="w-full bg-primary-500 rounded"
                  style={{ height: token.value }}
                />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-text-primary">{token.name}</div>
                <div className="text-xs text-text-muted font-mono">{token.value}</div>
                <div className="text-xs text-text-muted">{token.size}</div>
                <div className="text-sm text-text-secondary">{token.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Espaciados Fluid */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-text-primary">Espaciados Fluid</h3>
        <p className="text-sm text-text-secondary">
          Espaciados fluidos que se adaptan automáticamente al tamaño de la pantalla usando clamp().
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fluidSpacingTokens.map((token) => (
            <div key={token.name} className="flex flex-col gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-end h-24 bg-gray-100 dark:bg-gray-900 rounded">
                <div
                  className="w-full bg-secondary-500 rounded transition-all"
                  style={{ height: token.value }}
                />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-text-primary">{token.name}</div>
                <div className="text-xs text-text-muted font-mono">{token.value}</div>
                <div className="text-sm text-text-secondary">{token.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparación Visual */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-text-primary">Comparación Visual</h3>
        <p className="text-sm text-text-secondary">
          Comparación entre espaciados fijos y fluidos en diferentes tamaños de pantalla.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-text-primary">Fijo (MD)</h4>
            <div className="space-y-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
              <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-sm mb-md">Box 1</div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-sm mb-md">Box 2</div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-sm">Box 3</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-text-primary">Fluido (MD)</h4>
            <div className="space-y-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
              <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-sm" style={{ marginBottom: 'var(--spacing-fluid-md)' }}>Box 1</div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-sm" style={{ marginBottom: 'var(--spacing-fluid-md)' }}>Box 2</div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-sm">Box 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

SpacingDemo.displayName = 'SpacingDemo';
