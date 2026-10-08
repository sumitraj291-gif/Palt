import { Mail, MapPin, Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import PageIntro from "@/components/PageIntro";
import { site } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact in Haridwar",
  description:
    "Contact Pal Travels near Haridwar Railway Station. Call +91 89799 77705 or +91 94117 17705, or email info@paltravels.co.in to discuss taxi, tour, or Chardham travel.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageIntro eyebrow="Let’s make a plan" title={<>Tell us where <span className="italic text-[#d7ed74]">you’d like to go.</span></>} description="A few details are all we need to get started. Our local team will help you figure out the rest." />
      <section id="booking" className="section-pad bg-[#e9eee5]">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="eyebrow">We’re easy to reach</span>
            <h2 className="display-title mt-5 text-[44px] md:text-[55px]">A real person, <span className="italic text-[#71834d]">right here.</span></h2>
            <p className="mt-5 text-sm leading-7 text-[#68706b]">Ask us about a taxi, a tour, or just where to get started. We’re happy to help.</p>
            <div className="mt-8 space-y-5">
              <a href={`tel:${site.phoneLink}`} className="flex items-center gap-4 text-sm font-bold"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#71834d]"><Phone size={16} /></span>{site.phone}</a>
              <a href={`tel:${site.secondaryPhoneLink}`} className="flex items-center gap-4 text-sm font-bold"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#71834d]"><Phone size={16} /></span>{site.secondaryPhone}</a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-sm font-bold"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#71834d]"><Mail size={16} /></span>{site.email}</a>
              <div className="flex items-center gap-4 text-sm font-bold"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#71834d]"><MapPin size={16} /></span>{site.address}</div>
            </div>
            <div className="mt-9 overflow-hidden rounded-xl border border-[#cbd2c7]">
              <iframe title="Pal Travels near Haridwar Railway Station" src="https://maps.google.com/maps?q=Near%20Bus%20Stand%2C%20Opp.%20Haridwar%20Railway%20Station%2C%20Haridwar%20%20249407&t=&z=14&ie=UTF8&iwloc=&output=embed" className="h-[220px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#163d34] p-6 text-white sm:p-9">
            <span className="eyebrow !text-[#d7ed74]">Your next good story starts here</span>
            <h2 className="display-title mt-4 text-[36px]">What are you dreaming up?</h2>
            <p className="mb-7 mt-3 text-sm leading-6 text-white/60">Share the basics and we’ll open a ready-to-send message in WhatsApp.</p>
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
