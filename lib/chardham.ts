export type ChardhamFaq = {
  question: string;
  answer: string;
};

export type ChardhamPageData = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  heroText: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: {
    heading: string;
    body: string;
    points?: string[];
  }[];
  relatedLinks: {
    label: string;
    href: string;
    description?: string;
  }[];
  faqs: ChardhamFaq[];
};

const chardhamLinks = [
  {
    label: "Chardham Yatra",
    href: "/chardham-yatra",
    description: "Explore travel planning for the four pilgrimage shrines.",
  },
  {
    label: "Do Dham Yatra",
    href: "/chardham-yatra/do-dham",
    description: "Learn about travel planning for Kedarnath and Badrinath.",
  },
  {
    label: "Helicopter Yatra",
    href: "/chardham-yatra/helicopter",
    description: "Enquire about helicopter-based pilgrimage travel.",
  },
  {
    label: "Taxi Chardham Packages",
    href: "/chardham-yatra/taxi-packages",
    description: "Discuss taxi options for a Chardham journey.",
  },
  {
    label: "Package Details",
    href: "/chardham-yatra/package-details",
    description: "Ask about travel options and plan-specific inclusions.",
  },
];

export const chardhamPages: Record<string, ChardhamPageData> = {
  "": {
    slug: "",
    title: "Chardham Yatra from Haridwar | Chardham Taxi & Travel | Pal Travels",
    description:
      "Plan your Chardham Yatra from Haridwar with Pal Travels. Explore Chardham travel options, taxi services and pilgrimage travel assistance.",
    h1: "Chardham Yatra from Haridwar",
    heroText:
      "Explore travel options for Yamunotri, Gangotri, Kedarnath, and Badrinath, and discuss your pilgrimage plans with Pal Travels.",
    intro:
      "Chardham Yatra brings together four revered shrines in Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath. Pal Travels can discuss taxi travel and practical journey planning from Haridwar. Access, opening dates, road conditions, and other requirements can change, so check current official information before travelling.",
    image: "/images/hero/chardham-hero.webp",
    imageAlt: "Mountain pilgrimage landscape in Uttarakhand",
    sections: [
      {
        heading: "Yamunotri",
        body: "Include Yamunotri in your pilgrimage plan and discuss the approach and vehicle arrangements that suit your group.",
      },
      {
        heading: "Gangotri",
        body: "Plan travel to Gangotri as part of a wider route. Confirm current access and travel conditions close to your dates.",
      },
      {
        heading: "Kedarnath",
        body: "Kedarnath is a revered Himalayan Jyotirlinga pilgrimage. Discuss road travel and the onward arrangements relevant to your plan.",
      },
      {
        heading: "Badrinath",
        body: "Badrinath is a sacred Vishnu temple in the Himalayas. Include your intended travel dates and route when asking about transport.",
      },
      {
        heading: "Choose a travel approach",
        body: "The right arrangement depends on your route, dates, group, and travel preferences. Explore the available Chardham travel pages or contact the team to discuss your plan.",
        points: [
          "Taxi travel for a planned pilgrimage route",
          "Do Dham travel covering Kedarnath and Badrinath",
          "Helicopter-based travel enquiries",
          "Package details based on the selected travel plan",
        ],
      },
    ],
    relatedLinks: chardhamLinks.filter((link) => link.href !== "/chardham-yatra"),
    faqs: [
      {
        question: "Can I plan a Chardham Yatra starting from Haridwar?",
        answer:
          "You can contact Pal Travels to discuss travel from Haridwar, your route, dates, and transport requirements. Access and road conditions vary, so confirm current official information before departure.",
      },
      {
        question: "Which shrines are part of Chardham Yatra?",
        answer:
          "The four shrines covered on this page are Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      },
      {
        question: "Can I enquire about taxi travel for the pilgrimage?",
        answer:
          "Yes. Share your planned route, dates, group requirements, and preferred vehicle category to discuss taxi travel with Pal Travels.",
      },
      {
        question: "Are package prices or inclusions fixed on this page?",
        answer:
          "No package price or inclusion is stated here. Contact Pal Travels to discuss the selected travel plan and confirm its details.",
      },
    ],
  },
  "do-dham": {
    slug: "do-dham",
    title: "Do Dham Yatra from Haridwar | Kedarnath & Badrinath | Pal Travels",
    description:
      "Plan a Do Dham Yatra from Haridwar covering Kedarnath and Badrinath with Pal Travels. Contact us for taxi and travel assistance.",
    h1: "Do Dham Yatra from Haridwar",
    heroText:
      "Discuss a pilgrimage plan from Haridwar covering Kedarnath and Badrinath, with taxi and travel assistance shaped around your requirements.",
    intro:
      "Do Dham Yatra commonly refers to a pilgrimage visiting Kedarnath and Badrinath. From Haridwar, the journey requires route planning that considers your travel dates, group needs, current access, and road conditions. Pal Travels can discuss taxi arrangements without assuming a fixed itinerary or duration.",
    image: "/images/hero/chardham-hero2.webp",
    imageAlt: "Uttarakhand mountain scenery for pilgrimage travel",
    sections: [
      {
        heading: "Kedarnath and Badrinath",
        body: "These two Himalayan shrines are the destinations covered by this Do Dham travel option. Confirm current opening information, access guidance, and official requirements before setting out.",
      },
      {
        heading: "Plan from Haridwar around your group",
        body: "Share your intended dates, starting point, group requirements, and preferred pace. Travel conditions and access may change, so the route and arrangements should be discussed for your specific plan.",
        points: [
          "Discuss taxi travel and the road portions of your plan",
          "Consider family and group requirements when choosing a vehicle",
          "Confirm current official pilgrimage and access information",
        ],
      },
    ],
    relatedLinks: [
      chardhamLinks[0],
      chardhamLinks[3],
      chardhamLinks[4],
      {
        label: "Tempo Traveller",
        href: "/taxi-services/tempo-traveller",
        description: "Explore a vehicle category for group travel.",
      },
    ],
    faqs: [
      {
        question: "What does Do Dham Yatra mean on this page?",
        answer:
          "It refers to pilgrimage travel covering Kedarnath and Badrinath. Discuss the route and current access information before confirming your plans.",
      },
      {
        question: "Can I enquire about a Do Dham taxi from Haridwar?",
        answer:
          "Yes. Share your travel dates, group details, and expected route with Pal Travels to discuss taxi arrangements.",
      },
      {
        question: "Is a fixed duration or package price available?",
        answer:
          "No duration or package price is promised here. Travel planning depends on your dates, route, current conditions, and requirements; contact Pal Travels for an enquiry.",
      },
      {
        question: "What should families or groups discuss before booking?",
        answer:
          "Share the group’s travel needs, luggage requirements, dates, and preferred vehicle category so the suitable options can be discussed.",
      },
    ],
  },
  helicopter: {
    slug: "helicopter",
    title: "Chardham Yatra by Helicopter | Helicopter Yatra Packages | Pal Travels",
    description:
      "Explore Chardham Yatra by helicopter with Pal Travels. Enquire about helicopter pilgrimage travel options, packages and assistance.",
    h1: "Chardham Yatra by Helicopter",
    heroText:
      "Enquire about helicopter-based pilgrimage travel and the planning support relevant to your Chardham journey.",
    intro:
      "Helicopter travel may be one option to explore when planning a Chardham pilgrimage. It can be relevant for travellers looking for a different way to approach the journey, including some elderly pilgrims, but suitability depends on individual needs and the arrangements available. Helicopter services may be subject to weather, operational conditions, and availability.",
    image: "/images/hero/chardham-hero.webp",
    imageAlt: "Himalayan landscape associated with Chardham pilgrimage travel",
    sections: [
      {
        heading: "Understand the travel option",
        body: "An enquiry can cover the pilgrimage plan, travel dates, and assistance needed. Pal Travels does not promise a particular helicopter operator or service availability; confirm the current arrangements and requirements during your enquiry.",
      },
      {
        heading: "Plan with changing conditions in mind",
        body: "Weather and operational conditions can affect helicopter services. Discuss contingency considerations and verify current information before relying on any travel arrangement.",
        points: [
          "Share your preferred dates and pilgrimage requirements",
          "Mention mobility or assistance considerations for elderly travellers",
          "Confirm service details and availability before making plans",
        ],
      },
    ],
    relatedLinks: [
      chardhamLinks[0],
      chardhamLinks[4],
      chardhamLinks[1],
      {
        label: "Uttarakhand tour packages",
        href: "/tour-packages/uttarakhand",
        description: "Explore other Uttarakhand travel options.",
      },
    ],
    faqs: [
      {
        question: "Can Pal Travels help with a helicopter Yatra enquiry?",
        answer:
          "Contact Pal Travels with your dates and travel requirements to discuss available assistance and current arrangements.",
      },
      {
        question: "Is helicopter availability guaranteed?",
        answer:
          "No. Helicopter services may be subject to weather, operational conditions, and availability. Confirm the current status during your enquiry.",
      },
      {
        question: "Is a helicopter package price listed?",
        answer:
          "No helicopter price is published here. Enquire with Pal Travels for information based on the travel option and current availability.",
      },
      {
        question: "Can elderly travellers ask about this option?",
        answer:
          "Yes. Share any mobility or assistance considerations during the enquiry. Suitability depends on the traveller and the current service requirements.",
      },
    ],
  },
  "taxi-packages": {
    slug: "taxi-packages",
    title: "Chardham Taxi Packages from Haridwar | Chardham Taxi Service | Pal Travels",
    description:
      "Book or enquire about Chardham taxi packages from Haridwar with Pal Travels for comfortable pilgrimage travel and flexible travel planning.",
    h1: "Chardham Taxi Packages from Haridwar",
    heroText:
      "Discuss taxi-based Chardham travel from Haridwar, with vehicle options and route planning based on your group and requirements.",
    intro:
      "A taxi-based Chardham journey can be planned around your dates, route, and group needs. Pal Travels can discuss vehicle categories and travel coordination for your pilgrimage. One-way or round-trip arrangements depend on the actual itinerary; no package price or fixed inclusion is assumed here.",
    image: "/images/hero/taxi-service-hero.webp",
    imageAlt: "Taxi on a mountain road in Uttarakhand",
    sections: [
      {
        heading: "Vehicle categories to discuss",
        body: "Ask about the vehicle type that suits your group and luggage requirements. Confirm availability and the arrangement for your dates when requesting a quote.",
        points: [
          "Sedan Taxi",
          "SUV Taxi",
          "Innova",
          "Innova Crysta",
          "Tempo Traveller",
        ],
      },
      {
        heading: "One-way, return, and multi-day context",
        body: "The right trip arrangement depends on your route and pilgrimage plan. Share pickup details, destinations, travel dates, and any expected stops so the team can discuss the appropriate taxi option.",
      },
    ],
    relatedLinks: [
      chardhamLinks[0],
      chardhamLinks[1],
      chardhamLinks[4],
      {
        label: "Outstation taxi",
        href: "/taxi-services/outstation",
        description: "Learn about outstation taxi travel from Haridwar.",
      },
      {
        label: "Tempo Traveller",
        href: "/taxi-services/tempo-traveller",
        description: "Explore the Tempo Traveller service.",
      },
    ],
    faqs: [
      {
        question: "Can I enquire about taxi travel for Chardham from Haridwar?",
        answer:
          "Yes. Share your dates, route, pickup point, group details, and expected travel needs to request a quote.",
      },
      {
        question: "Which taxi categories can I ask about?",
        answer:
          "The listed categories are Sedan Taxi, SUV Taxi, Innova, Innova Crysta, and Tempo Traveller. Confirm suitability and availability during your enquiry.",
      },
      {
        question: "Are one-way and round-trip options available?",
        answer:
          "One-way or return travel can be discussed according to your route and itinerary. Share the details when you contact Pal Travels.",
      },
      {
        question: "Are Chardham taxi package prices shown?",
        answer:
          "No package prices are published here. Use Get Quote to discuss the selected route and travel requirements.",
      },
    ],
  },
  "package-details": {
    slug: "package-details",
    title: "Chardham Yatra Package Details | Taxi & Travel Options | Pal Travels",
    description:
      "Explore Chardham Yatra package details from Pal Travels, including travel options, taxi services and pilgrimage planning information.",
    h1: "Chardham Yatra Package Details",
    heroText:
      "Review the travel choices to discuss for a Chardham plan, then ask Pal Travels to confirm details for your selected itinerary.",
    intro:
      "Chardham package details depend on the route and travel plan you select. This page outlines the categories you can ask about without assuming hotel names, meals, darshan arrangements, permits, prices, or other inclusions. Package inclusions and final pricing are confirmed based on the selected travel plan and current availability.",
    image: "/images/hero/chardham-hero2.webp",
    imageAlt: "Uttarakhand mountain scenery for pilgrimage package planning",
    sections: [
      {
        heading: "Package overview",
        body: "Start with your dates, route, group requirements, and preferred travel approach. Ask the team to confirm what is included and excluded in the plan before making a decision.",
      },
      {
        heading: "Travel options",
        body: "Discuss road-based taxi travel, a Do Dham plan, or helicopter-related enquiries. Availability and operational requirements vary by option and date.",
        points: [
          "Taxi travel for your selected route",
          "Do Dham travel covering Kedarnath and Badrinath",
          "Helicopter pilgrimage travel enquiry",
        ],
      },
      {
        heading: "Accommodation and other inclusions",
        body: "Accommodation, meals, darshan, permits, and other services are not specified as included on this page. Ask for the plan-specific details and confirm current availability directly with Pal Travels.",
      },
    ],
    relatedLinks: [
      chardhamLinks[0],
      chardhamLinks[1],
      chardhamLinks[2],
      chardhamLinks[3],
      {
        label: "Taxi services",
        href: "/taxi-services",
        description: "Explore taxi service categories.",
      },
    ],
    faqs: [
      {
        question: "What is included in a Chardham package?",
        answer:
          "Inclusions depend on the selected travel plan. Ask Pal Travels to confirm the services included and excluded before you decide.",
      },
      {
        question: "Are accommodation or meal arrangements included?",
        answer:
          "No specific hotel or meal inclusion is promised on this page. Confirm accommodation and meal arrangements for your selected plan during the enquiry.",
      },
      {
        question: "Can I choose taxi or helicopter travel?",
        answer:
          "You can enquire about taxi travel or helicopter-based pilgrimage options. Confirm current availability and plan details with Pal Travels.",
      },
      {
        question: "How is the final package price confirmed?",
        answer:
          "Package inclusions and final pricing are confirmed based on the selected travel plan and current availability. Contact Pal Travels with your dates and requirements.",
      },
    ],
  },
};

export const chardhamPageSlugs = Object.keys(chardhamPages);
