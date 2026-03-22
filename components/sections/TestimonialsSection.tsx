import Card, { CardContent } from "@/components/ui/Card";
import Divider from "@/components/ui/Divider";
import SectionWrapper from "@/components/ui/SectionWrapper";

/* ── Testimonials Data ── */

const testimonials = [
  {
    name: "Sophie & Thomas",
    role: "Mariés",
    content:
      "Octavie a transformé notre mariage en un moment magique. Son attention aux détails et sa créativité ont dépassé toutes nos attentes.",
    rating: 5,
  },
  {
    name: "Marie Dubois",
    role: "Directrice Marketing",
    content:
      "Pour notre séminaire annuel, Kitty-Octa a su créer une ambiance unique et professionnelle. L&apos;organisation était impeccable.",
    rating: 5,
  },
  {
    name: "Julie Martin",
    role: "Organisatrice",
    content:
      "Le layer cake créé pour notre événement était une véritable œuvre d&apos;art ! À la fois délicieux et esthétiquement parfait.",
    rating: 5,
  },
];

/* ── Star Rating Component ── */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Testimonials Section — Homepage
 *
 * Dark (charcoal) section with gold star ratings and ivory text.
 */
export default function TestimonialsSection() {
  return (
    <SectionWrapper variant="charcoal" size="lg">
      <div className="text-center mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
          Témoignages
        </p>
        <h2 className="font-serif text-3xl font-bold text-white md:text-heading-1">
          Ce que nos clients disent de nous
        </h2>
        <Divider variant="ornamental" className="mx-auto mt-6 max-w-xs [&_span:first-child]:bg-ivory/20 [&_span:last-child]:bg-ivory/20" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            variant="dark"
            className="motion-safe:animate-fade-in-up"
          >
            <CardContent>
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 text-sm italic leading-relaxed text-ivory/80">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-ivory/10 pt-4">
                <p className="text-sm font-semibold text-ivory">
                  {testimonial.name}
                </p>
                <p className="text-xs text-ivory/50">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
