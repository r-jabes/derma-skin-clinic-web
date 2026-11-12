import { concerns } from "@/lib/site";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {concerns.map((item) => (
        <li key={item} className="flex items-center">
          <span className="font-display whitespace-nowrap px-8 text-[clamp(1.6rem,3vw,2.4rem)] text-forest/90">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-sand" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Skin concerns we care for"
      className="marquee overflow-hidden border-y border-[var(--line)] bg-paper py-7"
    >
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
