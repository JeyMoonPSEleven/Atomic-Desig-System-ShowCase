/**
 * Utilidad para adaptar componentes de shadcn/ui a nuestro sistema de diseño
 * 
 * ESTRATEGIA:
 * - NO instalamos shadcn/ui como dependencia
 * - Copiamos el código del componente desde ui.shadcn.com
 * - Reemplazamos las clases con nuestros tokens CSS
 * - Mantenemos la lógica y accesibilidad de shadcn/ui
 * 
 * EJEMPLO DE USO:
 * 1. Ve a ui.shadcn.com/components/alert
 * 2. Copia el código
 * 3. Reemplaza:
 *    - bg-destructive -> bg-danger
 *    - text-destructive-foreground -> text-text-on-danger
 * 4. Usa los tokens de tu sistema de diseño
 */

/**
 * Mapeo de clases de shadcn/ui a nuestros tokens
 * Úsalo como referencia al adaptar componentes
 */
export const shadcnToOurTokens = {
    // Colores de fondo
    'bg-destructive': 'bg-danger',
    'bg-primary': 'bg-primary',
    'bg-secondary': 'bg-secondary',
    'bg-success': 'bg-success',
    'bg-warning': 'bg-warning',
    'bg-info': 'bg-info',
    'bg-muted': 'bg-gray-100',
    'bg-accent': 'bg-accent',

    // Colores de texto
    'text-destructive-foreground': 'text-text-on-danger',
    'text-primary-foreground': 'text-text-on-primary',
    'text-secondary-foreground': 'text-text-on-secondary',
    'text-success-foreground': 'text-text-on-success',
    'text-warning-foreground': 'text-text-on-warning',
    'text-info-foreground': 'text-text-on-info',
    'text-muted-foreground': 'text-text-muted',

    // Bordes
    'border-destructive': 'border-border-danger',
    'border-primary': 'border-primary',
    'border-border': 'border-border-primary',
    'border-input': 'border-gray-300',

    // Sombra de enfoque
    'focus-visible:ring-offset-background': 'focus-visible:ring-offset-white',
    'focus-visible:ring-ring': 'focus-visible:ring-primary',

    // Espaciado común
    'p-4': 'p-md',
    'p-6': 'p-lg',
    'px-4': 'px-md',
    'py-2': 'py-sm',

    // Tamaños de texto
    'text-sm': 'text-sm',
    'text-base': 'text-base',
    'text-lg': 'text-lg',

    // Border radius
    'rounded-md': 'rounded-md',
    'rounded-lg': 'rounded-lg',
    'rounded-full': 'rounded-full',

    // Layout
    'flex items-center': 'flex items-center',
    'flex justify-between': 'flex justify-between',
    'gap-2': 'gap-sm',
    'gap-4': 'gap-md',
};

/**
 * Función helper para reemplazar clases de shadcn/ui por nuestros tokens
 * @param componentCode - Código del componente de shadcn/ui
 * @returns Código adaptado con nuestros tokens
 */
export function adaptShadcnComponent(componentCode: string): string {
    let adaptedCode = componentCode;

    // Reemplazar tokens de shadcn/ui por nuestros tokens
    Object.entries(shadcnToOurTokens).forEach(([shadcnClass, ourClass]) => {
        const regex = new RegExp(shadcnClass, 'g');
        adaptedCode = adaptedCode.replace(regex, ourClass);
    });

    // Reemplazar importaciones de shadcn/ui por nuestras
    adaptedCode = adaptedCode.replace(
        "import { cn } from '@/lib/utils'",
        "import { cn } from '@/design-system/utils/cn'"
    );

    // Reemplazar Radix UI por nuestra implementación (si aplica)
    // Esto depende del componente específico

    return adaptedCode;
}

/**
 * Template para crear un nuevo componente adaptado de shadcn/ui
 */
export const componentTemplate = `
/**
 * Componente [NOMBRE] adaptado de shadcn/ui
 * 
 * Fuente: https://ui.shadcn.com/components/[componente]
 * Adaptación: [Tu nombre]
 * Fecha: [Fecha]
 * 
 * Cambios realizados:
 * - [Lista de cambios realizados]
 */

import React from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/design-system/utils/cn';

// TODO: Define las variantes con cva
const [Componente]Variants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'default-classes',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface [Componente]Props {
  // TODO: Define las props
}

export const [Componente] = ({ ... }: [Componente]Props) => {
  return (
    // TODO: Implementa el componente
  );
};
`;

/**
 * Checklist para adaptar un componente de shadcn/ui
 */
export const ADAPTATION_CHECKLIST = {
    imports: [
        'Reemplazar imports de shadcn/ui por los tuyos',
        'Añadir imports necesarios (cva, framer-motion, etc.)',
    ],
    tokens: [
        'Reemplazar clases de shadcn/ui con tus tokens CSS',
        'Verificar que los colores coincidan con tu paleta',
        'Verificar que el espaciado use tus spacing tokens',
    ],
    estructura: [
        'Adaptar la estructura HTML a tu convención',
        'Mantener la semántica y accesibilidad',
        'Añadir soporte para dark mode si aplica',
    ],
    animaciones: [
        'Añadir animaciones con framer-motion',
        'Añadir transiciones sutiles',
        'Verificar que las animaciones no interfieren con accesibilidad',
    ],
    documentacion: [
        'Crear archivo .types.ts con los tipos',
        'Crear archivo .stories.tsx con ejemplos',
        'Añadir JSDoc a todas las props',
    ],
    testing: [
        'Verificar que el componente funciona en Storybook',
        'Probar todas las variantes',
        'Verificar accesibilidad (keyboard, screen readers)',
    ],
};

/**
 * Ejemplo de adaptación de un componente Alert
 */
export const EXAMPLE_ALERT_ADAPTATION = `
// ANTES (shadcn/ui original):
<div className="bg-destructive text-destructive-foreground p-4 rounded-md">
  <p>Error: Algo salió mal</p>
</div>

// DESPUÉS (nuestra adaptación):
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/design-system/utils/cn';

const alertVariants = cva(
  'flex items-center gap-md p-md rounded-md',
  {
    variants: {
      variant: {
        error: 'bg-danger text-text-on-danger',
        success: 'bg-success text-text-on-success',
        warning: 'bg-warning text-text-on-warning',
        info: 'bg-info text-text-on-info',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

interface AlertProps {
  variant?: 'error' | 'success' | 'warning' | 'info';
  children: React.ReactNode;
}

export const Alert = ({ variant, children }: AlertProps) => {
  return (
    <motion.div
      className={cn(alertVariants({ variant }))}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

// USO:
<Alert variant="error">Error: Algo salió mal</Alert>
`;

/**
 * Guía rápida para adaptar un componente
 */
export const QUICK_GUIDE = {
    paso1: 'Visita ui.shadcn.com y busca el componente que quieres',
    paso2: 'Haz clic en "Code" y copia el código',
    paso3: 'Crea un nuevo archivo en tu estructura (ej: Alert.tsx)',
    paso4: 'Reemplaza los imports de shadcn/ui por los tuyos',
    paso5: 'Reemplaza las clases CSS con tus tokens',
    paso6: 'Define las variantes con cva',
    paso7: 'Añade animaciones con framer-motion si aplica',
    paso8: 'Crea los tipos en .types.ts',
    paso9: 'Crea las stories en .stories.tsx',
    paso10: 'Prueba el componente en Storybook',
};

