import TaxiServiceLanding from "@/components/TaxiServiceLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Outstation Taxi from Haridwar | One Way & Round Trip | Pal Travels",
  description:
    "Book an outstation taxi from Haridwar for comfortable one-way and round-trip travel to Delhi, Rishikesh, Dehradun, Mussoorie, Nainital and other destinations.",
  path: "/taxi-services/outstation",
  absoluteTitle: true,
});

export default function OutstationTaxiPage() {
  return (
    <TaxiServiceLanding
      eyebrow="OUTSTATION TAXI"
      title="Outstation Taxi Service from Haridwar"
      description="Travel comfortably from Haridwar to nearby cities and popular destinations with dependable taxi service."
      cta="Get a Free Quote"
      introHeading="Plan an outstation journey from Haridwar"
      intro="Pal Travels provides outstation taxi services from Haridwar for intercity journeys and longer trips. Discuss a one-way transfer, return travel, or a multi-day itinerary with the team. Destinations may include Delhi, Rishikesh, Dehradun, Mussoorie, Nainital, Jim Corbett, Chandigarh, Shimla, Manali, Agra, Rajasthan, and Kashmir; confirm your route and requirements when enquiring."
      benefitsHeading="Choose a trip format that fits"
      benefits={[
        "Discuss one-way and round-trip travel from Haridwar.",
        "Share your route, dates, stops, and passenger requirements before requesting a quote.",
        "Ask about vehicle categories including Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller.",
        "For longer journeys, discuss timing and overnight or multi-day plans with the team.",
      ]}
      useCasesHeading="Outstation travel for different plans"
      useCases={[
        "Intercity transfers",
        "Airport and station travel",
        "Family trips",
        "Weekend journeys",
        "Hill destinations",
        "Pilgrimage travel",
        "Multi-day tours",
        "Group travel",
      ]}
      optionsHeading="Compare one-way, return, and tour options"
      options={[
        { label: "One-way taxi from Haridwar", href: "/taxi-services/one-way" },
        { label: "Round-trip taxi from Haridwar", href: "/taxi-services/round-trip" },
        { label: "Explore Uttarakhand destinations", href: "/destinations" },
        { label: "Tour packages from Haridwar", href: "/tour-packages" },
        { label: "Chardham Yatra travel", href: "/chardham-yatra" },
        { label: "Contact Pal Travels", href: "/contact" },
      ]}
      routes={[
        { from: "Haridwar", to: "Delhi", price: "₹2,500" },
        { from: "Delhi", to: "Haridwar", price: "₹2,500" },
        { from: "Haridwar", to: "Rishikesh", price: "₹1,200" },
        { from: "Haridwar", to: "Dehradun", price: "₹1,800" },
        { from: "Haridwar", to: "Mussoorie", price: "₹2,500" },
        { from: "Haridwar", to: "Nainital", price: "₹5,500" },
        { from: "Delhi", to: "Nainital", price: "₹5,500" },
        { from: "Delhi", to: "Rishikesh", price: "₹3,000" },
        { from: "Delhi", to: "Mussoorie", price: "₹4,500" },
        { from: "Haridwar", to: "Jim Corbett", price: "₹5,000" },
      ]}
      relatedHeading="Explore more travel options"
      relatedLinks={[
        { label: "One-way taxi", href: "/taxi-services/one-way" },
        { label: "Round-trip taxi", href: "/taxi-services/round-trip" },
        { label: "Destinations", href: "/destinations" },
        { label: "Tour packages", href: "/tour-packages" },
        { label: "Chardham Yatra", href: "/chardham-yatra" },
        { label: "Contact", href: "/contact" },
      ]}
      callCta
      faqs={[
        {
          question: "Which destinations can I travel to from Haridwar?",
          answer:
            "Commonly discussed destinations include Delhi, Rishikesh, Dehradun, Mussoorie, Nainital, and other locations. Share your route so the team can confirm arrangements.",
        },
        {
          question: "Can I book an outstation taxi for multiple days?",
          answer:
            "You can enquire about multi-day travel. Include your dates, destinations, planned stops, and return details when contacting Pal Travels.",
        },
        {
          question: "Do you provide one-way and round-trip taxis?",
          answer:
            "You can request either a one-way transfer or a round-trip journey. The suitable option depends on your itinerary and travel requirements.",
        },
        {
          question: "How is the fare calculated?",
          answer:
            "Fare depends on vehicle type, distance, dates, route, trip type, and other travel requirements. Any starting fares shown are indicative, not guaranteed fixed fares.",
        },
      ]}
    />
  );
}
