"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Divider from "@/components/ui/Divider";
import Card, { CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "Mariages",
    description:
      "De la coordination jour J à l'organisation complète, nous orchestrons chaque détail de votre journée la plus précieuse.",
    tags: ["Coordination", "Décoration", "Wedding Design"],
    href: "/services#mariages",
    icon: (
      // Simple double ring SVG
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 17.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
      </svg>
    ),
  },
  {
    title: "Événements Corporate",
    description:
      "Séminaires, galas, team buildings et lancements de produits. Une organisation professionnelle à la hauteur de votre image.",
    tags: ["Séminaires", "Galas", "Team Building"],
    href: "/services#corporate",
    icon: (
      // Skyline/buildings SVG
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 11v2m0 4v2m4-6v2m0 4v2" />
      </svg>
    ),
  },
  {
    title: "Événements Privés",
    description:
      "Anniversaires marquants, fiançailles, fêtes de famille. Chaque moment mérite d'être célébré avec éclat.",
    tags: ["Anniversaires", "Fiançailles", "Fêtes"],
    href: "/services#prives",
    icon: (
      // Sparkles/Celebration SVG
      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 8-6.4-5.6-6.4 5.6 2.4-8-6-4.8h7.6z" />
      </svg>
    ),
  },
];

export function ServicesTeaser() {
  return (
    <SectionWrapper variant="ivory" size="lg">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-lg italic text-gold">Nos Prestations</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
          Des événements taillés<br />pour l&apos;excellence
        </h2>
        <Divider variant="ornamental" className="mx-auto mt-8 w-48" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeInUp} className="h-full">
            <Card
              variant="default"
              className="group flex h-full flex-col p-8 transition-colors duration-500 hover:border-gold/40"
            >
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

              <CardFooter className="mt-8 p-0">
                <Button variant="ghost" href={service.href} className="px-0 py-0 hover:bg-transparent -ml-2 group-hover:text-gold transition-colors">
                  <span className="flex items-center gap-2">
                    Découvrir
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
