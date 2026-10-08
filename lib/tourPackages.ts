export type TourPackagePageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heroDescription: string;
  introHeading: string;
  intro: string;
  image: string;
  imageAlt: string;
  destinations: string[];
  experiences: string[];
  travelOptions: { name: string; description: string; href: string }[];
  itineraries: { title: string; days: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const tourPackages: Record<string, TourPackagePageData> = {
  uttarakhand: {
    slug: "uttarakhand",
    title: "Uttarakhand Tour Packages from Haridwar",
    description:
      "Explore Uttarakhand with comfortable taxi and tour packages from Haridwar covering Rishikesh, Mussoorie, Nainital, Jim Corbett and other popular destinations.",
    eyebrow: "UTTARAKHAND TOUR PACKAGES",
    heroDescription:
      "Discover the mountains, spiritual destinations and scenic landscapes of Uttarakhand with comfortable travel arrangements from Haridwar.",
    introHeading: "Build a Uttarakhand trip around your interests",
    intro:
      "Start in Haridwar and plan a journey around riverside visits, mountain sightseeing, nature stops, or a mix of destinations. Pal Travels can discuss routes and taxi options for your dates and group. These are customizable travel plans, not fixed schedules or priced packages.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mountain scenery in Uttarakhand",
    destinations: ["Haridwar", "Rishikesh", "Mussoorie", "Nainital", "Jim Corbett", "Dehradun"],
    experiences: [
      "Spiritual travel and riverside visits",
      "Mountain sightseeing",
      "Family holidays",
      "Weekend trips",
      "Nature travel",
      "Multi-destination journeys",
    ],
    travelOptions: [
      { name: "Outstation taxi", description: "Discuss intercity and longer-distance travel from Haridwar.", href: "/taxi-services/outstation" },
      { name: "Round-trip taxi", description: "Plan return transportation around your itinerary.", href: "/taxi-services/round-trip" },
      { name: "Tempo Traveller", description: "Ask about group travel configuration for your requirements.", href: "/taxi-services/tempo-traveller" },
      { name: "Chardham Yatra", description: "Explore pilgrimage travel planning from Haridwar.", href: "/chardham-yatra" },
      { name: "All taxi services", description: "Compare the taxi services available from Haridwar.", href: "/taxi-services" },
    ],
    itineraries: [
      { title: "Suggested 3-Day Uttarakhand Itinerary", days: ["Day 1: Haridwar to Rishikesh", "Day 2: Rishikesh and nearby sightseeing", "Day 3: Return to Haridwar"] },
      { title: "Suggested 5-Day Uttarakhand Itinerary", days: ["Day 1: Haridwar to Rishikesh", "Day 2: Rishikesh to Mussoorie", "Day 3: Mussoorie sightseeing", "Day 4: Mussoorie to Dehradun", "Day 5: Return to Haridwar"] },
      { title: "Suggested 7-Day Uttarakhand Itinerary", days: ["Day 1: Haridwar arrival and local plans", "Day 2: Haridwar to Rishikesh", "Day 3: Rishikesh sightseeing", "Day 4: Travel toward Mussoorie", "Day 5: Mussoorie sightseeing", "Day 6: Travel toward Dehradun", "Day 7: Return to Haridwar"] },
    ],
    faqs: [
      { question: "What destinations are covered in Uttarakhand tours?", answer: "Popular options include Haridwar, Rishikesh, Mussoorie, Nainital, Jim Corbett, and Dehradun. Discuss your preferred stops with Pal Travels." },
      { question: "Can I customize an Uttarakhand tour?", answer: "Yes. Share your travel dates, destinations, trip length, and group requirements to discuss a customizable travel plan." },
      { question: "Can I book a taxi from Haridwar?", answer: "You can enquire about local, one-way, outstation, and round-trip taxi options from Haridwar." },
      { question: "Can families book multi-day Uttarakhand trips?", answer: "Families can discuss multi-day travel plans and vehicle options according to their itinerary and group requirements." },
      { question: "How can I get a tour quote?", answer: "Contact Pal Travels with your dates, route, destinations, and passenger details to request a quote. Pricing depends on the trip requirements." },
    ],
  },
  himachal: {
    slug: "himachal",
    title: "Himachal Pradesh Tour Packages from Haridwar",
    description:
      "Plan a Himachal Pradesh tour from Haridwar with Pal Travels and explore Shimla, Manali and other popular Himalayan destinations.",
    eyebrow: "HIMACHAL PRADESH TOURS",
    heroDescription:
      "Plan a scenic road journey from Haridwar to Shimla, Manali, and other suitable Himalayan destinations in Himachal Pradesh.",
    introHeading: "Plan a Himachal journey at your own pace",
    intro:
      "Himachal trips can be shaped around mountain sightseeing, time in Shimla or Manali, and the dates you have available. Tell Pal Travels where you want to go and how long you plan to travel; the itinerary can be discussed around your route and group rather than treated as a fixed package.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Himalayan mountain landscape in Himachal Pradesh",
    destinations: ["Shimla", "Manali"],
    experiences: [
      "Mountain sightseeing",
      "Family holidays",
      "Couple trips",
      "Seasonal snow travel planning",
      "Scenic road journeys",
    ],
    travelOptions: [
      { name: "Outstation taxi", description: "Discuss a road journey from Haridwar to Himachal.", href: "/taxi-services/outstation" },
      { name: "Round-trip taxi", description: "Plan return travel and stops with your itinerary.", href: "/taxi-services/round-trip" },
      { name: "All taxi services", description: "Review taxi options for your travel dates.", href: "/taxi-services" },
    ],
    itineraries: [
      { title: "Suggested 4-Day Shimla Itinerary", days: ["Day 1: Haridwar to Shimla (travel day)", "Day 2: Shimla sightseeing", "Day 3: Local sightseeing and free time", "Day 4: Return travel plan"] },
      { title: "Suggested 5-Day Shimla–Manali Itinerary", days: ["Day 1: Haridwar to Shimla (travel day)", "Day 2: Shimla sightseeing", "Day 3: Travel toward Manali", "Day 4: Manali sightseeing", "Day 5: Return travel plan"] },
      { title: "Suggested 7-Day Himachal Itinerary", days: ["Day 1: Haridwar to Shimla (travel day)", "Day 2: Shimla sightseeing", "Day 3: Shimla and nearby visits", "Day 4: Travel toward Manali", "Day 5: Manali sightseeing", "Day 6: Flexible local travel", "Day 7: Return travel plan"] },
    ],
    faqs: [
      { question: "Can I plan a Himachal tour from Haridwar?", answer: "Yes. Contact Pal Travels with your preferred destinations, dates, and trip length to discuss travel arrangements from Haridwar." },
      { question: "Can Shimla and Manali be covered in one trip?", answer: "They can be discussed as part of a multi-day itinerary. Travel time and sightseeing plans depend on your dates and preferences." },
      { question: "Can the itinerary be customized?", answer: "Yes. Share the places you want to visit and your available days so the route can be discussed around your plans." },
      { question: "Which taxi options are available?", answer: "Available categories include Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller. Ask about a suitable option for your group." },
    ],
  },
  kashmir: {
    slug: "kashmir",
    title: "Kashmir Tour Packages from Haridwar",
    description:
      "Plan a Kashmir tour from Haridwar with comfortable travel arrangements for Srinagar, Gulmarg, Pahalgam and other popular destinations.",
    eyebrow: "KASHMIR TOURS",
    heroDescription:
      "Explore Kashmir valley scenery and popular destinations with a travel plan discussed around your dates, route, and group.",
    introHeading: "A Kashmir plan shaped around your trip",
    intro:
      "Srinagar, Gulmarg, and Pahalgam can be considered when planning a Kashmir trip. Discuss how you want to travel from Haridwar, the destinations you want to include, and the time available. Route and local arrangements depend on your requirements and current travel conditions.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mountain valley landscape in Kashmir",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
    experiences: [
      "Valley sightseeing",
      "Mountain landscapes",
      "Family holidays",
      "Couple trips",
      "Scenic travel",
    ],
    travelOptions: [
      { name: "Outstation taxi", description: "Discuss the road travel portion of your journey.", href: "/taxi-services/outstation" },
      { name: "Round-trip taxi", description: "Plan return travel around your dates and route.", href: "/taxi-services/round-trip" },
      { name: "Browse destinations", description: "Explore destinations featured by Pal Travels.", href: "/destinations" },
    ],
    itineraries: [
      { title: "Suggested 4-Day Kashmir Itinerary", days: ["Day 1: Arrive in Srinagar and settle into the trip", "Day 2: Srinagar sightseeing", "Day 3: Plan a visit toward Gulmarg", "Day 4: Departure or onward travel"] },
      { title: "Suggested 5-Day Kashmir Itinerary", days: ["Day 1: Arrive in Srinagar", "Day 2: Srinagar sightseeing", "Day 3: Srinagar to Gulmarg and return/overnight plan", "Day 4: Plan a visit toward Pahalgam", "Day 5: Departure or onward travel"] },
      { title: "Suggested 6-Day Kashmir Itinerary", days: ["Day 1: Arrive in Srinagar", "Day 2: Srinagar sightseeing", "Day 3: Gulmarg travel and sightseeing plan", "Day 4: Travel toward Pahalgam", "Day 5: Pahalgam area sightseeing", "Day 6: Departure or onward travel"] },
    ],
    faqs: [
      { question: "Can I plan a Kashmir trip from Haridwar?", answer: "You can contact Pal Travels to discuss a Kashmir itinerary from Haridwar, including your dates, destinations, and transport requirements." },
      { question: "Which Kashmir destinations can be included?", answer: "Srinagar, Gulmarg, and Pahalgam are destinations that can be discussed when planning your trip." },
      { question: "Can the itinerary be customized?", answer: "Yes. Share the destinations and trip duration you prefer. The suggested itinerary can be adjusted to your travel requirements." },
      { question: "How can I request a quote?", answer: "Send your dates, route, destinations, and group details through the contact page or WhatsApp to request current travel pricing." },
    ],
  },
  rajasthan: {
    slug: "rajasthan",
    title: "Rajasthan Tour Packages from Haridwar",
    description:
      "Explore Rajasthan with tour and travel services from Haridwar covering Jaipur, Udaipur, Jodhpur and other popular destinations.",
    eyebrow: "RAJASTHAN TOURS",
    heroDescription:
      "Plan a Rajasthan journey from Haridwar around heritage sights, cultural experiences, and the cities you want to explore.",
    introHeading: "Explore Rajasthan across multiple cities",
    intro:
      "Jaipur, Udaipur, and Jodhpur can form part of a multi-city Rajasthan plan. Choose the destinations and trip length that suit you, then discuss the route and taxi arrangements with Pal Travels. Suggested day plans are examples and are not fixed packages or priced inclusions.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Historic palace architecture in Rajasthan",
    destinations: ["Jaipur", "Udaipur", "Jodhpur"],
    experiences: [
      "Forts and palaces",
      "Heritage travel",
      "Family holidays",
      "Cultural sightseeing",
      "Multi-city journeys",
    ],
    travelOptions: [
      { name: "Outstation taxi", description: "Discuss intercity travel from Haridwar.", href: "/taxi-services/outstation" },
      { name: "Round-trip taxi", description: "Plan return transport with your multi-city route.", href: "/taxi-services/round-trip" },
      { name: "Explore destinations", description: "Browse destination ideas and plan a route.", href: "/destinations" },
    ],
    itineraries: [
      { title: "Suggested 4-Day Rajasthan Itinerary", days: ["Day 1: Arrive in Jaipur and plan local sightseeing", "Day 2: Jaipur heritage sightseeing", "Day 3: Flexible city sightseeing", "Day 4: Departure or onward travel"] },
      { title: "Suggested 6-Day Rajasthan Itinerary", days: ["Day 1: Travel to Jaipur", "Day 2: Jaipur sightseeing", "Day 3: Jaipur to Jodhpur travel plan", "Day 4: Jodhpur sightseeing", "Day 5: Travel toward Udaipur", "Day 6: Udaipur sightseeing or departure"] },
      { title: "Suggested 8-Day Rajasthan Itinerary", days: ["Day 1: Travel to Jaipur", "Day 2: Jaipur sightseeing", "Day 3: Jaipur and nearby heritage visits", "Day 4: Travel toward Jodhpur", "Day 5: Jodhpur sightseeing", "Day 6: Travel toward Udaipur", "Day 7: Udaipur sightseeing", "Day 8: Departure or onward travel"] },
    ],
    faqs: [
      { question: "Can I plan a Rajasthan tour from Haridwar?", answer: "Yes. Discuss your dates, destinations, and preferred travel arrangements with Pal Travels." },
      { question: "Can Jaipur, Udaipur, and Jodhpur be combined?", answer: "These cities can be discussed for a multi-city trip. The route and number of days should account for intercity travel time." },
      { question: "Can I customize the itinerary?", answer: "Yes. Select the cities and sightseeing interests that matter to you and ask the team to discuss a plan around your dates." },
      { question: "What travel options are available?", answer: "Taxi categories include Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller. Discuss the vehicle option for your group." },
    ],
  },
  "delhi-agra": {
    slug: "delhi-agra",
    title: "Delhi & Agra Tour Packages from Haridwar",
    description:
      "Explore Delhi and Agra from Haridwar with convenient taxi and tour services for sightseeing, family trips and cultural travel.",
    eyebrow: "DELHI & AGRA TOURS",
    heroDescription:
      "Plan a Delhi and Agra journey from Haridwar for city sightseeing, the Taj Mahal, and historical and cultural travel.",
    introHeading: "Connect Delhi sightseeing with a visit to Agra",
    intro:
      "A Delhi–Agra trip can bring together city sightseeing and a visit to the Taj Mahal. Decide how much time you want in each place and discuss the transfer plan, travel dates, and stops with Pal Travels. Entry tickets, guides, and meals are not included unless specifically confirmed by the service provider.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "The Taj Mahal in Agra",
    destinations: ["Delhi", "Agra", "Taj Mahal"],
    experiences: [
      "Delhi sightseeing",
      "Agra sightseeing",
      "Taj Mahal visit",
      "Historical and cultural travel",
      "Family trips",
      "Weekend travel",
    ],
    travelOptions: [
      { name: "Outstation taxi", description: "Discuss travel between Haridwar, Delhi, and Agra.", href: "/taxi-services/outstation" },
      { name: "One-way taxi", description: "Ask about point-to-point transfers.", href: "/taxi-services/one-way" },
      { name: "Round-trip taxi", description: "Plan return transportation around your itinerary.", href: "/taxi-services/round-trip" },
      { name: "Explore destinations", description: "Browse destination ideas for your trip.", href: "/destinations" },
    ],
    itineraries: [
      { title: "Suggested 2-Day Delhi–Agra Itinerary", days: ["Day 1: Haridwar to Delhi and selected sightseeing", "Day 2: Travel to Agra for a Taj Mahal visit and onward/return plan"] },
      { title: "Suggested 3-Day Delhi–Agra Itinerary", days: ["Day 1: Haridwar to Delhi and city sightseeing", "Day 2: Delhi to Agra and Agra sightseeing", "Day 3: Return travel plan"] },
      { title: "Suggested 4-Day Delhi–Agra Itinerary", days: ["Day 1: Haridwar to Delhi", "Day 2: Delhi sightseeing", "Day 3: Delhi to Agra and Taj Mahal visit", "Day 4: Agra sightseeing or return travel"] },
    ],
    faqs: [
      { question: "Can I book a Delhi and Agra tour from Haridwar?", answer: "You can contact Pal Travels to discuss a Delhi and Agra itinerary, travel dates, stops, and taxi requirements from Haridwar." },
      { question: "Can Taj Mahal sightseeing be included?", answer: "A Taj Mahal visit can be discussed as part of an Agra itinerary. Entry tickets or guide services should be confirmed separately." },
      { question: "Can I choose one-way or round-trip travel?", answer: "You can enquire about either point-to-point travel or a round trip based on your itinerary." },
      { question: "Can the itinerary be customized?", answer: "Yes. Share the places you want to visit, how many days you have, and whether you need return transportation." },
    ],
  },
  "jim-corbett": {
    slug: "jim-corbett",
    title: "Jim Corbett Tour Packages from Haridwar",
    description:
      "Plan a Jim Corbett tour from Haridwar with comfortable taxi services, sightseeing support and convenient travel arrangements.",
    eyebrow: "JIM CORBETT TOURS",
    heroDescription:
      "Plan a nature-focused journey from Haridwar to the Jim Corbett area with travel arrangements discussed around your dates.",
    introHeading: "Plan a nature trip to the Corbett area",
    intro:
      "A Jim Corbett area trip can be planned for nature sightseeing, a family break, or a weekend journey. Discuss your pickup, travel dates, length of stay, and any activities you are considering. Safari planning can be discussed according to availability and travel requirements; sightings, permits, and availability are not guaranteed.",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wildlife and forest scenery in a natural habitat",
    destinations: ["Jim Corbett National Park", "Corbett-area travel"],
    experiences: [
      "Nature sightseeing",
      "Family trips",
      "Weekend trips",
      "Multi-day travel",
      "Safari planning discussion",
    ],
    travelOptions: [
      { name: "Outstation taxi", description: "Discuss taxi travel from Haridwar to the Corbett area.", href: "/taxi-services/outstation" },
      { name: "Round-trip taxi", description: "Plan return transport around your dates.", href: "/taxi-services/round-trip" },
      { name: "Tempo Traveller", description: "Ask about group travel configuration.", href: "/taxi-services/tempo-traveller" },
      { name: "Explore destinations", description: "Browse destination ideas for a wider trip.", href: "/destinations" },
    ],
    itineraries: [
      { title: "Suggested 2-Day Corbett Itinerary", days: ["Day 1: Haridwar to the Corbett area", "Day 2: Nature sightseeing or activities according to availability, then return travel plan"] },
      { title: "Suggested 3-Day Corbett Itinerary", days: ["Day 1: Haridwar to the Corbett area", "Day 2: Nature sightseeing; discuss safari planning according to availability", "Day 3: Local visit and return travel plan"] },
      { title: "Suggested 4-Day Corbett Itinerary", days: ["Day 1: Travel from Haridwar to the Corbett area", "Day 2: Nature sightseeing or activity planning", "Day 3: Flexible local travel and sightseeing", "Day 4: Return travel plan"] },
    ],
    faqs: [
      { question: "Can I plan a Jim Corbett trip from Haridwar?", answer: "Yes. Contact Pal Travels with your dates, group details, and trip duration to discuss travel arrangements from Haridwar." },
      { question: "Can safari planning be included?", answer: "Safari planning can be discussed according to availability and travel requirements. Safari availability, permits, and wildlife sightings are not guaranteed." },
      { question: "Can I book a multi-day Corbett trip?", answer: "You can discuss a multi-day trip. Share the dates, route, and any sightseeing or activity plans you have in mind." },
      { question: "What vehicle options are available?", answer: "Ask about Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller. Vehicle configuration should be confirmed for your group and luggage needs." },
    ],
  },
};
