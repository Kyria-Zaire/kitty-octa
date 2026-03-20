import Link from "next/link";
import Image from "next/image";
import Divider from "@/components/ui/Divider";

/* ── Data ── */

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "\u00C0 propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Politique de confidentialit\u00E9", href: "/politique-de-confidentialite" },
  { label: "Mentions l\u00E9gales", href: "/mentions-legales" },
];

/**
 * Lumi\u00E8re Design System \u2014 Footer
 *
 * Dark charcoal footer with:
 * - Left: Contact info + gold icons + social links
 * - Center: Navigation
 * - Right: Minimalist contact form
 */
export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          {/* ── Left: Get in Touch ── */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white">
              Get in Touch
            </h3>
            <div className="mt-2 h-px w-10 bg-gold" />

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:kitty-octa@outlook.fr" className="text-sm transition-colors hover:text-gold">
                  kitty-octa@outlook.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                <a href="https://wa.me/33761796628" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-gold">
                  +33 7 61 79 66 28
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span className="text-sm text-ivory/50">
                  Paris / Amiens<br />Hauts-de-France &amp; \u00CEle-de-France
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">
              <a href="https://www.instagram.com/kitty__octa" target="_blank" rel="noopener noreferrer" className="text-ivory/40 transition-colors hover:text-gold" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://wa.me/33761796628" target="_blank" rel="noopener noreferrer" className="text-ivory/40 transition-colors hover:text-gold" aria-label="WhatsApp">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
            </div>
          </div>

          {/* ── Center: Navigation ── */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
              Navigation
            </h4>
            <div className="mt-2 h-px w-10 bg-gold/30" />
            <ul className="mt-6 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ivory/60 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Contact Form ── */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
              Message rapide
            </h4>
            <div className="mt-2 h-px w-10 bg-gold/30" />
            <form className="mt-6 space-y-5" action="/contact" method="GET">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  autoComplete="name"
                  className="w-full border-0 border-b border-ivory/20 bg-transparent px-0 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full border-0 border-b border-ivory/20 bg-transparent px-0 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="w-full border-0 border-b border-ivory/20 bg-transparent px-0 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
              >
                Send Message
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-16 border-t border-ivory/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-ivory/30 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} OctaviEvent by Kitty-Octa. Tous droits r\u00E9serv\u00E9s.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-gold">
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
