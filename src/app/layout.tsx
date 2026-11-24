import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#cd0808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Live Cricket Score, Commentary & AI Insights | Criclive.in",
  description:
    "Ultra-fast live cricket scores, ball-by-ball commentary, match schedules, AI win predictors, and player stats for international & domestic matches on Criclive.in.",
  keywords: [
    "live cricket score",
    "cricket ball by ball commentary",
    "criclive",
    "criclive.in",
    "live score cricket",
    "IPL live score",
    "T20 World Cup live",
  ],
  authors: [{ name: "Criclive Team" }],
  openGraph: {
    title: "Live Cricket Score & Real-Time Commentary | Criclive.in",
    description:
      "Follow real-time ball-by-ball cricket scores, AI win predictors, and match schedules with sub-second live updates.",
    url: "https://criclive.in",
    siteName: "Criclive.in",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criclive.in - High Performance Live Cricket Platform",
    description: "Follow real-time live cricket scores and AI match insights.",
  },
};

const sportsEventJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "India vs Australia, 3rd T20I",
  "sport": "Cricket",
  "startDate": "2026-11-24T14:00:00+05:30",
  "location": {
    "@type": "Place",
    "name": "Wankhede Stadium, Mumbai"
  },
  "competitor": [
    { "@type": "SportsTeam", "name": "India" },
    { "@type": "SportsTeam", "name": "Australia" }
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "INR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventJsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
