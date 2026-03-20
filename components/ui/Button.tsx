import Link from "next/link";
import { cn } from "@/lib/utils";

/* ── Variant & Size Maps ── */

const variantStyles = {
  primary:
    "bg-charcoal text-ivory hover:bg-charcoal/85 active:bg-charcoal/75",
  secondary:
    "bg-gold text-charcoal hover:bg-gold-dark active:bg-gold-dark/90",
  outline:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory active:bg-charcoal/90 active:text-ivory",
  ghost:
    "bg-transparent text-taupe hover:text-charcoal hover:bg-beige active:bg-beige/80",
} as const;

const sizeStyles = {
  sm: "px-5 py-2 text-xs gap-1.5",
  md: "px-7 py-3 text-sm gap-2",
  lg: "px-10 py-4 text-sm gap-2.5",
} as const;

/* ── Props Interface ── */

interface ButtonProps {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  href?: string;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  children: React.ReactNode;
}

/**
 * Lumi\u00E8re Design System — Button
 *
 * Sharp corners, uppercase tracking for a luxury editorial feel.
 * Renders as Link when href is provided.
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  disabled = false,
  className,
  onClick,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  const classes = cn(
    /* Base */
    "inline-flex items-center justify-center font-semibold",
    "uppercase tracking-[0.15em] leading-none",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    /* Variant */
    variantStyles[variant],
    /* Size */
    sizeStyles[size],
    /* Disabled */
    isDisabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const content = (
    <>
      {isLoading && (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </>
  );

  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={isDisabled}
      {...rest}
    >
      {content}
    </button>
  );
}
