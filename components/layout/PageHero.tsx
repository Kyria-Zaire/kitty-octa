import Image from "next/image";
import { cn } from "@/lib/utils";

/* ── Props Interface ── */

interface PageHeroProps {
  /** Page title — rendered as h1 */
  title: string;
  /** Optional subtitle below the title */
  subtitle?: string;
  /** Background image URL (optional — falls back to solid charcoal) */
  backgroundImage?: string;
  /** Alt text for the background image */
  backgroundAlt?: string;
  /** Visual variant */
  variant?: "full" | "compact";
  /** Additional CSS classes on the outer container */
  className?: string;
}

/**
 * Lumière Design System — PageHero
 *
 * Reusable hero banner for all pages.
 * - `full`: Tall hero (used on Home page) with large display text.
 * - `compact`: Short hero (used on internal pages) with standard heading.
 *
 * Server Component — no interactivity needed.
 */
export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt = "",
  variant = "compact",
  className,
}: PageHeroProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        isCompact ? "min-h-[240px] md:min-h-[300px]" : "min-h-[500px] md:min-h-[85vh]",
        className
      )}
    >
      {/* ── Background Image ── */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : null}

      {/* ── Overlay ── */}
      <div
        className={cn(
          "absolute inset-0",
          backgroundImage
            ? "bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/80"
            : "bg-charcoal"
        )}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          className={cn(
            "font-serif font-bold text-white",
            isCompact
              ? "text-2xl md:text-heading-1"
              : "text-3xl md:text-display"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl leading-relaxed text-ivory/70",
              isCompact ? "text-sm md:text-base" : "text-base md:text-lg"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* ── Decorative bottom gold line (compact only) ── */}
      {isCompact && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" aria-hidden="true" />
      )}
    </section>
  );
}
