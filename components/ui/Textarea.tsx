import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
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
 * Design System Kitty-Octa — Textarea
 *
 * Multi-line input avec le même langage visuel que Input.
 * Rows par défaut : 4.
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, required, className, id, rows = 4, ...rest }, ref) => {
    const textareaId = id ?? label.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        <label
          htmlFor={textareaId}
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-gold" aria-hidden="true">
              *
            </span>
          )}
        </label>

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          className={cn(
            // Base
            'w-full rounded-[2px] border bg-white px-4 py-2.5 text-sm font-dm-sans',
            'transition-colors duration-200',
            'placeholder:text-taupe/60',
            'resize-y min-h-[100px]',
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
              ? `${textareaId}-error`
              : hint
                ? `${textareaId}-hint`
                : undefined
          }
          {...rest}
        />

        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-1.5 text-xs text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="mt-1.5 text-xs text-taupe">
            {hint}
          </p>
        )}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
export default Textarea
