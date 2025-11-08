// src/design-system/utils/index.ts

/**
 * Combina múltiples clases CSS de forma segura y eficiente
 * Filtra valores falsy automáticamente
 * Mejorado para mejor rendimiento y legibilidad
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
}

/**
 * Utility function to create CSS custom properties
 */
export function createCSSVariable(name: string, value: string): string {
    return `--${name}: ${value};`;
}

/**
 * Utility function to get CSS variable value
 */
export function getCSSVariable(name: string): string {
    return `var(--${name})`;
}

/**
 * Utility function to format class names with variants
 */
export function createVariantClasses(
    baseClass: string,
    variants: Record<string, string>,
    props: Record<string, any>
): string {
    const classes = [baseClass];

    Object.entries(variants).forEach(([key, value]) => {
        if (props[key]) {
            classes.push(value);
        }
    });

    return classes.join(' ');
}

/**
 * Utility function to handle responsive classes
 */
export function responsiveClass(
    baseClass: string,
    breakpoints: Record<string, string> = {}
): string {
    const classes = [baseClass];

    Object.entries(breakpoints).forEach(([breakpoint, value]) => {
        classes.push(`${breakpoint}:${value}`);
    });

    return classes.join(' ');
}
