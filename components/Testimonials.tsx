import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-pad bg-[#f5f3ec]">
      <div className="mx-auto max-w-[850px] text-center">
        <span className="eyebrow">Kind words from the road</span>
        <div className="mt-8 flex justify-center gap-1 text-[#8ba34e]">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>
        <blockquote className="display-title mt-6 text-[34px] leading-[1.15] md:text-[50px]">“The whole trip felt effortless. We got to just look out the window and fall in love with the mountains.”</blockquote>
        <div className="mt-7"><span className="text-sm font-bold">Ananya & family</span><span className="mt-1 block text-xs text-[#818880]">A week in Uttarakhand</span></div>
      </div>
    </section>
  );
}
