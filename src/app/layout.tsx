import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#cd0808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Live Cricket Score, Match Schedules & Latest News | Criclive.in",
  description:
    "Live cricket scores, ball-by-ball commentary, match schedules, breaking news and player stats for international & domestic series — free on Criclive.in.",
  keywords: [
    "live cricket score",
    "cricket ball by ball commentary",
    "criclive",
    "criclive.in",
    "live score cricket",
    "IPL live score",
    "T20 World Cup live",
  ],
  authors: [{ name: "Nikhil Kumar Pandey" }],
  openGraph: {
    title: "Live Cricket Score, Schedule, Latest News | Criclive.in",
    description:
      "Follow real-time live cricket scores, ball-by-ball commentary, schedules, and news on Criclive.in.",
    url: "https://criclive.in",
    siteName: "Criclive.in",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Cricket Score & Match Updates | Criclive.in",
    description: "Real-time live cricket scores, ball-by-ball commentary, and match schedules.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Criclive.in",
    "url": "https://criclive.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://criclive.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Criclive.in",
    "url": "https://criclive.in/",
    "logo": "https://criclive.in/apple-touch-icon.png",
    "sameAs": [
      "https://www.facebook.com/share/14WMVSrab9B/",
      "https://x.com/criclive_in",
      "https://www.instagram.com/criclive_in?igsh=MW5mcHIxZXNqYm85Mw==",
      "https://www.youtube.com/@criclive_in"
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
