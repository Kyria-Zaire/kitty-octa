'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

// ── Types ──────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  disabled?: boolean
  href?: string
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof ButtonBaseProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

// ── Style Maps ─────────────────────────────────────────

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-charcoal text-ivory hover:bg-charcoal/90 active:bg-charcoal/80',
  secondary:
    'border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory active:bg-charcoal/90 active:text-ivory',
  ghost:
    'text-charcoal hover:text-gold underline-offset-4 hover:underline',
  gold:
    'bg-gold text-ivory hover:bg-gold/90 active:bg-gold/80',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-xs gap-1.5',
  md: 'px-7 py-3 text-sm gap-2',
  lg: 'px-10 py-4 text-sm gap-2.5',
}

// ── Spinner ────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="absolute h-4 w-4 animate-spin text-gold"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

// ── Component ──────────────────────────────────────────

/**
 * Design System Kitty-Octa — Button
 *
 * Sharp corners (rounded-none), uppercase tracking, luxury editorial feel.
 * Renders as Next.js Link when `href` is provided, otherwise as `<button>`.
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      isLoading = false,
      disabled,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading

    const classes = cn(
      // Base
      'relative inline-flex items-center justify-center font-semibold',
      'uppercase tracking-[0.15em] leading-none',
      'rounded-[2px] transition-all duration-300 ease-luxury',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
      // Variant
      variantStyles[variant],
      // Size
      sizeStyles[size],
      // Disabled / Loading
      isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      className,
    )

    const content = (
      <>
        {isLoading && <Spinner />}
        <span className={cn(isLoading && 'invisible')}>{children}</span>
      </>
    )

    // ARCH: href → Link (sauf si disabled/loading, on reste sur un <span> non-interactif)
    if (href && !isDisabled) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(rest as Omit<ComponentPropsWithoutRef<'a'>, 'className' | 'href'>)}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={(rest as ComponentPropsWithoutRef<'button'>).type ?? 'button'}
        className={classes}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        onClick={(rest as ComponentPropsWithoutRef<'button'>).onClick}
        aria-label={(rest as Record<string, unknown>)['aria-label'] as string | undefined}
      >
        {content}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
