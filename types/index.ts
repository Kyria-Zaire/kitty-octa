/**
 * Global shared types for OctaviEvent by Kitty-Octa
 */

/** Navigation link item used in Header and Footer */
export interface NavLink {
  label: string;
  href: string;
}

/** Base props shared by section wrapper components */
export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/** Metadata for a service category */
export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

/** Portfolio item */
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  altText: string;
}

/** Testimonial entry */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

/** Contact form data (multi-step) */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  message: string;
}
