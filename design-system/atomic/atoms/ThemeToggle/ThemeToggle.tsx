// src/design-system/atomic/atoms/ThemeToggle/ThemeToggle.tsx
import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import { cn } from '../../../utils/cn'
import { Icon } from '../Icon'

export interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export const ThemeToggle = React.memo<ThemeToggleProps>(({
  className,
  showLabel = false
}) => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    // Solo alternar entre light y dark, sin system
    if (resolvedTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'flex items-center justify-center gap-1.5 rounded-lg p-2',
        'bg-background-secondary/50 hover:bg-background-secondary',
        'text-foreground-secondary hover:text-foreground',
        'border border-border/50 hover:border-primary/50',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'w-9 h-9',
        className
      )}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
      title={`Current: ${resolvedTheme} (click to switch)`}
    >
      {resolvedTheme === 'light' ? (
        <Icon name="MoonStar" size="small" />
      ) : (
        <Icon name="SunMedium" size="small" />
      )}
      {showLabel && (
        <span className="text-xs font-medium">
          {resolvedTheme === 'light' ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  )
})

ThemeToggle.displayName = 'ThemeToggle'
