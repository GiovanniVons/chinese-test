import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function createMetadata(overrides: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_CONFIG.url}${overrides.path || ""}`;
  return {
    title: `${overrides.title} | ${SITE_CONFIG.name}`,
    description: overrides.description,
    openGraph: {
      title: overrides.title,
      description: overrides.description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: overrides.image || SITE_CONFIG.ogImage }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: overrides.title,
      description: overrides.description,
    },
    alternates: { canonical: url },
  };
}
