"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const quickPicks = [
  "Acne & breakouts",
  "Pigmentation",
  "Eczema & sensitive skin",
  "Laser hair removal",
  "General consultation",
] as const;

const field =
  "peer w-full border-0 border-b border-charcoal/25 bg-transparent px-0 pb-2.5 pt-6 text-[1rem] text-charcoal placeholder-transparent outline-none transition-colors focus:border-forest focus-visible:outline-none";

const label =
  "pointer-events-none absolute left-0 top-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-muted transition-colors peer-focus:text-forest";

export function EnquiryForm() {
  const [concern, setConcern] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const date = String(data.get("date") || "").trim();

    const message = [
      "Hello Derma Skin Clinic Rwanda — consultation enquiry",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Concern / treatment interest: ${concern.trim() || "General consultation"}`,
      `Preferred date: ${date || "Flexible"}`,
      "",
      "Please let me know available times. Thank you.",
    ].join("\n");

    setSent(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="relative">
          <input
            required
            id="enq-name"
            name="name"
            autoComplete="name"
            placeholder="Full name"
            className={field}
          />
          <label htmlFor="enq-name" className={label}>
            Full name
          </label>
        </div>
        <div className="relative">
          <input
            required
            id="enq-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Contact number"
            className={field}
          />
          <label htmlFor="enq-phone" className={label}>
            Contact number
          </label>
        </div>
      </div>

      <div>
        <div className="relative">
          <input
            id="enq-concern"
            name="concern"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            placeholder="Treatment or concern"
            className={field}
          />
          <label htmlFor="enq-concern" className={label}>
            Treatment or concern
          </label>
        </div>
        <div
          className="mt-4 flex flex-wrap gap-2"
          role="group"
          aria-label="Quick concern suggestions"
        >
          {quickPicks.map((pick) => {
            const on = concern === pick;
            return (
              <button
                key={pick}
                type="button"
                aria-pressed={on}
                onClick={() => setConcern(on ? "" : pick)}
                className={`border px-3 py-1.5 text-[0.78rem] font-medium transition-colors ${
                  on
                    ? "border-forest bg-forest text-ivory"
                    : "border-charcoal/20 text-charcoal/75 hover:border-forest hover:text-forest"
                }`}
              >
                {pick}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <input
          id="enq-date"
          name="date"
          type="date"
          placeholder="Preferred date"
          className={`${field} min-h-[3.1rem] appearance-none`}
        />
        <label htmlFor="enq-date" className={label}>
          Preferred appointment date
        </label>
      </div>

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.78rem] leading-relaxed text-muted">
          Opens WhatsApp with your details. This is an enquiry, not a confirmed
          appointment.
        </p>
        <button type="submit" className="btn btn-primary shrink-0">
          Send WhatsApp Enquiry
          <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
        </button>
      </div>

      {sent && (
        <p className="text-sm text-forest" role="status">
          WhatsApp should have opened. If not, call {site.phones[0].label}.
        </p>
      )}
    </form>
  );
}
