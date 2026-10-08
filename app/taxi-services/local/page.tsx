import TaxiServiceLanding from "@/components/TaxiServiceLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Local Taxi in Haridwar | Local Cab Service | Pal Travels",
  description:
    "Book a reliable local taxi in Haridwar with Pal Travels for railway station transfers, local sightseeing, hotel transfers and city travel.",
  path: "/taxi-services/local",
  absoluteTitle: true,
});

export default function LocalTaxiPage() {
  return (
    <TaxiServiceLanding
      eyebrow="LOCAL TAXI SERVICE"
      title="Local Taxi Service in Haridwar"
      description="Comfortable and dependable local taxi services for railway station transfers, hotel pickups, sightseeing and city travel in Haridwar."
      cta="Get a Free Quote"
      introHeading="A local taxi for everyday Haridwar travel"
      intro="Arrange a pickup from Haridwar Railway Station or the bus stand, travel between your hotel and local stops, or plan a visit to Har Ki Pauri, Mansa Devi, Chandi Devi, and nearby Ganga Ghats. Share your schedule and stops so the trip can be discussed around your needs."
      benefitsHeading="Local travel planned around your day"
      benefits={[
        "Request railway station, bus stand, or hotel transfers.",
        "Plan a local sightseeing trip with the stops that matter to you.",
        "Discuss vehicle options for family, business, or individual travel.",
        "Ask about travel between Haridwar city locations and nearby areas.",
      ]}
      useCasesHeading="Common local taxi journeys"
      useCases={[
        "Railway station pickup",
        "Haridwar Bus Stand",
        "Hotel transfers",
        "Har Ki Pauri",
        "Mansa Devi",
        "Chandi Devi",
        "Ganga Ghat visits",
        "Family and business travel",
      ]}
      optionsHeading="Other taxi services"
      options={[
        { label: "Outstation taxi from Haridwar", href: "/taxi-services/outstation" },
        { label: "One-way taxi service", href: "/taxi-services/one-way" },
        { label: "Round-trip taxi service", href: "/taxi-services/round-trip" },
        { label: "All taxi services", href: "/taxi-services" },
        { label: "Taxi and travel destinations", href: "/destinations" },
        { label: "Contact Pal Travels", href: "/contact" },
      ]}
      relatedHeading="Continue planning"
      relatedLinks={[
        { label: "Taxi services", href: "/taxi-services" },
        { label: "Outstation taxi", href: "/taxi-services/outstation" },
        { label: "One-way taxi", href: "/taxi-services/one-way" },
        { label: "Round-trip taxi", href: "/taxi-services/round-trip" },
        { label: "Contact", href: "/contact" },
      ]}
      callCta
      faqs={[
        {
          question: "Do you provide local taxi service in Haridwar?",
          answer:
            "Yes. Contact Pal Travels with your pickup point, destination, date, and travel needs to discuss a local taxi.",
        },
        {
          question: "Can I book a taxi from Haridwar Railway Station?",
          answer:
            "You can enquire about a railway station pickup. Share your arrival time and destination when requesting a quote.",
        },
        {
          question: "Can I book a taxi for local sightseeing?",
          answer:
            "You can ask about a sightseeing trip to places such as Har Ki Pauri, Mansa Devi, Chandi Devi, and Ganga Ghats. Confirm your stops and schedule with the team.",
        },
        {
          question: "How can I get a local taxi quote?",
          answer:
            "Use the booking form or contact Pal Travels by phone or WhatsApp with your route, date, vehicle preference, and other requirements. Fare depends on vehicle type, distance, and travel requirements.",
        },
      ]}
    />
  );
}
