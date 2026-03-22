'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

/**
 * Hook pour le smooth scroll luxury.
 * À utiliser dans le layout principal (app/layout.tsx).
 *
 * ARCH: Lenis gère le smooth scroll natif avec un easing
 * exponentiel qui donne un effet haut de gamme.
 */
export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])
}
