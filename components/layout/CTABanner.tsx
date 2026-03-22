import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

/* ── Props Interface ── */

interface CTABannerProps {
  /** Heading text */
  title?: string;
  /** Subtitle / description */
  subtitle?: string;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA button destination */
  ctaHref?: string;
  /** Background variant */
  variant?: "charcoal" | "beige";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Lumière Design System — CTA Banner
 *
 * Reusable call-to-action section placed before the footer.
 * Supports charcoal (default) and beige variants.
 */
export default function CTABanner({
  title = "Prêt à créer votre événement inoubliable ?",
  subtitle = "Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé, gratuit et sans engagement.",
  ctaLabel = "Demander un devis",
  ctaHref = "/contact",
  variant = "beige",
  className,
}: CTABannerProps) {
  return (
    <SectionWrapper
      variant={variant}
      size="lg"
      className={cn(className)}
    >
      <div className="mx-auto max-w-2xl text-center">
        <Divider
          variant="ornamental"
          className={cn(
            "mx-auto mb-8 max-w-xs",
            variant === "charcoal" && "[&_span:first-child]:bg-ivory/20 [&_span:last-child]:bg-ivory/20"
          )}
        />
        <h2
          className={cn(
            "font-serif text-2xl font-bold md:text-heading-1",
            variant === "charcoal" ? "text-white" : "text-charcoal"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mx-auto mt-4 max-w-xl text-base leading-relaxed",
            variant === "charcoal" ? "text-ivory/70" : "text-taupe"
          )}
        >
          {subtitle}
        </p>
        <div className="mt-8">
          <Button
            variant={variant === "charcoal" ? "secondary" : "primary"}
            href={ctaHref}
            size="lg"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
