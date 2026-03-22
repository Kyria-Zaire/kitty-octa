import Card, { CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import SectionWrapper from "@/components/ui/SectionWrapper";

/* ── Service Teaser Data ── */

const services = [
  {
    title: "Wedding Planning",
    description:
      "Accompagnement sur mesure des futurs mariés, du concept à la réalisation. Chaque détail est pensé pour créer un moment inoubliable.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Organisation d&apos;événements",
    description:
      "Mariages, séminaires, team building et soirées thématiques. Une planification rigoureuse pour des événements sans faille.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Layer Cakes sur mesure",
    description:
      "Pâtisseries décoratives artisanales, véganes ou classiques. Des créations qui allient esthétique et saveur pour sublimer vos tables.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 20h20M4 20V10m16 10V10M6 10V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4M2 10h20" />
      </svg>
    ),
  },
];

/**
 * Services Teaser — Homepage Section
 *
 * Displays 3 key services in Card (service variant) on a beige background.
 */
export default function ServicesTeaser() {
  return (
    <SectionWrapper variant="beige" size="lg">
      <div className="text-center mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
          Nos prestations
        </p>
        <h2 className="font-serif text-3xl font-bold text-charcoal md:text-heading-1">
          Un savoir-faire sur mesure
        </h2>
        <Divider variant="ornamental" className="mx-auto mt-6 max-w-xs" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-taupe">
          Une offre complète et personnalisée pour transformer vos événements
          en moments inoubliables.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            variant="default"
            className="motion-safe:animate-fade-in-up text-center"
          >
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                {service.icon}
              </div>
              <CardTitle className="text-charcoal">{service.title}</CardTitle>
            </CardHeader>
            <CardDescription className="text-taupe">
              {service.description}
            </CardDescription>
          </Card>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button variant="primary" href="/services" size="lg">
          Découvrir tous nos services
        </Button>
      </div>
    </SectionWrapper>
  );
}
