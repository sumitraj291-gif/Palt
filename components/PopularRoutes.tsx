import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import BookingLink from "@/components/BookingLink";

const routes = [
  { from: "Haridwar", to: "Delhi", price: "₹2,500", href: "/taxi-services/haridwar-to-delhi" },
  { from: "Delhi", to: "Haridwar", price: "₹2,500", href: "/taxi-services/delhi-to-haridwar" },
  { from: "Haridwar", to: "Rishikesh", price: "₹1,200", href: "/taxi-services/haridwar-to-rishikesh" },
  { from: "Haridwar", to: "Dehradun", price: "₹1,800", href: "/taxi-services/haridwar-to-dehradun" },
  { from: "Haridwar", to: "Mussoorie", price: "₹2,500", href: "/taxi-services/haridwar-to-mussoorie" },
  { from: "Haridwar", to: "Nainital", price: "₹5,500", href: "/taxi-services/haridwar-to-nainital" },
  { from: "Delhi", to: "Nainital", price: "₹5,500", href: "/taxi-services/delhi-to-nainital" },
  { from: "Delhi", to: "Rishikesh", price: "₹3,000", href: "/taxi-services/delhi-to-rishikesh" },
  { from: "Delhi", to: "Mussoorie", price: "₹4,500", href: "/taxi-services/delhi-to-mussoorie" },
  { from: "Haridwar", to: "Jim Corbett", price: "₹5,000", href: "/taxi-services/haridwar-to-jim-corbett" },
];

export default function PopularRoutes() {
  return (
    <section className="routes-section">
      <div className="section-container">
        <div className="section-heading routes-heading">
          <div>
            <span className="section-eyebrow">POPULAR TAXI ROUTES</span>
            <h2>Go Further. <span>Travel Comfortably.</span></h2>
          </div>
          <p>
            Popular routes from Haridwar and Delhi with comfortable vehicles
            and dependable travel support.
          </p>
        </div>

        <div className="routes-grid">
          {routes.map(({ from, to, price, href }) => (
            <div className="route-card" key={`${from}-${to}`}>
              <div className="route-top">
                <div className="route-pin">
                  <MapPin size={17} />
                </div>
                <span>Starting From</span>
              </div>

              <div className="route-line">
                <div>
                  <small>FROM</small>
                  <strong>{from}</strong>
                </div>

                <div className="route-arrow">
                  <ArrowRight size={19} />
                </div>

                <div className="route-destination">
                  <small>TO</small>
                  <strong><Link href={href}>{to}</Link></strong>
                </div>
              </div>

              <div className="route-bottom">
                <strong>Starting From {price}</strong>
                <BookingLink>Get Quote</BookingLink>
              </div>
            </div>
          ))}
        </div>

        <p className="route-note">
          *Starting fares are indicative only. Final fare depends on vehicle
          type, travel date, route, trip duration and travel requirements.
        </p>
      </div>
    </section>
  );
}
