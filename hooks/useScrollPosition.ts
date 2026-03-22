'use client'
import { useEffect, useState } from 'react'

export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handler = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handler, { passive: true })

        // Initial check on mount
        handler()

        return () => window.removeEventListener('scroll', handler)
    }, [])

    return scrollY
}
