import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Wedding Planner & \u00C9v\u00E9nementiel de Luxe",
  description:
    "OctaviEvent by Kitty-Octa \u2014 Wedding planning haut de gamme, organisation d\u2019\u00E9v\u00E9nements sur mesure et cr\u00E9ation de layer cakes artisanaux. Hauts-de-France & \u00CEle-de-France.",
  openGraph: {
    title: "OctaviEvent by Kitty-Octa | Crafting Timeless Celebrations",
    description:
      "Bespoke events, elegant weddings & premium celebrations. Luxury event planning in France.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "OctaviEvent \u2014 Crafting Timeless Celebrations",
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
 * DATA — Services
 * ═══════════════════════════════════════════════════════════════ */

const services = [
  {
    title: "Wedding Planning",
    description:
      "Full-service planning for your dream wedding. From venue selection to the last dance, every detail impeccably orchestrated.",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Corporate Events",
    description:
      "Refined galas, impactful seminars and brand activations. Precision-crafted experiences that elevate your business image.",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Private Celebrations",
    description:
      "Birthdays, anniversaries and intimate gatherings designed with bespoke elegance. Making every milestone unforgettable.",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════════
 * DATA — Portfolio
 * ═══════════════════════════════════════════════════════════════ */

const portfolioItems = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", alt: "C\u00E9r\u00E9monie en plein air", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", alt: "R\u00E9ception aux bougies", category: "Reception" },
  { src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=600&fit=crop", alt: "Mariage champ\u00EAtre", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=600&fit=crop", alt: "Couple de mari\u00E9s", category: "Portrait" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop", alt: "Gala corporate", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop", alt: "Layer Cake artisanal", category: "Cake Design" },
];

/* ═══════════════════════════════════════════════════════════════
 * DATA — Testimonials
 * ═══════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    quote:
      "Octavie transformed our wedding into a breathtaking fairy tale. Her impeccable taste and flawless execution exceeded every expectation.",
    name: "Sophie & Thomas",
    location: "Picardie, France",
  },
  {
    quote:
      "Our annual corporate gala was an absolute triumph. The attention to detail and seamless coordination were truly world-class.",
    name: "Marie Dubois",
    location: "Paris, France",
  },
  {
    quote:
      "The bespoke layer cake was a masterpiece \u2014 the highlight of our celebration. Pure artistry combined with exquisite flavours.",
    name: "Julie Martin",
    location: "Amiens, France",
  },
];

/* ═══════════════════════════════════════════════════════════════
 * DATA — Stats
 * ═══════════════════════════════════════════════════════════════ */

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Events Curated" },
  { value: "100%", label: "Client Satisfaction" },
];

/* ═══════════════════════════════════════════════════════════════
 * COMPONENT — Gold Stars
 * ═══════════════════════════════════════════════════════════════ */

function GoldStars() {
  return (
    <div className="flex gap-1" aria-label="5 sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
 * PAGE
 * ═══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────
       *  1 · HERO — Ivory, editorial, centered
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="ivory" className="py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl md:text-display">
            Crafting Timeless{" "}
            <span className="block">Celebrations</span>
          </h1>

          <p className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-taupe sm:text-xs">
            Bespoke Events &nbsp;|&nbsp; Elegant Weddings &nbsp;|&nbsp; Premium Celebrations
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="/services" className="min-w-[200px]">
              View Services
            </Button>
            <Button variant="outline" size="lg" href="/contact" className="min-w-[200px]">
              Book Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ──────────────────────────────────────────────────────
       *  2 · SERVICES — Beige, 3 white cards
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="beige" className="py-24 md:py-32">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-charcoal md:text-heading-1">
            Our Services
          </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-gold" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white px-8 py-12 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mx-auto mb-7 text-gold">{s.icon}</div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-taupe">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ──────────────────────────────────────────────────────
       *  3 · PORTFOLIO — Ivory, 3×2 grid, aspect-square
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="ivory" className="py-24 md:py-32">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-charcoal md:text-heading-1">
            Our Portfolio
          </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-gold" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.alt}
              className="group relative overflow-hidden rounded-md"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end justify-between bg-charcoal/0 p-5 transition-all duration-300 group-hover:bg-charcoal/50">
                  <span className="translate-y-4 text-xs font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                  <svg
                    className="h-5 w-5 translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button variant="outline" size="md" href="/portfolio">
            View Full Portfolio
          </Button>
        </div>
      </SectionWrapper>

      {/* ──────────────────────────────────────────────────────
       *  4 · TESTIMONIALS — Deep black, 3 columns
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="charcoal" className="py-24 md:py-32">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-heading-1">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-gold" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <GoldStars />

              <blockquote className="mt-6 font-serif text-base italic leading-relaxed text-ivory/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <p className="mt-6 text-sm font-semibold text-gold">
                {t.name}
              </p>
              <p className="mt-1 text-xs text-ivory/40">
                {t.location}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ──────────────────────────────────────────────────────
       *  5 · CTA — 2 columns: image + editorial text + stats
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="ivory" className="py-24 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&h=1000&fit=crop"
              alt="Organisation \u00E9v\u00E9nementielle haut de gamme"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — Editorial */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-charcoal md:text-heading-1">
              Curating Moments of Pure Elegance
            </h2>
            <div className="mt-5 h-px w-14 bg-gold" />

            <p className="mt-7 text-sm leading-relaxed text-taupe sm:text-base">
              At OctaviEvent, every celebration is a canvas for exceptional design.
              We blend meticulous planning with creative vision to craft events that
              transcend the ordinary. From the grandest weddings to the most intimate
              soir&eacute;es, our commitment to perfection remains unwavering.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-taupe sm:text-base">
              Based in Hauts-de-France and &Icirc;le-de-France, our team brings a
              refined European sensibility to every detail &mdash; ensuring your most
              cherished moments are nothing short of extraordinary.
            </p>

            <div className="mt-10">
              <Button variant="outline" size="md" href="/a-propos">
                Discover Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-bold text-gold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-taupe sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
