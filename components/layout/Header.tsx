"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Button from "@/components/ui/Button";

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Processus", href: "/process" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const pathname = usePathname();

  const isScrolled = scrollY > 80;
  const isHome = pathname === "/";

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-400 ease-luxury",
          isScrolled
            ? "bg-ivory/95 backdrop-blur-sm border-b border-taupe/10 text-charcoal shadow-sm"
            : isHome
              ? "bg-transparent text-ivory"
              : "bg-transparent text-charcoal"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          <Link
            href="/"
            className="group flex flex-col z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-playfair text-xl tracking-wide">OctaviEvent</span>
            <span className="font-dm-sans text-xs tracking-[0.2em] text-gold block uppercase group-hover:text-gold-light transition-colors">
              by Kitty-Octa
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-2 py-1 text-sm font-medium tracking-wide transition-colors hover:text-gold"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 h-[1px] w-full bg-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Button variant="secondary" size="sm" href="/contact" className="ml-4">
              Contact
            </Button>
          </nav>

          <button
            className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden outline-none"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-6 bg-current"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[1px] w-6 bg-current"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-6 bg-current"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ivory px-6 pb-12 pt-32 text-charcoal md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {[...navLinks, { label: "Contact", href: "/contact" }].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Link
                    href={link.href}
                    className="group flex flex-col items-center font-playfair text-3xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    {pathname === link.href && <div className="mt-2 h-[2px] w-8 bg-gold" />}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto flex flex-col items-center gap-4 text-center"
            >
              <div className="flex items-center gap-5">
                <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </a>
                <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v9.36h-4v-8.3c0-1.98-.03-4.52-2.76-4.52-2.76 0-3.18 2.16-3.18 4.39v8.43h-4V7.98Z" />
                  </svg>
                </a>
                <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Pinterest">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 3 5.64 3 9.89c0 2.44 1.36 4.56 3.52 5.37.33.12.64 0 .74-.36.07-.25.25-1.01.33-1.31.1-.36.06-.49-.21-.81-.69-.82-1.12-1.88-1.12-3.38 0-3.26 2.47-6.19 6.44-6.19 3.51 0 5.44 2.13 5.44 4.98 0 3.75-1.68 6.91-4.18 6.91-1.38 0-2.42-1.12-2.09-2.49.39-1.64 1.14-3.4 1.14-4.59 0-1.06-.58-1.95-1.78-1.95-1.41 0-2.54 1.43-2.54 3.35 0 1.22.42 2.05.42 2.05s-1.43 5.94-1.68 6.98c-.5 2.1-.07 4.68-.04 4.94.02.15.21.19.29.07.12-.15 1.64-2 2.16-4.03.15-.58.86-3.39.86-3.39.43.8 1.68 1.5 3.01 1.5 3.96 0 6.65-3.55 6.65-8.31C21.93 5.38 18.64 2 12.04 2Z" />
                  </svg>
                </a>
              </div>
              <p className="font-dm-sans text-xs uppercase tracking-widest text-taupe/50">
                OctaviEvent by Kitty-Octa
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

