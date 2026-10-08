import {
  Users,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";
import BookingLink from "@/components/BookingLink";
import Image from "next/image";

const vehicles = [
  {
    name: "Sedan Taxi",
    type: "Comfortable everyday travel",
    seats: "4 Passengers",
    luggage: "2–3 Bags",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "SUV Taxi",
    type: "Extra space for family trips",
    seats: "6–7 Passengers",
    luggage: "4–5 Bags",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Innova",
    type: "Comfortable group journeys",
    seats: "6–7 Passengers",
    luggage: "4–5 Bags",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Innova Crysta",
    type: "Premium family comfort",
    seats: "6–7 Passengers",
    luggage: "4–5 Bags",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Tempo Traveller",
    type: "Spacious group travel",
    seats: "9–17 Passengers",
    luggage: "Group Luggage",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Fleet() {
  return (
    <section className="fleet-section">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">OUR TAXI FLEET</span>
            <h2>Choose the Right <span>Ride.</span></h2>
          </div>
          <p>
            Practical vehicles for solo travellers, families, pilgrimage groups
            and outstation journeys. No unnecessary luxury-car categories.
          </p>
        </div>

        <div className="fleet-grid">
          {vehicles.map((vehicle) => (
            <article className="fleet-card" key={vehicle.name}>
              <div className="fleet-image">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  unoptimized
                  sizes="(max-width: 480px) 100vw, (max-width: 700px) 50vw, (max-width: 1050px) 33vw, 20vw"
                  quality={75}
                />
              </div>
              <div className="fleet-body">
                <span>{vehicle.type}</span>
                <h3>{vehicle.name}</h3>

                <div className="fleet-meta">
                  <div>
                    <Users size={15} />
                    {vehicle.seats}
                  </div>
                  <div>
                    <BriefcaseBusiness size={15} />
                    {vehicle.luggage}
                  </div>
                </div>

                <BookingLink>
                  Get a Quote <ArrowRight size={15} />
                </BookingLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
