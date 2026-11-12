# Derma Skin Clinic Rwanda — Homepage Prototype

Modern, responsive homepage concept for **Derma Skin Clinic Rwanda** (Gishushu / Lemigo Hotel, Kigali). UI and UX only; there is no backend.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 with custom design tokens in `src/app/globals.css`
- Lucide icons
- Instrument Serif + Manrope via `next/font`

## Structure

- `src/app/` — layout, metadata, homepage composition
- `src/components/` — one component per section (Hero, Care, Journey, Gallery, Clinician, BookSection, Location, FAQ, Footer, StickyActions…)
- `src/lib/site.ts` — all copy, contact details, hours, FAQ and image references (single source of truth)
- `public/images/stock/` — temporary licensed stock photography

## Research & direction

- `doc/DERMA_RESEARCH.md` — business and brand findings
- `doc/DERMA_DESIGN_RESEARCH.md` — international dermatology UI research
- `doc/DERMA_BRAND_DIRECTION.md` — "Modern Clinical Luxury" direction
- `doc/IMAGE_CREDITS.md` — photographer credits for every stock image

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- The WhatsApp enquiry opens a prefilled chat; it never implies a confirmed appointment.
- Imagery is stock photography (Pexels licence) and is labelled as illustrative on the page. Replace it with the clinic's own photography once supplied: edit the `images` object in `src/lib/site.ts` and drop the files into `public/images/`.
- Content is grounded in publicly verified clinic information; see the research docs for caveats.
