import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";
import { site } from "@/lib/data";
import type { TourPackagePageData } from "@/lib/tourPackages";

export default function TourPackageLanding({ data }: { data: TourPackagePageData }) {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#163d34] px-6 pb-16 pt-28 text-white md:pb-20 md:pt-36 lg:px-[10vw]">
        <div className="pointer-events-none absolute -right-20 -top-28 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/65">
            <Link href="/" className="inline-flex min-h-11 items-center hover:text-[#d7ed74]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/tour-packages" className="inline-flex min-h-11 items-center hover:text-[#d7ed74]">Tour Packages</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">{data.eyebrow}</span>
          </nav>

          <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
            <div>
              <span className="eyebrow !text-[#d7ed74]">{data.eyebrow}</span>
              <h1 className="display-title mt-5 max-w-[760px] text-[42px] leading-tight sm:text-[52px] md:text-[64px]">{data.title}</h1>
              <p className="mt-6 max-w-[650px] text-base leading-7 text-white/75">{data.heroDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#booking" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d7ed74] px-6 py-3 text-sm font-bold text-[#163d34] hover:bg-white">
                  Plan Your Trip <ArrowRight size={16} />
                </Link>
                <Link href="/contact#booking" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/15 sm:min-h-[340px]">
              <Image
                src={data.image}
                alt={data.imageAlt}
                width={1200}
                height={800}
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102e28]/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-bold text-white">{data.imageAlt}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[.85fr_1.15fr] md:gap-14">
          <div>
            <span className="eyebrow !text-[#557246]">TRAVEL FROM HARIDWAR</span>
            <h2 className="display-title mt-4 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">{data.introHeading}</h2>
          </div>
          <p className="text-base leading-8 text-[#68706b]">{data.intro}</p>
        </div>
      </section>

      <section className="section-pad bg-[#f5f3ec]">
        <div className="mx-auto max-w-[1120px]">
          <span className="eyebrow !text-[#557246]">PLACES TO CONSIDER</span>
          <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">Popular destinations</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.destinations.map((destination) => (
              <Link key={destination} href="/destinations" className="flex min-h-14 items-center gap-3 rounded-xl bg-white px-5 py-4 text-sm font-bold text-[#163d34] shadow-sm hover:text-[#71834d]">
                <MapPin size={17} className="shrink-0 text-[#71834d]" />
                <span>{destination}</span>
                <ArrowRight size={15} className="ml-auto shrink-0" />
              </Link>
            ))}
          </div>
          <Link href="/destinations" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#163d34] underline-offset-4 hover:underline">
            View destinations <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <span className="eyebrow !text-[#557246]">TRIP IDEAS</span>
              <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">Suggested tour experiences</h2>
              <p className="mt-4 text-sm leading-7 text-[#68706b]">Choose the kind of trip you have in mind. Stops and timing can be discussed around your travel dates.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {data.experiences.map((experience) => (
                <li key={experience} className="flex min-h-12 items-center gap-3 rounded-xl bg-[#f5f3ec] px-4 py-3 text-sm font-semibold text-[#40534a]">
                  <CheckCircle2 size={18} className="shrink-0 text-[#71834d]" />
                  {experience}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#e9eee5]">
        <div className="mx-auto max-w-[1120px]">
          <span className="eyebrow !text-[#557246]">TRAVEL & TAXI OPTIONS</span>
          <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">Plan how you want to travel</h2>
          <p className="mt-4 max-w-[780px] text-sm leading-7 text-[#68706b]">
            Pal Travels can discuss travel arrangements from Haridwar using Sedan Taxi, SUV Taxi, Innova, Innova Crysta, or Tempo Traveller. Vehicle configuration and suitability depend on your group, luggage, route, and requirements. Ask for current pricing; no tour prices or inclusions are assumed here.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.travelOptions.map((option) => (
              <Link key={option.href} href={option.href} className="rounded-2xl bg-white p-5 shadow-sm hover:shadow-md">
                <span className="flex min-h-11 items-center justify-between gap-3 text-base font-extrabold text-[#163d34]">
                  {option.name}<ArrowRight size={16} className="shrink-0" />
                </span>
                <span className="mt-2 block text-sm leading-6 text-[#68706b]">{option.description}</span>
              </Link>
            ))}
            <Link href="/taxi-services" className="rounded-2xl bg-white p-5 shadow-sm hover:shadow-md">
              <span className="flex min-h-11 items-center justify-between gap-3 text-base font-extrabold text-[#163d34]">
                Explore our taxi services<ArrowRight size={16} className="shrink-0" />
              </span>
              <span className="mt-2 block text-sm leading-6 text-[#68706b]">Review taxi options for your journey from Haridwar.</span>
            </Link>
            <Link href="/tour-packages" className="rounded-2xl bg-white p-5 shadow-sm hover:shadow-md">
              <span className="flex min-h-11 items-center justify-between gap-3 text-base font-extrabold text-[#163d34]">
                Browse all tour packages<ArrowRight size={16} className="shrink-0" />
              </span>
              <span className="mt-2 block text-sm leading-6 text-[#68706b]">Compare destination ideas and plan a custom trip.</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1120px]">
          <span className="eyebrow !text-[#557246]">SAMPLE PLANNING</span>
          <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">Suggested itinerary examples</h2>
          <p className="mt-4 max-w-[800px] text-sm leading-7 text-[#68706b]">These examples are starting points for discussion, not fixed package schedules. Actual routes and timing should be planned around your dates and travel requirements.</p>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {data.itineraries.map((itinerary) => (
              <article key={itinerary.title} className="rounded-2xl border border-[#e1e6df] p-5 sm:p-6">
                <h3 className="text-lg font-extrabold leading-snug text-[#163d34]">{itinerary.title}</h3>
                <ol className="mt-4 space-y-3">
                  {itinerary.days.map((day) => (
                    <li key={day} className="border-l-2 border-[#d7ed74] pl-3 text-sm leading-6 text-[#58645e]">{day}</li>
                  ))}
                </ol>
                <Link href="/contact#booking" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#163d34] hover:text-[#71834d]">
                  Customize this idea <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-pad bg-[#f5f3ec]">
        <div className="mx-auto max-w-[900px]">
          <span className="eyebrow !text-[#557246]">COMMON QUESTIONS</span>
          <h2 className="display-title mt-3 text-[34px] leading-tight text-[#163d34] sm:text-[42px]">Frequently asked questions</h2>
          <div className="faq-list mt-7">
            {data.faqs.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary>
                  <span>{question}</span>
                  <span aria-hidden="true" className="text-xl text-[#0b5d50]">+</span>
                </summary>
                <div className="faq-answer">{answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d7ed74] px-6 py-14 text-[#163d34] lg:px-[10vw]">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="eyebrow !text-[#557246]">PLAN YOUR TRIP</span>
            <h2 className="display-title mt-2 text-[34px] leading-tight sm:text-[44px]">Tell us where you want to go.</h2>
            <p className="mt-3 max-w-[680px] text-sm leading-6">Contact Pal Travels with your dates, destinations, and travel requirements to discuss a customizable plan and current pricing.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#booking" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#163d34] px-6 py-3 text-sm font-bold text-white hover:bg-[#102e28]">
              Get a Free Quote <ArrowRight size={15} />
            </Link>
            <a href={`tel:${site.phoneLink}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#163d34]/30 px-6 py-3 text-sm font-bold">
              <Phone size={15} /> Call Pal Travels
            </a>
          </div>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#163d34] underline-offset-4 hover:underline">
            <MessageCircle size={16} /> WhatsApp enquiry
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-8 lg:px-[10vw]">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/tour-packages" className="inline-flex min-h-11 items-center font-bold text-[#163d34] hover:underline">All tour packages</Link>
          <Link href="/taxi-services" className="inline-flex min-h-11 items-center text-[#557246] hover:underline">Explore our taxi services</Link>
          <Link href="/destinations" className="inline-flex min-h-11 items-center text-[#557246] hover:underline">View destinations</Link>
          <Link href="/contact#booking" className="inline-flex min-h-11 items-center text-[#557246] hover:underline">Contact Pal Travels</Link>
        </div>
      </section>
    </main>
  );
}
