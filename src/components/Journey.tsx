import { journeySteps } from "@/lib/site";

export function Journey() {
  return (
    <section
      id="journey"
      className="section-pad bg-stone/45"
      aria-labelledby="journey-heading"
    >
      <div className="container-wide grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="reveal lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Your visit</p>
          <h2
            id="journey-heading"
            className="h-display mt-5 text-[clamp(2.4rem,5vw,4rem)] text-forest"
          >
            A clear path from first message to <em>lasting care</em>.
          </h2>
          <p className="mt-6 max-w-sm leading-[1.7] text-muted">
            No guesswork. Here is what to expect when you reach out to Derma
            Skin Clinic Rwanda.
          </p>
        </div>

        <ol className="relative">
          {journeySteps.map((step, index) => (
            <li
              key={step.step}
              className={`reveal grid grid-cols-[4.5rem_1fr] gap-6 border-t border-[var(--line)] py-10 md:grid-cols-[7rem_1fr] ${
                index === journeySteps.length - 1
                  ? "border-b"
                  : ""
              }`}
            >
              <span className="font-display text-[3.4rem] leading-none text-sand md:text-[5rem]">
                {step.step}
              </span>
              <div className="pt-1 md:pt-3">
                <h3 className="font-display text-[1.9rem] leading-tight text-forest">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md leading-[1.7] text-muted">
                  {step.copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
