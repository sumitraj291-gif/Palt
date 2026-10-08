import { ArrowRight, CheckCircle2 } from "lucide-react";
import BookingLink from "@/components/BookingLink";
import Link from "next/link";
import Image from "next/image";

const dhams = [
  ["01", "Yamunotri", "Sacred source of the Yamuna River."],
  ["02", "Gangotri", "The holy origin of the Ganga."],
  ["03", "Kedarnath", "A revered Himalayan Jyotirlinga pilgrimage."],
  ["04", "Badrinath", "A sacred Vishnu temple in the Himalayas."],
];

export default function ChardhamSection() {
  return (
    <section className="chardham-section">
      <div className="section-container">
        <div className="chardham-layout">
          <div className="chardham-image-wrap">
            <Image
              src="/images/hero/chardham-hero.webp"
              alt="Yamunotri, Gangotri, Kedarnath and Badrinath"
              className="chardham-image"
              width={1200}
              height={750}
            />
            <div className="chardham-image-badge">
              <strong>4</strong>
              <span>Holy Dhams</span>
            </div>
          </div>

          <div className="chardham-content">
            <span className="section-eyebrow">CHARDHAM YATRA</span>
            <h2>
              A Sacred Journey Through
              <span> The Himalayas.</span>
            </h2>

            <p className="chardham-intro">
              Experience a thoughtfully planned Chardham Yatra with dependable
              taxi service, comfortable travel and local assistance throughout
              your pilgrimage.
            </p>

            <div className="dham-list">
              {dhams.map(([number, name, text]) => (
                <div className="dham-item" key={name}>
                  <span className="dham-number">{number}</span>
                  <div>
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                  <CheckCircle2 size={19} />
                </div>
              ))}
            </div>

            <div className="chardham-actions">
              <Link href="/chardham-yatra" className="chardham-primary">
                Explore Chardham Yatra <ArrowRight size={17} />
              </Link>
              <BookingLink className="chardham-secondary">
                Plan Your Journey
              </BookingLink>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
              {[
                ["Do Dham Yatra", "/chardham-yatra/do-dham"],
                ["Helicopter Yatra", "/chardham-yatra/helicopter"],
                ["Taxi Packages", "/chardham-yatra/taxi-packages"],
                ["Package Details", "/chardham-yatra/package-details"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex min-h-11 items-center justify-between gap-2 rounded-lg border border-[#e3e9e6] px-4 py-3 text-sm font-semibold text-[#0b5d50] transition hover:border-[#0b5d50] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5d50]"
                >
                  {label} <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
