import type { Config } from 'tailwindcss';

/**
 * Configuración de Tailwind CSS v4 con Design Tokens Semánticos
 * 
 * Esta configuración mapea las variables CSS definidas en variables.css
 * a clases Tailwind semánticas, permitiendo usar tokens como:
 * - bg-primary, bg-secondary, bg-success, etc.
 * - text-foreground, text-muted, text-accent
 * - border-border, border-input, border-focus
 * 
 * Los valores reales están en variables.css, esta es solo la conexión.
 */
const config: Config = {
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // === COLORES SEMÁNTICOS ===
      colors: {
        // Colores de fondo
        background: {
          DEFAULT: 'var(--color-background-primary)',
          secondary: 'var(--color-background-secondary)',
          tertiary: 'var(--color-background-tertiary)',
          body: 'var(--color-background-body)',
          dark: 'var(--color-background-dark)',
          overlay: 'var(--color-background-overlay)',
        },
        // Colores de texto
        foreground: {
          DEFAULT: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          accent: 'var(--color-text-accent)',
        },
        // Colores primarios (semánticos)
        primary: {
          DEFAULT: 'var(--color-primary-500)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
          foreground: 'var(--color-text-on-primary)',
        },
        // Colores secundarios
        secondary: {
          DEFAULT: 'var(--color-secondary-500)',
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          950: 'var(--color-secondary-950)',
          foreground: 'var(--color-text-on-secondary)',
        },
        // Colores de estado (semánticos)
        success: {
          DEFAULT: 'var(--color-success-500)',
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)',
          950: 'var(--color-success-950)',
          foreground: 'var(--color-text-on-success)',
        },
        warning: {
          DEFAULT: 'var(--color-warning-500)',
          50: 'var(--color-warning-50)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
          800: 'var(--color-warning-800)',
          900: 'var(--color-warning-900)',
          950: 'var(--color-warning-950)',
          foreground: 'var(--color-text-on-warning)',
        },
        danger: {
          DEFAULT: 'var(--color-danger-500)',
          50: 'var(--color-danger-50)',
          100: 'var(--color-danger-100)',
          200: 'var(--color-danger-200)',
          300: 'var(--color-danger-300)',
          400: 'var(--color-danger-400)',
          500: 'var(--color-danger-500)',
          600: 'var(--color-danger-600)',
          700: 'var(--color-danger-700)',
          800: 'var(--color-danger-800)',
          900: 'var(--color-danger-900)',
          950: 'var(--color-danger-950)',
          foreground: 'var(--color-text-on-danger)',
        },
        info: {
          DEFAULT: 'var(--color-info-500)',
          50: 'var(--color-info-50)',
          100: 'var(--color-info-100)',
          200: 'var(--color-info-200)',
          300: 'var(--color-info-300)',
          400: 'var(--color-info-400)',
          500: 'var(--color-info-500)',
          600: 'var(--color-info-600)',
          700: 'var(--color-info-700)',
          800: 'var(--color-info-800)',
          900: 'var(--color-info-900)',
          950: 'var(--color-info-950)',
          foreground: 'var(--color-text-on-info)',
        },
        // Colores de borde (semánticos)
        border: {
          DEFAULT: 'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)',
          light: 'var(--color-border-light)',
          focus: 'var(--color-border-focus)',
          error: 'var(--color-border-error)',
          success: 'var(--color-border-success)',
          warning: 'var(--color-border-warning)',
          danger: 'var(--color-border-danger)',
          input: 'var(--color-border-input)',
        },
        // Colores de texto (alias semánticos)
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          accent: 'var(--color-text-accent)',
          'on-primary': 'var(--color-text-on-primary)',
          'on-secondary': 'var(--color-text-on-secondary)',
          'on-success': 'var(--color-text-on-success)',
          'on-warning': 'var(--color-text-on-warning)',
          'on-danger': 'var(--color-text-on-danger)',
          'on-info': 'var(--color-text-on-info)',
        },
        // Ring (para focus states)
        ring: {
          DEFAULT: 'var(--color-border-focus)',
          focus: 'var(--color-border-focus)',
        },
        // Gray scale (alias de neutral)
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
          950: 'var(--color-gray-950)',
        },
      },
      // === BORDER RADIUS SEMÁNTICO ===
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        xl: 'var(--border-radius-xl)',
        '2xl': 'var(--border-radius-2xl)',
        '3xl': 'var(--border-radius-3xl)',
        full: 'var(--border-radius-full)',
        circle: 'var(--border-radius-circle)',
      },
      // === ESPACIADO SEMÁNTICO ===
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
      },
      // === TIPOGRAFÍA SEMÁNTICA ===
      fontFamily: {
        sans: ['var(--font-family-base)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-family-heading)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-family-mono)', 'monospace'],
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
      },
      fontWeight: {
        thin: 'var(--font-weight-thin)',
        extralight: 'var(--font-weight-extralight)',
        light: 'var(--font-weight-light)',
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
        black: 'var(--font-weight-black)',
      },
      lineHeight: {
        none: 'var(--line-height-none)',
        tight: 'var(--line-height-tight)',
        snug: 'var(--line-height-snug)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose: 'var(--line-height-loose)',
      },
      // === SOMBRAS SEMÁNTICAS ===
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        none: 'var(--shadow-none)',
        focus: 'var(--shadow-focus)',
        'focus-ring': 'var(--shadow-focus)',
        'focus-danger': 'var(--shadow-focus-danger)',
        'focus-success': 'var(--shadow-focus-success)',
        primary: 'var(--shadow-primary)',
        success: 'var(--shadow-success)',
        warning: 'var(--shadow-warning)',
        danger: 'var(--shadow-danger)',
      },
      // === TRANSICIONES SEMÁNTICAS ===
      transitionDuration: {
        instant: 'var(--duration-instant)',
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
        slowest: 'var(--duration-slowest)',
      },
      transitionTimingFunction: {
        'ease-in-quad': 'var(--ease-in-quad)',
        'ease-out-quad': 'var(--ease-out-quad)',
        'ease-in-out-quad': 'var(--ease-in-out-quad)',
        'ease-in-cubic': 'var(--ease-in-cubic)',
        'ease-out-cubic': 'var(--ease-out-cubic)',
        'ease-in-out-cubic': 'var(--ease-in-out-cubic)',
        smooth: 'var(--ease-smooth)',
        spring: 'var(--ease-spring)',
      },
      // === Z-INDEX SEMÁNTICO ===
      zIndex: {
        hide: 'var(--z-index-hide)',
        base: 'var(--z-index-base)',
        dropdown: 'var(--z-index-dropdown)',
        sticky: 'var(--z-index-sticky)',
        fixed: 'var(--z-index-fixed)',
        modal: 'var(--z-index-modal)',
        popover: 'var(--z-index-popover)',
        tooltip: 'var(--z-index-tooltip)',
      },
    },
  },
  plugins: [],
};

export default config;

