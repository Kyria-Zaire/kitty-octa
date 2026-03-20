type GtagParams = Record<string, string | number | boolean | undefined>;

export function trackPageView(url: string): void {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", "page_view", { page_path: url });
}

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
): void {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Alias semantiques pour les events Kitty-Octa
export const trackCTA = (label: string, location?: string) =>
  trackEvent("cta_click", "engagement", location ? `${label} - ${location}` : label);

export const trackContactFormStep = (step: number) =>
  trackEvent("form_step", "contact", `step_${step}`);

export const trackContactFormSubmit = () =>
  trackEvent("form_submit", "contact", "success");

// Compat legacy
export const pageview = trackPageView;

// Declaration globale pour TypeScript strict
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      target: string,
      params?: GtagParams
    ) => void;
  }
}

