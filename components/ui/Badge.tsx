import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "gold" | "success" | "muted";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-charcoal text-ivory border border-charcoal/80",
  gold: "bg-gold/10 text-gold border border-gold/30",
  success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  muted: "bg-beige text-taupe border border-taupe/20",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-[11px]",
  md: "px-3 py-1.5 text-xs",
};

export function Badge({ children, variant = "default", size = "md", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[2px] font-medium uppercase tracking-[0.08em]",
        "transition-all duration-300 ease-luxury",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
