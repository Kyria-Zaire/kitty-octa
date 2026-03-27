import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "\u00C0 propos \u2014 L\u2019\u00E2me d\u2019OctaviEvent",
  description:
    "Découvrez Octavie MAMBU DIEMFUKA, fondatrice d’OctaviEvent by Kitty-Octa. Organisation de mariage haut de gamme, événements sur mesure, une approche boutique et personnalisée.",
};

/* ═══════════════════════════════════════════════════════════════
 * DATA \u2014 Approche Signature
 * ═══════════════════════════════════════════════════════════════ */

const approche = [
  {
    title: "\u00C9coute Privil\u00E9gi\u00E9e",
    description:
      "Un interlocuteur unique, d\u00E9di\u00E9 \u00E0 votre projet. Pas d\u2019\u00E9quipe tournante, pas de sous-traitance invisible \u2014 une relation directe, humaine et confidentielle du premier brief \u00E0 la derni\u00E8re danse.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "R\u00E9seau d\u2019\u00C9lite",
    description:
      "Des fleuristes, traiteurs, photographes et artisans s\u00E9lectionn\u00E9s pour leur excellence. Un carnet d\u2019adresses curatorial bâti sur la confiance, l\u2019exigence et des ann\u00E9es de collaboration.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Rigueur Op\u00E9rationnelle",
    description:
      "Chaque d\u00E9tail est anticip\u00E9, chaque impr\u00E9vu est g\u00E9r\u00E9. Une planification millimétr\u00E9e qui vous offre la s\u00E9r\u00E9nit\u00E9 totale le jour J, pour ne vivre que l\u2019\u00E9motion.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════════
 * DATA \u2014 Mission & Valeurs
 * ═══════════════════════════════════════════════════════════════ */

const valeurs = [
  {
    title: "Audace",
    description:
      "Oser l\u2019inattendu, proposer des concepts qui surprennent et \u00E9merveillent. Chaque \u00E9v\u00E9nement est une cr\u00E9ation originale, jamais un copier-coller.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Discr\u00E9tion",
    description:
      "Le code du service haut de gamme. Confidentialit\u00E9 absolue, pr\u00E9sence invisible le jour J, une \u00E9l\u00E9gance qui s\u2019efface pour laisser briller vos moments.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Perfectionnisme",
    description:
      "La rigueur d\u2019une ing\u00E9nieure appliqu\u00E9e \u00E0 l\u2019art de l\u2019\u00E9v\u00E9nementiel. Chaque d\u00E9tail est pens\u00E9, test\u00E9, sublim\u00E9 \u2014 parce que l\u2019excellence se cache dans les marges.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════════
 * PAGE
 * ═══════════════════════════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────
       *  1 \u00B7 HERO COMPACT
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="ivory" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-display">
            L&apos;\u00E2me d&apos;OctaviEvent
          </h1>
          <div className="mx-auto mt-5 h-px w-14 bg-gold" />
          <p className="mt-6 text-base leading-relaxed text-taupe sm:text-lg">
            L&apos;excellence au service de vos \u00E9motions.
          </p>
        </div>
      </SectionWrapper>

      {/* ──────────────────────────────────────────────────────
       *  2 \u00B7 LE PORTRAIT \u2014 Founder Focus
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="beige" className="py-24 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left \u2014 Portrait */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
            <Image
              src="/images/IMG_9685.jpeg"
              alt="Octavie MAMBU DIEMFUKA \u2014 Fondatrice d\u2019OctaviEvent"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right \u2014 Story */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              La fondatrice
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-charcoal md:text-heading-1">
              Une Vision, Une Passion
            </h2>
            <div className="mt-5 h-px w-14 bg-gold" />

            <div className="mt-7 space-y-4 text-sm leading-relaxed text-taupe sm:text-base">
              <p>
                Forte de plus de cinq ans d&apos;exp\u00E9rience en gestion de projets
                culturels, \u00E9ducatifs et cr\u00E9atifs, <strong className="text-charcoal">Octavie MAMBU DIEMFUKA</strong> a
                choisi de se consacrer enti\u00E8rement \u00E0 sa passion : transformer
                des moments de vie en souvenirs d&apos;exception.
              </p>
              <p>
                Son parcours de cheffe de projet en communication lui a forg\u00E9
                un <strong className="text-charcoal">regard neuf</strong> sur l&apos;\u00E9v\u00E9nementiel de luxe \u2014
                une approche o\u00F9 la rigueur strat\u00E9gique rencontre la sensibilit\u00E9
                artistique. Chaque \u00E9v\u00E9nement est pens\u00E9 comme une \u0153uvre unique,
                du concept initial au dernier d\u00E9tail floral.
              </p>
              <p>
                En tant que consultante ind\u00E9pendante, elle offre ce que les grandes
                agences ne peuvent pas : une <strong className="text-charcoal">relation privil\u00E9gi\u00E9e</strong>,
                une disponibilit\u00E9 totale et une obsession du d\u00E9tail qui fait
                toute la diff\u00E9rence le jour J.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ──────────────────────────────────────────────────────
       *  3 \u00B7 L&apos;APPROCHE SIGNATURE \u2014 3 cards
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="ivory" className="py-24 md:py-32">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-charcoal md:text-heading-1">
            Une Collaboration Sur-Mesure
          </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-gold" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {approche.map((item, index) => (
            <div
              key={item.title}
              className="bg-white px-8 py-12 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="mx-auto mb-7 text-gold">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-taupe">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ──────────────────────────────────────────────────────
       *  4 \u00B7 MISSION & VALEURS \u2014 3 columns, gold icons
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="charcoal" className="py-24 md:py-32">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Nos piliers
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-heading-1">
            Mission &amp; Valeurs
          </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-gold" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {valeurs.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold">
                {v.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {v.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/60">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ──────────────────────────────────────────────────────
       *  5 \u00B7 LA PROMESSE \u2014 Quote + CTA
       * ────────────────────────────────────────────────────── */}
      <SectionWrapper variant="beige" className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Gold ornament */}
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/40" />
            <span className="font-serif text-lg text-gold">&loz;</span>
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <blockquote className="mt-10 font-serif text-2xl font-bold italic leading-snug text-charcoal sm:text-3xl md:text-heading-1">
            &laquo;&nbsp;Je ne cr\u00E9e pas seulement des \u00E9v\u00E9nements,
            je b\u00E2tis des h\u00E9ritages visuels.&nbsp;&raquo;
          </blockquote>

          <p className="mt-4 text-sm font-medium text-gold">
            &mdash; Octavie MAMBU DIEMFUKA
          </p>

          <div className="mt-12">
            <Button variant="primary" size="lg" href="/contact">
              R\u00E9server votre session d\u00E9couverte
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
