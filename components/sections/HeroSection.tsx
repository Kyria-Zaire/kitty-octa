"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type TargetAndTransition, type Transition } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface MotionSpec {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition?: Transition;
}

export interface HeroSectionProps {
    imageSrc?: string;
    imageAlt?: string;
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    ctaPrimary?: {
        label: string;
        href: string;
    };
    ctaSecondary?: {
        label: string;
        href: string;
    };
    fomoText?: string;
    showScrollIndicator?: boolean;
}

export function HeroSection({
    imageSrc = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85",
    imageAlt = "Événement de mariage élégant organisé par OctaviEvent",
    eyebrow = "L'excellence au service de vos moments précieux",
    title = "Organisatrice d'événements\nde prestige à Amiens",
    subtitle = "Mariages · Entreprise · Événements privés",
    ctaPrimary = { label: "Réserver une consultation gratuite", href: "/contact" },
    ctaSecondary = { label: "Découvrir nos créations", href: "/portfolio" },
    fomoText = "Agenda 2025 — Disponibilités limitées",
    showScrollIndicator = true,
}: HeroSectionProps) {
    const heroRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // Split title into lines for staggered animation
    const titleLines = title.split("\n");

    useEffect(() => {
        // Disable parallax if reduced motion is preferred
        if (shouldReduceMotion) return;

        gsap.registerPlugin(ScrollTrigger);

        if (imageRef.current && heroRef.current) {
            const animation = gsap.to(imageRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            return () => {
                animation.kill();
                ScrollTrigger.getAll().forEach((t) => t.kill());
            };
        }
    }, [shouldReduceMotion]);

    // Motion defaults handling reduced motion
    const withMotion = (variants: MotionSpec) => {
        if (shouldReduceMotion) {
            return {
                initial: false as const,
                animate: variants.animate,
                transition: { duration: 0 } satisfies Transition,
            };
        }
        return variants;
    };

    return (
        <section
            ref={heroRef}
            className="relative flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-charcoal"
            aria-label="Accueil principal"
        >
            {/* 1. BACKGROUND (Parallax with GSAP) */}
            <div
                ref={imageRef}
                className="absolute -top-[10%] -bottom-[10%] left-0 right-0 w-full h-[120%] z-0"
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="100vw"
                    quality={85}
                    className="object-cover object-center"
                />
            </div>

            {/* 2. OVERLAY LUXURY */}
            <motion.div
                {...withMotion({
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1.2, ease: "linear" },
                })}
                className="absolute inset-0 z-10"
            >
                {/* Couche 1 : Assombrissement progressif pour lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/40 to-charcoal/80" />
                {/* Couche 2 : Teinte dorée très subtile */}
                <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
            </motion.div>

            {/* Ruban 1 — décoratif */}
            <div className="absolute top-[15%] left-0 right-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="flex items-center gap-4 w-full max-w-2xl px-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-gold/80 flex-shrink-0" />
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
                </div>
            </div>

            {/* 3. CONTENU CENTRAL */}
            <div className="relative z-20 flex w-full max-w-4xl flex-col items-center px-6 text-center mt-12 md:mt-0">

                {/* Eyebrow */}
                {eyebrow && (
                    <motion.p
                        {...withMotion({
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.3, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
                        })}
                        className="mb-6 font-serif text-lg italic tracking-wide text-gold/90 md:text-xl"
                    >
                        {eyebrow}
                    </motion.p>
                )}

                {/* H1 Sémantique */}
                <h1 className="flex flex-col gap-2 font-serif text-4xl leading-tight text-ivory md:text-5xl lg:text-7xl">
                    {titleLines.map((line, index) => (
                        <motion.span
                            key={index}
                            {...withMotion({
                                initial: { opacity: 0, y: 30 },
                                animate: { opacity: 1, y: 0 },
                                transition: {
                                    delay: 0.6 + index * 0.2, // Ligne 1: 0.6s, Ligne 2: 0.8s
                                    duration: 1.0,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                },
                            })}
                            className="block drop-shadow-sm"
                        >
                            {line}
                        </motion.span>
                    ))}
                </h1>

                {/* Services / Subtitle */}
                {subtitle && (
                    <motion.p
                        {...withMotion({
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 1.0, duration: 0.8, ease: "easeOut" },
                        })}
                        className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-ivory/70 md:text-sm"
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Ruban 2 — avant les CTAs */}
                <div className="flex items-center gap-3 w-full max-w-md mx-auto my-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
                    <div className="w-1 h-1 rotate-45 bg-gold/70" />
                    <div className="text-gold/60 text-xs tracking-[0.4em] font-dm-sans uppercase">
                        Amiens · Hauts-de-France
                    </div>
                    <div className="w-1 h-1 rotate-45 bg-gold/70" />
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" />
                </div>

                {/* CTAs */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    {ctaPrimary && (
                        <motion.div
                            {...withMotion({
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
                            })}
                        >
                            <Button variant="secondary" size="lg" href={ctaPrimary.href}>
                                {ctaPrimary.label}
                            </Button>
                        </motion.div>
                    )}

                    {ctaSecondary && (
                        <motion.div
                            {...withMotion({
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 1.35, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }, // stagger 0.15s
                            })}
                        >
                            <Button
                                variant="ghost"
                                size="lg"
                                href={ctaSecondary.href}
                                className="text-ivory hover:text-gold-light hover:bg-white/5 border border-transparent hover:border-ivory/20"
                            >
                                {ctaSecondary.label}
                            </Button>
                        </motion.div>
                    )}
                </div>

                {/* FOMO Badge */}
                {fomoText && (
                    <motion.div
                        {...withMotion({
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { delay: 1.6, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }, // Springy feel
                        })}
                        className="mt-16"
                    >
                        <Badge variant="gold" size="md" className="gap-2 px-4 py-2 backdrop-blur-sm bg-charcoal/40">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {fomoText}
                        </Badge>
                    </motion.div>
                )}
            </div>

            {/* 4. SCROLL INDICATOR */}
            {showScrollIndicator && (
                <motion.div
                    {...withMotion({
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 2.0, duration: 0.5 },
                    })}
                    className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 z-20"
                >
                    <span className="font-sans text-[10px] uppercase tracking-widest text-ivory/50">
                        Découvrir
                    </span>
                    <div className="h-12 w-px bg-gold/20 relative overflow-hidden">
                        <motion.div
                            animate={{
                                scaleY: [0, 1, 0],
                                originY: [0, 0, 1],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 w-full bg-gold/80 origin-top"
                        />
                    </div>
                </motion.div>
            )}
        </section>
    );
}
