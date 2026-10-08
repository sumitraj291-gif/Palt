import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="section-eyebrow">CONTACT PAL TRAVELS</span>
            <h2>Start Planning Your <span>Next Journey.</span></h2>
            <p>
              Visit us near Haridwar Railway Station or contact our team for
              taxi bookings, tour packages and Chardham travel enquiries.
            </p>

            <div className="contact-details">
              <a href="tel:+918979977705">
                <span><Phone size={18} /></span>
                <div>
                  <small>CALL US</small>
                  <strong>+91 89799 77705</strong>
                </div>
              </a>

              <a href="tel:+919411717705">
                <span><Phone size={18} /></span>
                <div>
                  <small>ALTERNATE NUMBER</small>
                  <strong>+91 94117 17705</strong>
                </div>
              </a>

              <a href="mailto:info@paltravels.co.in">
                <span><Mail size={18} /></span>
                <div>
                  <small>EMAIL</small>
                  <strong>info@paltravels.co.in</strong>
                </div>
              </a>

              <div>
                <span><MapPin size={18} /></span>
                <div>
                  <small>OFFICE</small>
                  <strong>Near Bus Stand, Opp. Haridwar Railway Station, Haridwar – 249407</strong>
                </div>
              </div>

              <div>
                <span><Clock3 size={18} /></span>
                <div>
                  <small>OPENING HOURS</small>
                  <strong>Mon–Sat: 9 AM–10 PM · Sun: 9 AM–7 PM</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="map-card">
            <iframe
              title="Pal Travels location"
              src="https://www.google.com/maps?q=Haridwar%20Railway%20Station%2C%20Haridwar%2C%20Uttarakhand&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-overlay-card">
              <MapPin size={17} />
              <div>
                <strong>Pal Travels</strong>
                <span>Opp. Haridwar Railway Station</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
