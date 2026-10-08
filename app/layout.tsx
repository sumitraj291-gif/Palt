import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paltravel.co.in"),
  title: {
    default: "Taxi Services, Tours & Chardham Yatra in Haridwar | Pal Travels",
    template: "%s | Pal Travels",
  },
  description:
    "Explore taxi services, tour and travel options, and Chardham Yatra travel from Haridwar with Pal Travels. Contact our team to plan your journey.",
  openGraph: {
    title: "Taxi Services, Tours & Chardham Yatra in Haridwar | Pal Travels",
    description: "Explore taxi services, tour and travel options, and Chardham Yatra travel from Haridwar with Pal Travels. Contact our team to plan your journey.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Taxi Services, Tours & Chardham Yatra in Haridwar | Pal Travels",
    description: "Explore taxi services, tour and travel options, and Chardham Yatra travel from Haridwar with Pal Travels. Contact our team to plan your journey.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    url: "https://paltravel.co.in",
    telephone: [site.phone, site.secondaryPhone],
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Bus Stand, Opp. Haridwar Railway Station",
      addressLocality: "Haridwar",
      addressRegion: "Uttarakhand",
      postalCode: "249407",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
