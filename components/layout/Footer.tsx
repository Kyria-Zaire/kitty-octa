import Link from "next/link";

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-ivory/80 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">

          {/* COLUMN 1 - GET IN TOUCH */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Get in Touch
            </h3>
            <div className="w-12 h-[1px] bg-gold/50 mb-8" />

            <div className="flex flex-col gap-6 text-sm">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:kitty-octa@outlook.fr" className="hover:text-gold transition-colors">
                  kitty-octa@outlook.fr
                </a>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.04l-3.202-.457a1.125 1.125 0 00-1.295.73l-.707 2.12c-2.3-1.12-4.16-2.98-5.28-5.28l2.12-.707c.4-.13.68-.49.73-1.295l-.457-3.202a1.125 1.125 0 00-1.04-.864H4.5A2.25 2.25 0 002.25 6.75z" />
                </svg>
                <a href="tel:+33761796628" className="hover:text-gold transition-colors">
                  +33 7 61 79 66 28
                </a>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  Paris / Amiens<br />
                  Hauts-de-France &amp; Île-de-France
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {/* Instagram Outline */}
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* WhatsApp Outline */}
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M3 21l1.65-3.8A9 9 0 1121 12a9 9 0 01-18 9z" />
                  <path d="M9 10a.5.5 0 001 0V9a.5.5 0 00-1 0v1zm6 4a.5.5 0 001 0v-1a.5.5 0 00-1 0v1zm-3-2a.5.5 0 001 0v-1a.5.5 0 00-1 0v1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2 - NAVIGATION */}
          <div>
            <h4 className="font-serif text-[11px] font-bold tracking-[0.2em] text-[#C19B6C] uppercase mb-8">
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-ivory/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 3 - MESSAGE RAPIDE */}
          <div>
            <h4 className="font-serif text-[11px] font-bold tracking-[0.2em] text-[#C19B6C] uppercase mb-8">
              MESSAGE RAPIDE
            </h4>
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Nom"
                className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white placeholder-ivory/40 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white placeholder-ivory/40 focus:outline-none focus:border-gold transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={1}
                className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white placeholder-ivory/40 focus:outline-none focus:border-gold transition-colors resize-none"
              />
              <button
                type="button"
                className="w-fit mt-2 font-sans font-bold text-xs tracking-widest text-[#C19B6C] uppercase flex items-center gap-2 hover:text-white transition-colors group"
              >
                SEND MESSAGE
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-ivory/40 md:flex-row">
          <p>
            &copy; 2026 OctaviEvent by Kitty Octa. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
