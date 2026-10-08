import TaxiServiceLanding from "@/components/TaxiServiceLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "One-Way Taxi from Haridwar | Affordable One Way Cab | Pal Travels",
  description:
    "Book a one-way taxi from Haridwar for convenient intercity travel to Delhi, Rishikesh, Dehradun, Mussoorie, Nainital and other destinations.",
  path: "/taxi-services/one-way",
  absoluteTitle: true,
});

export default function OneWayTaxiPage() {
  return (
    <TaxiServiceLanding
      eyebrow="ONE-WAY TAXI"
      title="One-Way Taxi Service from Haridwar"
      description="Book a convenient one-way taxi from Haridwar for hassle-free intercity travel without booking a return journey."
      cta="Get One-Way Quote"
      introHeading="Point-to-point travel without a return booking"
      intro="A one-way taxi is for a journey from your pickup point to a destination without arranging the return leg as part of the same taxi booking. It can suit railway or airport transfers, intercity travel, family journeys, business travel, and longer-distance drop-offs. Share the route and travel date so the team can discuss your requirements."
      benefitsHeading="A direct option for your onward journey"
      benefits={[
        "Plan point-to-point travel between cities or transfer locations.",
        "No need to include a return taxi booking if you do not need one.",
        "Share pickup and drop-off details to request a route-specific quote.",
        "Discuss vehicle categories based on passenger and luggage requirements.",
      ]}
      useCasesHeading="When a one-way trip may fit"
      useCases={[
        "Railway station transfers",
        "Airport transfers",
        "Intercity travel",
        "Family journeys",
        "Business travel",
        "Long-distance drop-offs",
      ]}
      optionsHeading="Common one-way routes"
      options={[
        { label: "Haridwar to Delhi", href: "/contact#booking" },
        { label: "Delhi to Haridwar", href: "/contact#booking" },
        { label: "Haridwar to Dehradun", href: "/contact#booking" },
        { label: "Haridwar to Rishikesh", href: "/contact#booking" },
        { label: "Haridwar to Mussoorie", href: "/contact#booking" },
        { label: "Haridwar to Nainital", href: "/contact#booking" },
      ]}
      relatedHeading="Compare travel options"
      relatedLinks={[
        { label: "Outstation taxi", href: "/taxi-services/outstation" },
        { label: "Round-trip taxi", href: "/taxi-services/round-trip" },
        { label: "Popular destinations", href: "/destinations" },
        { label: "Contact", href: "/contact" },
      ]}
      faqs={[
        {
          question: "What is a one-way taxi?",
          answer:
            "A one-way taxi covers travel from a pickup point to a destination without including a return journey in that booking.",
        },
        {
          question: "Can I book a one-way taxi from Haridwar to Delhi?",
          answer:
            "You can enquire about a Haridwar to Delhi one-way trip. Share your pickup, date, destination, and passenger details to request a quote.",
        },
        {
          question: "Is return booking required?",
          answer:
            "No. A one-way trip does not require you to book a return taxi. If you need return travel, ask about a round-trip option.",
        },
        {
          question: "How can I get a fare quote?",
          answer:
            "Use the booking form or contact Pal Travels with your route, travel date, and vehicle requirements. Fare depends on distance, vehicle type, and trip details.",
        },
      ]}
    />
  );
}
