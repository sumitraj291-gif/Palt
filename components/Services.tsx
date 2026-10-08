import {
  CarFront,
  Route,
  ArrowLeftRight,
  RefreshCw,
  BusFront,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: CarFront,
    title: "Local Taxi",
    text: "Comfortable city rides across Haridwar and nearby destinations.",
    href: "/taxi-services/local",
  },
  {
    icon: Route,
    title: "Outstation Taxi",
    text: "Reliable cabs for long-distance journeys across North India.",
    href: "/taxi-services/outstation",
  },
  {
    icon: ArrowLeftRight,
    title: "One Way Taxi",
    text: "Simple one-way travel with convenient pickup and drop service.",
    href: "/taxi-services/one-way",
  },
  {
    icon: RefreshCw,
    title: "Round Trip Taxi",
    text: "Flexible return journeys for family trips and sightseeing.",
    href: "/taxi-services/round-trip",
  },
  {
    icon: BusFront,
    title: "Tempo Traveller",
    text: "Spacious group travel for family tours, pilgrimages and trips.",
    href: "/taxi-services/tempo-traveller",
  },
  {
    icon: Landmark,
    title: "Chardham Yatra",
    text: "Plan a comfortable pilgrimage journey to all four sacred dhams.",
    href: "/chardham-yatra",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">OUR SERVICES</span>
            <h2>Travel Services Made <span>Simple.</span></h2>
          </div>
          <p>
            From everyday taxi rides to complete pilgrimage journeys, Pal Travels
            helps you travel comfortably with dependable local support.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a href={service.href} className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-link">
                    Explore Service <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
