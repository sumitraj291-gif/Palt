import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import BookingLink from "@/components/BookingLink";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="section-container">
        <div className="final-cta">
          <div>
            <span className="section-eyebrow">READY TO TRAVEL?</span>
            <h2>Tell Us Where You Want to Go.</h2>
            <p>
              Share your route and travel requirements. Our team will help you
              choose the right taxi or travel option.
            </p>
          </div>

          <div className="final-cta-actions">
            <BookingLink className="final-primary">
              Plan Your Journey <ArrowRight size={17} />
            </BookingLink>
            <a
              href="https://wa.me/918979977705"
              target="_blank"
              rel="noreferrer"
              className="final-whatsapp"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a href="tel:+918979977705" className="final-phone">
              <PhoneCall size={17} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
