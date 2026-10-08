import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Phone, MessageCircle } from "lucide-react";
import type { TaxiRouteData } from "@/lib/taxiRoutes";
import WhyChooseUs from "@/components/WhyChooseUs";

const siteUrl = "https://paltravel.co.in";
const sharedLinks = [
  { label: "Taxi Services", href: "/taxi-services" },
  { label: "Outstation Taxi", href: "/taxi-services/outstation" },
  { label: "One-Way Taxi", href: "/taxi-services/one-way" },
  { label: "Round-Trip Taxi", href: "/taxi-services/round-trip" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Destinations", href: "/destinations" },
];

export default function RouteTaxiLanding({ route }: { route: TaxiRouteData }) {
  const pageUrl = `${siteUrl}/taxi-services/${route.slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Taxi Services", item: `${siteUrl}/taxi-services` },
      { "@type": "ListItem", position: 3, name: route.h1, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white text-slate-800">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 py-5 text-sm text-slate-600 sm:px-8">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-teal-700">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={15} /></li>
            <li><Link href="/taxi-services" className="hover:text-teal-700">Taxi Services</Link></li>
            <li aria-hidden="true"><ChevronRight size={15} /></li>
            <li aria-current="page" className="font-medium text-slate-900">{route.h1}</li>
          </ol>
        </nav>

        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-4 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:pb-20">
          <div>
            <span className="text-xs font-bold tracking-[0.18em] text-teal-700">{route.eyebrow}</span>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">{route.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{route.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#booking" className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a href="tel:+918979977705" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-800">
                <Phone size={17} /> Call +91 89799 77705
              </a>
            </div>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-2xl bg-slate-100 sm:min-h-80 lg:min-h-[390px]">
            <Image
              src={route.image}
              alt={route.imageAlt}
              fill
              unoptimized
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_340px] lg:gap-12">
            <div>
              <span className="text-xs font-bold tracking-[0.16em] text-teal-700">ROUTE OVERVIEW</span>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">{route.introHeading}</h2>
              <p className="mt-4 leading-7 text-slate-600">{route.introduction}</p>
              <h3 className="mt-8 text-xl font-bold text-slate-900">Travel details to confirm</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {route.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 rounded-xl bg-white p-4 leading-6 text-slate-700 shadow-sm">
                    <Check size={19} className="mt-1 shrink-0 text-teal-700" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                Travel time can vary depending on traffic, weather, road conditions, pickup location, and route.
              </p>
            </div>

            <aside className="h-fit rounded-2xl border border-teal-100 bg-white p-6 shadow-sm">
              <span className="text-sm font-semibold text-teal-800">Indicative fare</span>
              <p className="mt-2 text-sm font-semibold text-slate-600">Starting From</p>
              <p className="mt-1 text-3xl font-bold text-slate-950">{route.fare}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{route.fareDisclaimer}</p>
              <Link href="/contact#booking" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-4 py-3 font-semibold text-white hover:bg-teal-800">
                Request Your Quote <ArrowRight size={17} />
              </Link>
            </aside>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold tracking-[0.16em] text-teal-700">VEHICLE OPTIONS</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Choose a taxi for your plans</h2>
            <p className="mt-4 leading-7 text-slate-600">Discuss the suitable option for your group, luggage, travel date, and itinerary. Confirm availability and trip details while booking.</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {route.taxiOptions.map((option) => (
                <li key={option} className="rounded-lg border border-slate-200 px-4 py-3 font-medium text-slate-800">{option}</li>
              ))}
            </ul>
            <Link href="/taxi-services" className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-950">
              Explore taxi services <ArrowRight size={17} />
            </Link>
          </div>
          <div>
            <span className="text-xs font-bold tracking-[0.16em] text-teal-700">SUITABLE FOR</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">{route.origin} to {route.destination} travel plans</h2>
            <p className="mt-4 leading-7 text-slate-600">Share the purpose and schedule of your trip so the pickup, drop, and vehicle requirements can be discussed before confirmation.</p>
            <ul className="mt-5 space-y-3">
              {route.useCases.map((useCase) => (
                <li key={useCase} className="flex items-center gap-3 text-slate-700">
                  <Check size={18} className="shrink-0 text-teal-700" /> {useCase}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <WhyChooseUs />

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold tracking-[0.16em] text-teal-700">MORE JOURNEYS</span>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Related routes and travel</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {route.relatedRoutes.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="flex items-center justify-between rounded-lg border border-slate-200 p-4 font-medium text-slate-800 hover:border-teal-600 hover:text-teal-800">
                      {label}<ArrowRight size={17} />
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-lg font-bold text-slate-900">Explore our services</h3>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
                {sharedLinks.map(({ label, href }) => (
                  <Link key={href} href={href} className="font-medium text-teal-800 underline-offset-4 hover:underline">{label}</Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold tracking-[0.16em] text-teal-700">FAQ</span>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Questions about this route</h2>
              <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
                {route.faqs.map(({ question, answer }) => (
                  <details key={question} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                      {question}<span className="text-xl text-teal-700 group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 pr-7 leading-7 text-slate-600">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-5 py-12 text-white sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.16em] text-teal-300">READY TO PLAN?</span>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Get a quote for {route.origin} to {route.destination}</h2>
              <p className="mt-2 text-slate-300">Share your date, exact pickup and drop points, and travel requirements.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#booking" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 font-semibold hover:bg-teal-500">
                Contact / Book <ArrowRight size={17} />
              </Link>
              <a href="https://wa.me/918979977705" className="inline-flex items-center gap-2 rounded-lg border border-slate-500 px-5 py-3 font-semibold hover:border-white">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href="tel:+918979977705" className="inline-flex items-center gap-2 rounded-lg border border-slate-500 px-5 py-3 font-semibold hover:border-white">
                <Phone size={17} /> +91 89799 77705
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
