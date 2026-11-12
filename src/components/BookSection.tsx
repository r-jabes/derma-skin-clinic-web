import { MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site, whatsappLink } from "@/lib/site";

export function BookSection() {
  return (
    <section
      id="book"
      className="section-pad bg-stone/45"
      aria-labelledby="book-heading"
    >
      <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Appointments</p>
          <h2
            id="book-heading"
            className="h-display mt-5 text-[clamp(2.4rem,5vw,4rem)] text-forest"
          >
            Book a consultation, <em>simply</em>.
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-[1.7] text-muted">
            Share a few essentials and continue on WhatsApp, the way most
            patients already reach the clinic. We only ask for what we need.
          </p>

          <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            <div className="bg-ivory p-5">
              <p className="text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-sand-deep">
                Consultation fee
              </p>
              <p className="font-display mt-2 text-3xl text-forest">
                {site.consultationFee}
              </p>
            </div>
            <div className="bg-ivory p-5">
              <p className="text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-sand-deep">
                Hours
              </p>
              <p className="font-display mt-2 text-3xl text-forest">
                Mon–Sat, 9–6
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(
                "Hello Derma Skin Clinic Rwanda — I would like to enquire about a consultation.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat on WhatsApp
            </a>
            <a href={site.phones[0].href} className="btn btn-outline">
              <Phone className="h-4 w-4" aria-hidden />
              {site.phones[0].label}
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-1 bg-ivory p-7 shadow-[0_40px_80px_-50px_rgba(15,40,35,0.35)] md:p-11">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-sand-deep">
            Enquiry details
          </p>
          <h3 className="font-display mt-3 text-[2rem] leading-tight text-forest">
            Tell us how we can help.
          </h3>
          <div className="mt-9">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
