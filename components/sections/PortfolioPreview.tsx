import Image from "next/image";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import SectionWrapper from "@/components/ui/SectionWrapper";

/* ── Portfolio Preview Data ── */

const projects = [
  {
    title: "Mariage champêtre élégant",
    category: "Wedding Planning",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=600&fit=crop",
  },
  {
    title: "Séminaire créatif",
    category: "Événementiel",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    title: "Layer Cake artisanal",
    category: "Pâtisserie",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
  },
  {
    title: "Demande en mariage scénarisée",
    category: "Événementiel Privé",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
  },
  {
    title: "Bal masqué thématique",
    category: "Événementiel",
    image:
      "https://images.unsplash.com/photo-1590065635566-dc6959d6f8ee?w=800&h=600&fit=crop",
  },
  {
    title: "Layer Cake végane",
    category: "Pâtisserie",
    image:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=600&fit=crop",
  },
];

/**
 * Portfolio Preview — Homepage Section
 *
 * 3x2 grid of portfolio images on ivory background.
 */
export default function PortfolioPreview() {
  return (
    <SectionWrapper variant="ivory" spacing="lg">
      <div className="text-center mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
          Portfolio
        </p>
        <h2 className="font-serif text-3xl font-bold text-charcoal md:text-heading-1">
          Nos réalisations
        </h2>
        <Divider variant="ornament" className="mx-auto mt-6 max-w-xs" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-taupe">
          Quelques projets qui illustrent notre savoir-faire et notre créativité
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-md motion-safe:animate-fade-in-up"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category} par OctaviEvent`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-1 text-xs font-medium uppercase tracking-wider text-gold">
                  {project.category}
                </span>
                <h3 className="px-4 text-center font-serif text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button variant="outline" href="/portfolio" size="lg">
          Voir tout le portfolio
        </Button>
      </div>
    </SectionWrapper>
  );
}
