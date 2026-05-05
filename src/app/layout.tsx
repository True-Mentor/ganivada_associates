import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BCIDisclaimer } from "@/components/disclaimer/BCIDisclaimer";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeScript } from "@/components/shared/ThemeScript";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ganivadaassociates.com"),
  title: {
    template: "%s · Ganivada & Associates",
    default: "Ganivada & Associates · Advocates & Legal Consultants · Visakhapatnam",
  },
  description:
    "Boutique chambers in Visakhapatnam practising at the High Courts of Andhra Pradesh & Telangana. Civil, criminal, commercial, property, and arbitration matters across India.",
  keywords: ["advocate Visakhapatnam", "law firm Andhra Pradesh", "civil lawyer Hyderabad", "property law AP", "arbitration India", "PMLA advocate"],
  authors: [{ name: "Ganivada & Associates" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ganivada & Associates",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Ganivada & Associates",
  description: "Boutique chambers practising at the High Courts of Andhra Pradesh & Telangana.",
  url: "https://ganivadaassociates.com",
  telephone: "+91-000-000-0000",
  email: "contact@ganivadaassociates.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  areaServed: "India",
  founder: {
    "@type": "Person",
    name: "Ganivada Sree Prasanna Durga Gayatri",
    jobTitle: "Principal Advocate",
  },
  openingHours: "Mo-Fr 09:00-18:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <ThemeScript />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2" style={{ background: "var(--gold)", color: "var(--obsidian)", fontFamily: "Geist, sans-serif", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase" }}>
          Skip to content
        </a>

        <JsonLd data={legalServiceJsonLd} />

        {/* Grain overlay */}
        <div className="grain" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg">
            <filter id="grain-n">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="2"/>
              <feColorMatrix values="0 0 0 0 1  0 0 0 0 .92  0 0 0 0 .76  0 0 0 .25 0"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-n)"/>
          </svg>
        </div>

        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />

        {/* BCI compliance strip */}
        <div className="bci-strip">
          <strong>Bar Council of India Notice</strong>: This website is for general information only. It is not advertising or solicitation. No attorney-client relationship is created by access to this site.
        </div>

        <ScrollReveal />
        <BCIDisclaimer />
        <Toaster />
      </body>
    </html>
  );
}
