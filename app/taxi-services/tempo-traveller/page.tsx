import TaxiServiceLanding from "@/components/TaxiServiceLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Tempo Traveller in Haridwar | Group Travel & Tours | Pal Travels",
  description:
    "Book a Tempo Traveller in Haridwar for family trips, group tours, Chardham Yatra, sightseeing and outstation travel.",
  path: "/taxi-services/tempo-traveller",
  absoluteTitle: true,
});

export default function TempoTravellerPage() {
  return (
    <TaxiServiceLanding
      eyebrow="GROUP TRAVEL"
      title="Tempo Traveller in Haridwar"
      description="Travel together comfortably with a Tempo Traveller for family trips, group tours, sightseeing and pilgrimage journeys."
      cta="Book a Tempo Traveller"
      introHeading="Group travel from Haridwar"
      intro="A Tempo Traveller can be considered for journeys where a group prefers to travel together. Contact Pal Travels with your route, dates, passenger and luggage requirements, and trip duration. Vehicle configuration can be selected according to group requirements."
      benefitsHeading="Coordinate your group journey"
      benefits={[
        "Discuss one vehicle option for a family or group itinerary.",
        "Share your route, planned stops, travel dates, and trip duration.",
        "Ask about local sightseeing, outstation, and multi-day travel.",
        "Vehicle configuration can be selected according to group requirements.",
      ]}
      useCasesHeading="Group travel occasions"
      useCases={[
        "Family tours",
        "Group tours",
        "Chardham Yatra",
        "Uttarakhand sightseeing",
        "Corporate group travel",
        "Wedding and event travel",
        "Multi-day tours",
      ]}
      optionsHeading="Plan a group trip"
      options={[
        { label: "Explore tour packages", href: "/tour-packages" },
        { label: "Chardham Yatra travel", href: "/chardham-yatra" },
        { label: "Browse destinations", href: "/destinations" },
        { label: "Other taxi services", href: "/taxi-services" },
        { label: "Contact Pal Travels", href: "/contact" },
      ]}
      relatedHeading="Explore group travel ideas"
      relatedLinks={[
        { label: "Tour packages", href: "/tour-packages" },
        { label: "Chardham Yatra", href: "/chardham-yatra" },
        { label: "Destinations", href: "/destinations" },
        { label: "Contact", href: "/contact" },
      ]}
      faqs={[
        {
          question: "What is a Tempo Traveller suitable for?",
          answer:
            "It may suit family trips, group tours, sightseeing, pilgrimage journeys, and other travel where a group wants to plan transport together.",
        },
        {
          question: "Can I use a Tempo Traveller for Chardham Yatra?",
          answer:
            "You can enquire about a Tempo Traveller for Chardham travel. Share your route, dates, group requirements, and itinerary for discussion.",
        },
        {
          question: "Can I book it for multiple days?",
          answer:
            "You can ask about multi-day travel. Include your dates, destinations, planned stops, and trip duration when contacting the team.",
        },
        {
          question: "How is the vehicle selected for group size?",
          answer:
            "Vehicle configuration can be selected according to group requirements. Share passenger and luggage details so the team can discuss an appropriate option.",
        },
      ]}
    />
  );
}
