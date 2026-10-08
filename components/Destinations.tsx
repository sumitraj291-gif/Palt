import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

const destinations = [
  ["Haridwar", "Uttarakhand", "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=900&q=85"],
  ["Rishikesh", "Uttarakhand", "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85"],
  ["Mussoorie", "Uttarakhand", "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=85"],
  ["Nainital", "Uttarakhand", "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=85"],
  ["Shimla", "Himachal Pradesh", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85"],
  ["Manali", "Himachal Pradesh", "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=85"],
  ["Kashmir", "Jammu & Kashmir", "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85"],
  ["Rajasthan", "North India", "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85"],
  ["Delhi & Agra", "North India", "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85"],
];

export default function Destinations() {
  return (
    <section className="destinations-section">
      <div className="section-container">
        <div className="section-heading destinations-heading">
          <div>
            <span className="section-eyebrow">POPULAR DESTINATIONS</span>
            <h2>From Local Escapes to <span>Long Journeys.</span></h2>
          </div>
          <p>
            Explore popular destinations with Pal Travels and build your trip
            around your preferred dates and vehicle.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map(([name, region, image]) => (
            <a href="/destinations" className="destination-card" key={name}>
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                quality={75}
              />
              <div className="destination-shade" />
              <div className="destination-content">
                <div>
                  <small><MapPin size={12} /> {region}</small>
                  <h3>{name}</h3>
                </div>
                <span className="destination-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
