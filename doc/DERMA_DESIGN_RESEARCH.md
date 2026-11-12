# Derma Skin Clinic Rwanda — International Design Research

**Research date:** 12 November 2026  
**Theme target:** Modern Clinical Luxury  
**Scope:** Homepage information architecture, UI patterns, motion, and technical approach.

---

## 1. Reference sites reviewed

| Site | URL | Why it matters |
| --- | --- | --- |
| REN Dermatology & Aesthetics | https://rendermatology.com/ | Clear medical / cosmetic / laser / spa split; calm multi-location trust |
| Derm Institute of Chicago | https://dermic.com/ | Authority via clinician roster; medical–surgical–cosmetic triad |
| Metropolis Dermatology | https://metropolisdermatology.com/ | Brand voice + founder storytelling; urban premium energy |
| Cumberland Skin | https://www.cumberlandskin.com/ | Clean Next.js craft; accessibility of care; patient quotes without clutter |
| Renu Dermatology & Wellness | https://www.renudermatology.com/ | Dense service inventory; before/after emphasis (caution: can feel busy) |

Additional pattern references considered conceptually: premium aesthetic clinics that use editorial typography, full-bleed photography, restrained colour, and WhatsApp/phone-first conversion (relevant for African market UX).

---

## 2. Homepage hierarchy patterns that work

Successful dermatology homepages typically follow this sequence:

1. **Identity + promise** (who + for whom + outcome)  
2. **Primary CTA** (book / consult)  
3. **Service pillars** (medical / cosmetic / procedures) — not a full catalogue  
4. **Trust** (clinicians, credentials, environment, insurers)  
5. **Patient journey** (how a visit works)  
6. **Social proof** (reviews / results — only with consent)  
7. **Practical logistics** (location, hours, contact)  
8. **FAQ + footer**

**Influence for Derma:** Lead with “dermatologist-led care in Kigali” and the existing journey tagline, then two pillars (Medical / Cosmetic), then insurance + consultation clarity, then WhatsApp booking. Avoid dumping the full Uganda menu on the homepage.

---

## 3. Hero composition findings

| Pattern | Observation | Derma application |
| --- | --- | --- |
| Full-bleed photography | Premium clinics use edge-to-edge clinical/editorial imagery | Full-bleed hero with African skin representation + clinic atmosphere |
| Short headline | 1 line value, not a paragraph | Use brand journey language + Kigali specificity |
| Dual CTA | Book + Explore treatments | Book Consultation (primary) + Explore Treatments |
| Minimal overlays | Badges/stats in hero feel template-like | Avoid floating pills/stats in hero |
| Brand as hero signal | Strong clinics make the name unmistakable | DSC / Derma Skin Clinic as primary visual identity |

**Avoid:** inset media cards, collage grids, purple gradient “AI clinic” look, oversized pill CTAs.

---

## 4. Navigation architecture

Common premium pattern:
- Logo left
- Compact links: Treatments, About / Doctors, Patient Journey, Contact
- Persistent Book CTA
- Mobile: overlay drawer, not hamburger-only without brand

**Derma nav proposal:**
`Treatments` · `Care Approach` · `Clinic` · `Insurance` · `FAQ` + `Book Consultation`  
Secondary: WhatsApp icon / “Chat” in header on mobile.

---

## 5. Typography systems

Premium sites use **serif display + refined sans UI** contrast.

| Role | Direction for Derma |
| --- | --- |
| Display / H1–H2 | Instrument Serif or Cormorant Garamond — editorial, medical-luxury |
| Body / UI | Manrope — clean, contemporary, excellent for African multilingual UI |
| Micro labels | Tracking + uppercase sparingly for section eyebrows |

Hierarchy via scale and whitespace more than weight stacking.

---

## 6. Colour & material language

References lean: soft neutrals, deep greens/teals, charcoal type, champagne accents — or brand-locked colour systems.

**Derma direction (aligned to brief + existing DSC identity):**
- Ivory `#F7F5F0` — primary ground
- Stone `#E5E0D7` — secondary surfaces / rules
- Forest `#183C35` — primary clinical luxury (buttons, headers, credibility)
- Sand `#B69B79` — restrained accent (links, highlights)
- Charcoal `#252725` — body text

Existing DSC logo (black/white mark, occasional multicolour ring on IG) can live on ivory without conflict. Do not force rainbow UI.

---

