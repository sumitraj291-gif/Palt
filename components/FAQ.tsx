import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I book a taxi with Pal Travels?",
    a: "Fill in the booking form on the website or contact us on WhatsApp. Share your pickup, destination, travel date and passenger count, and our team can help with the available options.",
  },
  {
    q: "Do you provide one-way and round-trip taxi services?",
    a: "Yes. Pal Travels provides local, one-way, round-trip and outstation taxi options based on your journey requirements.",
  },
  {
    q: "Can I book a taxi for Chardham Yatra?",
    a: "Yes. We provide taxi-based Chardham travel support for journeys covering Yamunotri, Gangotri, Kedarnath and Badrinath.",
  },
  {
    q: "Which vehicles are available?",
    a: "Our listed fleet includes Sedan Taxi, SUV Taxi, Innova, Innova Crysta and Tempo Traveller.",
  },
  {
    q: "Can I book a taxi for multiple days?",
    a: "Yes. Multi-day travel can be planned for tours, pilgrimage journeys and outstation trips. Share your dates and route for a suitable quotation.",
  },
  {
    q: "Do the website route prices represent fixed fares?",
    a: "Route prices shown on the website are starting-from indicative prices. The final quotation can vary according to travel dates, vehicle, route, trip type and requirements.",
  },
];

export default function FAQ() {
  return (
    <section className="faq-section">
      <div className="section-container">
        <div className="section-heading faq-heading">
          <div>
            <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2>Questions Before You <span>Book?</span></h2>
          </div>
          <p>
            Quick answers to common questions about taxi bookings, tours and
            Chardham travel with Pal Travels.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                <span>{item.q}</span>
                <ChevronDown size={19} />
              </summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
