import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CareTabs } from "@/components/CareTabs";
import { images } from "@/lib/site";

export function Care() {
  return (
    <section id="care" className="section-pad" aria-labelledby="care-heading">
      <div className="container-wide">
        <div className="reveal grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">What we care for</p>
            <h2
              id="care-heading"
              className="h-display mt-5 max-w-3xl text-[clamp(2.4rem,5.4vw,4.4rem)] text-forest"
            >
              Skin health first. <em>Confidence</em> follows.
            </h2>
          </div>
          <p className="max-w-md text-[1.05rem] leading-[1.7] text-muted lg:justify-self-end">
            Two sides of one practice: diagnosing and treating medical skin
            conditions, and offering considered aesthetic procedures, all led
            by dermatologists.
          </p>
        </div>

        {/* Image cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <article className="reveal group relative min-h-[28rem] overflow-hidden bg-forest-deep text-ivory lg:col-span-7 lg:min-h-[36rem]">
            <div className="image-zoom absolute inset-0">
              <Image
                src={images.medical.src}
                alt={images.medical.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-[50%_28%]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/35 to-transparent" />
            <div className="relative flex h-full min-h-[28rem] flex-col justify-end p-7 lg:min-h-[36rem] lg:p-10">
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-sand-soft">
                01 · Medical dermatology
              </p>
              <h3 className="font-display mt-3 max-w-md text-[clamp(2rem,3.6vw,3rem)] leading-[1.05]">
                Diagnose. Treat. Restore comfort.
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-ivory/75">
                From acne and sensitive skin to pigmentation and longer-term
                conditions, with clear next steps at every visit.
              </p>
              <a
                href="#concerns"
                className="mt-7 inline-flex w-fit items-center gap-2 border-b border-ivory/40 pb-1 text-sm font-semibold transition-colors hover:border-ivory"
              >
                See medical concerns
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </article>

          <article className="reveal reveal-delay-1 group relative min-h-[28rem] overflow-hidden bg-stone lg:col-span-5 lg:mt-14 lg:min-h-[36rem]">
            <div className="image-zoom absolute inset-0">
              <Image
                src={images.cosmetic.src}
                alt={images.cosmetic.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
            <div className="relative flex h-full min-h-[28rem] flex-col justify-end p-7 text-ivory lg:min-h-[36rem] lg:p-9">
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-sand-soft">
                02 · Cosmetic &amp; aesthetic
              </p>
              <h3 className="font-display mt-3 text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.05]">
                Refine texture, tone and presence.
              </h3>
              <p className="mt-4 leading-relaxed text-ivory/75">
                Procedures discussed openly, with suitability confirmed by a
                clinician.
              </p>
              <a
                href="#concerns"
                className="mt-7 inline-flex w-fit items-center gap-2 border-b border-ivory/40 pb-1 text-sm font-semibold transition-colors hover:border-ivory"
              >
                See aesthetic care
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </article>
        </div>

        <CareTabs />
      </div>
    </section>
  );
}
