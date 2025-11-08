/**
 * Tipos TypeScript para Tailwind CSS + Atomic Design
 */

import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

/* === TIPOS BASE === */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
export type Theme = 'light' | 'dark' | 'system'

/* === INTERFACES BASE === */
export interface BaseProps {
    className?: string
    children?: ReactNode
}

export interface VariantProps {
    variant?: ButtonVariant
}

export interface SizeProps {
    size?: ButtonSize
}

export interface ColorProps {
    color?: ColorVariant
}

export interface LoadingProps {
    isLoading?: boolean
}

export interface DisabledProps {
    disabled?: boolean
}

export interface FullWidthProps {
    fullWidth?: boolean
}

/* === INTERFACES DE COMPONENTES === */

/* Button */
export interface ButtonProps extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    BaseProps,
    VariantProps,
    SizeProps,
    LoadingProps,
    DisabledProps,
    FullWidthProps {
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}

/* Input */
export interface InputProps extends
    InputHTMLAttributes<HTMLInputElement>,
    BaseProps,
    DisabledProps {
    hasError?: boolean
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    helperText?: string
    errorText?: string
}

/* Textarea */
export interface TextareaProps extends
    HTMLAttributes<HTMLTextAreaElement>,
    BaseProps,
    DisabledProps {
    hasError?: boolean
    helperText?: string
    errorText?: string
}

/* Select */
export interface SelectProps extends
    HTMLAttributes<HTMLSelectElement>,
    BaseProps,
    DisabledProps {
    hasError?: boolean
    options: Array<{ value: string; label: string; disabled?: boolean }>
    placeholder?: string
    helperText?: string
    errorText?: string
}

/* Checkbox */
export interface CheckboxProps extends
    HTMLAttributes<HTMLInputElement>,
    BaseProps,
    DisabledProps {
    label?: string
    helperText?: string
    errorText?: string
}

/* Radio */
export interface RadioProps extends
    HTMLAttributes<HTMLInputElement>,
    BaseProps,
    DisabledProps {
    label?: string
    helperText?: string
    errorText?: string
}

/* Switch */
export interface SwitchProps extends
    HTMLAttributes<HTMLInputElement>,
    BaseProps,
    DisabledProps {
    label?: string
    helperText?: string
    errorText?: string
}

/* Badge */
export interface BadgeProps extends
    HTMLAttributes<HTMLSpanElement>,
    BaseProps,
    ColorProps {
    size?: SizeVariant
    removable?: boolean
    onRemove?: () => void
}

/* Alert */
export interface AlertProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps,
    ColorProps {
    dismissible?: boolean
    onDismiss?: () => void
    icon?: ReactNode
}

/* Card */
export interface CardProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    variant?: 'default' | 'elevated' | 'outlined'
    padding?: SizeVariant
}

/* Modal */
export interface ModalProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    closeOnOverlayClick?: boolean
    closeOnEscape?: boolean
}

/* Tooltip */
export interface TooltipProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    content: ReactNode
    placement?: 'top' | 'bottom' | 'left' | 'right'
    trigger?: 'hover' | 'click' | 'focus'
    delay?: number
}

/* Dropdown */
export interface DropdownProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    trigger: ReactNode
    items: Array<{
        label: string
        onClick: () => void
        disabled?: boolean
        icon?: ReactNode
    }>
    placement?: 'top' | 'bottom' | 'left' | 'right'
    closeOnItemClick?: boolean
}

/* Progress */
export interface ProgressProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    value: number
    max?: number
    size?: SizeVariant
    color?: ColorVariant
    showLabel?: boolean
    label?: string
}

/* Spinner */
export interface SpinnerProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    size?: SizeVariant
    color?: ColorVariant
    speed?: 'slow' | 'normal' | 'fast'
}

/* Avatar */
export interface AvatarProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    src?: string
    alt?: string
    size?: SizeVariant
    fallback?: string
    shape?: 'circle' | 'square'
}

/* Image */
export interface ImageProps extends
    HTMLAttributes<HTMLImageElement>,
    BaseProps {
    src: string
    alt: string
    width?: number
    height?: number
    loading?: 'lazy' | 'eager'
    placeholder?: string
    errorFallback?: ReactNode
}

/* Link */
export interface LinkProps extends
    HTMLAttributes<HTMLAnchorElement>,
    BaseProps {
    href: string
    external?: boolean
    variant?: 'default' | 'primary' | 'secondary'
    underline?: boolean
}

