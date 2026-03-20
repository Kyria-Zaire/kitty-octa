import { cn } from "@/lib/utils";

/* ── Variant & Spacing Maps ── */

const variantStyles = {
  ivory: "bg-ivory text-taupe",
  beige: "bg-beige text-taupe",
  charcoal: "bg-charcoal text-white",
} as const;

const spacingStyles = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
} as const;

/* ── Props Interface ── */

interface SectionWrapperProps {
  /** Background variant */
  variant?: keyof typeof variantStyles;
  /** Vertical spacing preset */
  spacing?: keyof typeof spacingStyles;
  /** Additional CSS classes */
  className?: string;
  /** Anchor ID for in-page navigation */
  id?: string;
  /** Semantic HTML tag */
  as?: "section" | "div" | "aside";
  children: React.ReactNode;
}

/**
 * Lumière Design System — SectionWrapper
 *
 * Consistent section container with background variants and responsive spacing.
 * Handles horizontal padding for mobile (px-4) and desktop (px-8) uniformly.
 */
export default function SectionWrapper({
  variant = "ivory",
  spacing = "md",
  className,
  id,
  as: Tag = "section",
  children,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(variantStyles[variant], spacingStyles[spacing], className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}
