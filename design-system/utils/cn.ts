/**
 * Utilidades para combinar clases Tailwind de forma type-safe
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases CSS de forma inteligente usando clsx y tailwind-merge
 * Resuelve conflictos de clases de Tailwind automáticamente
 * @param inputs - Array de clases CSS (pueden ser strings, undefined, null, false)
 * @returns String con clases combinadas y sin conflictos
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Tipos para mantener type-safety con Tailwind
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export interface TailwindClassMap {
    [key: string]: string
}

/**
 * Mapeo de variantes de botón a clases Tailwind
 */
export const buttonVariantClasses: Record<ButtonVariant, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    success: 'btn-success',
    warning: 'btn-warning',
    danger: 'btn-danger',
}

/**
 * Mapeo de tamaños de botón a clases Tailwind
 */
export const buttonSizeClasses: Record<ButtonSize, string> = {
    xs: 'px-xs py-xs text-xs',
    sm: 'px-sm py-xs text-sm',
    md: 'px-md py-sm text-base',
    lg: 'px-lg py-md text-lg',
    xl: 'px-xl py-lg text-xl',
}

/**
 * Mapeo de variantes de badge a clases Tailwind
 */
export const badgeVariantClasses: Record<ColorVariant, string> = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
    info: 'badge-info',
}

/**
 * Mapeo de variantes de alert a clases Tailwind
 */
export const alertVariantClasses: Record<ColorVariant, string> = {
    primary: 'alert-primary',
    secondary: 'alert-secondary',
    success: 'alert-success',
    warning: 'alert-warning',
    danger: 'alert-danger',
    info: 'alert-info',
}

/**
 * Generar clases de botón con type-safety
 */
export const createButtonClasses = (
    variant: ButtonVariant,
    size: ButtonSize,
    fullWidth: boolean = false,
    isLoading: boolean = false,
    className?: string
): string => {
    const classes: string[] = ['btn']

    // Agregar variante
    classes.push(buttonVariantClasses[variant])

    // Agregar tamaño
    classes.push(buttonSizeClasses[size])

    // Ancho completo
    if (fullWidth) {
        classes.push('w-full')
    }

    // Estado de carga
    if (isLoading) {
        classes.push('opacity-70 cursor-not-allowed')
    }

    // Clases personalizadas
    if (className) {
        classes.push(className)
    }

    return classes.join(' ')
}

/**
 * Generar clases de badge con type-safety
 */
export const createBadgeClasses = (
    variant: ColorVariant,
    size: SizeVariant = 'md',
    className?: string
): string => {
    const classes: string[] = ['badge']

    // Agregar variante
    classes.push(badgeVariantClasses[variant])

    // Agregar tamaño
    const sizeMap: Record<SizeVariant, string> = {
        xs: 'px-xs py-xs text-xs',
        sm: 'px-sm py-xs text-xs',
        md: 'px-sm py-xs text-xs',
        lg: 'px-md py-sm text-sm',
        xl: 'px-lg py-md text-base',
        xxl: 'px-xl py-lg text-lg',
        xxxl: 'px-xxl py-xl text-xl',
    }
    classes.push(sizeMap[size])

    // Clases personalizadas
    if (className) {
        classes.push(className)
    }

    return classes.join(' ')
}

/**
 * Generar clases de alert con type-safety
 */
export const createAlertClasses = (
    variant: ColorVariant,
    className?: string
): string => {
    const classes: string[] = ['alert']

    // Agregar variante
    classes.push(alertVariantClasses[variant])

    // Clases personalizadas
    if (className) {
        classes.push(className)
    }

    return classes.join(' ')
}

/**
 * Generar clases de input con type-safety
 */
export const createInputClasses = (
    hasError: boolean = false,
    isDisabled: boolean = false,
    className?: string
): string => {
    const classes: string[] = ['input']

    // Estado de error
    if (hasError) {
        classes.push('border-danger-500 focus:border-danger-500 focus:ring-danger-500')
    }

    // Estado deshabilitado
    if (isDisabled) {
        classes.push('opacity-60 cursor-not-allowed')
    }

    // Clases personalizadas
    if (className) {
        classes.push(className)
    }

    return classes.join(' ')
}

/**
 * Generar clases de card con type-safety
 */
export const createCardClasses = (
    variant: 'default' | 'elevated' | 'outlined' = 'default',
    className?: string
): string => {
    const classes: string[] = ['card']

    // Variantes de card
    const variantMap: Record<string, string> = {
        default: '',
        elevated: 'shadow-lg hover:shadow-xl',
        outlined: 'border-2 border-border-primary',
    }

    if (variantMap[variant]) {
        classes.push(variantMap[variant])
    }

    // Clases personalizadas
    if (className) {
        classes.push(className)
    }

    return classes.join(' ')
}

/**
 * Utilidades para responsive design
 */
