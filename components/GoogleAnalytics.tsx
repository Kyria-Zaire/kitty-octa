"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pageview } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Vérifier le consentement existant
      const checkConsent = () => {
        const consent = localStorage.getItem("cookie_consent");
        if (consent === "true") {
          const preferences = localStorage.getItem("cookie_preferences");
          if (preferences) {
            const prefs = JSON.parse(preferences);
            if (prefs.analytics) {
              setConsentGiven(true);
            }
          }
        }
      };

      checkConsent();

      // Écouter les changements de consentement
      const handleConsentUpdate = (e: CustomEvent) => {
        if (e.detail?.analytics) {
          setConsentGiven(true);
        } else {
          setConsentGiven(false);
        }
      };

      window.addEventListener("cookieConsentUpdated", handleConsentUpdate as EventListener);

      return () => {
        window.removeEventListener("cookieConsentUpdated", handleConsentUpdate as EventListener);
      };
    }
  }, []);

  useEffect(() => {
    if (GA_ID && consentGiven && typeof window !== "undefined") {
      const url = pathname + (window.location.search || "");
      pageview(url);
    }
  }, [pathname, consentGiven]);

  if (!GA_ID || !consentGiven) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `,
        }}
      />
    </>
  );
}
