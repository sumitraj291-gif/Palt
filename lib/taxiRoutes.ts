export type TaxiRouteData = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  origin: string;
  destination: string;
  eyebrow: string;
  heroText: string;
  introHeading: string;
  introduction: string;
  useCases: string[];
  taxiOptions: string[];
  fare: string;
  fareDisclaimer: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  faqs: { question: string; answer: string }[];
  relatedRoutes: { label: string; href: string }[];
};

const fareDisclaimer =
  "Indicative starting fare only. Final fare depends on vehicle type, travel date, route, trip duration, and travel requirements. Travel time can vary depending on traffic, weather, road conditions, pickup location, and route.";

const mountainsImage =
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80";
const rishikeshImage =
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80";
const cityImage =
  "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=80";
const corbettImage =
  "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80";

export const taxiRoutes: Record<string, TaxiRouteData> = {
  "haridwar-to-delhi": {
    slug: "haridwar-to-delhi",
    title: "Haridwar to Delhi Taxi | Cab Service & One Way Taxi | Pal Travels",
    description: "Book a taxi from Haridwar to Delhi with Pal Travels for comfortable one-way and round-trip travel. Get a quote for your journey.",
    h1: "Haridwar to Delhi Taxi",
    origin: "Haridwar",
    destination: "Delhi",
    eyebrow: "OUTSTATION TAXI",
    heroText: "Book a comfortable taxi from Haridwar to Delhi for one-way, round-trip, and planned travel.",
    introHeading: "Plan your journey from Haridwar to Delhi",
    introduction: "Arrange a point-to-point transfer or discuss a return trip between Haridwar and Delhi. This route can suit airport and railway travel, business schedules, family visits, and onward connections. Delhi has multiple pickup and drop locations, so confirm the exact address or terminal when requesting a quote.",
    useCases: ["Airport travel", "Railway travel", "Business travel", "Family travel", "One-way transfers", "Round trips"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹2,500",
    fareDisclaimer,
    highlights: ["Confirm the precise Haridwar pickup point and Delhi destination before travel.", "Share airport, railway station, hotel, or other address details when enquiring.", "One-way and return journeys can be discussed according to your itinerary."],
    image: cityImage,
    imageAlt: "Open road representing intercity taxi travel",
    faqs: [
      { question: "What is the starting fare for a Haridwar to Delhi taxi?", answer: "The indicative starting fare shown is ₹2,500. Final fare depends on vehicle type, travel date, route, trip duration, and your requirements." },
      { question: "Can I book a one-way taxi from Haridwar to Delhi?", answer: "Yes. Contact Pal Travels with your pickup, Delhi drop location, travel date, and vehicle preference to discuss a one-way trip." },
      { question: "Can I book a round-trip taxi?", answer: "You can enquire about a return journey. Share your return date, stops, and schedule when requesting a quote." },
      { question: "Which vehicle options are available?", answer: "Ask about Sedan Taxi, SUV Taxi, Innova, Innova Crysta, or Tempo Traveller. Suitability depends on group and luggage requirements." },
      { question: "How can I get the fare for my exact route?", answer: "Share exact pickup and drop addresses, travel date, trip type, and passenger requirements through the booking form or by phone/WhatsApp." },
    ],
    relatedRoutes: [
      { label: "Delhi to Haridwar taxi", href: "/taxi-services/delhi-to-haridwar" },
      { label: "Haridwar to Dehradun taxi", href: "/taxi-services/haridwar-to-dehradun" },
      { label: "Haridwar to Rishikesh taxi", href: "/taxi-services/haridwar-to-rishikesh" },
    ],
  },
  "delhi-to-haridwar": {
    slug: "delhi-to-haridwar",
    title: "Delhi to Haridwar Taxi | One Way & Round Trip Cab | Pal Travels",
    description: "Book a taxi from Delhi to Haridwar with Pal Travels for comfortable one-way and round-trip travel. Get a quote for your journey.",
    h1: "Delhi to Haridwar Taxi",
    origin: "Delhi",
    destination: "Haridwar",
    eyebrow: "OUTSTATION TAXI",
    heroText: "Arrange a Delhi to Haridwar cab for pilgrimage travel, station or hotel pickup, and return journeys.",
    introHeading: "Travel from Delhi to Haridwar",
    introduction: "Plan a direct transfer to Haridwar for pilgrimage travel, a family visit, or onward travel. Pickup may be discussed from a railway station, hotel, or another Delhi location. Share the exact pickup address and whether you need a one-way or round-trip arrangement.",
    useCases: ["Pilgrimage travel", "Railway station pickup", "Hotel transfers", "Family travel", "One-way transfers", "Round trips"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹2,500",
    fareDisclaimer,
    highlights: ["Confirm your Delhi pickup address or station details.", "Share your Haridwar destination, including hotel or railway station where relevant.", "Return transportation can be discussed when you share your itinerary."],
    image: cityImage,
    imageAlt: "Open road representing intercity taxi travel",
    faqs: [
      { question: "Can I book a one-way taxi from Delhi to Haridwar?", answer: "Yes. Share your Delhi pickup location, Haridwar destination, and travel date to request a one-way quote." },
      { question: "Can I request airport or railway station pickup?", answer: "You can enquire about pickup from your airport, railway station, hotel, or another address. Provide exact details when booking." },
      { question: "Are round-trip taxis available?", answer: "You can discuss a return journey with Pal Travels. Share the dates and schedule for both legs." },
      { question: "Which vehicle options are available?", answer: "Available categories include Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller. Confirm the right configuration for your group." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Delhi taxi", href: "/taxi-services/haridwar-to-delhi" },
      { label: "Delhi to Rishikesh taxi", href: "/taxi-services/delhi-to-rishikesh" },
      { label: "Delhi to Nainital taxi", href: "/taxi-services/delhi-to-nainital" },
    ],
  },
  "haridwar-to-rishikesh": {
    slug: "haridwar-to-rishikesh",
    title: "Haridwar to Rishikesh Taxi | Cab Service | Pal Travels",
    description: "Book a taxi from Haridwar to Rishikesh for comfortable local and outstation travel with Pal Travels. Get a quote for your journey.",
    h1: "Haridwar to Rishikesh Taxi",
    origin: "Haridwar",
    destination: "Rishikesh",
    eyebrow: "LOCAL & OUTSTATION TAXI",
    heroText: "Travel between Haridwar and Rishikesh for hotel transfers, local sightseeing, and family or weekend plans.",
    introHeading: "Connect Haridwar with Rishikesh",
    introduction: "A taxi between Haridwar and Rishikesh can help with hotel transfers, family outings, Ganga-related visits, and weekend travel. Tell us your pickup point, where you plan to go in Rishikesh, and whether you need a single transfer or a return trip.",
    useCases: ["Local sightseeing", "Ganga-related travel", "Family trips", "Weekend travel", "Hotel transfers", "Short-distance taxi needs"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹1,200",
    fareDisclaimer,
    highlights: ["Confirm the exact Haridwar pickup and Rishikesh drop location.", "Share hotel, ashram, ghat, or other destination details when enquiring.", "If you plan several stops, include them in your trip requirements."],
    image: rishikeshImage,
    imageAlt: "Rishikesh riverside and foothill scenery",
    faqs: [
      { question: "Can I book a taxi for local sightseeing in Rishikesh?", answer: "You can discuss a transfer with sightseeing stops. Share the places you want to visit and your schedule when requesting a quote." },
      { question: "Can I book a one-way taxi?", answer: "Yes. Tell Pal Travels your pickup and drop locations and travel date to enquire about one-way travel." },
      { question: "What vehicle options are available?", answer: "Ask about Sedan Taxi, SUV Taxi, Innova, Innova Crysta, or Tempo Traveller based on group and luggage requirements." },
      { question: "How can I request a quote?", answer: "Send your pickup, destination, date, trip type, and stop details via the booking form, phone, or WhatsApp." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Dehradun taxi", href: "/taxi-services/haridwar-to-dehradun" },
      { label: "Haridwar to Mussoorie taxi", href: "/taxi-services/haridwar-to-mussoorie" },
      { label: "Delhi to Rishikesh taxi", href: "/taxi-services/delhi-to-rishikesh" },
    ],
  },
  "haridwar-to-dehradun": {
    slug: "haridwar-to-dehradun",
    title: "Haridwar to Dehradun Taxi | One Way & Round Trip Cab | Pal Travels",
    description: "Book a taxi from Haridwar to Dehradun with Pal Travels for convenient one-way and round-trip travel.",
    h1: "Haridwar to Dehradun Taxi",
    origin: "Haridwar",
    destination: "Dehradun",
    eyebrow: "OUTSTATION TAXI",
    heroText: "Arrange a taxi between Haridwar and Dehradun for airport, railway, business, education, and family travel.",
    introHeading: "Plan a Haridwar to Dehradun transfer",
    introduction: "Travel between Haridwar and Dehradun for airport or railway connections, business appointments, education-related visits, or family plans. Confirm the exact pickup and drop location, especially for airport or station travel, and let us know if you need a return taxi.",
    useCases: ["Airport travel", "Railway station travel", "Business travel", "Education-related travel", "Family travel", "One-way and return trips"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹1,800",
    fareDisclaimer,
    highlights: ["Provide the airport, station, campus, office, or hotel address for pickup/drop.", "One-way transfers and return journeys can be discussed.", "Add any planned stops or timing needs to your enquiry."],
    image: mountainsImage,
    imageAlt: "Mountain and foothill scenery in Uttarakhand",
    faqs: [
      { question: "Can I book an airport taxi from Haridwar to Dehradun?", answer: "You can enquire about airport travel. Provide your flight schedule and exact pickup details so arrangements can be discussed." },
      { question: "Can I book a railway station transfer?", answer: "Yes, share your station pickup or drop requirements and travel date when requesting a quote." },
      { question: "Are one-way and return trips available?", answer: "You can ask about either a one-way transfer or a round trip based on your plans." },
      { question: "Which vehicles can I request?", answer: "Pal Travels can discuss Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller options." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Rishikesh taxi", href: "/taxi-services/haridwar-to-rishikesh" },
      { label: "Haridwar to Mussoorie taxi", href: "/taxi-services/haridwar-to-mussoorie" },
      { label: "Haridwar to Delhi taxi", href: "/taxi-services/haridwar-to-delhi" },
    ],
  },
  "haridwar-to-mussoorie": {
    slug: "haridwar-to-mussoorie",
    title: "Haridwar to Mussoorie Taxi | Cab Service & Tour | Pal Travels",
    description: "Travel from Haridwar to Mussoorie with Pal Travels. Book a comfortable taxi for one-way, round-trip and sightseeing travel.",
    h1: "Haridwar to Mussoorie Taxi",
    origin: "Haridwar",
    destination: "Mussoorie",
    eyebrow: "HILL STATION TAXI",
    heroText: "Plan a hill journey from Haridwar to Mussoorie for a family holiday, weekend trip, or sightseeing visit.",
    introHeading: "Travel from Haridwar toward Mussoorie",
    introduction: "Plan a one-way transfer or return journey for a Mussoorie holiday. Your booking details can include hotel transfers, sightseeing plans, and connections with other Uttarakhand destinations. Hill road and weather conditions can vary, so allow flexibility in your travel schedule.",
    useCases: ["Hill travel", "Family holidays", "Weekend trips", "Sightseeing", "Hotel transfers", "Multi-day Uttarakhand travel"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹2,500",
    fareDisclaimer,
    highlights: ["Confirm your Haridwar pickup and Mussoorie accommodation or drop point.", "Tell us if you want sightseeing or a return trip.", "Travel time can vary with traffic, weather, road, and route conditions."],
    image: mountainsImage,
    imageAlt: "Himalayan mountain scenery near Mussoorie",
    faqs: [
      { question: "Can I book a one-way taxi from Haridwar to Mussoorie?", answer: "Yes. Share your travel date, pickup, and Mussoorie drop location to request a one-way quote." },
      { question: "Can I plan sightseeing during my Mussoorie trip?", answer: "You can discuss sightseeing and transfers when enquiring. Share the stops and timing you have in mind." },
      { question: "Is a round-trip taxi available?", answer: "Ask about return travel and provide your planned return date and pickup arrangements." },
      { question: "What vehicle options are available for a family?", answer: "Discuss Sedan Taxi, SUV Taxi, Innova, Innova Crysta, or Tempo Traveller based on group and luggage requirements." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Dehradun taxi", href: "/taxi-services/haridwar-to-dehradun" },
      { label: "Haridwar to Nainital taxi", href: "/taxi-services/haridwar-to-nainital" },
      { label: "Uttarakhand tour packages", href: "/tour-packages/uttarakhand" },
    ],
  },
  "haridwar-to-nainital": {
    slug: "haridwar-to-nainital",
    title: "Haridwar to Nainital Taxi | One Way & Round Trip Cab | Pal Travels",
    description: "Book a taxi from Haridwar to Nainital for comfortable family trips, sightseeing and outstation travel with Pal Travels.",
    h1: "Haridwar to Nainital Taxi",
    origin: "Haridwar",
    destination: "Nainital",
    eyebrow: "HILL STATION TAXI",
    heroText: "Plan a Haridwar to Nainital journey for a family holiday, mountain break, sightseeing, or a multi-day trip.",
    introHeading: "Arrange travel from Haridwar to Nainital",
    introduction: "Nainital trips often involve hill travel and time for local sightseeing. Share your planned dates, accommodation drop point, group size, and whether you need a return taxi. If the journey includes other destinations, include them in your route enquiry so the itinerary can be discussed together.",
    useCases: ["Family holidays", "Mountain travel", "Weekend trips", "Sightseeing", "Multi-day travel"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹5,500",
    fareDisclaimer,
    highlights: ["Confirm the exact Nainital drop point and any planned stops.", "Mention your return date or multi-day itinerary when requesting a quote.", "Allow schedule flexibility for changing hill road and weather conditions."],
    image: mountainsImage,
    imageAlt: "Mountain landscape in Uttarakhand",
    faqs: [
      { question: "Can I book a family taxi from Haridwar to Nainital?", answer: "You can discuss vehicle options for your family and luggage needs. Share the group details when requesting a quote." },
      { question: "Can I include sightseeing or multiple days?", answer: "Yes, you can discuss sightseeing stops and a multi-day travel plan with Pal Travels." },
      { question: "Can I book a one-way or round-trip taxi?", answer: "Both trip types can be discussed. Provide your return plans and dates if you need a round trip." },
      { question: "How is the fare confirmed?", answer: "The displayed starting fare is indicative. Final fare depends on vehicle type, date, route, trip duration, and your requirements." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Mussoorie taxi", href: "/taxi-services/haridwar-to-mussoorie" },
      { label: "Delhi to Nainital taxi", href: "/taxi-services/delhi-to-nainital" },
      { label: "Uttarakhand tour packages", href: "/tour-packages/uttarakhand" },
    ],
  },
  "delhi-to-nainital": {
    slug: "delhi-to-nainital",
    title: "Delhi to Nainital Taxi | One Way & Round Trip Cab | Pal Travels",
    description: "Book a taxi from Delhi to Nainital with Pal Travels for comfortable one-way, round-trip and family travel.",
    h1: "Delhi to Nainital Taxi",
    origin: "Delhi",
    destination: "Nainital",
    eyebrow: "HILL STATION TAXI",
    heroText: "Arrange Delhi to Nainital travel for a family vacation, weekend break, or a longer hill journey.",
    introHeading: "Plan a Delhi to Nainital hill journey",
    introduction: "A taxi can be discussed for a one-way journey, return travel, or a multi-day Nainital trip. Share your Delhi pickup point, accommodation drop location, dates, and planned stops. Hill travel schedules can be affected by traffic, weather, and road conditions, so travel time is not guaranteed.",
    useCases: ["Family vacations", "Weekend trips", "Hill travel", "One-way journeys", "Round trips", "Multi-day travel"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹5,500",
    fareDisclaimer,
    highlights: ["Provide your exact Delhi pickup address and Nainital destination.", "Tell us whether you need a one-way drop or return journey.", "Include dates and any planned stops for a route-specific quote."],
    image: mountainsImage,
    imageAlt: "Himalayan foothill travel scenery",
    faqs: [
      { question: "Can I book a one-way taxi from Delhi to Nainital?", answer: "Yes. Share your pickup, drop point, date, and group requirements to request a one-way quote." },
      { question: "Can I book a round trip for a weekend?", answer: "You can enquire about return travel. Include your return date and schedule when contacting Pal Travels." },
      { question: "Which vehicle options can I request?", answer: "Ask about Sedan Taxi, SUV Taxi, Innova, Innova Crysta, or Tempo Traveller according to your group and luggage needs." },
      { question: "Is the displayed starting fare fixed?", answer: "No. It is an indicative starting fare. Final fare varies according to vehicle, date, route, trip duration, and requirements." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Nainital taxi", href: "/taxi-services/haridwar-to-nainital" },
      { label: "Delhi to Mussoorie taxi", href: "/taxi-services/delhi-to-mussoorie" },
      { label: "Uttarakhand tour packages", href: "/tour-packages/uttarakhand" },
    ],
  },
  "delhi-to-rishikesh": {
    slug: "delhi-to-rishikesh",
    title: "Delhi to Rishikesh Taxi | One Way & Round Trip Cab | Pal Travels",
    description: "Book a taxi from Delhi to Rishikesh for comfortable travel with Pal Travels. Get a quote for one-way or round-trip journeys.",
    h1: "Delhi to Rishikesh Taxi",
    origin: "Delhi",
    destination: "Rishikesh",
    eyebrow: "OUTSTATION TAXI",
    heroText: "Plan travel from Delhi to Rishikesh for a weekend, family visit, spiritual trip, or onward Uttarakhand journey.",
    introHeading: "Travel from Delhi to Rishikesh",
    introduction: "Arrange a transfer for a weekend visit, family travel, or spiritual journey. Rishikesh has multiple hotels, ashrams, and riverside areas, so confirm your exact drop point. If you expect local sightseeing or a return trip, include those plans when requesting a quote.",
    useCases: ["Weekend trips", "Family travel", "Spiritual travel", "Adventure-oriented trips", "One-way transfers", "Round trips"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹3,000",
    fareDisclaimer,
    highlights: ["Confirm your Delhi pickup location and exact Rishikesh destination.", "Share whether your plans include local transfers or a return journey.", "Schedule can vary with traffic, weather, route, and road conditions."],
    image: rishikeshImage,
    imageAlt: "Riverside and mountain scenery around Rishikesh",
    faqs: [
      { question: "Can I book a weekend taxi from Delhi to Rishikesh?", answer: "You can request a quote for a weekend trip. Share dates, pickup, destination, and whether you need return travel." },
      { question: "Can I book a one-way taxi?", answer: "Yes. Send your Delhi pickup and Rishikesh drop details to enquire about one-way travel." },
      { question: "Can I arrange round-trip travel?", answer: "You can discuss a round trip with Pal Travels. Include your return date and any local travel needs." },
      { question: "Which taxi categories are available?", answer: "Available categories include Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Rishikesh taxi", href: "/taxi-services/haridwar-to-rishikesh" },
      { label: "Delhi to Haridwar taxi", href: "/taxi-services/delhi-to-haridwar" },
      { label: "Uttarakhand tour packages", href: "/tour-packages/uttarakhand" },
    ],
  },
  "delhi-to-mussoorie": {
    slug: "delhi-to-mussoorie",
    title: "Delhi to Mussoorie Taxi | One Way & Round Trip Cab | Pal Travels",
    description: "Book a taxi from Delhi to Mussoorie with Pal Travels for comfortable one-way, round-trip and sightseeing travel.",
    h1: "Delhi to Mussoorie Taxi",
    origin: "Delhi",
    destination: "Mussoorie",
    eyebrow: "HILL STATION TAXI",
    heroText: "Plan a Delhi to Mussoorie cab for a hill holiday, family trip, sightseeing, or multi-day journey.",
    introHeading: "Plan your Delhi to Mussoorie trip",
    introduction: "Discuss a one-way transfer, return travel, or a multi-day visit to Mussoorie. Share the pickup address in Delhi, your accommodation or drop location, and any sightseeing plans. Since traffic and hill road conditions change, plan with flexibility rather than relying on a guaranteed travel duration.",
    useCases: ["Hill holidays", "Family travel", "Weekend trips", "Sightseeing", "Hotel transfers", "Multi-day journeys"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹4,500",
    fareDisclaimer,
    highlights: ["Provide exact Delhi pickup and Mussoorie drop details.", "Share whether you need sightseeing transfers or a return trip.", "Allow for variable traffic, weather, and hill road conditions."],
    image: mountainsImage,
    imageAlt: "Mountain road and Himalayan landscape",
    faqs: [
      { question: "Can I book a one-way taxi from Delhi to Mussoorie?", answer: "Yes. Contact Pal Travels with your pickup, drop location, date, and group requirements." },
      { question: "Can sightseeing be included?", answer: "You can discuss sightseeing and local transfers. Share the places and timing you are considering." },
      { question: "Are round-trip taxis available?", answer: "You can request a round-trip quote by providing the return date and your travel schedule." },
      { question: "How much does the route cost?", answer: "The displayed ₹4,500 is an indicative starting fare only. Final fare depends on vehicle type, date, route, duration, and requirements." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Mussoorie taxi", href: "/taxi-services/haridwar-to-mussoorie" },
      { label: "Delhi to Nainital taxi", href: "/taxi-services/delhi-to-nainital" },
      { label: "Uttarakhand tour packages", href: "/tour-packages/uttarakhand" },
    ],
  },
  "haridwar-to-jim-corbett": {
    slug: "haridwar-to-jim-corbett",
    title: "Haridwar to Jim Corbett Taxi | Cab Service | Pal Travels",
    description: "Book a taxi from Haridwar to Jim Corbett with Pal Travels for family trips, sightseeing and comfortable outstation travel.",
    h1: "Haridwar to Jim Corbett Taxi",
    origin: "Haridwar",
    destination: "Jim Corbett",
    eyebrow: "OUTSTATION TAXI",
    heroText: "Arrange Haridwar to Jim Corbett area travel for a family break, nature outing, or multi-day trip.",
    introHeading: "Travel from Haridwar to the Corbett area",
    introduction: "Discuss a taxi transfer from Haridwar for a family trip, weekend nature travel, or a longer Corbett-area visit. Share your destination or accommodation, dates, and any planned activities. Safari planning can be discussed according to availability and travel requirements; no sightings, zones, permits, or availability are guaranteed.",
    useCases: ["Family trips", "Weekend nature travel", "Multi-day trips", "Corbett-area travel", "Taxi transfers"],
    taxiOptions: ["Sedan Taxi", "SUV Taxi", "Innova", "Innova Crysta", "Tempo Traveller"],
    fare: "₹5,000",
    fareDisclaimer,
    highlights: ["Confirm your exact Corbett-area destination and pickup details.", "Share your dates and whether you need return or multi-day travel.", "Safari planning can be discussed according to availability and travel requirements."],
    image: corbettImage,
    imageAlt: "Forest and wildlife habitat in a natural landscape",
    faqs: [
      { question: "Can I plan a family trip from Haridwar to Jim Corbett?", answer: "Yes. Share your dates, group details, destination, and trip length to discuss taxi arrangements." },
      { question: "Can safari planning be discussed?", answer: "Safari planning can be discussed according to availability and travel requirements. Safari availability, permits, zones, and wildlife sightings are not guaranteed." },
      { question: "Can I book a multi-day taxi trip?", answer: "You can enquire about a multi-day journey. Include your route, planned stops, and return date when requesting a quote." },
      { question: "What vehicle categories are available?", answer: "Ask about Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller according to group and luggage needs." },
    ],
    relatedRoutes: [
      { label: "Haridwar to Nainital taxi", href: "/taxi-services/haridwar-to-nainital" },
      { label: "Jim Corbett tour package", href: "/tour-packages/jim-corbett" },
      { label: "Uttarakhand tour packages", href: "/tour-packages/uttarakhand" },
    ],
  },
};

export const taxiRouteSlugs = Object.keys(taxiRoutes);
