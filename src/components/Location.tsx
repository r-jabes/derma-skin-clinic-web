import { ArrowUpRight, Mail, Navigation } from "lucide-react";
import { HoursTable } from "@/components/HoursTable";
import { site } from "@/lib/site";

export function Location() {
  const { lat, lng } = site.location;
  const d = 0.0045;
  const bbox = [lng - d, lat - d, lng + d, lat + d].join("%2C");
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <section
      id="clinic"
      className="section-pad"
      aria-labelledby="clinic-heading"
    >
      <div className="container-wide grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Find us</p>
          <h2
            id="clinic-heading"
            className="h-display mt-5 text-[clamp(2.4rem,5vw,4rem)] text-forest"
          >
            Lemigo Hotel, <em>Gishushu</em>.
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-[1.7] text-muted">
            A modern dermatology clinic in one of Kigali&apos;s most accessible
            districts, open six days a week for consultations and treatment.
          </p>

          <div className="mt-10">
            <HoursTable />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={site.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-outline">
              <Mail className="h-4 w-4" aria-hidden />
              Email the clinic
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-1 flex flex-col">
          <div className="image-frame relative min-h-[22rem] flex-1 lg:min-h-[32rem]">
            <iframe
              title="Map showing Derma Skin Clinic Rwanda at Lemigo Hotel, Gishushu, Kigali"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="map-tint absolute inset-0 h-full w-full border-0"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border border-t-0 border-[var(--line)] bg-paper px-5 py-4 text-sm">
            <p className="text-forest">{site.location.full}</p>
            <a
              href={site.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 font-semibold text-forest"
            >
              Open in Google Maps
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
