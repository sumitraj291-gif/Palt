import Link from "next/link";
import { ArrowRight, Clock3, ShieldCheck, UsersRound } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import PopularRoutes from "@/components/PopularRoutes";
import Fleet from "@/components/Fleet";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Taxi Services in Haridwar",
  description:
    "Explore local and outstation taxi services from Haridwar with Pal Travels. Contact us to discuss your route, vehicle, and travel requirements.",
  path: "/taxi-services",
});

export default function TaxiServicesPage() {
  return (
    <main>
      <PageIntro eyebrow="Good roads, good company" title={<>The journey is <span className="italic text-[#d7ed74]">part of it.</span></>} description="From the airport to the high Himalayas, get there comfortably with a driver who knows these roads by heart." />
      <section className="section-pad bg-[#f5f3ec]">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-3">
          {[{ icon: ShieldCheck, title: "Trusted local drivers", text: "Experienced, courteous drivers who know the mountain routes." }, { icon: Clock3, title: "Your time, your stops", text: "Flexible pickups and breaks that work around your travel plans." }, { icon: UsersRound, title: "Vehicles for your group", text: "Choose from comfortable sedans, roomy SUVs, and group travellers." }].map(({ icon: Icon, title, text }) => <div key={title} className="soft-card p-7"><Icon size={21} className="text-[#71834d]" /><h2 className="mt-8 text-lg font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-[#707873]">{text}</p></div>)}
        </div>
      </section>
      <PopularRoutes />
      <Fleet />
      <section className="bg-[#d7ed74] px-6 py-12 text-center text-[#163d34]"><h2 className="display-title text-[36px] md:text-[48px]">Need a ride that’s a little different?</h2><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#163d34] px-6 py-3.5 text-sm font-bold text-white">Ask us for a quote <ArrowRight size={14} /></Link></section>
    </main>
  );
}
