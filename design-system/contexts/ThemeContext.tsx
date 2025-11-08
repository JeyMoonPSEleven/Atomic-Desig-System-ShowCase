/**
 * ThemeProvider para manejo de dark mode con Tailwind CSS
 */

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Theme, ThemeContextType } from '../types/tailwind'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
    enableSystem?: boolean
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    defaultTheme = 'system',
    storageKey = 'theme',
    enableSystem = true,
}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        // Cargar tema desde localStorage
        const storedTheme = localStorage.getItem(storageKey) as Theme
        if (storedTheme) {
            setTheme(storedTheme)
        }
    }, [storageKey])

    useEffect(() => {
        const root = document.documentElement

        // Determinar tema resuelto
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const dark = theme === 'dark' || (theme === 'system' && prefersDark)

        setResolvedTheme(dark ? 'dark' : 'light')

        // Aplicar clase al HTML
        root.classList.toggle('dark', dark)

        // Guardar en localStorage
        localStorage.setItem(storageKey, theme)
    }, [theme, storageKey])

    useEffect(() => {
        if (!enableSystem) return

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        const handleChange = () => {
            if (theme === 'system') {
                const prefersDark = mediaQuery.matches
                setResolvedTheme(prefersDark ? 'dark' : 'light')
                document.documentElement.classList.toggle('dark', prefersDark)
            }
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [theme, enableSystem])

    const value: ThemeContextType = {
        theme,
        setTheme,
        resolvedTheme,
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}

/**
 * Hook para alternar entre temas
 */
export const useThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else if (theme === 'dark') {
            setTheme('system')
        } else {
            setTheme('light')
        }
    }

    const setLightTheme = () => setTheme('light')
    const setDarkTheme = () => setTheme('dark')
    const setSystemTheme = () => setTheme('system')

    return {
        theme,
        resolvedTheme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
        setSystemTheme,
        isLight: resolvedTheme === 'light',
        isDark: resolvedTheme === 'dark',
        isSystem: theme === 'system',
    }
}

/**
 * Componente para alternar tema
 */
export const ThemeToggle: React.FC<{
    className?: string
    showLabel?: boolean
    variant?: 'button' | 'switch' | 'select'
}> = ({
    className = '',
    showLabel = false,
    variant = 'button'
}) => {
        const { theme, toggleTheme, isLight, isDark } = useThemeToggle()

        if (variant === 'switch') {
            return (
                <label className={`flex items-center gap-sm cursor-pointer ${className}`}>
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={toggleTheme}
                        className="sr-only"
                    />
                    <div className="relative inline-flex h-md w-lg items-center rounded-full bg-gray-200 transition-colors dark:bg-gray-700">
                        <div className={`inline-block h-sm w-sm transform rounded-full bg-white transition-transform ${isDark ? 'translate-x-lg' : 'translate-x-xs'
                            }`} />
                    </div>
                    {showLabel && (
                        <span className="text-sm font-medium text-text-primary">
                            {isDark ? 'Dark' : 'Light'}
                        </span>
                    )}
                </label>
            )
        }

        if (variant === 'select') {
            return (
                <select
                    value={theme}
                    onChange={(e) => {
                        const { setLightTheme, setDarkTheme, setSystemTheme } = useThemeToggle()
                        const value = e.target.value as Theme
                        if (value === 'light') setLightTheme()
                        else if (value === 'dark') setDarkTheme()
                        else setSystemTheme()
                    }}
                    className={`px-sm py-xs rounded-md border border-border-primary bg-bg-primary text-text-primary ${className}`}
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                </select>
            )
        }

        // Default button variant
        return (
            <button
                onClick={toggleTheme}
                className={`btn btn-ghost ${className}`}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
                {isDark ? (
                    <svg className="h-md w-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                ) : (
                    <svg className="h-md w-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                )}
                {showLabel && (
                    <span className="ml-xs">
                        {isDark ? 'Light' : 'Dark'}
                    </span>
                )}
            </button>
        )
    }

/**
 * Hook para detectar si el sistema prefiere dark mode
 */
export const useSystemTheme = () => {
    const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        const handleChange = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? 'dark' : 'light')
        }

        setSystemTheme(mediaQuery.matches ? 'dark' : 'light')
        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    return systemTheme
}

/**
 * Hook para obtener el tema actual (resuelto)
 */
export const useCurrentTheme = () => {
    const { theme, resolvedTheme } = useTheme()
    const systemTheme = useSystemTheme()

    return {
        theme,
        resolvedTheme,
        systemTheme,
        isLight: resolvedTheme === 'light',
        isDark: resolvedTheme === 'dark',
        isSystem: theme === 'system',
    }
}

/**
 * Componente para renderizar contenido condicionalmente basado en el tema
 */
export const ThemeContent: React.FC<{
    light?: React.ReactNode
    dark?: React.ReactNode
    children?: React.ReactNode
    className?: string
}> = ({ light, dark, children, className = '' }) => {
    const { resolvedTheme } = useTheme()

    if (resolvedTheme === 'dark' && dark) {
        return <div className={className}>{dark}</div>
    }

    if (resolvedTheme === 'light' && light) {
        return <div className={className}>{light}</div>
    }

    return <div className={className}>{children}</div>
}

/**
 * Hook para obtener clases CSS basadas en el tema
 */
export const useThemeClasses = () => {
    const { resolvedTheme } = useTheme()

    return {
        resolvedTheme,
        isLight: resolvedTheme === 'light',
        isDark: resolvedTheme === 'dark',
        // Utilidades comunes
        bg: {
            primary: resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white',
            secondary: resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-50',
            tertiary: resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
        },
        text: {
            primary: resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900',
            secondary: resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600',
            muted: resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500',
        },
        border: {
            primary: resolvedTheme === 'dark' ? 'border-gray-700' : 'border-gray-200',
            secondary: resolvedTheme === 'dark' ? 'border-gray-600' : 'border-gray-300',
        },
        shadow: {
            sm: resolvedTheme === 'dark' ? 'shadow-gray-900/20' : 'shadow-gray-900/10',
            md: resolvedTheme === 'dark' ? 'shadow-gray-900/30' : 'shadow-gray-900/20',
            lg: resolvedTheme === 'dark' ? 'shadow-gray-900/40' : 'shadow-gray-900/30',
        },
    }
}
