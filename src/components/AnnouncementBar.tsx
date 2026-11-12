import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function AnnouncementBar() {
  return (
    <div className="bg-forest-deep text-ivory/85">
      <div className="container-wide flex items-center justify-between gap-4 py-2 text-[0.72rem] tracking-[0.04em]">
        <p className="truncate">
          <span className="hidden sm:inline">Open Monday–Saturday · 9:00–18:00</span>
          <span className="sm:hidden">Mon–Sat · 9:00–18:00</span>
          <span className="mx-3 hidden text-ivory/30 md:inline">|</span>
          <span className="hidden md:inline">
            Insurance accepted: {site.insurers.join(", ")}
          </span>
        </p>
        <a
          href={site.phones[0].href}
          className="inline-flex shrink-0 items-center gap-2 font-semibold text-ivory transition-colors hover:text-sand-soft"
        >
          <Phone className="h-3 w-3" aria-hidden />
          {site.phones[0].label}
        </a>
      </div>
    </div>
  );
}
