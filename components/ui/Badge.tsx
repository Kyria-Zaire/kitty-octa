import { cn } from "@/lib/utils";

const variantStyles = {
  muted: "bg-beige text-taupe border border-charcoal/10",
  gold: "bg-gold text-charcoal border border-gold-dark/30",
} as const;

const sizeStyles = {
  sm: "px-3 py-1 text-[11px] tracking-[0.18em]",
  md: "px-4 py-2 text-xs tracking-[0.18em]",
} as const;

interface BadgeProps {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  className?: string;
  children: React.ReactNode;
}

export default function Badge({
  variant = "muted",
  size = "sm",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-sm font-semibold uppercase",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}

