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

const legalLinks = [
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">

          {/* COLUMN 1 - BRAND */}
          <div className="flex flex-col items-start">
            <Link href="/" className="group flex flex-col">
              <span className="font-serif text-2xl tracking-wide text-ivory">
                OctaviEvent
              </span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gold group-hover:text-gold-light transition-colors">
                by Kitty-Octa
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-ivory/80 max-w-xs">
              L&apos;excellence au service de vos moments précieux.
            </p>

            <div className="mt-8 flex items-center gap-5">
              {/* Instagram */}
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="Pinterest">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.425 2.977 7.425 6.945 0 4.15-2.613 7.485-6.241 7.485-1.218 0-2.366-.633-2.759-1.385l-.749 2.859c-.272 1.042-1.011 2.348-1.503 3.14 1.127.35 2.341.538 3.593.538 6.621 0 11.989-5.367 11.989-11.988C24 5.367 18.638 0 12.017 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2 - NAVIGATION */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
              Navigation
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-ivory/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 3 - CONTACT */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-4 text-sm text-ivory/80">
              <div className="flex items-start gap-3">
                <span role="img" aria-label="Location" className="mt-0.5">📍</span>
                <span>Amiens, Hauts-de-France<br />Île-de-France & International</span>
              </div>
              <div className="flex items-center gap-3">
                <span role="img" aria-label="Email">✉️</span>
                <a href="mailto:contact@kitty-octa.fr" className="hover:text-gold transition-colors">
                  contact@kitty-octa.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span role="img" aria-label="Phone">📞</span>
                <a href="tel:+33000000000" className="hover:text-gold transition-colors">
                  +33 0 00 00 00 00
                </a>
              </div>

              <div className="mt-2">
                <Button variant="gold" size="sm" href="/contact">
                  Démarrer mon projet
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-ivory/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-ivory/40 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} OctaviEvent by Kitty-Octa. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