export const responsiveClasses = {
    mobile: (classes: string) => classes,
    tablet: (classes: string) => `md:${classes}`,
    desktop: (classes: string) => `lg:${classes}`,
    wide: (classes: string) => `xl:${classes}`,
    ultra: (classes: string) => `2xl:${classes}`,
}

/**
 * Generar clases responsive de forma type-safe
 */
export const createResponsiveClasses = (
    mobile: string,
    tablet?: string,
    desktop?: string,
    wide?: string,
    ultra?: string
): string => {
    const classes: string[] = [mobile]

    if (tablet) classes.push(`md:${tablet}`)
    if (desktop) classes.push(`lg:${desktop}`)
    if (wide) classes.push(`xl:${wide}`)
    if (ultra) classes.push(`2xl:${ultra}`)

    return classes.join(' ')
}

/**
 * Utilidades para dark mode
 */
export const darkModeClasses = {
    light: (classes: string) => classes,
    dark: (classes: string) => `dark:${classes}`,
    both: (lightClasses: string, darkClasses: string) => `${lightClasses} dark:${darkClasses}`,
}

/**
 * Generar clases con soporte para dark mode
 */
export const createDarkModeClasses = (
    lightClasses: string,
    darkClasses?: string
): string => {
    if (!darkClasses) return lightClasses
    return `${lightClasses} dark:${darkClasses}`
}

/**
 * Utilidades para estados de focus
 */
export const focusClasses = {
    ring: 'focus-ring',
    inset: 'focus-ring-inset',
    visible: 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
}

/**
 * Utilidades para animaciones
 */
export const animationClasses = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    scaleIn: 'animate-scale-in',
    bounceGentle: 'animate-bounce-gentle',
}

/**
 * Utilidades para sombras
 */
export const shadowClasses = {
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    hard: 'shadow-hard',
    focus: 'shadow-focus',
    focusRing: 'shadow-focus-ring',
}

/**
 * Utilidades para gradientes
 */
export const gradientClasses = {
    primary: 'gradient-primary',
    secondary: 'gradient-secondary',
    success: 'gradient-success',
    warning: 'gradient-warning',
    danger: 'gradient-danger',
}

/**
 * Utilidades para flexbox
 */
export const flexClasses = {
    center: 'flex-center',
    between: 'flex-between',
    start: 'flex-start',
    end: 'flex-end',
    column: 'flex-col',
    row: 'flex-row',
    wrap: 'flex-wrap',
    nowrap: 'flex-nowrap',
}

/**
 * Utilidades para texto
 */
export const textClasses = {
    balance: 'text-balance',
    pretty: 'text-pretty',
    truncate2: 'truncate-lines-2',
    truncate3: 'truncate-lines-3',
    shadow: 'text-shadow',
    shadowLg: 'text-shadow-lg',
}

/**
 * Utilidades para espaciado
 */
export const spacingClasses = {
    section: 'section-padding',
    sectionSm: 'section-padding-sm',
    sectionLg: 'section-padding-lg',
    container: 'container-fluid',
}

/**
 * Utilidades para scroll
 */
export const scrollClasses = {
    smooth: 'scroll-smooth',
    auto: 'scroll-auto',
    xAuto: 'overflow-x-auto',
    yAuto: 'overflow-y-auto',
    hidden: 'overflow-hidden',
}

/**
 * Utilidades para cursor
 */
export const cursorClasses = {
    grab: 'cursor-grab',
    grabbing: 'cursor-grabbing',
    notAllowed: 'cursor-not-allowed',
    pointer: 'cursor-pointer',
    default: 'cursor-default',
}

/**
 * Utilidades para selección
 */
export const selectClasses = {
    none: 'select-none',
    text: 'select-text',
    all: 'select-all',
    auto: 'select-auto',
}

/**
 * Utilidades para backdrop
 */
export const backdropClasses = {
    blurXs: 'backdrop-blur-xs',
    blurSm: 'backdrop-blur-sm',
    blurMd: 'backdrop-blur-md',
    blurLg: 'backdrop-blur-lg',
}

/**
 * Utilidades para posición
 */
export const positionClasses = {
    centerAbsolute: 'center-absolute',
    centerFlex: 'center-flex',
}

/**
 * Utilidades para aspect ratio
 */
export const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
}

/**
 * Utilidades para border
 */
export const borderClasses = {
    dashed: 'border-dashed',
    dotted: 'border-dotted',
}

/**
 * Utilidades para z-index
 */
export const zIndexClasses = {
    hide: 'z-hide',
    base: 'z-base',
    docked: 'z-docked',
    dropdown: 'z-dropdown',
    sticky: 'z-sticky',
    banner: 'z-banner',
    overlay: 'z-overlay',
    modal: 'z-modal',
    popover: 'z-popover',
    skipLink: 'z-skipLink',
    toast: 'z-toast',
    tooltip: 'z-tooltip',
}
