"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, site, whatsappLink } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const wa = whatsappLink(
    "Hello Derma Skin Clinic Rwanda — I would like to enquire about a consultation.",
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-[var(--line)] bg-ivory/90 backdrop-blur-xl"
          : "border-transparent bg-ivory"
      }`}
    >
      <div className="container-wide flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav
          className="hidden items-center gap-9 xl:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-[0.88rem] font-medium text-charcoal/80 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[0.88rem] font-medium text-forest"
          >
            WhatsApp
          </a>
          <a href="#book" className="btn btn-primary !min-h-11 !px-5">
            Book a Consultation
            <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-forest/20 text-forest xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile full-height menu */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto bg-ivory transition-all duration-500 xl:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav
          className="container-wide flex min-h-full flex-col pb-10 pt-6"
          aria-label="Mobile"
        >
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-baseline justify-between py-5"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-display text-[2.1rem] leading-none text-forest">
                    {link.label}
                  </span>
                  <span className="text-xs tracking-widest text-sand-deep">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#book"
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Book a Consultation
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full"
              onClick={() => setOpen(false)}
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-auto pt-10 text-sm text-muted">
            <p className="text-forest">{site.location.full}</p>
            <p className="mt-1">{site.hours}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
