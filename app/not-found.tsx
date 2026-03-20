import Link from "next/link";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";

/**
 * 404 Not Found — Lumi\u00E8re Design System
 *
 * Ivory-themed error page with elegant serif typography.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="mx-auto max-w-xl text-center">
        {/* Big 404 */}
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gold">
          Erreur 404
        </p>
        <h1 className="font-serif text-7xl font-bold text-charcoal/10 md:text-9xl">
          404
        </h1>

        <h2 className="-mt-6 font-serif text-2xl font-bold text-charcoal md:-mt-8 md:text-heading-1">
          Page introuvable
        </h2>

        <Divider variant="ornament" className="mx-auto my-6 max-w-xs" />

        <p className="mx-auto max-w-md text-base leading-relaxed text-taupe">
          D&eacute;sol&eacute;, la page que vous recherchez n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.
          Revenons ensemble sur le bon chemin.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button variant="primary" href="/" size="lg">
            Retour &agrave; l&apos;accueil
          </Button>
          <Button variant="outline" href="/contact" size="lg">
            Nous contacter
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 border-t border-gold/10 pt-6">
          <p className="mb-3 text-xs text-taupe-light">
            Ou explorez nos pages principales&nbsp;:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Tarifs", href: "/tarifs" },
              { label: "\u00C0 propos", href: "/a-propos" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gold-dark transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
