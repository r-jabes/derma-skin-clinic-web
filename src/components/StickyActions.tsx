"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export function StickyActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = whatsappLink(
    "Hello Derma Skin Clinic Rwanda — I would like to enquire about a consultation.",
  );

  return (
    <>
      {/* Mobile / tablet action bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl transition-transform duration-500 lg:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto grid max-w-xl grid-cols-[1fr_auto_auto] gap-2 p-3">
          <a href="#book" className="btn btn-primary !min-h-12 w-full">
            <CalendarCheck className="h-4 w-4" aria-hidden />
            Book a Consultation
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="btn btn-outline !min-h-12 !px-4"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
          </a>
          <a
            href={site.phones[0].href}
            aria-label={`Call ${site.phones[0].label}`}
            className="btn btn-outline !min-h-12 !px-4"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Derma Skin Clinic on WhatsApp"
        className={`fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 bg-forest px-5 py-3.5 text-sm font-semibold text-ivory shadow-[0_20px_40px_-20px_rgba(15,40,35,0.7)] transition-all duration-500 hover:bg-forest-deep lg:inline-flex ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        Chat on WhatsApp
      </a>
    </>
  );
}
