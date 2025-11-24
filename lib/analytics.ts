// Google Analytics helper functions

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track CTA clicks
export const trackCTA = (ctaName: string, location: string) => {
  event({
    action: 'click',
    category: 'CTA',
    label: `${ctaName} - ${location}`,
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

// Track navigation
export const trackNavigation = (destination: string) => {
  event({
    action: 'navigate',
    category: 'Navigation',
    label: destination,
  });
};

// Track portfolio item views
export const trackPortfolioView = (itemTitle: string) => {
  event({
    action: 'view',
    category: 'Portfolio',
    label: itemTitle,
  });
};

// Track service tab clicks
export const trackServiceTab = (serviceName: string) => {
  event({
    action: 'click',
    category: 'Service',
    label: serviceName,
  });
};

