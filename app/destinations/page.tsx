import { createPageMetadata } from "@/lib/seo";
import PageIntro from "@/components/PageIntro";
import Destinations from "@/components/Destinations";
import CTA from "@/components/CTA";

export const metadata = createPageMetadata({
  title: "Uttarakhand Destinations from Haridwar",
  description:
    "Explore destinations in Uttarakhand and nearby regions with Pal Travels. Contact us to discuss travel routes, taxi options, and trip planning from Haridwar.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <main>
      <PageIntro eyebrow="A little further out" title={<>There’s more than one way <span className="italic text-[#d7ed74]">to find your place.</span></>} description="Riverside mornings, winding hill roads, ancient temples, and trails that lead somewhere extraordinary. Where will you begin?" />
      <Destinations />
      <section className="section-pad bg-[#f5f3ec]">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2 md:items-center">
          <div><span className="eyebrow">Let the locals lead</span><h2 className="display-title mt-5 text-[48px] md:text-[60px]">The best spots <span className="italic text-[#71834d]">aren’t always on the map.</span></h2></div>
          <p className="text-sm leading-7 text-[#68706b]">Tell us what kind of trip you’re dreaming about — a quiet stretch by the river, a temple visit, or a few days up in the hills. We’ll share ideas and help you put together a route that feels right.</p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
