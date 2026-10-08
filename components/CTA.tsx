import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/data";

export default function CTA() {
  return (
    <section className="bg-[#d7ed74] px-6 py-16 text-[#163d34] lg:px-[10vw] lg:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 md:flex-row md:items-center">
        <div><span className="eyebrow !text-[#557246]">Your next good story starts here</span><h2 className="display-title mt-4 text-[43px] md:text-[60px]">Shall we find your way?</h2></div>
        <div className="flex flex-wrap gap-3"><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#163d34] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#102e28]">Let’s plan it <ArrowUpRight size={15} /></Link><a href={`tel:${site.phoneLink}`} className="inline-flex items-center gap-2 rounded-full border border-[#163d34]/30 px-5 py-4 text-sm font-bold"><Phone size={14} /> Give us a call</a></div>
      </div>
    </section>
  );
}
