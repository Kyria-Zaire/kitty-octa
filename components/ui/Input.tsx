import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────

interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Label toujours visible au-dessus du champ */
  label: string
  /** Message d'erreur en rouge sémantique */
  error?: string
  /** Texte d'aide en taupe */
  hint?: string
  /** Champ obligatoire */
  required?: boolean
}

// ── Component ──────────────────────────────────────────

/**
 * Design System Kitty-Octa — Input
 *
 * Text input avec label obligatoire, erreur, et hint.
 * Background blanc pour lisibilité sur fond ivory, focus ring gold.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, required, className, id, ...rest }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-gold" aria-hidden="true">
              *
            </span>
          )}
        </label>

        <input
          ref={ref}
          id={inputId}
          required={required}
          className={cn(
            // Base
            'w-full rounded-[2px] border bg-white px-4 py-2.5 text-sm font-dm-sans',
            'transition-colors duration-200',
            'placeholder:text-taupe/60',
            // Focus
            'focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold',
            // State
            error
              ? 'border-red-500 text-charcoal focus:border-red-500 focus:ring-red-500/20'
              : 'border-taupe/30 text-charcoal',
            className,
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            error
              ? `${inputId}-error`
              : hint
                ? `${inputId}-hint`
                : undefined
          }
          {...rest}
        />

        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-xs text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-taupe">
            {hint}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
