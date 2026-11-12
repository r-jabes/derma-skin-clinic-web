import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ tone = "dark", compact = false }: LogoProps) {
  const color = tone === "light" ? "text-ivory" : "text-forest";
  const ring = tone === "light" ? "border-ivory/40" : "border-forest/30";

  return (
    <Link
      href="#top"
      className={`group inline-flex items-center gap-3 ${color}`}
      aria-label="Derma Skin Clinic Rwanda — home"
    >
      <span
        className={`grid h-10 w-10 place-items-center border transition-colors duration-300 group-hover:bg-forest group-hover:text-ivory ${ring}`}
      >
        <span className="font-display text-[1.05rem] leading-none tracking-[0.06em]">
          DSC
        </span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[0.6rem] font-semibold tracking-[0.26em] uppercase opacity-70">
            Derma Skin Clinic
          </span>
          <span className="font-display mt-1 text-[1.3rem] tracking-[-0.01em]">
            Rwanda
          </span>
        </span>
      )}
    </Link>
  );
}
