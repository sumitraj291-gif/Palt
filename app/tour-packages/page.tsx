import PageIntro from "@/components/PageIntro";
import TourPackages from "@/components/TourPackages";
import Destinations from "@/components/Destinations";
import CTA from "@/components/CTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Tour Packages from Haridwar",
  description:
    "Explore tour and travel options from Haridwar with Pal Travels. Discuss destinations, travel dates, routes, vehicles, and itinerary details with our team.",
  path: "/tour-packages",
});

export default function TourPackagesPage() {
  return (
    <main>
      <PageIntro eyebrow="A few good places to begin" title={<>Take the trip <span className="italic text-[#d7ed74]">you’ve been thinking about.</span></>} description="Short escapes, slow mornings, and big mountain days. Start with an idea, and we’ll help shape the rest." />
      <TourPackages />
      <Destinations />
      <CTA />
    </main>
  );
}
