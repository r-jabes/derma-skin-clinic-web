import Image from "next/image";
import { images } from "@/lib/site";

const tiles = [
  {
    img: images.man,
    label: "Daily care",
    className: "md:mt-0 aspect-[4/5]",
    pos: "object-[50%_30%]",
  },
  {
    img: images.texture,
    label: "Texture & tone",
    className: "md:mt-16 aspect-[4/5]",
    pos: "object-[50%_40%]",
  },
  {
    img: images.serum,
    label: "Targeted treatment",
    className: "md:mt-6 aspect-[4/5]",
    pos: "object-[62%_50%]",
  },
] as const;

export function Gallery() {
  return (
    <section
      className="section-pad overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="container-wide">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Inclusive skincare</p>
            <h2
              id="gallery-heading"
              className="h-display mt-5 max-w-2xl text-[clamp(2.4rem,5vw,4rem)] text-forest"
            >
              Healthy skin, in <em>every</em> tone.
            </h2>
          </div>
          <p className="max-w-sm leading-[1.7] text-muted">
            Dermatology that understands melanin-rich skin: how it reacts, how
            it marks, and how to treat it with care.
          </p>
        </div>

        <div className="no-scrollbar -mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {tiles.map((tile, i) => (
            <figure
              key={tile.label}
              className={`reveal ${
                i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""
              } group w-[72%] shrink-0 snap-start sm:w-[45%] md:w-auto ${tile.className.split(" ")[0]}`}
            >
              <div
                className={`image-frame image-zoom ${tile.className.split(" ")[1]}`}
              >
                <Image
                  src={tile.img.src}
                  alt={tile.img.alt}
                  fill
                  sizes="(max-width: 768px) 72vw, 25vw"
                  className={`object-cover ${tile.pos}`}
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between border-b border-[var(--line)] pb-3 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-forest">
                {tile.label}
                <span className="text-sand-deep">0{i + 1}</span>
              </figcaption>
            </figure>
          ))}

          <div className="reveal reveal-delay-3 flex w-[72%] shrink-0 snap-start flex-col justify-between bg-forest p-7 text-ivory sm:w-[45%] md:mt-24 md:aspect-[4/5] md:w-auto">
            <p className="font-display text-[1.7rem] leading-[1.15]">
              Treatment plans shaped around your skin, your goals, your
              pace.
            </p>
            <a
              href="#book"
              className="link-underline mt-8 w-fit text-sm font-semibold"
            >
              Start with a consultation
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted/80">
          Imagery is illustrative stock photography, shown until Derma Skin
          Clinic Rwanda&apos;s own photography is available.
        </p>
      </div>
    </section>
  );
}
