// src/design-system/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react'

/**
 * Hook para detectar media queries de forma reactiva
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)

        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        // API moderna
        if (media.addEventListener) {
            media.addEventListener('change', listener)
            return () => media.removeEventListener('change', listener)
        } else {
            // Fallback para navegadores antiguos
            media.addListener(listener)
            return () => media.removeListener(listener)
        }
    }, [matches, query])

    return matches
}
