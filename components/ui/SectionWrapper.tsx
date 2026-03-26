import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────

type SectionVariant = 'ivory' | 'beige' | 'charcoal' | 'white'
type SectionSize = 'sm' | 'md' | 'lg'

interface SectionWrapperProps {
  children: React.ReactNode
  /** Background variant */
  variant?: SectionVariant
  /** Vertical padding preset */
  size?: SectionSize
  /** Additional CSS classes */
  className?: string
  /** Anchor ID for in-page navigation */
  id?: string
  /** Semantic HTML tag */
  as?: 'section' | 'div' | 'article'
}

// ── Style Maps ─────────────────────────────────────────

const variantStyles: Record<SectionVariant, string> = {
  ivory: 'bg-ivory text-charcoal',
  beige: 'bg-beige text-charcoal',
  charcoal: 'bg-charcoal text-ivory [&_h2]:text-ivory',
  white: 'bg-white text-charcoal',
}

const sizeStyles: Record<SectionSize, string> = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
}

// ── Component ──────────────────────────────────────────

/**
 * Design System Kitty-Octa — SectionWrapper
 *
 * Section container with background variants, responsive vertical spacing,
 * and luxury horizontal padding (px-6 md:px-12 lg:px-20).
 */
export function SectionWrapper({
  variant = 'ivory',
  size = 'md',
  className,
  id,
  as: Tag = 'section',
  children,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(variantStyles[variant], sizeStyles[size], className)}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </Tag>
  )
}

export default SectionWrapper
