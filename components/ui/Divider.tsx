import { cn } from "@/lib/utils";

/* ── Props Interface ── */

interface DividerProps {
  /** Visual variant */
  variant?: "line" | "ornament";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Lumière Design System — Divider
 *
 * Decorative separator between content blocks.
 * - `line`: A thin horizontal gold line.
 * - `ornament`: A centered decorative symbol flanked by lines.
 */
export default function Divider({
  variant = "line",
  className,
}: DividerProps) {
  if (variant === "ornament") {
    return (
      <div
        className={cn("flex items-center justify-center gap-4 py-2", className)}
        role="separator"
        aria-hidden="true"
      >
        <span className="h-px flex-1 bg-gold/30" />
        <span className="font-serif text-gold text-lg select-none" aria-hidden="true">
          &#10023;
        </span>
        <span className="h-px flex-1 bg-gold/30" />
      </div>
    );
  }

  return (
    <hr
      className={cn("border-0 h-px bg-gold/30", className)}
      role="separator"
      aria-hidden="true"
    />
  );
}
