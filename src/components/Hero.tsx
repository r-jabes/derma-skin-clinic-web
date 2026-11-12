import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { images, site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-wide grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24 lg:pt-16">
        {/* Copy */}
        <div className="relative z-10 lg:pr-6">
          <p className="rise eyebrow">Medical &amp; cosmetic dermatology · Kigali</p>

          <h1 className="rise rise-1 h-display mt-7 text-[clamp(3.1rem,8.2vw,6.6rem)] text-forest">
            Your journey to <em>clear skin</em> starts here.
          </h1>

          <p className="rise rise-2 mt-8 max-w-lg text-[1.08rem] leading-[1.7] text-muted">
            Dermatologist-led care for medical skin concerns and refined
            aesthetic treatment, in the heart of Gishushu. Every plan begins
            with a proper consultation.
          </p>

          <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-3">
            <a href="#book" className="btn btn-primary">
              Book a Consultation
              <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </a>
            <a href="#care" className="btn btn-outline">
              Explore Treatments
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <dl className="rise rise-4 mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--line)] pt-7 sm:grid-cols-3">
            <div>
              <dt className="text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-sand-deep">
                Consultation
              </dt>
              <dd className="font-display mt-1.5 text-[1.7rem] leading-none text-forest">
                {site.consultationFee}
              </dd>
            </div>
            <div>
              <dt className="text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-sand-deep">
                Open
              </dt>
              <dd className="font-display mt-1.5 text-[1.7rem] leading-none text-forest">
                Mon–Sat
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-sand-deep">
                Insurance
              </dt>
              <dd className="mt-1.5 text-[0.95rem] font-medium leading-snug text-forest">
                {site.insurers.join(" · ")}
              </dd>
            </div>
          </dl>
        </div>

        {/* Imagery */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div className="arch image-frame rise rise-2 relative aspect-[4/5] w-full lg:ml-auto lg:max-w-[30rem]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="settle object-cover object-[50%_30%]"
            />
          </div>

          <div className="rise rise-4 absolute -left-2 bottom-8 w-[52%] max-w-[16rem] border-[6px] border-ivory bg-ivory shadow-[0_30px_60px_-30px_rgba(15,40,35,0.45)] sm:-left-6 lg:left-0">
            <div className="image-frame relative aspect-[4/3]">
              <Image
                src={images.treatment.src}
                alt={images.treatment.alt}
                fill
                sizes="256px"
                className="object-cover object-[40%_40%]"
              />
            </div>
            <p className="bg-forest px-3 py-2 text-[0.64rem] font-semibold tracking-[0.18em] uppercase text-ivory">
              Clinical care
            </p>
          </div>

          <p className="rise rise-4 absolute right-0 top-8 hidden items-center gap-2 bg-ivory/90 px-3 py-2 text-[0.72rem] font-medium text-forest backdrop-blur md:inline-flex lg:-right-2">
            <MapPin className="h-3.5 w-3.5 text-sand-deep" aria-hidden />
            Gishushu · Kigali
          </p>
        </div>
      </div>
    </section>
  );
}
