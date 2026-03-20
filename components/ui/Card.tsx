import { cn } from "@/lib/utils";

/* ── Variant Map ── */

const variantStyles = {
  default:
    "bg-beige border border-gold/10 shadow-sm",
  service:
    "bg-beige border border-gold/10 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300",
  testimonial:
    "bg-charcoal text-white border border-gold/20",
  portfolio:
    "group relative overflow-hidden bg-charcoal rounded-md",
} as const;

/* ── Props Interface ── */

interface CardProps {
  /** Visual variant */
  variant?: keyof typeof variantStyles;
  /** Additional CSS classes */
  className?: string;
  /** Accessible role override */
  role?: string;
  children: React.ReactNode;
}

/**
 * Lumière Design System — Card
 *
 * A versatile container component with variant-based styling.
 * - `default`: Beige background for general-purpose cards.
 * - `service`: Beige with gold hover border — for service showcase.
 * - `testimonial`: Charcoal background for dark sections.
 * - `portfolio`: Dark overflow-hidden container for image overlays.
 */
export default function Card({
  variant = "default",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn("rounded-md p-6", variantStyles[variant], className)}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ── Sub-components for composition ── */

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  as?: "h2" | "h3" | "h4";
  className?: string;
  children: React.ReactNode;
}

export function CardTitle({
  as: Tag = "h3",
  className,
  children,
}: CardTitleProps) {
  return (
    <Tag className={cn("font-serif font-bold text-heading-3", className)}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}
