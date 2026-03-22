"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
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
            : "bg-transparent text-charcoal" // Changed default to charcoal to ensure visibility uniformly, or as per spec "transparent, ivory si hero image". Assuming default mix.
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-serif text-xl tracking-wide transition-colors">
              OctaviEvent
            </span>
            <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gold transition-colors group-hover:text-gold-light">
              by Kitty-Octa
            </span>
          </Link>

          {/* Desktop Navigation */}
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
            <Button variant="gold" size="sm" href="/contact" className="ml-4">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button (Burger to X) */}
          <button
            className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-6 bg-current transition-colors"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[1px] w-6 bg-current transition-colors"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-6 bg-current transition-colors"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
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
              {[...navLinks, { label: "Contact", href: "/contact" }].map(
                (link, index) => (
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
                      className="group flex flex-col items-center font-serif text-3xl"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      {pathname === link.href && (
                        <div className="mt-2 h-[2px] w-8 bg-gold" />
                      )}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto flex flex-col items-center gap-4 text-center"
            >
              <div className="flex gap-4">
                <a href="#" className="text-taupe hover:text-gold transition-colors">
                  IG
                </a>
                <a href="#" className="text-taupe hover:text-gold transition-colors">
                  LI
                </a>
                <a href="#" className="text-taupe hover:text-gold transition-colors">
                  PI
                </a>
              </div>
              <p className="font-sans text-xs uppercase tracking-widest text-taupe/50">
                OctaviEvent by Kitty-Octa
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
