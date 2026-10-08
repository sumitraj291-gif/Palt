import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-[#163d34] px-6 pb-20 pt-36 text-white lg:px-[10vw] lg:pb-24 lg:pt-44">
      <div className="absolute -right-20 -top-28 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="absolute -right-4 -top-12 h-[300px] w-[300px] rounded-full border border-white/10" />
      <div className="relative mx-auto max-w-[1200px]">
        <span className="eyebrow !text-[#d7ed74]">{eyebrow}</span>
        <h1 className="display-title mt-6 max-w-[850px] text-[52px] md:text-[76px]">{title}</h1>
        <p className="mt-6 max-w-[560px] text-sm leading-7 text-white/70 md:text-base">{description}</p>
        <Link href="/contact" className="btn-primary mt-8">Let’s talk about it <ArrowRight size={15} /></Link>
      </div>
    </section>
  );
}
