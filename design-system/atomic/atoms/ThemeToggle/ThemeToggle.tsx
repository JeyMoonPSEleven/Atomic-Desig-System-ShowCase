// src/design-system/atomic/atoms/ThemeToggle/ThemeToggle.tsx
import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import { cn } from '../../../utils/cn'

export interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export const ThemeToggle = React.memo<ThemeToggleProps>(({
  className,
  showLabel = false
}) => {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'light') return '☀️'
    if (theme === 'dark') return '🌙'
    return '💻'
  }

  const getLabel = () => {
    if (theme === 'light') return 'Light'
    if (theme === 'dark') return 'Dark'
    return 'System'
  }

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        'flex items-center gap-sm rounded-md px-md py-sm',
        'bg-background-secondary hover:bg-background-tertiary',
        'text-text-primary transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-primary',
        className
      )}
      aria-label={`Current theme: ${theme}. Click to change`}
      title={`Theme: ${theme} (click to cycle)`}
    >
      <span className="text-lg" role="img" aria-label={`${theme} theme icon`}>
        {getIcon()}
      </span>
      {showLabel && (
        <span className="text-sm font-medium">
          {getLabel()}
        </span>
      )}
    </button>
  )
})

ThemeToggle.displayName = 'ThemeToggle'
