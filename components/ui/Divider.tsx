import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────

type DividerVariant = 'default' | 'gold' | 'ornamental'

interface DividerProps {
  /** Visual variant */
  variant?: DividerVariant
  /** Additional CSS classes */
  className?: string
}

// ── Component ──────────────────────────────────────────

/**
 * Design System Kitty-Octa — Divider
 *
 * Decorative separator between content blocks.
 * - `default` : thin taupe line
 * - `gold` : thin gold line
 * - `ornamental` : gold lines with centered diamond ◆
 */
export default function Divider({
  variant = 'default',
  className,
}: DividerProps) {
  if (variant === 'ornamental') {
    return (
      <div
        className={cn(
          'flex items-center justify-center gap-4 py-2',
          className,
        )}
        role="separator"
        aria-hidden="true"
      >
        <span className="h-px flex-1 bg-gold/40" />
        <span
          className="font-playfair text-gold text-lg select-none"
          aria-hidden="true"
        >
          ◆
        </span>
        <span className="h-px flex-1 bg-gold/40" />
      </div>
    )
  }

  const lineColor = variant === 'gold' ? 'bg-gold/40' : 'bg-taupe/20'

  return (
    <hr
      className={cn('border-0 h-px', lineColor, className)}
      role="separator"
      aria-hidden="true"
    />
  )
}