/* Heading */
export interface HeadingProps extends
    HTMLAttributes<HTMLHeadingElement>,
    BaseProps {
    level: 1 | 2 | 3 | 4 | 5 | 6
    size?: SizeVariant
    weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
    color?: ColorVariant
}

/* Text */
export interface TextProps extends
    HTMLAttributes<HTMLParagraphElement>,
    BaseProps {
    size?: SizeVariant
    weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
    color?: ColorVariant
    align?: 'left' | 'center' | 'right' | 'justify'
    truncate?: boolean
    lines?: number
}

/* Divider */
export interface DividerProps extends
    HTMLAttributes<HTMLHRElement>,
    BaseProps {
    orientation?: 'horizontal' | 'vertical'
    thickness?: 'thin' | 'medium' | 'thick'
    color?: ColorVariant
}

/* Icon */
export interface IconProps extends
    HTMLAttributes<HTMLSpanElement>,
    BaseProps {
    name: string
    size?: SizeVariant
    color?: ColorVariant
    weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
}

/* === INTERFACES DE MOLÉCULAS === */

/* Form */
export interface FormProps extends
    HTMLAttributes<HTMLFormElement>,
    BaseProps {
    onSubmit: (data: FormData) => void
    validation?: 'onChange' | 'onBlur' | 'onSubmit'
    showErrors?: boolean
}

/* SearchBar */
export interface SearchBarProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    onSearch: (query: string) => void
    placeholder?: string
    showButton?: boolean
    buttonText?: string
    debounceMs?: number
}

/* Pagination */
export interface PaginationProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    showFirstLast?: boolean
    showPrevNext?: boolean
    maxVisible?: number
}

/* Breadcrumb */
export interface BreadcrumbProps extends
    HTMLAttributes<HTMLNavElement>,
    BaseProps {
    items: Array<{
        label: string
        href?: string
        current?: boolean
    }>
    separator?: ReactNode
}

/* Tabs */
export interface TabsProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    items: Array<{
        label: string
        content: ReactNode
        disabled?: boolean
    }>
    defaultActiveTab?: number
    onTabChange?: (index: number) => void
    variant?: 'default' | 'pills' | 'underline'
}

/* Accordion */
export interface AccordionProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    items: Array<{
        title: string
        content: ReactNode
        defaultOpen?: boolean
        disabled?: boolean
    }>
    allowMultiple?: boolean
    variant?: 'default' | 'bordered' | 'flush'
}

/* Rating */
export interface RatingProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    value: number
    max?: number
    onChange?: (value: number) => void
    readonly?: boolean
    size?: SizeVariant
    color?: ColorVariant
    showLabel?: boolean
    label?: string
}

/* Timeline */
export interface TimelineProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    items: Array<{
        title: string
        description?: string
        date?: string
        icon?: ReactNode
        color?: ColorVariant
    }>
    orientation?: 'vertical' | 'horizontal'
    variant?: 'default' | 'minimal' | 'detailed'
}

/* Toast */
export interface ToastProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    message: string
    type?: ColorVariant
    duration?: number
    onClose?: () => void
    action?: {
        label: string
        onClick: () => void
    }
}

/* === INTERFACES DE ORGANISMOS === */

/* Header */
export interface HeaderProps extends
    HTMLAttributes<HTMLHeaderElement>,
    BaseProps {
    logo?: ReactNode
    navigation?: ReactNode
    actions?: ReactNode
    sticky?: boolean
    transparent?: boolean
}

/* Footer */
export interface FooterProps extends
    HTMLAttributes<HTMLFooterElement>,
    BaseProps {
    links?: Array<{
        label: string
        href: string
        external?: boolean
    }>
    social?: Array<{
        name: string
        href: string
        icon: ReactNode
    }>
    copyright?: string
}

/* Navigation */
export interface NavigationProps extends
    HTMLAttributes<HTMLNavElement>,
    BaseProps {
    items: Array<{
        label: string
        href: string
        icon?: ReactNode
        children?: Array<{
            label: string
            href: string
        }>
    }>
    orientation?: 'horizontal' | 'vertical'
    variant?: 'default' | 'minimal' | 'pills'
}