## 7. Imagery & layout

What premium sites do well:
- Large, honest portraits and treatment-room photography
- Editorial asymmetric grids (60/40, overlapping captions)
- Generous negative space
- Few images, high quality — not carousel spam

What to avoid for Derma:
- Generic hospital stock
- Over-retouched “glass skin” AI faces
- Labelling stock models as Derma patients
- Before/after without consent

**Asset strategy:** Use high-quality temporary Unsplash/Pexels-style professional imagery organised under `/public/images/temp/` with README for clinic replacement. Prefer East African / African diaspora skin tones.

---

## 8. Conversion & appointment UX

International clinics often use Zocdoc-style booking. **Derma’s real channel is WhatsApp/call.**

Adopt a hybrid:
- Primary CTA → scroll to enquiry / open WhatsApp deep link
- Enquiry fields: Name, Phone, Concern, Preferred date
- Prefill WhatsApp message; disclaimer that this is an enquiry, not a confirmed booking
- Persistent floating WhatsApp control (accessible, not obstructive)
- Secondary: Call, Get directions (Google Maps for Lemigo / Gishushu)

Insurance block should sit near conversion — it removes a major access friction in Rwanda.

---

## 9. Motion & interaction (restrained)

Valuable techniques:
- Fade/slide-up on scroll for sections (Intersection Observer or lightweight library)
- Image ken-burns / slow scale on hero only
- Underline / colour shift link hovers
- Soft drawer mobile nav
- Focus-visible rings matching forest palette

Avoid: parallax overload, cursor followers, heavy page-transition frameworks, Lottie everywhere.

**Suggested stack for motion:** CSS transitions + Framer Motion **only if** needed for scroll reveals; prefer CSS-first for performance on mobile networks.

---

## 10. Accessibility, performance, SEO

| Topic | Guidance |
| --- | --- |
| A11y | Semantic landmarks, skip link, contrast AA, labelled form fields, keyboard nav |
| Performance | Next.js Image, limited fonts (2 families), no autoplaying heavy video in hero |
| SEO | Title/meta for “Dermatologist Kigali”, “Skin clinic Rwanda”; LocalBusiness JSON-LD; OG image |
| Mobile | Thumb-reachable WhatsApp + Book; large tap targets; no horizontal overflow |

---

## 11. What NOT to copy from references

- US-only insurance portals and patient portals
- Dense service encyclopaedias on the homepage (Renu risk)
- Fake review widgets
- Spa-menu visual language that undercuts medical credibility
- Purple/indigo “AI SaaS” healthcare aesthetics

---

## 12. Design principles for Derma homepage

1. **Medical first, beauty second** — credibility before glamour.  
2. **One composition hero** — brand, one headline, one sentence, dual CTA, one image plane.  
3. **Editorial calm** — serif headlines, stone rules, forest accents.  
4. **African authenticity** — imagery and language rooted in Kigali care.  
5. **WhatsApp-native conversion** — match how patients already book.  
6. **Insurance as trust** — Eden Care, SONARWA, RSSB visible early.  
7. **Honest content** — no invented doctors’ bios beyond public sources; no fake results.  
8. **Replaceable assets** — structure for clinic photography drop-in.

---

## 13. Recommended homepage sections (execution)

1. Header / nav  
2. Hero — brand + journey promise + Book / Explore  
3. Credibility strip — location, hours, consultation fee, insurers  
4. Dual pillars — Medical Dermatology / Cosmetic & Aesthetic  
5. Featured concerns & treatments (verified + carefully framed)  
6. Care approach / visit journey  
7. Clinician introduction (publicly associated)  
8. Consultation & WhatsApp enquiry  
9. Location / visit details  
10. FAQ  
11. Footer  

---

## 14. Implementation stack recommendation

Empty repository → use:
- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** with design tokens as CSS variables
- **Lucide React** for icons
- **next/font** for Instrument Serif + Manrope
- Semantic HTML components; client islands only for nav, form, motion

Libraries only if they improve craft without weight: optional Framer Motion for scroll reveals.

---

## 15. Creative verdict

Position Derma Rwanda as a **Kigali flagship of a regional dermatology brand** — quieter and more editorial than the current Uganda Shopify storefront, more locally practical than US appointment portals, and unmistakably medical rather than salon. The homepage should feel like an international clinic website that happens to speak WhatsApp and Rwanda insurance fluently.
