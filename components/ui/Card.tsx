import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────

type CardVariant = 'default' | 'elevated' | 'gold' | 'dark'

interface CardProps {
  /** Visual variant */
  variant?: CardVariant
  /** Additional CSS classes */
  className?: string
  /** Accessible role override */
  role?: string
  children: React.ReactNode
}

// ── Style Map ──────────────────────────────────────────

const variantStyles: Record<CardVariant, string> = {
  default:
    'bg-white border border-taupe/20 hover:border-gold/40',
  elevated:
    'bg-white shadow-sm hover:shadow-md',
  gold:
    'bg-gold/5 border border-gold/20',
  dark:
    'bg-charcoal text-ivory',
}

// ── Component ──────────────────────────────────────────

/**
 * Design System Kitty-Octa — Card
 *
 * Versatile container with luxury transitions.
 * Sub-components: CardHeader, CardTitle, CardDescription, CardContent.
 */
export default function Card({
  variant = 'default',
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden p-6 transition-all duration-300 ease-luxury',
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

// ── Sub-components ─────────────────────────────────────

interface CardHeaderProps {
  className?: string
  children: React.ReactNode
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

interface CardTitleProps {
  as?: 'h2' | 'h3' | 'h4'
  className?: string
  children: React.ReactNode
}

export function CardTitle({
  as: Tag = 'h3',
  className,
  children,
}: CardTitleProps) {
  return (
    <Tag
      className={cn(
        'font-playfair font-bold text-lg',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

interface CardDescriptionProps {
  className?: string
  children: React.ReactNode
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm leading-relaxed text-taupe', className)}>
      {children}
    </p>
  )
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn(className)}>{children}</div>
}
