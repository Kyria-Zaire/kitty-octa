"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/e6de5d03-0703-4070-a882-7a88bb7bdf60-removebg-preview.png"
              alt="Kitty-Octa Logo"
              width={300}
              height={100}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/tarifs"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Tarifs
            </Link>
            <Link
              href="/a-propos"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/tarifs"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              href="/a-propos"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block bg-primary-600 text-white px-6 py-2 rounded-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

