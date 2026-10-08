import { createPageMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PopularRoutes from "@/components/PopularRoutes";
import ChardhamSection from "@/components/ChardhamSection";
import TourPackages from "@/components/TourPackages";
import Fleet from "@/components/Fleet";
import Destinations from "@/components/Destinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata = createPageMetadata({
  title: "Taxi Services, Tours & Chardham Yatra in Haridwar | Pal Travels",
  description:
    "Explore taxi services, tour and travel options, and Chardham Yatra travel from Haridwar with Pal Travels. Contact our team to plan your journey.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <PopularRoutes />
      <ChardhamSection />
      <TourPackages />
      <Fleet />
      <Destinations />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
      <ContactSection />
    </main>
  );
}
