import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ThemeScript from "@/components/ThemeScript";
import BackgroundFX from "@/components/BackgroundFX";
import { SocialRail, EmailRail } from "@/components/SideRails";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Varun Sai Raigir",
    "AI Engineer",
    "ML Engineer",
    "Machine Learning",
    "Edge AI",
    "Clinical AI",
    "LLM Engineer",
    "RAG",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} · ${site.title}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.title}`,
    description: site.tagline,
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    email: site.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raritan",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    sameAs: [
      "https://linkedin.com/in/varun-sai-raigir",
      "https://github.com/VarunSai02",
      "https://scholar.google.com/citations?user=6VsLmZ4AAAAJ",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased`}>
        <BackgroundFX />
        {children}
        <SocialRail />
        <EmailRail />
        <Analytics />
      </body>
    </html>
  );
}
