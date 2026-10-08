"use client";

import {
  MapPin,
  Navigation,
  CalendarDays,
  Users,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { FormEvent, useState } from "react";
import { site } from "@/lib/data";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const mobile = formData.get("mobile")?.toString().trim();
    const from = formData.get("from")?.toString().trim();
    const destination = formData.get("destination")?.toString().trim();
    const travelDate = formData.get("travelDate")?.toString();
    const passengers = formData.get("passengers")?.toString();

    if (
      !name ||
      !mobile ||
      !from ||
      !destination ||
      !travelDate ||
      !passengers
    ) {
      alert("Please fill all the details.");
      setIsSubmitting(false);
      return;
    }

    // Convert date into DD Month YYYY format
    const formattedDate = new Date(
      `${travelDate}T00:00:00`
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const message = `Hello Pal Travels,

I would like to enquire about a taxi booking.

Name: ${name}
Mobile: ${mobile}
From: ${from}
To: ${destination}
Travel Date: ${formattedDate}
Passengers: ${passengers}

Please share the available taxi options and fare.

Thank you.
Pal Travels`;

    const whatsappURL = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setIsSubmitting(false);
  };

  return (
    <div className="booking-card">

      <div className="booking-header">
        <span>QUICK BOOKING</span>

        <h2>Plan Your Journey</h2>

        <p>
          Tell us your travel details and get a quick quote.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">
            Your Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Mobile */}
        <div className="form-group">
          <label htmlFor="mobile">
            Mobile Number
          </label>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="Enter mobile number"
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />
        </div>

        {/* From / To */}
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="from">
              From
            </label>

            <div className="input-icon">
              <MapPin size={16} />

              <input
                id="from"
                name="from"
                type="text"
                placeholder="Pickup location"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="destination">
              To
            </label>

            <div className="input-icon">
              <Navigation size={16} />

              <input
                id="destination"
                name="destination"
                type="text"
                placeholder="Destination"
                required
              />
            </div>
          </div>

        </div>

        {/* Date / Passengers */}
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="travelDate">
              Travel Date
            </label>

            <div className="input-icon">
              <CalendarDays size={16} />

              <input
                id="travelDate"
                name="travelDate"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="passengers">
              Passengers
            </label>

            <div className="input-icon">
              <Users size={16} />

              <select
                id="passengers"
                name="passengers"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select
                </option>

                <option value="1 Passenger">
                  1 Passenger
                </option>

                <option value="2 Passengers">
                  2 Passengers
                </option>

                <option value="3 Passengers">
                  3 Passengers
                </option>

                <option value="4 Passengers">
                  4 Passengers
                </option>

                <option value="5 Passengers">
                  5 Passengers
                </option>

                <option value="6+ Passengers">
                  6+ Passengers
                </option>
              </select>
            </div>
          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="booking-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              Opening WhatsApp...
            </>
          ) : (
            <>
              <MessageCircle size={17} />
              Get Free Quote on WhatsApp
              <ArrowRight size={17} />
            </>
          )}
        </button>

      </form>

      <div className="booking-footer">
        No booking charges • Quick response • 24×7 assistance
      </div>

    </div>
  );
}