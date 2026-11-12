import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-ivory on-dark">
      <div className="container-wide pb-28 pt-20 lg:pb-12">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs leading-relaxed text-ivory/60">
              {site.description}
            </p>
          </div>

          <div>
            <p className="text-[0.66rem] font-semibold tracking-[0.2em] uppercase text-sand-soft">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-ivory/80 hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.66rem] font-semibold tracking-[0.2em] uppercase text-sand-soft">
              Visit
            </p>
            <p className="mt-5 leading-relaxed text-ivory/80">
              {site.location.full}
            </p>
            <p className="mt-3 text-ivory/60">{site.hours}</p>
            <p className="mt-3 text-ivory/60">
              Insurance: {site.insurers.join(", ")}
            </p>
          </div>

          <div>
            <p className="text-[0.66rem] font-semibold tracking-[0.2em] uppercase text-sand-soft">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="link-underline text-ivory/80 hover:text-ivory"
                  >
                    {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline break-all text-ivory/80 hover:text-ivory"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-5 pt-2 text-sm">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sand-soft"
                >
                  Instagram
                </a>
                <a
                  href={site.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sand-soft"
                >
                  WhatsApp Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p
          className="font-display pointer-events-none mt-20 select-none text-[clamp(3.4rem,15vw,13rem)] leading-[0.85] tracking-[-0.04em] text-ivory/[0.06]"
          aria-hidden
        >
          Derma Skin Clinic
        </p>

        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--line-light)] pt-6 text-xs text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Website concept.
          </p>
          <p>Photography shown is illustrative stock imagery.</p>
        </div>
      </div>
    </footer>
  );
}
