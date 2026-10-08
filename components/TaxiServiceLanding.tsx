import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/data";
import WhyChooseUs from "@/components/WhyChooseUs";

export type TaxiServiceRoute = {
  label: string;
  href: string;
};

export type TaxiServiceLandingProps = {
  title: string;
  eyebrow: string;
  description: string;
  introHeading: string;
  intro: string;
  cta: string;
  benefitsHeading: string;
  benefits: string[];
  useCasesHeading: string;
  useCases: string[];
  optionsHeading: string;
  options: TaxiServiceRoute[];
  relatedHeading: string;
  relatedLinks: TaxiServiceRoute[];
  faqs: { question: string; answer: string }[];
  routes?: { from: string; to: string; price?: string }[];
  callCta?: boolean;
};

export default function TaxiServiceLanding({
  title,
  eyebrow,
  description,
  introHeading,
  intro,
  cta,
  benefitsHeading,
  benefits,
  useCasesHeading,
  useCases,
  optionsHeading,
  options,
  relatedHeading,
  relatedLinks,
  faqs,
  routes,
  callCta = false,
}: TaxiServiceLandingProps) {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#163d34] px-6 pb-16 pt-28 text-white md:pb-20 md:pt-36 lg:px-[10vw]">
        <div className="pointer-events-none absolute -right-20 -top-28 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65">
            <Link href="/" className="min-h-11 inline-flex items-center hover:text-[#d7ed74]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/taxi-services" className="min-h-11 inline-flex items-center hover:text-[#d7ed74]">Taxi Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">{eyebrow}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <div>
              <span className="eyebrow !text-[#d7ed74]">{eyebrow}</span>
              <h1 className="display-title mt-5 max-w-[780px] text-[42px] leading-tight sm:text-[52px] md:text-[64px]">{title}</h1>
              <p className="mt-6 max-w-[650px] text-base leading-7 text-white/75">{description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#booking" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d7ed74] px-6 py-3 text-sm font-bold text-[#163d34] hover:bg-white">
                  {cta} <ArrowRight size={16} />
                </Link>
                {callCta && (
                  <a href={`tel:${site.phoneLink}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
                    <Phone size={16} /> Call {site.phone}
                  </a>
                )}
              </div>
            </div>
            <aside className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 sm:p-8">
              <span className="text-xs font-extrabold uppercase tracking-[.18em] text-[#d7ed74]">Pal Travels · Haridwar</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight sm:text-3xl">Plan a journey around your route and travel needs.</h2>
              <p className="mt-4 text-sm leading-6 text-white/70">Share your pickup, destination, date, and group requirements. We’ll help you discuss suitable travel options.</p>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#d7ed74] hover:text-white">
                <MessageCircle size={17} /> Ask us on WhatsApp
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[.85fr_1.15fr] md:gap-14">
          <div>
            <span className="eyebrow !text-[#557246]">TRAVEL FROM HARIDWAR</span>
            <h2 className="display-title mt-4 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">{introHeading}</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-[#68706b]">{intro}</p>
            <p className="mt-4 text-sm leading-7 text-[#68706b]">Fare depends on vehicle type, distance, travel dates, and trip requirements. Contact Pal Travels for a quote for your journey.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f5f3ec]">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <span className="eyebrow !text-[#557246]">SERVICE BENEFITS</span>
              <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">{benefitsHeading}</h2>
              <ul className="mt-6 space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#505c56]">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#71834d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <span className="eyebrow !text-[#557246]">WHEN IT’S USEFUL</span>
              <h2 className="display-title mt-3 text-[30px] leading-tight text-[#163d34] sm:text-[36px]">{useCasesHeading}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {useCases.map((item) => (
                  <li key={item} className="flex min-h-11 items-center gap-2 rounded-xl bg-[#f5f3ec] px-4 py-3 text-sm font-semibold text-[#40534a]">
                    <MapPin size={15} className="shrink-0 text-[#71834d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {routes && (
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-[1120px]">
            <span className="eyebrow !text-[#557246]">POPULAR TAXI ROUTES</span>
            <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">Popular journeys from Haridwar and Delhi</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map(({ from, to, price }) => (
                <article key={`${from}-${to}`} className="rounded-2xl border border-[#e1e6df] p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#71834d]">Taxi route</p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#163d34]">{from} to {to} Taxi</h3>
                  {price && <p className="mt-2 text-sm font-semibold text-[#505c56]">Starting From {price}</p>}
                  <Link href="/contact#booking" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#163d34] hover:text-[#71834d]">Get Quote <ArrowRight size={15} /></Link>
                </article>
              ))}
            </div>
            {routes.some((route) => route.price) && <p className="mt-5 text-xs leading-5 text-[#68706b]">Prices shown are indicative starting fares only. Final fare depends on vehicle type, distance, dates, and travel requirements.</p>}
          </div>
        </section>
      )}

      <section className="section-pad bg-[#e9eee5]">
        <div className="mx-auto max-w-[1120px]">
          <span className="eyebrow !text-[#557246]">TRAVEL OPTIONS</span>
          <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">{optionsHeading}</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {options.map(({ label, href }) => (
              <Link key={label} href={href} className="flex min-h-14 items-center justify-between gap-3 rounded-xl bg-white px-5 py-4 text-sm font-bold text-[#163d34] shadow-sm hover:text-[#71834d]">
                {label}<ArrowRight size={16} className="shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[900px]">
          <span className="eyebrow !text-[#557246]">COMMON QUESTIONS</span>
          <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">Frequently asked questions</h2>
          <div className="faq-list mt-7">
            {faqs.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary><span>{question}</span><span aria-hidden="true" className="text-xl text-[#0b5d50]">+</span></summary>
                <div className="faq-answer">{answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d7ed74] px-6 py-14 text-[#163d34] lg:px-[10vw]">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="eyebrow !text-[#557246]">READY TO PLAN?</span>
            <h2 className="display-title mt-2 text-[34px] leading-tight sm:text-[44px]">Tell us about your journey.</h2>
            <p className="mt-3 max-w-[650px] text-sm leading-6">Contact Pal Travels to discuss your pickup, route, travel dates, and vehicle requirements.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#booking" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#163d34] px-6 py-3 text-sm font-bold text-white hover:bg-[#102e28]">{cta} <ArrowRight size={15} /></Link>
            <Link href={relatedLinks.find((link) => link.href === "/contact")?.href ?? "/contact"} className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#163d34]/30 px-6 py-3 text-sm font-bold">Contact</Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-8 lg:px-[10vw]">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="font-bold text-[#163d34]">{relatedHeading}</span>
          {relatedLinks.filter((link) => link.href !== "/contact").map(({ label, href }) => (
            <Link key={href} href={href} className="inline-flex min-h-11 items-center text-[#557246] underline-offset-4 hover:underline">{label}</Link>
          ))}
        </div>
      </section>
    </main>
  );
}
