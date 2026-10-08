import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import BookingLink from "@/components/BookingLink";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Image src="/images/logo-light.png" alt="Pal Travels" width={405} height={213} />
            <p>
              Taxi services, tour & travel and Chardham Yatra support from
              Haridwar for local, outstation and multi-day journeys.
            </p>
            <a href="https://wa.me/918979977705" target="_blank" rel="noreferrer" className="footer-wa">
              <MessageCircle size={16} /> WhatsApp Booking
            </a>
          </div>

          <div className="footer-column">
            <h3>Taxi Services</h3>
            <Link href="/taxi-services/local">Local Taxi</Link>
            <Link href="/taxi-services/outstation">Outstation Taxi</Link>
            <Link href="/taxi-services/one-way">One Way Taxi</Link>
            <Link href="/taxi-services/round-trip">Round Trip Taxi</Link>
            <Link href="/taxi-services/tempo-traveller">Tempo Traveller</Link>
          </div>

          <div className="footer-column">
            <h3>Travel</h3>
            <a href="/tour-packages">Tour Packages</a>
            <Link href="/chardham-yatra">Chardham Yatra</Link>
            <Link href="/destinations">Destinations</Link>
            <BookingLink>Get a Quote</BookingLink>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>
            <a href="tel:+918979977705"><Phone size={14} /> +91 89799 77705</a>
            <a href="tel:+919411717705"><Phone size={14} /> +91 94117 17705</a>
            <a href="mailto:info@paltravels.co.in"><Mail size={14} /> info@paltravels.co.in</a>
            <span><ArrowUpRight size={14} /> Haridwar, Uttarakhand</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pal Travels. All rights reserved.</span>
          <span>Taxi Services · Tour & Travel · Chardham Yatra</span>
        </div>
      </div>
    </footer>
  );
}
