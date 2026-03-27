"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Divider from "@/components/ui/Divider";
import Card, { CardHeader, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "Mariages",
    description:
      "De la coordination jour J à l'organisation complète, nous orchestrons chaque détail de votre journée la plus précieuse.",
    tags: ["Coordination", "Décoration", "Design de mariage"],
    href: "/services#mariages",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-10 h-10 text-gold"
        aria-hidden="true"
      >
        <circle cx="17" cy="24" r="9" />
        <circle cx="31" cy="24" r="9" />
      </svg>
    ),
  },
  {
    title: "Événements d’entreprise",
    description:
      "Séminaires, galas, lancements de produits. Une organisation professionnelle à la hauteur de votre image.",
    tags: ["Séminaires", "Galas", "Cohésion d’équipe"],
    href: "/services#corporate",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-10 h-10 text-gold"
        aria-hidden="true"
      >
        <rect x="14" y="20" width="8" height="16" rx="1" />
        <rect x="22" y="14" width="8" height="22" rx="1" />
        <rect x="30" y="26" width="8" height="10" rx="1" />
        <line x1="10" y1="36" x2="38" y2="36" />
      </svg>
    ),
  },
  {
    title: "Événements privés",
    description:
      "Anniversaires marquants, fiançailles, fêtes de famille. Chaque moment mérite d'être célébré avec éclat.",
    tags: ["Anniversaires", "Fiançailles", "Fêtes"],
    href: "/services#prives",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-10 h-10 text-gold"
        aria-hidden="true"
      >
        <path d="M16 8 L22 22 L22 36" />
        <path d="M32 8 L26 22 L26 36" />
        <line x1="18" y1="36" x2="30" y2="36" />
        <path d="M14 8 L34 8 Q34 18 24 22 Q14 18 14 8Z" />
      </svg>
    ),
  },
];

export function ServicesTeaser() {
  return (
    <SectionWrapper variant="ivory" spacing="lg">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-lg italic text-gold">Nos Prestations</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
          Des événements taillés
          <br />
          pour l&apos;excellence
        </h2>
        <Divider variant="ornament" className="mx-auto mt-8 w-48" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={fadeInUp} className="h-full">
            <Card variant="default" className="group flex h-full flex-col p-8 hover:border-gold/40">
              <CardHeader className="p-0">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl text-charcoal">{service.title}</h3>
              </CardHeader>

              <CardContent className="mt-4 flex-grow p-0">
                <p className="text-sm leading-relaxed text-taupe">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="muted" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <div className="mt-8 p-0">
                <Button
                  variant="ghost"
                  href={service.href}
                  className="px-0 py-0 hover:bg-transparent -ml-2 group-hover:text-gold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    Découvrir
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default ServicesTeaser;

