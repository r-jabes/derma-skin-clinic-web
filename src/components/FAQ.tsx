"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-pad bg-stone/45"
      aria-labelledby="faq-heading"
    >
      <div className="container-wide grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="reveal lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">FAQ</p>
          <h2
            id="faq-heading"
            className="h-display mt-5 text-[clamp(2.4rem,5vw,4rem)] text-forest"
          >
            Answers <em>before</em> you visit.
          </h2>
          <p className="mt-6 max-w-sm leading-[1.7] text-muted">
            Practical details from the clinic&apos;s public information. Please
            confirm specifics when you book.
          </p>
        </div>

        <div className="reveal reveal-delay-1 border-t border-[var(--line)]">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.q} className="border-b border-[var(--line)]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="group flex w-full items-start gap-5 py-6 text-left"
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="font-display w-8 shrink-0 pt-1 text-lg text-sand-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display flex-1 text-[1.45rem] leading-snug text-forest transition-colors group-hover:text-forest-deep md:text-[1.7rem]">
                      {item.q}
                    </span>
                    <span
                      className={`mt-1.5 grid h-8 w-8 shrink-0 place-items-center border transition-all duration-300 ${
                        open
                          ? "rotate-45 border-forest bg-forest text-ivory"
                          : "border-charcoal/25 text-forest group-hover:border-forest"
                      }`}
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pl-[3.25rem] pr-12 text-[1rem] leading-[1.75] text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
