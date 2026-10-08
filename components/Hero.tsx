// components/Hero.tsx
"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  MapPinned,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";

const slides = [
  {
    image: "/images/hero/taxi-service-hero.webp",
    title: "Explore More.",
    highlight: "Travel Better.",
    text: "Reliable taxi services, comfortable rides and seamless travel across Haridwar and Uttarakhand.",
    primary: "Explore Taxi Services",
    primaryHref: "/taxi-services",
    secondary: "Get a Free Quote",
    secondaryHref: "#booking",
  },
  {
    image: "/images/hero/chardham-hero.webp",
    title: "Divine Journeys.",
    highlight: "Chardham Yatra.",
    text: "Travel to Yamunotri, Gangotri, Kedarnath and Badrinath with dependable taxi and tour support.",
    primary: "Explore Chardham",
    primaryHref: "/chardham-yatra",
    secondary: "Plan Your Yatra",
    secondaryHref: "#booking",
  },
  {
    image: "/images/hero/chardham-hero2.webp",
    title: "Divine Journeys.",
    highlight: "Chardham Yatra.",
    text: "Travel to Yamunotri, Gangotri, Kedarnath and Badrinath with dependable taxi and tour support.",
    primary: "Explore Chardham",
    primaryHref: "/chardham-yatra",
    secondary: "Plan Your Yatra",
    secondaryHref: "#booking",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const slide = slides[active];

  const goPrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActive((prev) => (prev + 1) % slides.length);

  return (
    <section className="hero-section" id="booking">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          className="hero-bg"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.1, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            quality={75}
            priority={active === 0}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="hero-overlay" />
      <div className="hero-vignette" />

      <div className="hero-container">
        <motion.div
          key={`content-${active}`}
          className="hero-content"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.65 }}
        >
          <div className="hero-badge">
            <Star size={14} fill="currentColor" />
            {active === 0 ? "Trusted Taxi & Travel Partner" : "Trusted Chardham Travel Partner"}
          </div>

          <h1>
            {slide.title}
            <br />
            <span>{slide.highlight}</span>
          </h1>

          <p>{slide.text}</p>

          <div className="hero-buttons">
            <a href={slide.primaryHref} className="hero-primary-btn">
              {slide.primary}
            </a>
            <a href={slide.secondaryHref} className="hero-secondary-btn">
              {slide.secondary}
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <ShieldCheck size={23} />
              <span>
                <strong>Safe Travel</strong>
                <small>Trusted Service</small>
              </span>
            </div>
            <div>
              <Clock3 size={23} />
              <span>
                <strong>24×7 Support</strong>
                <small>Always Available</small>
              </span>
            </div>
            <div>
              <MapPinned size={23} />
              <span>
                <strong>Wide Coverage</strong>
                <small>Travel Across Uttarakhand</small>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-booking"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.75, delay: 0.1 }}
        >
          <BookingForm />
        </motion.div>
      </div>

      <div className="hero-slider-controls">
        <button type="button" onClick={goPrev} aria-label="Previous slide">
          <ChevronLeft size={18} />
        </button>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button type="button" onClick={goNext} aria-label="Next slide">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="hero-slide-label">
        <span>0{active + 1}</span>
        <i />
        <span>02</span>
        <small>{active === 0 ? "TAXI SERVICES" : "CHARDHAM YATRA"}</small>
      </div>
    </section>
  );
}
