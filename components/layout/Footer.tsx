import Link from "next/link";
import Button from "@/components/ui/Button";

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Processus", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 font-dm-sans">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {/* COLONNE 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col">
              <span className="font-playfair text-2xl tracking-wide text-ivory">
                OctaviEvent
              </span>
              <span className="font-dm-sans text-xs tracking-[0.2em] text-gold block uppercase">
                by Kitty-Octa
              </span>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-ivory/70 max-w-sm">
              L&apos;excellence au service de vos moments précieux
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory/60 hover:text-gold transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-ivory/60 hover:text-gold transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v9.36h-4v-8.3c0-1.98-.03-4.52-2.76-4.52-2.76 0-3.18 2.16-3.18 4.39v8.43h-4V7.98Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-ivory/60 hover:text-gold transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 3 5.64 3 9.89c0 2.44 1.36 4.56 3.52 5.37.33.12.64 0 .74-.36.07-.25.25-1.01.33-1.31.1-.36.06-.49-.21-.81-.69-.82-1.12-1.88-1.12-3.38 0-3.26 2.47-6.19 6.44-6.19 3.51 0 5.44 2.13 5.44 4.98 0 3.75-1.68 6.91-4.18 6.91-1.38 0-2.42-1.12-2.09-2.49.39-1.64 1.14-3.4 1.14-4.59 0-1.06-.58-1.95-1.78-1.95-1.41 0-2.54 1.43-2.54 3.35 0 1.22.42 2.05.42 2.05s-1.43 5.94-1.68 6.98c-.5 2.1-.07 4.68-.04 4.94.02.15.21.19.29.07.12-.15 1.64-2 2.16-4.03.15-.58.86-3.39.86-3.39.43.8 1.68 1.5 3.01 1.5 3.96 0 6.65-3.55 6.65-8.31C21.93 5.38 18.64 2 12.04 2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLONNE 2 — Navigation */}
          <div>
            <h4 className="font-playfair text-sm font-bold tracking-[0.2em] text-gold uppercase mb-8">
              Navigation
            </h4>
            <div className="flex flex-col gap-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-ivory/70 hover:text-ivory transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COLONNE 3 — Contact */}
          <div>
            <h4 className="font-playfair text-sm font-bold tracking-[0.2em] text-gold uppercase mb-8">
              Contact
            </h4>

            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-gold" aria-hidden="true">
                  📍
                </span>
                <span>Amiens, Hauts-de-France</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold" aria-hidden="true">
                  ✉️
                </span>
                <a
                  href="mailto:contact@kitty-octa.fr"
                  className="hover:text-gold transition-colors"
                >
                  contact@kitty-octa.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold" aria-hidden="true">
                  📞
                </span>
                <span>À compléter</span>
              </div>
            </div>

            <div className="mt-10">
              <Button variant="secondary" size="md" href="/contact">
                Démarrer mon projet
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-ivory/40 md:flex-row">
          <p>© 2025 OctaviEvent by Kitty-Octa. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-ivory transition-colors">
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-ivory transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