/* Sidebar */
export interface SidebarProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    isOpen: boolean
    onClose: () => void
    items: Array<{
        label: string
        href: string
        icon?: ReactNode
        badge?: string | number
        children?: Array<{
            label: string
            href: string
        }>
    }>
    overlay?: boolean
    position?: 'left' | 'right'
}

/* Hero */
export interface HeroProps extends
    HTMLAttributes<HTMLSectionElement>,
    BaseProps {
    title: string
    subtitle?: string
    image?: string
    actions?: ReactNode
    background?: 'default' | 'gradient' | 'image'
    alignment?: 'left' | 'center' | 'right'
}

/* Pricing */
export interface PricingProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    plans: Array<{
        name: string
        price: string
        period?: string
        features: string[]
        cta: string
        popular?: boolean
        disabled?: boolean
    }>
    onPlanSelect?: (plan: string) => void
    variant?: 'default' | 'minimal' | 'detailed'
}

/* Testimonials */
export interface TestimonialsProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    testimonials: Array<{
        name: string
        role: string
        company: string
        content: string
        avatar?: string
        rating?: number
    }>
    variant?: 'default' | 'minimal' | 'detailed'
    showRating?: boolean
}

/* Statistics */
export interface StatisticsProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    stats: Array<{
        label: string
        value: string | number
        icon?: ReactNode
        trend?: {
            value: number
            direction: 'up' | 'down'
        }
    }>
    variant?: 'default' | 'minimal' | 'detailed'
    columns?: 2 | 3 | 4
}

/* FAQ */
export interface FAQProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    items: Array<{
        question: string
        answer: string
    }>
    variant?: 'default' | 'minimal' | 'detailed'
    allowMultiple?: boolean
}

/* Newsletter */
export interface NewsletterProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    title: string
    description?: string
    placeholder?: string
    buttonText?: string
    onSubmit: (email: string) => void
    variant?: 'default' | 'minimal' | 'detailed'
}

/* ContactForm */
export interface ContactFormProps extends
    HTMLAttributes<HTMLFormElement>,
    BaseProps {
    fields: Array<{
        name: string
        type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
        label: string
        required?: boolean
        placeholder?: string
        options?: Array<{ value: string; label: string }>
    }>
    onSubmit: (data: Record<string, string>) => void
    submitText?: string
    variant?: 'default' | 'minimal' | 'detailed'
}

/* === INTERFACES DE TEMPLATES === */

/* Landing */
export interface LandingProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    hero: HeroProps
    features?: ReactNode
    pricing?: PricingProps
    testimonials?: TestimonialsProps
    cta?: ReactNode
    footer?: FooterProps
}

/* Dashboard */
export interface DashboardProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    header: HeaderProps
    sidebar: SidebarProps
    content: ReactNode
    breadcrumb?: BreadcrumbProps
}

/* Blog */
export interface BlogProps extends
    HTMLAttributes<HTMLDivElement>,
    BaseProps {
    posts: Array<{
        title: string
        excerpt: string
        date: string
        author: string
        image?: string
        href: string
    }>
    pagination?: PaginationProps
    sidebar?: ReactNode
}

/* === INTERFACES DE CONTEXTO === */

/* Theme */
export interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    resolvedTheme: 'light' | 'dark'
}

/* Toast */
export interface ToastContextType {
    toasts: ToastProps[]
    addToast: (toast: Omit<ToastProps, 'onClose'>) => void
    removeToast: (id: string) => void
    clearToasts: () => void
}

/* Modal */
export interface ModalContextType {
    modals: ModalProps[]
    openModal: (modal: Omit<ModalProps, 'isOpen' | 'onClose'>) => void
    closeModal: (id: string) => void
    closeAllModals: () => void
}

/* === UTILIDADES DE TIPOS === */

export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never
export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : never
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type Required<T, K extends keyof T> = T & Required<Pick<T, K>>

/* === TIPOS DE EVENTOS === */

export type FormSubmitEvent = React.FormEvent<HTMLFormElement>
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>
export type TextareaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>
export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>

/* === TIPOS DE UTILIDADES === */

export type ClassName = string | undefined | null | false
export type ClassNames = ClassName[]
export type ResponsiveValue<T> = T | { sm?: T; md?: T; lg?: T; xl?: T; '2xl'?: T }
export type DarkModeValue<T> = T | { light: T; dark: T }
export type ConditionalValue<T> = T | { condition: boolean; value: T }
