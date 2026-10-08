import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

const packages = [
  {
    title: "Uttarakhand Escape",
    places: "Haridwar • Rishikesh • Mussoorie",
    duration: "4 Days / 3 Nights",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Himalayan Himachal",
    places: "Shimla • Manali",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Kashmir Valley",
    places: "Srinagar • Gulmarg • Pahalgam",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Royal Rajasthan",
    places: "Jaipur • Jodhpur • Udaipur",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Delhi & Agra",
    places: "Delhi • Agra • Taj Mahal",
    duration: "3 Days / 2 Nights",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Corbett Wildlife",
    places: "Haridwar • Jim Corbett",
    duration: "3 Days / 2 Nights",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function TourPackages() {
  return (
    <section className="packages-section">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">TOUR PACKAGES</span>
            <h2>Trips Designed Around <span>Your Journey.</span></h2>
          </div>
          <p>
            Choose a destination, tell us your travel dates and let Pal Travels
            help you plan the right route, vehicle and stay.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((item) => (
            <a href="/tour-packages" className="package-card" key={item.title}>
              <div className="package-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  quality={75}
                />
                <span>{item.duration}</span>
              </div>
              <div className="package-content">
                <div className="package-location">
                  <MapPin size={14} />
                  {item.places}
                </div>
                <h3>{item.title}</h3>
                <div className="package-link">
                  View Package <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
