import type { Metadata } from "next";
import { firm } from "@/data/firm";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ganivadaassociates.com";

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/og/default.jpg",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${firm.name}` : firm.name;
  const pageDesc =
    description ??
    `${firm.name}: ${firm.tagline}. ${firm.description}`;

  return {
    title: pageTitle,
    description: pageDesc,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: `${BASE_URL}${path}`,
      siteName: firm.name,
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
