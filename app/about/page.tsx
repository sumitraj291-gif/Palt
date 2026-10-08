import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Map, Mountain } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import CTA from "@/components/CTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Pal Travels and its taxi services, tour and travel planning, and Chardham Yatra support from Haridwar.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageIntro eyebrow="A little about us" title={<>Good people. <span className="italic text-[#d7ed74]">Good roads.</span></>} description="We’re a small local team with a big love for our home in the mountains. We help you see it the way we do: one thoughtful journey at a time." />
      <section className="section-pad bg-[#f5f3ec]">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:items-center">
          <div><span className="eyebrow">Our way of travelling</span><h2 className="display-title mt-5 text-[48px] md:text-[62px]">The best trips feel <span className="italic text-[#71834d]">like yours.</span></h2></div>
          <div className="space-y-5 text-sm leading-7 text-[#68706b]"><p>Pal Travels grew from a simple idea: a visit to Uttarakhand should feel less like following a checklist and more like being welcomed in. We bring together local know-how, dependable rides, and a genuine care for the details.</p><p>Whether you’re here for a pilgrimage, a long weekend, or a quiet stretch of mountain road, we’ll help make the journey fit you.</p><Link href="/contact" className="inline-flex items-center gap-2 pt-2 font-bold text-[#163d34]">Tell us what you have in mind <ArrowUpRight size={14} /></Link></div>
        </div>
      </section>
      <section className="bg-[#e9eee5] px-6 py-16 lg:px-[10vw]">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-3">
          {[{ icon: Mountain, title: "We know the way", text: "We live and work here. Local roads, local seasons, and the little stops worth making are part of what we do." }, { icon: HeartHandshake, title: "People come first", text: "You’ll talk to real people who listen, answer honestly, and want your time here to feel good." }, { icon: Map, title: "Made around you", text: "No one-size-fits-all itineraries. We’ll shape the details around your group, your pace, and your plans." }].map(({ icon: Icon, title, text }) => <article key={title} className="soft-card bg-[#f5f3ec] p-7"><Icon size={22} className="text-[#71834d]" /><h3 className="mt-10 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#707873]">{text}</p></article>)}
        </div>
      </section>
      <CTA />
    </main>
  );
}
