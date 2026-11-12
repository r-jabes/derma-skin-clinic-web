export const site = {
  name: "Derma Skin Clinic Rwanda",
  shortName: "Derma",
  monogram: "DSC",
  tagline: "Your journey to clear skin",
  description:
    "Dermatologist-led medical and cosmetic dermatology in Gishushu, Kigali — personalised care for healthier, more confident skin.",
  location: {
    area: "Gishushu, Lemigo Hotel",
    city: "Kigali, Rwanda",
    full: "Lemigo Hotel, Gishushu, Kigali, Rwanda",
    lat: -1.954789,
    lng: 30.09844,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Derma+Skin+Clinic+Lemigo+Hotel+Gishushu+Kigali",
  },
  hours: "Monday–Saturday, 9:00 AM – 6:00 PM",
  hoursShort: "Mon–Sat · 9:00–18:00",
  consultationFee: "20,000 RWF",
  phones: [
    { label: "+250 795 528 376", href: "tel:+250795528376", wa: "250795528376" },
    { label: "+250 739 095 040", href: "tel:+250739095040", wa: "250739095040" },
  ],
  email: "dermaskinrd@gmail.com",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb6TZi64Y9lieNHa1R2T",
  instagram: "https://www.instagram.com/dermaskinclinicrwanda/",
  facebook: "https://www.facebook.com/603406329512715",
  domain: "https://www.dermaskinclinicrwanda.com",
  insurers: ["Eden Care", "SONARWA", "RSSB"],
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.phones[0].wa}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: "#care", label: "Care" },
  { href: "#journey", label: "Your visit" },
  { href: "#team", label: "Clinicians" },
  { href: "#clinic", label: "Find us" },
  { href: "#faq", label: "FAQ" },
] as const;

export const concerns = [
  "Acne & breakouts",
  "Pigmentation",
  "Eczema & sensitive skin",
  "Laser hair removal",
  "Medical facials",
  "Skin health checks",
  "Scars & texture",
  "Online consultation",
] as const;

export const medicalConcerns = [
  {
    title: "Acne & breakouts",
    copy: "Assessment and ongoing plans for active acne, residual marks and clearer skin routines.",
  },
  {
    title: "Pigmentation & uneven tone",
    copy: "Guidance for dark patches and post-inflammatory marks, with care suited to melanin-rich skin.",
  },
  {
    title: "Eczema, dermatitis & sensitive skin",
    copy: "Calm, practical care for irritation, dryness and a reactive skin barrier.",
  },
  {
    title: "Chronic & long-term conditions",
    copy: "Dermatologist-led support for conditions such as psoriasis and fungal infections, discussed in consultation.",
  },
] as const;

export const cosmeticTreatments = [
  {
    title: "Laser hair removal",
    copy: "A signature aesthetic procedure at the Kigali clinic. Suitability and session plans are agreed in consultation.",
  },
  {
    title: "Medical facials & rejuvenation",
    copy: "Clinical facial care using medical-grade approaches to refresh texture, clarity and comfort.",
  },
  {
    title: "Chemical peels",
    copy: "Resurfacing care for tone, texture and dullness. Availability is confirmed when you enquire.",
  },
  {
    title: "Advanced procedures",
    copy: "Options such as microneedling and PRP are offered across the Derma network. Your dermatologist advises what is right for you.",
  },
] as const;

export const journeySteps = [
  {
    step: "01",
    title: "Reach out",
    copy: "Call, WhatsApp or send an enquiry. Tell us your concern and the day that suits you.",
  },
  {
    step: "02",
    title: "Consultation",
    copy: "A dermatologist-led assessment of your skin, history and goals. Consultation fee: 20,000 RWF.",
  },
  {
    step: "03",
    title: "Personalised plan",
    copy: "A clear treatment and skincare plan, including procedure options and what to expect next.",
  },
  {
    step: "04",
    title: "Ongoing care",
    copy: "Follow-up guidance and reviews, so progress stays consistent and sustainable.",
  },
] as const;

export const faqs = [
  {
    q: "How do I book a consultation?",
    a: "Message or call the clinic on WhatsApp or phone, or use the enquiry form on this page. It opens a WhatsApp message with your details. The team will confirm availability; an enquiry is not an automatic booking.",
  },
  {
    q: "What is the consultation fee?",
    a: "Consultations are 20,000 RWF. If tests or procedures are recommended, they are discussed with you before they begin.",
  },
  {
    q: "Which insurance partners do you work with?",
    a: "Derma Skin Clinic Rwanda has announced partnerships with Eden Care, SONARWA and RSSB. Please confirm cover for your specific visit or procedure when you book.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes. Online consultation is promoted through the clinic's Instagram channel. Ask the team which format suits your concern.",
  },
  {
    q: "Where are you located?",
    a: "At Lemigo Hotel in Gishushu, Kigali. We are open Monday to Saturday, 9:00 AM to 6:00 PM.",
  },
  {
    q: "Which treatments are available in Kigali?",
    a: "The clinic provides dermatologist-led medical and aesthetic care, including acne-focused treatment and laser hair removal. Exact procedure availability is confirmed during consultation.",
  },
] as const;

/**
 * Temporary editorial photography (free-to-use, Pexels licence).
 * Replace with approved Derma Skin Clinic Rwanda photography when available.
 * Credits: doc/IMAGE_CREDITS.md
 */
export const images = {
  hero: {
    src: "/images/stock/hero-skin.jpg",
    alt: "Close portrait of a Black woman with healthy, hydrated skin, eyes closed, in a towel wrap",
  },
  treatment: {
    src: "/images/stock/treatment.jpg",
    alt: "A Black woman lying back while a practitioner in black gloves performs a facial skin treatment",
  },
  medical: {
    src: "/images/stock/acne-portrait.jpg",
    alt: "Portrait of a young Black woman with natural, acne-prone skin against a dark background",
  },
  cosmetic: {
    src: "/images/stock/editorial-closeup.jpg",
    alt: "Editorial profile close-up of a Black woman with a radiant, even complexion",
  },
  man: {
    src: "/images/stock/man-skincare.jpg",
    alt: "Smiling Black man applying moisturiser to his face",
  },
  texture: {
    src: "/images/stock/texture.jpg",
    alt: "Extreme close-up of a Black woman's eye and cheek with a clay mask on the skin",
  },
  serum: {
    src: "/images/stock/serum.jpg",
    alt: "Young Black man applying a skincare serum with a dropper",
  },
  consultation: {
    src: "/images/stock/consultation.jpg",
    alt: "A Black doctor speaking with a patient during a consultation in a clinic office",
  },
} as const;
