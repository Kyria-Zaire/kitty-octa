import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────

type BadgeVariant = 'default' | 'gold' | 'success' | 'muted'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
    /** Visual variant */
    variant?: BadgeVariant
    /** Size preset */
    size?: BadgeSize
    /** Additional CSS classes */
    className?: string
    children: React.ReactNode
}

// ── Style Maps ─────────────────────────────────────────

const variantStyles: Record<BadgeVariant, string> = {
    default:
        'bg-charcoal/10 text-charcoal',
    gold:
        'bg-gold/15 text-gold border border-gold/30',
    success:
        'bg-emerald-50 text-emerald-700 border border-emerald-200',
    muted:
        'bg-taupe/10 text-taupe',
}

const sizeStyles: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
}

// ── Component ──────────────────────────────────────────

/**
 * Design System Kitty-Octa — Badge
 *
 * Compact label for FOMO signals and categories.
 * Usage: <Badge variant="gold">Agenda chargé</Badge>
 */
export default function Badge({
    variant = 'default',
    size = 'md',
    className,
    children,
}: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center font-medium uppercase tracking-wider leading-none rounded-[2px]',
                variantStyles[variant],
                sizeStyles[size],
                className,
            )}
        >
            {children}
        </span>
    )
}
