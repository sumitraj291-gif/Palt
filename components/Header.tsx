"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/images/logo-light.png"
            alt="Pal Travels"
            className="logo-image"
            width={405}
            height={213}
          />
        </Link>

        {/* Navigation */}
        <nav className={`main-nav ${menuOpen ? "mobile-open" : ""}`}>

          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          {/* Taxi Services */}
          <div className={`nav-dropdown ${openDropdown === "taxi" ? "mobile-submenu-open" : ""}`}>
            <Link href="/taxi-services" onClick={closeMenu}>
              Taxi Services
              <ChevronDown size={15} />
            </Link>

            <button
              type="button"
              className="dropdown-toggle"
              aria-label="Toggle Taxi Services submenu"
              aria-expanded={openDropdown === "taxi"}
              aria-controls="taxi-services-menu"
              onClick={() => setOpenDropdown(openDropdown === "taxi" ? null : "taxi")}
            >
              <ChevronDown size={17} />
            </button>

            <div className="dropdown-menu" id="taxi-services-menu">
              <Link href="/taxi-services" onClick={closeMenu}>All Taxi Services</Link>
              <Link href="/taxi-services/local" onClick={closeMenu}>Local Taxi</Link>
              <Link href="/taxi-services/outstation" onClick={closeMenu}>Outstation Taxi</Link>
              <Link href="/taxi-services/one-way" onClick={closeMenu}>One Way Taxi</Link>
              <Link href="/taxi-services/round-trip" onClick={closeMenu}>Round Trip Taxi</Link>
              <Link href="/taxi-services/tempo-traveller" onClick={closeMenu}>
                Tempo Traveller
              </Link>
            </div>
          </div>

          {/* Tour Packages */}
          <div className={`nav-dropdown ${openDropdown === "tours" ? "mobile-submenu-open" : ""}`}>
            <Link href="/tour-packages" onClick={closeMenu}>
              Tour Packages
              <ChevronDown size={15} />
            </Link>

            <button
              type="button"
              className="dropdown-toggle"
              aria-label="Toggle Tour Packages submenu"
              aria-expanded={openDropdown === "tours"}
              aria-controls="tour-packages-menu"
              onClick={() => setOpenDropdown(openDropdown === "tours" ? null : "tours")}
            >
              <ChevronDown size={17} />
            </button>

            <div className="dropdown-menu" id="tour-packages-menu">
              <Link href="/tour-packages/uttarakhand" onClick={closeMenu}>
                Uttarakhand
              </Link>
              <Link href="/tour-packages/himachal" onClick={closeMenu}>
                Himachal
              </Link>
              <Link href="/tour-packages/kashmir" onClick={closeMenu}>
                Kashmir
              </Link>
              <Link href="/tour-packages/rajasthan" onClick={closeMenu}>
                Rajasthan
              </Link>
              <Link href="/tour-packages/delhi-agra" onClick={closeMenu}>
                Delhi &amp; Agra
              </Link>
              <Link href="/tour-packages/jim-corbett" onClick={closeMenu}>
                Jim Corbett
              </Link>
            </div>
          </div>

          <div className={`nav-dropdown ${openDropdown === "chardham" ? "mobile-submenu-open" : ""}`}>
            <Link href="/chardham-yatra" onClick={closeMenu}>
              Chardham Yatra
              <ChevronDown size={15} />
            </Link>

            <button
              type="button"
              className="dropdown-toggle"
              aria-label="Toggle Chardham Yatra submenu"
              aria-expanded={openDropdown === "chardham"}
              aria-controls="chardham-menu"
              onClick={() => setOpenDropdown(openDropdown === "chardham" ? null : "chardham")}
            >
              <ChevronDown size={17} />
            </button>

            <div className="dropdown-menu" id="chardham-menu">
              <Link href="/chardham-yatra" onClick={closeMenu}>Chardham Yatra</Link>
              <Link href="/chardham-yatra/do-dham" onClick={closeMenu}>Do Dham Yatra</Link>
              <Link href="/chardham-yatra/helicopter" onClick={closeMenu}>Helicopter Yatra</Link>
              <Link href="/chardham-yatra/taxi-packages" onClick={closeMenu}>Taxi Chardham Packages</Link>
              <Link href="/chardham-yatra/package-details" onClick={closeMenu}>Package Details</Link>
            </div>
          </div>

          <Link href="/destinations" onClick={closeMenu}>
            Destinations
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About Us
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          {/* Mobile Actions */}
          <div className="mobile-nav-actions">

            <a
              href="tel:+918979977705"
              className="mobile-call"
            >
              <Phone size={17} />
              +91 89799 77705
            </a>

            <a
              href="https://wa.me/918979977705"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-whatsapp"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions">

          <a
            href="tel:+918979977705"
            className="header-phone"
          >
            <Phone size={16} />
            <span>+91 89799 77705</span>
          </a>

          <a
            href="https://wa.me/918979977705"
            target="_blank"
            rel="noopener noreferrer"
            className="header-book"
          >
            <MessageCircle size={17} />
            <span>Book Now</span>
          </a>

        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}