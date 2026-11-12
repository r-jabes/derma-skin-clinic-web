import Image from "next/image";
import { images } from "@/lib/site";

export function Clinician() {
  return (
    <section
      id="team"
      className="section-pad bg-forest-deep text-ivory on-dark"
      aria-labelledby="team-heading"
    >
      <div className="container-wide grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <figure className="reveal relative">
          <div className="image-frame relative aspect-[4/3] bg-forest">
            <Image
              src={images.consultation.src}
              alt={images.consultation.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-[35%_30%]"
            />
          </div>
          <figcaption className="mt-3 text-xs text-ivory/50">
            Illustrative image of a clinical consultation.
          </figcaption>
        </figure>

        <div className="reveal reveal-delay-1">
          <p className="eyebrow">Clinical leadership</p>
          <h2
            id="team-heading"
            className="h-display on-dark mt-5 text-[clamp(2.3rem,4.6vw,3.7rem)]"
          >
            Care directed by <em>dermatology</em> professionals.
          </h2>
          <p className="mt-6 max-w-xl text-[1.04rem] leading-[1.75] text-ivory/70">
            Consultations at Derma Skin Clinic Rwanda are dermatologist-led.
            The clinic has publicly featured{" "}
            <span className="text-ivory">Dr. Albin Irakarama</span>, a
            Consultant Dermato-venereologist and Vice Chairperson of the
            Rwanda Dermatology Society, in its own content.
          </p>

          <div className="mt-9 flex items-center gap-5 border border-[var(--line-light)] p-5">
            <div className="grid h-16 w-16 shrink-0 place-items-center bg-forest font-display text-xl tracking-wider text-sand-soft">
              AI
            </div>
            <div>
              <p className="font-display text-2xl leading-tight">
                Dr. Albin Irakarama
              </p>
              <p className="mt-1 text-sm text-ivory/60">
                MD, MMed, MPH · Consultant Dermato-venereologist
              </p>
              <p className="mt-1 text-[0.7rem] tracking-wide text-sand-soft">
                Official portrait to be supplied by the clinic
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/55">
            Other clinicians are associated with the wider Derma Skin Clinic
            network. Contact the Kigali clinic for the current team and
            appointment availability.
          </p>
        </div>
      </div>
    </section>
  );
}
