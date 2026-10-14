"use client";

import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/data";

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Pal Travels! I would like to enquire about taxi and tour services."
  )}`;
  const callUrl = `tel:${site.phoneLink}`;

  return (
    <>
      {/* Mobile Floating Bottom Bar (Screens below md: 768px) */}
      <aside
        aria-label="Quick contact options"
        className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] md:hidden"
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          {/* Call Button */}
          <a
            href={callUrl}
            aria-label={`Call Pal Travels at ${site.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#163d34] text-white font-semibold text-sm shadow-sm active:scale-[0.98] transition-all hover:bg-[#102e28]"
          >
            <Phone size={17} className="shrink-0" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Pal Travels on WhatsApp"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-sm active:scale-[0.98] transition-all hover:bg-[#20ba59]"
          >
            <MessageCircle size={18} className="shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>

      {/* Desktop Floating Action Buttons (Screens md and up: 768px+) */}
      <aside
        aria-label="Quick contact buttons"
        className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3 pointer-events-none"
      >
        {/* Floating Call Button */}
        <a
          href={callUrl}
          aria-label={`Call Pal Travels at ${site.phone}`}
          className="group pointer-events-auto flex items-center gap-2.5 bg-[#163d34] text-white pl-4 pr-3 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#102e28] transition-all duration-300 hover:-translate-y-0.5 border border-white/10"
        >
          <span className="text-xs font-semibold tracking-wide text-white/95">
            Call {site.phone}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
            <Phone size={16} />
          </div>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Pal Travels on WhatsApp"
          className="group pointer-events-auto relative flex items-center gap-2.5 bg-[#25D366] text-white pl-4 pr-3 py-2.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] hover:bg-[#20ba59] transition-all duration-300 hover:-translate-y-0.5"
        >
          {/* Subtle pulse ring animation */}
          <span className="absolute -inset-0.5 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-70" />

          <span className="relative text-xs font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
          <div className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle size={18} />
          </div>
        </a>
      </aside>
    </>
  );
}
