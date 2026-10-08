import TaxiServiceLanding from "@/components/TaxiServiceLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Round Trip Taxi from Haridwar | Return Cab Service | Pal Travels",
  description:
    "Book a round-trip taxi from Haridwar with Pal Travels for comfortable return journeys, sightseeing trips, family travel and outstation tours.",
  path: "/taxi-services/round-trip",
  absoluteTitle: true,
});

export default function RoundTripTaxiPage() {
  return (
    <TaxiServiceLanding
      eyebrow="ROUND-TRIP TAXI"
      title="Round-Trip Taxi Service from Haridwar"
      description="Plan comfortable return journeys, sightseeing trips and family travel with a dependable round-trip taxi."
      cta="Get a Round-Trip Quote"
      introHeading="Plan the onward and return parts together"
      intro="A round-trip taxi can be arranged for a return journey, a sightseeing day, an outstation tour, or a multi-day itinerary. Share where you plan to go, how long you expect to travel, and any stops or pickup timing so the trip details can be discussed before booking."
      benefitsHeading="One itinerary for your return travel"
      benefits={[
        "Discuss a return journey using the same vehicle, subject to confirmed arrangements.",
        "Coordinate pickup, return timing, and planned stops with the team.",
        "Useful for sightseeing, family trips, and multi-day travel plans.",
        "Ask about vehicle categories suited to your group and luggage.",
      ]}
      useCasesHeading="Journeys with a return leg"
      useCases={[
        "Family trips",
        "Weekend travel",
        "Local sightseeing",
        "Outstation tours",
        "Multi-day journeys",
        "Pilgrimage travel",
      ]}
      optionsHeading="Plan a trip around your itinerary"
      options={[
        { label: "Outstation taxi from Haridwar", href: "/taxi-services/outstation" },
        { label: "Explore tour packages", href: "/tour-packages" },
        { label: "Browse destinations", href: "/destinations" },
        { label: "Chardham Yatra travel", href: "/chardham-yatra" },
        { label: "Contact Pal Travels", href: "/contact" },
      ]}
      relatedHeading="Explore related travel"
      relatedLinks={[
        { label: "Outstation taxi", href: "/taxi-services/outstation" },
        { label: "Tour packages", href: "/tour-packages" },
        { label: "Destinations", href: "/destinations" },
        { label: "Chardham Yatra", href: "/chardham-yatra" },
        { label: "Contact", href: "/contact" },
      ]}
      faqs={[
        {
          question: "What is included in a round-trip taxi booking?",
          answer:
            "A round-trip enquiry covers the planned outward and return travel details. Confirm the route, schedule, stops, waiting time, and vehicle arrangements with Pal Travels before booking.",
        },
        {
          question: "Can I use a round-trip taxi for sightseeing?",
          answer:
            "You can enquire about sightseeing travel with return transportation. Share the places you plan to visit and your preferred schedule.",
        },
        {
          question: "Can I book a multi-day trip?",
          answer:
            "You can discuss a multi-day itinerary with the team. Provide your dates, destinations, route, and overnight plan when requesting a quote.",
        },
        {
          question: "How can I request a quote?",
          answer:
            "Submit your pickup, destination, travel date, and passenger details through the booking form, or contact Pal Travels by phone or WhatsApp. Fare depends on trip requirements.",
        },
      ]}
    />
  );
}
