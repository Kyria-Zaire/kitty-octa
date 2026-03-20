"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/* ── Navigation Links (single source of truth) ── */

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "À propos", href: "/a-propos" },
];

/**
 * Lumière Design System — Header
 *
 * Sticky navigation with ivory backdrop blur.
 * Mobile menu uses `useState` — hence "use client".
 * Desktop and mobile share the same `navLinks` array (no /blog dead link).
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-gold/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/e6de5d03-0703-4070-a882-7a88bb7bdf60-removebg-preview.png"
              alt="OctaviEvent by Kitty-Octa — Accueil"
              width={300}
              height={100}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium text-taupe",
                  "transition-colors duration-200",
                  "hover:bg-beige hover:text-charcoal"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "ml-2 inline-flex items-center rounded-md px-6 py-2.5",
                "bg-charcoal text-sm font-semibold text-white",
                "shadow-sm transition-all duration-200",
                "hover:bg-charcoal/90 hover:shadow-md"
              )}
            >
              Contact
            </Link>
          </div>

          {/* ── Mobile Menu Button ── */}
          <button
            className={cn(
              "rounded-md p-2 text-taupe md:hidden",
              "transition-colors hover:bg-beige hover:text-charcoal"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile Navigation ── */}
        {isMenuOpen && (
          <div className="border-t border-gold/10 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-4 py-3 text-sm font-medium text-taupe",
                    "transition-colors duration-200",
                    "hover:bg-beige hover:text-charcoal"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={cn(
                  "mt-2 rounded-md px-4 py-3 text-center",
                  "bg-charcoal text-sm font-semibold text-white",
                  "transition-colors hover:bg-charcoal/90"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
