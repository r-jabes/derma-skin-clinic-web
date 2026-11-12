"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { cosmeticTreatments, medicalConcerns, whatsappLink } from "@/lib/site";

const tabs = [
  { id: "medical", label: "Medical dermatology", items: medicalConcerns },
  { id: "aesthetic", label: "Aesthetic procedures", items: cosmeticTreatments },
] as const;

export function CareTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("medical");
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  function onKeyDown(e: KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      (index + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div
      id="concerns"
      className="reveal mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
    >
      <div>
        <p className="eyebrow">Concerns &amp; treatments</p>
        <h3 className="h-display mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)] text-forest">
          Find where <em>you</em> fit.
        </h3>

        <div
          role="tablist"
          aria-label="Care categories"
          className="mt-8 flex flex-col border-l border-[var(--line)]"
        >
          {tabs.map((tab, i) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`-ml-px border-l-2 py-3.5 pl-6 text-left text-lg transition-all duration-300 ${
                  selected
                    ? "border-forest font-semibold text-forest"
                    : "border-transparent text-muted hover:text-forest"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <a
          href={whatsappLink(
            "Hello Derma Skin Clinic Rwanda — I would like advice on which treatment suits me.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-10 inline-flex items-center gap-2 text-sm font-semibold text-forest"
        >
          Not sure? Ask the clinic on WhatsApp
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        key={current.id}
        className="rise"
      >
        <ol className="border-t border-[var(--line)]">
          {current.items.map((item, i) => (
            <li
              key={item.title}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 border-b border-[var(--line)] py-7 transition-colors duration-300 hover:bg-paper md:grid-cols-[3.5rem_1fr_auto] md:px-3"
            >
              <span className="font-display pt-1 text-xl text-sand-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-display text-[1.6rem] leading-tight text-forest md:text-[1.9rem]">
                  {item.title}
                </h4>
                <p className="mt-2 max-w-xl text-[0.97rem] leading-relaxed text-muted">
                  {item.copy}
                </p>
              </div>
              <ArrowUpRight
                className="mt-2 h-5 w-5 -translate-x-1 translate-y-1 text-sand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                aria-hidden
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
