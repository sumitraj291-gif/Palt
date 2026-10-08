import {
  BadgeCheck,
  Car,
  Clock3,
  Headphones,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import BookingLink from "@/components/BookingLink";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Travel Support",
    text: "Dependable assistance for local, outstation and pilgrimage journeys from Haridwar.",
  },
  {
    icon: Car,
    title: "Practical Taxi Options",
    text: "Choose from Sedan, SUV, Innova, Innova Crysta and Tempo Traveller according to your group.",
  },
  {
    icon: MapPinned,
    title: "Wide Route Coverage",
    text: "Travel across Uttarakhand and popular destinations including Himachal, Kashmir and Rajasthan.",
  },
  {
    icon: Clock3,
    title: "Flexible Travel Planning",
    text: "Plan one-way, round-trip and multi-day journeys around your dates and requirements.",
  },
  {
    icon: Headphones,
    title: "Easy Booking Assistance",
    text: "Send your requirements on WhatsApp and get help choosing a suitable travel option.",
  },
  {
    icon: BadgeCheck,
    title: "Journey-Focused Service",
    text: "We focus on comfortable vehicles, clear communication and smooth travel coordination.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="section-container">
        <div className="why-layout">
          <div className="why-intro">
            <span className="section-eyebrow">WHY PAL TRAVELS</span>
            <h2>Travel With a Team That <span>Understands the Route.</span></h2>
            <p>
              Based near Haridwar Railway Station, Pal Travels helps travellers
              plan taxi bookings, tours and Chardham journeys with practical
              vehicle options and direct booking support.
            </p>
            <BookingLink className="why-cta">
              Plan My Journey
            </BookingLink>
          </div>

          <div className="why-grid">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article className="why-card" key={title}>
                <div className="why-icon"><Icon size={21} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
