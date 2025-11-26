import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#2d5016",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sell Inherited Mineral Rights & Timber in West Virginia | WV Land Heirs",
  description:
    "Inherited mineral rights or timber in WV? Get honest answers about what it's worth and connect with vetted buyers. No pressure, no jargon — just help for West Virginia families.",
  keywords: [
    "sell inherited mineral rights West Virginia",
    "inherited mineral rights WV",
    "sell mineral rights West Virginia",
    "who buys mineral rights WV",
    "sell timber West Virginia",
    "inherited timber rights WV",
    "what are my mineral rights worth",
    "Marcellus shale mineral rights",
    "oil and gas rights West Virginia",
    "inherited land West Virginia",
  ],
  openGraph: {
    title: "Sell Inherited Mineral Rights & Timber | West Virginia",
    description:
      "Inherited mineral rights or timber in WV? Get honest answers about what it's worth and connect with vetted buyers. No pressure.",
    url: "https://wvlandheirs.com",
    siteName: "WV Land Heirs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Inherited Mineral Rights & Timber in West Virginia",
    description:
      "Inherited mineral rights or timber in WV? Get honest answers and connect with vetted buyers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wvlandheirs.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WV Land Heirs",
  description:
    "Helping West Virginia families understand and sell inherited mineral rights and timber.",
  url: "https://wvlandheirs.com",
  telephone: "+1-304-593-3911",
  email: "jay@piawv.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "809 Viand Street",
    addressLocality: "Point Pleasant",
    addressRegion: "WV",
    postalCode: "25550",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.8445,
    longitude: -82.1371,
  },
  areaServed: {
    "@type": "State",
    name: "West Virginia",
    sameAs: "https://en.wikipedia.org/wiki/West_Virginia",
  },
  founder: {
    "@type": "Person",
    name: "Jay Parrack",
  },
  serviceType: [
    "Mineral Rights Consulting",
    "Timber Rights Consulting",
    "Inherited Property Consulting",
  ],
  knowsAbout: [
    "Mineral Rights",
    "Timber Rights",
    "Oil and Gas Rights",
    "Marcellus Shale",
    "West Virginia Land",
    "Inherited Property",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-brand-dark font-sans bg-white">{children}</body>
    </html>
  );
}
