import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Mail, MessageCircle, Phone } from "lucide-react";
import type { ChardhamPageData } from "@/lib/chardham";
import { site } from "@/lib/data";

const siteUrl = "https://paltravel.co.in";
const travelLinks = [
  { label: "Taxi Services", href: "/taxi-services" },
  { label: "Outstation Taxi", href: "/taxi-services/outstation" },
  { label: "Tempo Traveller", href: "/taxi-services/tempo-traveller" },
  { label: "Uttarakhand Tour Packages", href: "/tour-packages/uttarakhand" },
  { label: "Destinations", href: "/destinations" },
];

export default function ChardhamLanding({ page }: { page: ChardhamPageData }) {
  const pagePath = page.slug ? `/chardham-yatra/${page.slug}` : "/chardham-yatra";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Chardham Yatra",
        item: `${siteUrl}/chardham-yatra`,
      },
      ...(page.slug
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: page.h1,
              item: `${siteUrl}${pagePath}`,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white text-[#10221f]">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-[1200px] bg-[#163d34] px-5 pb-5 pt-[112px] text-sm text-white/75 sm:px-6 min-[601px]:pt-[136px] lg:px-8"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[#d7ed74]">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={15} /></li>
            {page.slug ? (
              <>
                <li><Link href="/chardham-yatra" className="hover:text-[#d7ed74]">Chardham Yatra</Link></li>
                <li aria-hidden="true"><ChevronRight size={15} /></li>
              </>
            ) : null}
            <li aria-current="page" className="font-semibold text-white">{page.h1}</li>
          </ol>
        </nav>

        <section className="mx-auto grid max-w-[1200px] items-center gap-9 px-5 pb-14 pt-2 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:pb-20">
          <div>
            <span className="eyebrow !text-[#71834d]">PILGRIMAGE TRAVEL FROM HARIDWAR</span>
            <h1 className="display-title mt-5 text-[42px] leading-[1.12] sm:text-[52px] lg:text-[62px]">{page.h1}</h1>
            <p className="mt-5 max-w-[620px] text-base leading-7 text-[#68706b]">{page.heroText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact#booking"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#163d34] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#102e28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71834d]"
              >
                Get Quote <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d9e2de] px-6 py-3 text-sm font-bold text-[#163d34] transition hover:border-[#163d34] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71834d]"
              >
                Contact Pal Travels
              </Link>
            </div>
          </div>
          <div className="relative min-h-[250px] overflow-hidden rounded-2xl bg-[#f5f3ec] sm:min-h-[340px] lg:min-h-[420px]">
            <Image
              src={page.image}
              alt={page.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              quality={75}
              className="object-cover"
            />
          </div>
        </section>

        <section className="bg-[#f5f3ec] px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[820px]">
              <span className="eyebrow !text-[#71834d]">ABOUT THE JOURNEY</span>
              <h2 className="display-title mt-4 text-[34px] leading-tight sm:text-[44px]">A pilgrimage planned around your journey.</h2>
              <p className="mt-5 text-[15px] leading-7 text-[#68706b]">{page.intro}</p>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {page.sections.map((section) => (
                <article key={section.heading} className="rounded-2xl border border-[#e6e8df] bg-white p-6 sm:p-7">
                  <h2 className="text-xl font-bold text-[#163d34]">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#68706b]">{section.body}</p>
                  {section.points ? (
                    <ul className="mt-4 grid gap-3">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[#48534f]">
                          <Check size={17} className="mt-1 shrink-0 text-[#71834d]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-[#737b74]">
              Travel plans, access, and services can be affected by current conditions and availability. Confirm official pilgrimage requirements and plan-specific details before departure.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1200px] gap-12 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="eyebrow !text-[#71834d]">EXPLORE CHARDHAM OPTIONS</span>
            <h2 className="display-title mt-4 text-[34px] leading-tight sm:text-[42px]">Find the travel information you need.</h2>
            <div className="mt-6 grid gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-[72px] items-center justify-between gap-4 rounded-xl border border-[#e3e9e6] p-4 transition hover:border-[#71834d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#71834d]"
                >
                  <span>
                    <span className="block font-bold text-[#163d34]">{link.label}</span>
                    {link.description ? <span className="mt-1 block text-sm leading-5 text-[#68706b]">{link.description}</span> : null}
                  </span>
                  <ArrowRight size={18} className="shrink-0 text-[#71834d]" />
                </Link>
              ))}
            </div>
            <h3 className="mt-8 text-lg font-bold text-[#163d34]">More travel services</h3>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
              {travelLinks.map(({ label, href }) => (
                <Link key={href} href={href} className="text-sm font-semibold text-[#557246] underline-offset-4 hover:underline">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow !text-[#71834d]">COMMON QUESTIONS</span>
            <h2 className="display-title mt-4 text-[34px] leading-tight sm:text-[42px]">Before you enquire.</h2>
            <div className="mt-6 divide-y divide-[#e3e9e6] border-y border-[#e3e9e6]">
              {page.faqs.map(({ question, answer }) => (
                <details key={question} className="group py-4">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#163d34] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#71834d]">
                    {question}
                    <span aria-hidden="true" className="shrink-0 text-xl text-[#71834d] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-7 text-sm leading-7 text-[#68706b]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#163d34] px-5 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[660px]">
              <span className="eyebrow !text-[#d7ed74]">CONTACT PAL TRAVELS</span>
              <h2 className="display-title mt-3 text-[34px] leading-tight sm:text-[42px]">Discuss your pilgrimage travel plan.</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">{site.address}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#booking" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d7ed74] px-5 py-3 text-sm font-bold text-[#163d34] hover:bg-white">
                Get Quote <ArrowRight size={16} />
              </Link>
              <a href={`tel:${site.phoneLink}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold hover:border-white">
                <Phone size={16} /> {site.phone}
              </a>
              <a href={`https://wa.me/${site.whatsapp}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold hover:border-white">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="mx-auto mt-7 flex max-w-[1200px] flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-sm text-white/75">
            <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${site.secondaryPhoneLink}`}>
              <Phone size={14} /> {site.secondaryPhone}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}>
              <Mail size={14} /> {site.email}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
